# WebAssembly Demo Release Assets

Use a release tagged `wasm-demo` to distribute the browser runtime without
adding generated binaries to Git history. The release may live in this
repository. Deployment fetches the asset from
`pragtical/pragtical.github.io/releases/tag/wasm-demo`. Release immutability
must be disabled if you want to replace assets on the same release.

## Build Both Variants

From the website repository:

```sh
bash scripts/build-web-preview.sh single
bash scripts/build-web-preview.sh threaded
npm run build
```

The source checkout defaults to `../prag`. See [wasm-build.md](wasm-build.md) for build
prerequisites, overrides, threading requirements, and browser validation.
Rebuild both variants after changing bundled Lua modules, plugins, or media.

## Package the Runtime

Upload one archive named `pragtical-wasm-demo.tar.gz` containing these six
files, preserving this layout at the archive root:

```text
pragtical.js
pragtical.wasm
pragtical.data
threaded/pragtical.js
threaded/pragtical.wasm
threaded/pragtical.data
```

Create the archive from the website repository:

```sh
tar -czf /tmp/pragtical-wasm-demo.tar.gz \
  -C static/try \
  pragtical.js pragtical.wasm pragtical.data \
  threaded/pragtical.js threaded/pragtical.wasm threaded/pragtical.data
tar -tzf /tmp/pragtical-wasm-demo.tar.gz
```

Each variant's JavaScript, WASM, and data files must come from the same build.
Replace the whole archive rather than updating runtime files individually.

The website-owned files stay in this repository: `static/try/editor.html`,
`host.js`, `licenses.md`, `BUILD.md`, and `static/try-isolation.js`. The logo,
sample audio, editor Lua modules, and plugins are already bundled in `.data`;
do not upload them separately. Keep the archive itself out of Git.

## Upload

The `wasm-demo` release already exists in the website repository. For reference,
the command to create it once is:

```sh
gh release create wasm-demo /tmp/pragtical-wasm-demo.tar.gz \
  --repo pragtical/pragtical.github.io \
  --title "WebAssembly Demo" \
  --notes "Browser demo runtime, including threaded and single-threaded builds." \
  --latest=false
```

To replace the archive on an existing mutable release:

```sh
gh release upload wasm-demo /tmp/pragtical-wasm-demo.tar.gz \
  --repo pragtical/pragtical.github.io --clobber
```

`--clobber` deletes the old asset before uploading its replacement. Avoid
deploying while that replacement is in progress. The stable download URL is:

```text
https://github.com/pragtical/pragtical.github.io/releases/download/wasm-demo/pragtical-wasm-demo.tar.gz
```

## Website Deployment

Before the first artifact deployment, select **Settings > Pages > Build and
deployment > Source > GitHub Actions** in the repository. Keep the custom
domain set to `pragtical.dev` in Pages settings.

`.github/workflows/deploy.yml` runs on pushes to `main` and supports manual
dispatch. It downloads the release archive through
`python3 scripts/fetch-web-preview.py`, validates and installs the six files
into `static/try/`, and then builds the website. Missing assets, bad downloads,
or invalid archives fail the build rather than silently using old binaries.
The archive SHA-256 is printed in the build log.

The build is uploaded as a GitHub Pages artifact and deployed with
`actions/deploy-pages`; it no longer commits output to `gh-pages`. Historical
commits in that branch are not deleted or rewritten. Runtime files and the
root-level release archive are ignored by Git. The deployed files still use
the website's origin, preserving the threaded runtime's isolation setup.

After replacing the asset, run **Actions > Deploy to GitHub Pages > Run
workflow**, selecting `main`. Replacing an asset alone does not trigger this
workflow. Wait until the replacement upload finishes before running it.

To fetch the same asset locally, without compiling the editor:

```sh
python3 scripts/fetch-web-preview.py
```

To validate and install a locally generated archive instead:

```sh
python3 scripts/fetch-web-preview.py --archive /tmp/pragtical-wasm-demo.tar.gz
```

Python 3 and curl are required for fetching; no GitHub CLI login is needed for
this public asset. The script also supports `--repo OWNER/REPO` for another
public repository and `--destination PATH` for an isolated verification copy.
CI defaults to `GITHUB_REPOSITORY`, while local runs default to the website repo.

A mutable release does not provide reproducible old builds; use versioned
tags or recorded checksums if that becomes necessary.
