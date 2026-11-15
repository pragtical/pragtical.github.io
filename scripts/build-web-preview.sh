#!/usr/bin/env bash
set -euo pipefail

website="$(cd "$(dirname "$0")/.." && pwd)"
editor="${PRAGTICAL_SOURCE:-$website/../prag}"
mode="${1:-single}"
case "$mode" in
  single) build="${PRAGTICAL_WEB_BUILD:-$editor/build-web}"; destination="$website/static/try" ;;
  threaded) build="${PRAGTICAL_WEB_BUILD:-$editor/build-web-threaded}"; destination="$website/static/try/threaded" ;;
  *) printf 'Usage: bash scripts/build-web-preview.sh [single|threaded]\n' >&2; exit 1 ;;
esac
if ! command -v emcc >/dev/null && [[ -x /usr/lib/emscripten/emcc ]]; then
  export PATH="$PATH:/usr/lib/emscripten"
fi
command -v emcc >/dev/null
meson subprojects download --sourcedir "$editor" widget

# Meson only warns about an already-present checkout at an old wrap revision.
python3 - "$editor" <<'PY'
import configparser
import pathlib
import subprocess
import sys
source = pathlib.Path(sys.argv[1]).resolve()
wrap = configparser.ConfigParser()
wrap.read(source / 'subprojects/widget.wrap')
expected = wrap['wrap-git']['revision']
actual = subprocess.check_output(['git', '-C', str(source / 'subprojects/widget'), 'rev-parse', 'HEAD'], text=True).strip()
if actual != expected:
    raise SystemExit('Widget does not match widget.wrap. Review its Git status, then run: meson subprojects update --sourcedir ' + str(source) + ' widget')
PY
meson subprojects packagefiles --sourcedir "$editor" --apply widget

if [[ -f "$build/meson-private/coredata.dat" ]]; then
  configure=()
  if [[ "$mode" == threaded ]]; then configure+=(-Dc_thread_count=8 -Dcpp_thread_count=8); fi
  meson setup --reconfigure "${configure[@]}" "$build" "$editor"
else
  cross=(--cross-file "$editor/resources/cross/unknown-wasm32.ini")
  if [[ "$mode" == threaded ]]; then cross+=(--cross-file "$editor/resources/cross/wasm32-threads.ini"); fi
  meson setup "${cross[@]}" "$build" "$editor"
fi
python3 - "$build" "$mode" <<'PY'
import json
import subprocess
import sys
options = {item['name']: item['value'] for item in json.loads(subprocess.check_output(['meson', 'introspect', '--buildoptions', sys.argv[1]], text=True))}
threaded = sys.argv[2] == 'threaded'
if options.get('web_threads') != threaded or any(('-pthread' in options.get(name, [])) != threaded for name in ('c_args', 'cpp_args')):
    raise SystemExit('Build mode does not match this build directory. Select a separate PRAGTICAL_WEB_BUILD for each variant.')
PY
meson compile -C "$build" -j "${JOBS:-8}"
# Lua, widget, theme and media files are preload inputs, not compiler inputs.
# Force only the executable's repack/link step so refreshed files are included.
rm -f -- "$build/src/pragtical.js"
meson compile -C "$build" -j "${JOBS:-8}"
mkdir -p "$destination"
for extension in js wasm data; do
  install -m 644 "$build/src/pragtical.$extension" "$destination/pragtical.$extension"
done
if [[ -f "$build/src/pragtical.worker.js" ]]; then install -m 644 "$build/src/pragtical.worker.js" "$destination/pragtical.worker.js"; fi
install -m 644 "$editor/licenses/licenses.md" "$website/static/try/licenses.md"
printf 'Updated the %s browser runtime in %s\n' "$mode" "$destination"
