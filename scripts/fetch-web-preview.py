#!/usr/bin/env python3
"""Download and install the website's release-hosted browser runtimes."""

import argparse
import hashlib
import os
from pathlib import Path
import shutil
import subprocess
import tarfile
import tempfile


ROOT = Path(__file__).resolve().parent.parent
ASSET = "pragtical-wasm-demo.tar.gz"
FILES = {prefix + "pragtical." + extension
         for prefix in ("", "threaded/") for extension in ("js", "wasm", "data")}
MAX_FILE_SIZE = 128 * 1024 * 1024


def install_archive(archive, destination):
    # Validate every member before writing anything. Never extract paths or
    # links supplied by an archive directly into the website checkout.
    with tarfile.open(archive, "r:gz") as bundle, tempfile.TemporaryDirectory() as staging:
        members = bundle.getmembers()
        if len(members) != len(FILES) or {item.name for item in members} != FILES:
            raise ValueError("Archive must contain exactly the six runtime files, including threaded/")
        for item in members:
            if not item.isfile() or not 0 < item.size <= MAX_FILE_SIZE:
                raise ValueError(f"Invalid runtime file: {item.name}")
        for item in members:
            target = Path(staging) / item.name
            target.parent.mkdir(parents=True, exist_ok=True)
            with bundle.extractfile(item) as source, target.open("wb") as output:
                shutil.copyfileobj(source, output)
            if item.name.endswith(".wasm") and target.read_bytes()[:8] != b"\0asm\x01\0\0\0":
                raise ValueError(f"Invalid WebAssembly binary: {item.name}")
        destination = Path(destination)
        for name in sorted(FILES):
            target = destination / name
            target.parent.mkdir(parents=True, exist_ok=True)
            shutil.copyfile(Path(staging) / name, target)
    digest = hashlib.sha256(Path(archive).read_bytes()).hexdigest()
    print(f"Installed {ASSET} (SHA-256 {digest}) into {destination}")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--repo", default=os.getenv("GITHUB_REPOSITORY", "pragtical/pragtical.github.io"))
    parser.add_argument("--archive", type=Path, help="Install a local archive without downloading")
    parser.add_argument("--destination", type=Path, default=ROOT / "static/try")
    args = parser.parse_args()
    try:
        if args.archive:
            install_archive(args.archive, args.destination)
        else:
            url = f"https://github.com/{args.repo}/releases/download/wasm-demo/{ASSET}"
            with tempfile.TemporaryDirectory() as directory:
                archive = Path(directory) / ASSET
                subprocess.run(["curl", "--fail", "--location", "--retry", "3",
                                "--connect-timeout", "30", "--max-time", "300",
                                "--output", str(archive), url], check=True)
                install_archive(archive, args.destination)
    except (OSError, ValueError, tarfile.TarError, subprocess.CalledProcessError) as error:
        parser.exit(1, f"Could not install the WASM demo: {error}\n")


if __name__ == "__main__":
    main()
