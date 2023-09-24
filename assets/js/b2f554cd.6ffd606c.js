"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1477],{10:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"pragtical-v312-release","metadata":{"permalink":"/blog/pragtical-v312-release","editUrl":"https://github.com/pragtical/pragtical.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2023-09-24-v312-release.md","source":"@site/blog/2023-09-24-v312-release.md","title":"Pragtical v3.1.2 Release","description":"This release introduces a new widgets based welcome screen:","date":"2023-09-24T00:00:00.000Z","formattedDate":"September 24, 2023","tags":[],"readingTime":1.93,"hasTruncateMarker":false,"authors":[{"name":"Jefferson Gonzalez","title":"Contributor of Pragtical","url":"https://github.com/jgmdev","imageURL":"https://github.com/jgmdev.png","key":"jgmdev"}],"frontMatter":{"slug":"pragtical-v312-release","title":"Pragtical v3.1.2 Release","authors":"jgmdev"},"nextItem":{"title":"Pragtical v3.1.1 Release","permalink":"/blog/pragtical-v311-release"}},"content":"This release introduces a new widgets based welcome screen:\\n\\n![pragtical-welcome](https://github.com/pragtical/pragtical/assets/1702572/a04fd0fb-542e-42c7-8cbd-d473f4c25107)\\n\\nIt also features compatibility changes to properly work with the terminal\\nplugin, and includes the accumulated bug fixes listed above as new color schemes.\\n\\nDownloads on [GitHub](https://github.com/pragtical/pragtical/releases/tag/v3.1.2).\\n\\n# Changes Log\\n\\n### New Features\\n\\n* Syntax files symbol_pattern, non_word_chars props ([#12](https://github.com/pragtical/pragtical/pull/12))\\n\\n* New Welcome Screen - Converted emptyview to widget with additions ([e08f1b18](https://github.com/pragtical/pragtical/commit/e08f1b18b28e26351a27dd9a5aeeb2bcc4c2d48f))\\n\\n### Fixes\\n\\n* Fixes #10 by using the scrollbar expanded size ([#11](https://github.com/pragtical/pragtical/pull/11))\\n\\n* Fix core:open-file to not be dependant on chdir ([47bfcb07](https://github.com/pragtical/pragtical/commit/47bfcb07bb1db489f97d2fa4a6c0432905eb87c0))\\n\\n* Respect coroutines redraw requests while on focus ([f450b612](https://github.com/pragtical/pragtical/commit/f450b6124e53b83c5bf41d6261e79ecac555d0ce))\\n\\n* Do not process clicks on contextmenu divider ([#22](https://github.com/pragtical/pragtical/pull/22))\\n\\n* Fixed issue with open file command ([d8906c21](https://github.com/pragtical/pragtical/commit/d8906c2111b056438c142622c16c338fef61a70d))\\n\\n* MacOS: allow combining cmd+ctrl and replace alt with option ([0674f1f5](https://github.com/pragtical/pragtical/commit/0674f1f5a5ebc0866b7e826eeacaadc355325e69))\\n\\n### Enhancements\\n\\n* Improvements to language_css ([f2a0790d](https://github.com/pragtical/pragtical/commit/f2a0790d2c6b0ace73b66b31a5ea59ac60e7c3c4))\\n\\n* Better compat math.{tointeger|type|ult} for luajit ([80bce6c0](https://github.com/pragtical/pragtical/commit/80bce6c0b1275050a779eac85e79dc472e309d91))\\n\\n* Added Mike Pall bitops library to non jit lua for consistency ([5efc02a8](https://github.com/pragtical/pragtical/commit/5efc02a84350c544a6475255e04e5110eff083b7))\\n\\n* Use native bit operators on Lua >= 5.3 ([10cecbec](https://github.com/pragtical/pragtical/commit/10cecbec61015d1b3a01837f082b205d00da87b5))\\n\\n* Highlight CUDA source code the same as C++ ([#15](https://github.com/pragtical/pragtical/pull/15))\\n\\n### UI Enhancements\\n\\n* statusview: separate item for doc position percent [lite-xl/lite-xl#1579](https://github.com/lite-xl/lite-xl/pull/1579)\\n\\n* Highlight default theme on settings ui, fixes #23 ([cd7181df](https://github.com/pragtical/pragtical/commit/cd7181dfa5f0d2d2a95081cf3096460b271beec6))\\n\\n* treeview: do not show hidden files by default ([ecda0a0a](https://github.com/pragtical/pragtical/commit/ecda0a0ab7ff1c4f4795bb7af745ab728b5a6798))\\n\\n### Colors\\n\\n* Added new Yaru dark and light theme ([5fa3cc13](https://github.com/pragtical/colors/commit/5fa3cc13fdf33f4ae7dc0d79c2b377f21761ec3c))\\n\\n* Improvements to tokyo-night ([551c351d](https://github.com/pragtical/colors/commit/551c351d8c57818bcd350a4dae9d10e7c9506384))\\n\\n* Added solarized_dark theme ([b9791efa](https://github.com/pragtical/colors/commit/b9791efad6d7c726b2485cb4126681067c2e3a1c))\\n\\n* Improvements to Monokai themes ([79264c47](https://github.com/pragtical/colors/commit/79264c47449aa5d7f86c2f03558d2205931644eb))\\n\\n### Build System\\n\\n* Switch to an older ubuntu builder, fixes #13 ([#16](https://github.com/pragtical/pragtical/pull/16))\\n\\n* Fixes for msvc ci run ([39caabc0](https://github.com/pragtical/pragtical/commit/39caabc0ac7775141c8cfaff0e53b12abe66d4d8))\\n\\n* Applied msvc fixes from [lite-xl/lite-xl#1572](https://github.com/lite-xl/lite-xl/pull/1577)\\n\\n* Rename latest builds to rolling ([51754f33](https://github.com/pragtical/pragtical/commit/51754f3375d2cb3d0daae04e6014fa75fa8d45cd))\\n\\n### Widgets\\n\\n* Widget: delay RootView require\\n* ListBox: rendering fixes\\n* Skip ctrl+wheel by default, better tooltip remove\\n* Fix floating ListBox rows offset\\n* ListBox: horizontal scroll support\\n* SelectBox: hide list when clicking outside\\n* Better handle ctrl modkey state\\n* Make widgets inherit name from parent ([#2](https://github.com/pragtical/widget/pull/2))\\n* Give selectbox container same name as the selectbox ([#1](https://github.com/pragtical/widget/pull/1))\\n\\n### Lite XL Inherited Changes\\n\\n* Normalize strokes in fixed order ([#1572](https://github.com/lite-xl/lite-xl/pull/1572))\\n\\n* fix(core): defer core:open-log until everything is loaded ([#1585](https://github.com/lite-xl/lite-xl/pull/1585))\\n\\n* Fix scrollbar misinterpreting percent ([#1587](https://github.com/lite-xl/lite-xl/pull/1587))\\n\\n* Fix returned percent when clicking the Scrollbar track ([e07ea0fe](https://github.com/pragtical/pragtical/commit/e07ea0fe11b6dc02a9ed1edd4d2333db0846340a))\\n\\n* Adds super as a modkey. ([#1590](https://github.com/lite-xl/lite-xl/pull/1590))\\n\\n* Add NaN guard to View:update_scrollbar ([aa0d6f6c](https://github.com/pragtical/pragtical/commit/aa0d6f6c71d4f02bbdbc09ef7f5984f50a21c87c))\\n\\n* Fixed C++14 digit separators ([#1593](https://github.com/lite-xl/lite-xl/pull/1593))\\n\\n* Fix Scrollbar.{expanded,contracted}_size documentation ([70245ba0](https://github.com/pragtical/pragtical/commit/70245ba0862761237e6aabbc7f7a1f259402a4ee))\\n\\n**Full Changelog**: https://github.com/pragtical/pragtical/compare/v3.1.1...v3.1.2"},{"id":"pragtical-v311-release","metadata":{"permalink":"/blog/pragtical-v311-release","editUrl":"https://github.com/pragtical/pragtical.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2023-08-06-v311-release.md","source":"@site/blog/2023-08-06-v311-release.md","title":"Pragtical v3.1.1 Release","description":"This release fixes improper absolutes path treatment when opening files and","date":"2023-08-06T00:00:00.000Z","formattedDate":"August 6, 2023","tags":[],"readingTime":1.07,"hasTruncateMarker":false,"authors":[{"name":"Jefferson Gonzalez","title":"Contributor of Pragtical","url":"https://github.com/jgmdev","imageURL":"https://github.com/jgmdev.png","key":"jgmdev"}],"frontMatter":{"slug":"pragtical-v311-release","title":"Pragtical v3.1.1 Release","authors":"jgmdev"},"prevItem":{"title":"Pragtical v3.1.2 Release","permalink":"/blog/pragtical-v312-release"},"nextItem":{"title":"Pragtical v3.1.0 Release","permalink":"/blog/pragtical-v310-release"}},"content":"This release fixes improper absolutes path treatment when opening files and\\nintroduces some other small improvements as new meson setup options.\\nThe new meson setup options are `extra_colors` and `extra_languages` which are\\nset to true by default and will allow downloading additional languages and\\ncolor schemes to be included on the `meson install` step.\\n\\nDownloads on [GitHub](https://github.com/pragtical/pragtical/releases/tag/v3.1.1).\\n\\n# Changes Log\\n\\n### New Features\\n\\n* Merged Windows dark title bar theme support from [lite-xl/lite-xl#514](https://github.com/lite-xl/lite-xl/pull/514) with some changes to make it less invasive ([7ca48a83](https://github.com/pragtical/pragtical/commit/7ca48a8342496fe153edaada2f0f04002d52fb78))\\n\\n* Introduced new color schemes `yaru` and `yaru_dark`\\n\\n### Build System\\n\\n* CI Latest Builds: switched from debug to debugoptimized ([cf880c5a](https://github.com/pragtical/pragtical/commit/cf880c5ad6a99523a1ff1ac1259e2b5f0dccbb1a))\\n\\n* Added widget as a meson subproject ([bdddc4c6](https://github.com/pragtical/pragtical/commit/bdddc4c6385bf6a2be9e3684e0bdfc6cb807dd99))\\n\\n* Added colors and languages as meson subproject ([111ca76f](https://github.com/pragtical/pragtical/commit/111ca76f925bafdd88f15f874caf8c84037fcf02))\\n\\n### Documentation\\n\\n* Fixed common.relative_path() doc comments ([f44f10fa](https://github.com/pragtical/pragtical/commit/f44f10fa3aa08573b0e0d9866c97f84a9559717d))\\n\\n### UI Enhancements\\n\\n* Added GUI for treeview show hidden/ignored ([64eee3d3](https://github.com/pragtical/pragtical/commit/64eee3d38d766aa28ecc5c60b01bb6cb85cdffb0))\\n\\n### Fixes\\n\\n* Do not append cwd to absolute files on startup ([853e6b76](https://github.com/pragtical/pragtical/commit/853e6b7600b06c2560c67f94832921762650d8aa))\\n\\n### Other Changes\\n\\n* Added compat for lua 5.4 userdata (uv) functions ([e048a9c8](https://github.com/pragtical/pragtical/commit/e048a9c839ce8c0646d4ee6e435149c63a176a2b))\\n\\n* Refactored core.project into a core.object ([a5df5be8](https://github.com/pragtical/pragtical/commit/a5df5be84ff31af8125fdf4bd1ce4fab2162e280))\\n  - Added doc comments\\n  - Exposed compile_ignore_files() as a method\\n\\n* Recompile ignore patterns when changed from gui ([c3edcafc](https://github.com/pragtical/pragtical/commit/c3edcafc595db7787c98e2260502b5d40a231121))\\n\\n### Lite XL Inherited Changes\\n\\n* Normalize stroke before adding keybind ([#1334](https://github.com/lite-xl/lite-xl/pull/1334))\\n* Make DocView aware of scrollbars sizes ([#1177](https://github.com/lite-xl/lite-xl/pull/1177))\\n\\n**Full Changelog**: https://github.com/pragtical/pragtical/compare/v3.1.0...v3.1.1"},{"id":"pragtical-v310-release","metadata":{"permalink":"/blog/pragtical-v310-release","editUrl":"https://github.com/pragtical/pragtical.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2023-07-31-v310-release.md","source":"@site/blog/2023-07-31-v310-release.md","title":"Pragtical v3.1.0 Release","description":"This release introduces a newer project handling API which breaks compatibility","date":"2023-07-31T00:00:00.000Z","formattedDate":"July 31, 2023","tags":[],"readingTime":1.19,"hasTruncateMarker":false,"authors":[{"name":"Jefferson Gonzalez","title":"Contributor of Pragtical","url":"https://github.com/jgmdev","imageURL":"https://github.com/jgmdev.png","key":"jgmdev"}],"frontMatter":{"slug":"pragtical-v310-release","title":"Pragtical v3.1.0 Release","authors":"jgmdev"},"prevItem":{"title":"Pragtical v3.1.1 Release","permalink":"/blog/pragtical-v311-release"},"nextItem":{"title":"Pragtical v3.0.0 Release","permalink":"/blog/pragtical-v300-release"}},"content":"This release introduces a newer project handling API which breaks compatibility\\nwith plugins that interacted with the old one. All affected official plugins\\nwere ported to the new API so make sure to update them. Some of them are:\\nlsp, scm, console, editorconfig, gitopen, gitstatus, gofmt, smartopenselected\\nand todotreeview.\\n\\nDownloads on [GitHub](https://github.com/pragtical/pragtical/releases/tag/v3.1.0).\\n\\n## Changes Log\\n\\n### New Features\\n\\n* Merged project rework with fixes and performance improvements ([ce5e8db4](https://github.com/pragtical/pragtical/commit/ce5e8db41712612bc232f4bfe4d0113f36df1dc8))\\n\\n### Documentation\\n\\n* Merged documentation for core.dirwatch ([#1565](https://github.com/lite-xl/lite-xl/pull/1565))\\n\\n* Merged documentation for core.contextmenu ([#1567](https://github.com/lite-xl/lite-xl/pull/1567))\\n\\n### Backward Incompatible Changes\\n\\n* Project handling functions have been completely replaced as explained on ([#1455](https://github.com/lite-xl/lite-xl/pull/1455))\\n\\n### Fixes\\n\\n* settings: respect disabled plugins on lua modules ([c2ffe3e2](https://github.com/pragtical/pragtical/commit/c2ffe3e22201553bde3811cbf2ca2eef0e7a5c6b))\\n\\n* plugin workspace: delay workspace loading ([41e5caa0](https://github.com/pragtical/pragtical/commit/41e5caa0dfd30c7c0b868ebf8c51c1e832459c2c))\\n\\n* Fix autoreload plugin bugs and performance issues ([ec0ae57f](https://github.com/pragtical/pragtical/commit/ec0ae57fab18edf14ef0b50adf286e78cfb72145))\\n\\n### Other Changes\\n\\n* Merged feat(src/renderer): unify fontgroup baseline ([#1560](https://github.com/lite-xl/lite-xl/pull/1560))\\n\\n* Merged and customized use Lua wrap by default ([#1481](https://github.com/lite-xl/lite-xl/pull/1481))\\n\\n* Updated all meson wraps to latest versions\\n\\n* comment typo in data/core/init.lua ([#1549](https://github.com/lite-xl/lite-xl/pull/1549))\\n\\n### Lite XL Inherited Changes\\n\\n* Fix #1538 log scrolls automatically (the real PR) ([#1546](https://github.com/lite-xl/lite-xl/pull/1546))\\n\\n* Skip checking files if no filename was provided to syntax.get ([8a8bd2f9](https://github.com/pragtical/pragtical/commit/8a8bd2f94330f5ca2eaf05b5557b4f20ce6a305a))\\n\\n* Changed log view settings ([#266](https://github.com/lite-xl/lite-xl-plugins/pull/266))\\n\\n* Allow setting custom glyphset size ([#1542](https://github.com/lite-xl/lite-xl/pull/1542))\\n\\n* style(src/renderer): use FreeType header names ([#1554](https://github.com/lite-xl/lite-xl/pull/1554))\\n\\n* Return state when tokenizing plaintext syntaxes ([b6ac4f1e](https://github.com/pragtical/pragtical/commit/b6ac4f1ebe532b5c4ea88c732cb6b43fd4f26659))\\n\\n* feat(src/renderer): stream fonts with SDL_RWops on all platforms ([#1555](https://github.com/lite-xl/lite-xl/pull/1555))\\n\\n* Updated extension for mac. ([#1563](https://github.com/lite-xl/lite-xl/pull/1563))\\n\\n* Documentation for core.command ([#1564](https://github.com/lite-xl/lite-xl/pull/1564))\\n\\n**Full Changelog**: https://github.com/pragtical/pragtical/compare/v3.0.0...v3.1.0"},{"id":"pragtical-v300-release","metadata":{"permalink":"/blog/pragtical-v300-release","editUrl":"https://github.com/pragtical/pragtical.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2023-06-23-v300-release.md","source":"@site/blog/2023-06-23-v300-release.md","title":"Pragtical v3.0.0 Release","description":"This is the first official pragtical release that includes various new features","date":"2023-06-23T00:00:00.000Z","formattedDate":"June 23, 2023","tags":[],"readingTime":5.815,"hasTruncateMarker":false,"authors":[{"name":"Jefferson Gonzalez","title":"Contributor of Pragtical","url":"https://github.com/jgmdev","imageURL":"https://github.com/jgmdev.png","key":"jgmdev"}],"frontMatter":{"slug":"pragtical-v300-release","title":"Pragtical v3.0.0 Release","authors":"jgmdev"},"prevItem":{"title":"Pragtical v3.1.0 Release","permalink":"/blog/pragtical-v310-release"},"nextItem":{"title":"First Blog Post","permalink":"/blog/first-blog-post"}},"content":"This is the first official pragtical release that includes various new features\\nand fixes not available on its ancestors as listed below. This release can be\\ndownloaded from [GitHub](https://github.com/pragtical/pragtical/releases/tag/v3.0.0).\\n\\n## Changes Log\\n\\n### New Features\\n\\n* Add more syntax symbols ([00a0e9ca](https://github.com/pragtical/pragtical/commit/00a0e9cac9f55e7fe5877ecc271bf2114ee88ddf))\\n  - Added core functions to lighten or darken colors using pixel blending.\\n\\n* Support custom symbol types on language plugins ([c348be99](https://github.com/pragtical/pragtical/commit/c348be9966c1b1ab1f97af0ee869b118afbfd2cf))\\n\\n* Added font metadata support [lite-xl/lite-xl#1028](https://github.com/lite-xl/lite-xl/pull/1028)\\n\\n* Added encoding support [lite-xl/lite-xl#1161](https://github.com/lite-xl/lite-xl/pull/1161)\\n\\n* Added shared memory support [lite-xl/lite-xl#1486](https://github.com/lite-xl/lite-xl/pull/1486)\\n  * Added IPC plugin with shared memory backend ([87fc7105](https://github.com/pragtical/pragtical/commit/87fc71057ab702cf9c1d64dc1512e1f444ea9624))\\n    - force draw on core.tab_drag_received ([e5709850](https://github.com/pragtical/pragtical/commit/e5709850334e4e568ec60ed683ca1648adf40f97))\\n\\n* Added widgets as a git submodule ([a4681a62](https://github.com/pragtical/pragtical/commit/a4681a62d006852ef1750c245572caf73bba5abb))\\n\\n* language_lua: doc comments highlighting [lite-xl/lite-xl#1019](https://github.com/lite-xl/lite-xl/pull/1019)\\n\\n* language_js: support for embedded html syntax (like the one used on ReactJS) ([#4](https://github.com/pragtical/pragtical/pull/4))\\n\\n* Added support for background threads (co-routines) that keep running even when\\n  the window has no focus ([#5](https://github.com/pragtical/pragtical/pull/5))\\n  - `core.add_background_thread(...)`\\n\\n* Merged text overwriting [lite-xl/lite-xl#1495](https://github.com/lite-xl/lite-xl/pull/1495)\\n\\n### Performance Improvements\\n\\n* Added LuaJIT support [lite-xl/lite-xl#880](https://github.com/lite-xl/lite-xl/pull/880)\\n  - Enable LuaJIT by default ([8d84ab29](https://github.com/pragtical/pragtical/commit/8d84ab29d5932af2c10f03a1a855d2757820f6bb))\\n\\n* Added multi-threading support [lite-xl/lite-xl#830](https://github.com/lite-xl/lite-xl/pull/830)\\n  * Added multi-threaded project search ([f8591176](https://github.com/pragtical/pragtical/commit/f85911761a2b22f2e8b92cfadf92c8d9eb26f182))\\n  * Added multi-threaded find files ([f8591176](https://github.com/pragtical/pragtical/commit/f85911761a2b22f2e8b92cfadf92c8d9eb26f182))\\n\\n* Reduce default coroutine timeout [lite-xl/lite-xl#1468](https://github.com/lite-xl/lite-xl/pull/1468)\\n\\n* Use less cpu when only running background coroutines ([f230c38f](https://github.com/pragtical/pragtical/commit/f230c38f566c5f1b00d32dcf5541655500966adf))\\n\\n* Change LuaJIT optimization defaults ([8733c5fb](https://github.com/pragtical/pragtical/commit/8733c5fb87ba4571895aebf85e4d5fe71b0a50f0))\\n\\n* Disable the compat fix_pattern ([85f7a077](https://github.com/pragtical/pragtical/commit/85f7a077f95191e07d0b9f829b655bb0bfee7914))\\n\\n### Documentation\\n\\n*  Merge documentation for config options [lite-xl/lite-xl#1512](https://github.com/lite-xl/lite-xl/pull/1512)\\n\\n*  Merged documentation for core.common [lite-xl/lite-xl#1510](https://github.com/lite-xl/lite-xl/pull/1510)\\n\\n### Backward Incompatible Changes\\n\\n* Language plugins file match pattern will no longer support using the `^`\\n  pattern to match the beginning of a file, `PATHSEP` should be used instead\\n\\n### UI Enhancements\\n\\n* Add icons support to autocomplete plugin ([0559cd7a](https://github.com/pragtical/pragtical/commit/0559cd7a0459b67a25402b2e59d9487fcdb7fec2))\\n\\n* Added initial commandview suggestions mouse support ([276d92a6](https://github.com/pragtical/pragtical/commit/276d92a6d93b1a8745890835e5b2d163699d5358))\\n\\n* Added improved scaling support from [lite-xl/lite-xl#1347](https://github.com/lite-xl/lite-xl/pull/1347)\\n\\n* Added settings plugin ([d5327a8d](https://github.com/pragtical/pragtical/commit/d5327a8d58de6672343a344287f0649846f173f0))\\n  * added config for tabs top margin ([90150bf6](https://github.com/pragtical/pragtical/commit/90150bf6fdd476413d13e30405a1656317965362))\\n\\n* Scale the entire UI by default on scale plugin ([a5096b47](https://github.com/pragtical/pragtical/commit/a5096b47763a3ec0b540cd0b58b64be9a6122738))\\n\\n* Added friendlier search/replace user interface ([518226eb](https://github.com/pragtical/pragtical/commit/518226eb2ce8b7bdd1d53c9521f290f640d42c8f))\\n\\n* Add missing config spec settings to treeview ([d71175d1](https://github.com/pragtical/pragtical/commit/d71175d1c7f676044ac538eb35fdda47d09d521c))\\n\\n* Better coroutine handling on no focus ([456b8b25](https://github.com/pragtical/pragtical/commit/456b8b25da4f66485c2cdbb0f0a572d4c023e3b5))\\n\\n### Fixes\\n\\n* Fix node resizing on mouse drag ([c2733928](https://github.com/pragtical/pragtical/commit/c2733928d93208b0ff6f233f50c2ef0e972bc13b))\\n\\n### Other Changes\\n\\n* Autocomplete plugin improvements ([81b45706](https://github.com/pragtical/pragtical/commit/81b457066befcfd5ee91caa51ddf63affec34681))\\n  * Support suggestion symbols scoping\\n    - global: all open documents\\n    - local: current document\\n    - related: all open documents with same syntax\\n    - none: language syntax symbols only\\n  * Register style.syntax[] entries as icons\\n  * Other related fixes\\n\\n* Attach command buffer to Renderer Window ([#3](https://github.com/pragtical/pragtical/pull/3))\\n\\n* Unified non-addons and addons releases ([35d01f5f](https://github.com/pragtical/pragtical/commit/35d01f5fc5391bb74141253375762125a7491520))\\n\\n* Removed lhelper as a build option ([56b3a6c0](https://github.com/pragtical/pragtical/commit/56b3a6c0a4d5552cd71683fb588b3e307404a4a7))\\n\\n* Single pattern for common.utf8_chars ([9ccfade6](https://github.com/pragtical/pragtical/commit/9ccfade6498de7037c7a878b1f4b316440856877))\\n\\n* innosetup: installation path to environment task (allows command line access) ([ce995eb2](https://github.com/pragtical/pragtical/commit/ce995eb28211e40fff9fb95e9f8a45b53b6c3ddc))\\n\\n* LuaJIT compat: allow nil msg on debug.traceback ([ca0791a8](https://github.com/pragtical/pragtical/commit/ca0791a8ec3023892759190b5bcb6275435c0cb1))\\n\\n* Fix LuaJIT build on MacOS crosscompile ([7d8340c4](https://github.com/pragtical/pragtical/commit/7d8340c4517a96b1d0cf5a2d9289f20454be1ec9))\\n\\n* Updated MOD_VERSION_MINOR ([4ea0da57](https://github.com/pragtical/pragtical/commit/4ea0da572470e3034074ec8e590c398ab1c6bd82))\\n\\n* Added workflow to produce setup and portable builds on every commit.\\n\\n* Rebranding of project name and assets.\\n\\n### Lite XL Inherited Changes\\n\\n* Allow command buffer to be expanded ([#1297](https://github.com/lite-xl/lite-xl/pull/1297))\\n* do not allow users to create an empty font group ([#1303](https://github.com/lite-xl/lite-xl/pull/1303))\\n* Make api_require\'s nodes const ([#1296](https://github.com/lite-xl/lite-xl/pull/1296))\\n* Fix a memory leak ([#1305](https://github.com/lite-xl/lite-xl/pull/1305))\\n* Don\'t set a value twice ([#1306](https://github.com/lite-xl/lite-xl/pull/1306))\\n* Make dirwatch sorting compatible with what file_bisect expects ([#1300](https://github.com/lite-xl/lite-xl/pull/1300))\\n* Handle readlink errors ([#1292](https://github.com/lite-xl/lite-xl/pull/1292))\\n* linewrapping: Disable horizontal scrolling when enabled ([#1309](https://github.com/lite-xl/lite-xl/pull/1309))\\n* plugin api: added missing luaL_typeerror ([#1313](https://github.com/lite-xl/lite-xl/pull/1313))\\n* defer lua error until after cleanup ([#1310](https://github.com/lite-xl/lite-xl/pull/1310))\\n* fix: center title and version in emptyview ([#1311](https://github.com/lite-xl/lite-xl/pull/1310))\\n* Reorganize resources/ + wasm target ([#1244](https://github.com/lite-xl/lite-xl/pull/1244))\\n* replace uses of SDL_Window with RenWindow ([#1319](https://github.com/lite-xl/lite-xl/pull/1319))\\n* Create Renderer Only When It Doesn\'t Exist ([#1315](https://github.com/lite-xl/lite-xl/pull/1315))\\n* language_md: add nix code block highlighting ([#1323](https://github.com/lite-xl/lite-xl/pull/1323))\\n* Use table.move to implement common.splice ([#1324](https://github.com/lite-xl/lite-xl/pull/1324))\\n* Make empty groups in regex.gmatch return their offset ([#1325](https://github.com/lite-xl/lite-xl/pull/1325))\\n* remove static libgcc from meson ([#1290](https://github.com/lite-xl/lite-xl/pull/1290))\\n* Avoid drawing hidden text in DocView:draw_line_text ([#1298](https://github.com/lite-xl/lite-xl/pull/1298))\\n* Added in Config Postload ([#1336](https://github.com/lite-xl/lite-xl/pull/1336))\\n* plugin api: allow usage on multiple source files ([#1335](https://github.com/lite-xl/lite-xl/pull/1335))\\n* Add \\"Open with Lite XL\\" to windows\' context menu ([#1333](https://github.com/lite-xl/lite-xl/pull/1333))\\n* pass RenWindow by argument ([#1321](https://github.com/lite-xl/lite-xl/pull/1321))\\n* ci: fix msys build now requiring ca-certificates ([#1348](https://github.com/lite-xl/lite-xl/pull/1348))\\n* Getting rid of annoying forward slash on windows. ([#1345](https://github.com/lite-xl/lite-xl/pull/1345))\\n* Abstracted open_doc out to allow for more easy overriding. ([#1344](https://github.com/lite-xl/lite-xl/pull/1344))\\n* feat: add option to only draw whitespace if it is within selection ([#1321](https://github.com/lite-xl/lite-xl/pull/1321))\\n* Replace globally when replacing from selection ([#1331](https://github.com/lite-xl/lite-xl/pull/1331))\\n* Context menu fixes and keyboard navigation ([#1338](https://github.com/lite-xl/lite-xl/pull/1338))\\n* fix: exec() error not returned to parent ([#1363](https://github.com/lite-xl/lite-xl/pull/1363))\\n* Make mod-version follow semver ([#1036](https://github.com/lite-xl/lite-xl/pull/1036))\\n* Improved plugins config table handling ([#1356](https://github.com/lite-xl/lite-xl/pull/1356))\\n* Restore in-selection replace as discussed in #1331 ([#1368](https://github.com/lite-xl/lite-xl/pull/1368))\\n* NagView: properly rescale on scale change ([#1379](https://github.com/lite-xl/lite-xl/pull/1379))\\n* plugins scale: also rescale style.expanded_scrollbar_size ([#1380](https://github.com/lite-xl/lite-xl/pull/1380))\\n* Improve DocView:get_visible_line_range precision ([#1382](https://github.com/lite-xl/lite-xl/pull/1382))\\n* Allow groups to be used in end delimiter patterns in tokenizer ([#1317](https://github.com/lite-xl/lite-xl/pull/1317))\\n* Make mouse scrollwheel hovering tabs scroll the tab bar ([#1314](https://github.com/lite-xl/lite-xl/pull/1314))\\n* Correct the inverted tabs scrolling ([02a99b17](https://github.com/lite-xl/lite-xl/commit/02a99b17fe9ef11ea18aeb5cb0799c8999a4d2e9))\\n* Make tab scrolling more flexible ([#1384](https://github.com/lite-xl/lite-xl/pull/1384))\\n* fix incorrect x_offset if opened docs have different tab sizes ([#1383](https://github.com/lite-xl/lite-xl/pull/1383))\\n* Added in ability to specify prefix via env variable. ([#1388](https://github.com/lite-xl/lite-xl/pull/1388))\\n* Use correct view for scrolling to find-replace:repeat-find results ([#1400](https://github.com/lite-xl/lite-xl/pull/1400))\\n* Add manifest on Windows ([#1405](https://github.com/lite-xl/lite-xl/pull/1405))\\n* Split Command struct into different structs for each command type ([#1407](https://github.com/lite-xl/lite-xl/pull/1407))\\n* refactor(main): move SetProcessDPIAware to manifests ([#1413](https://github.com/lite-xl/lite-xl/pull/1413))\\n* Improve text width calculation precision ([#1408](https://github.com/lite-xl/lite-xl/pull/1408))\\n* Use clipping functions provided by SDL ([#1426](https://github.com/lite-xl/lite-xl/pull/1426))\\n* Make TreeView follow the current tab ([#1411](https://github.com/lite-xl/lite-xl/pull/1411))\\n* Asynchronous process reaping ([#1412](https://github.com/lite-xl/lite-xl/pull/1412))\\n* Made coroutines make more sense, and fixed a bug. ([#1381](https://github.com/lite-xl/lite-xl/pull/1381))\\n* Disable trimwhitespace and drawwhitespace via their configs ([#1446](https://github.com/lite-xl/lite-xl/pull/1446))\\n* Allow tokenizer to pause and resume in the middle of a line ([#1444](https://github.com/lite-xl/lite-xl/pull/1444))\\n* Added in explicit touchscreen keyboard support. ([#1389](https://github.com/lite-xl/lite-xl/pull/1389))\\n* fix cursors positions when deleting multiple selections ([#1393](https://github.com/lite-xl/lite-xl/pull/1393))\\n* add autocompletion to multicursor ([#1394](https://github.com/lite-xl/lite-xl/pull/1394))\\n* Added in support for foreground and background events. ([#1395](https://github.com/lite-xl/lite-xl/pull/1395))\\n* Fix invalid EXEFILE and EXEDIR on Windows ([#1396](https://github.com/lite-xl/lite-xl/pull/1396))\\n* fix(windows-utf8-patch): fix os.getenv() not supporting UTF-8 output ([#1397](https://github.com/lite-xl/lite-xl/pull/1397))\\n* Add View dragging ([#1402](https://github.com/lite-xl/lite-xl/pull/1402))\\n* fix: fix differing stacktrace on stdout and file ([#1404](https://github.com/lite-xl/lite-xl/pull/1404))\\n* fix(CI): bump dependency versions ([#1434](https://github.com/lite-xl/lite-xl/pull/1434))\\n* Optimizing MSYS2 CI ([#1435](https://github.com/lite-xl/lite-xl/pull/1435))\\n* Update api_require to expose more symbols ([#1437](https://github.com/lite-xl/lite-xl/pull/1437))\\n* Make system.path_compare more case-aware ([#1457](https://github.com/lite-xl/lite-xl/pull/1457))\\n* feat: add statusview item to show selections ([#1445](https://github.com/lite-xl/lite-xl/pull/1445))\\n* Fix for api_require wrong macro && conditions ([#1465](https://github.com/lite-xl/lite-xl/pull/1465))\\n* upgrade header files to Lua 5.4 ([#1436](https://github.com/lite-xl/lite-xl/pull/1436))\\n* Cross compiling improvements + macOS universal binary ([#1458](https://github.com/lite-xl/lite-xl/pull/1458))\\n* Show error message in crash message box ([#1461](https://github.com/lite-xl/lite-xl/pull/1461))\\n* refactor(plugin_api): move the header into include/ ([#1440](https://github.com/lite-xl/lite-xl/pull/1440))\\n* Merge carets after doc:move-to-{previous,next}-char ([#1462](https://github.com/lite-xl/lite-xl/pull/1462))\\n* StatusView compat fix with older Lua runtimes ([8cb84254](https://github.com/lite-xl/lite-xl/commit/8cb842549c955290d950642ae7c1f66f4bd2bd2d))\\n* Make system.path_compare more digit-aware ([#1474](https://github.com/lite-xl/lite-xl/pull/1474))\\n* fix(process): check for HANDLE_INVALID ([#1475](https://github.com/lite-xl/lite-xl/pull/1475))\\n* Added in double-clicking on emptyview and tab bar. ([#1478](https://github.com/lite-xl/lite-xl/pull/1478))\\n* Restore horizontal scroll position after scale change ([#494](https://github.com/lite-xl/lite-xl/pull/494))\\n* Allowed for overrides of toolbar items ([#1157](https://github.com/lite-xl/lite-xl/pull/1157))\\n* detectindent: fix wrong detection reported by Adam ([#1500](https://github.com/lite-xl/lite-xl/pull/1500))\\n* Move lineguide below blinking cursor, fixes #1488 ([#1511](https://github.com/lite-xl/lite-xl/pull/1511))\\n* Close lua state when exiting on a runtime error ([#1487](https://github.com/lite-xl/lite-xl/pull/1487))\\n* Add mouse grab ([#1501](https://github.com/lite-xl/lite-xl/pull/1501))\\n* Add top tab margins ([#1479](https://github.com/lite-xl/lite-xl/pull/1479))\\n* Increase number of loadable glyphsets ([#1524](https://github.com/lite-xl/lite-xl/pull/1524))"},{"id":"first-blog-post","metadata":{"permalink":"/blog/first-blog-post","editUrl":"https://github.com/pragtical/pragtical.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2023-05-28-first-blog-post.md","source":"@site/blog/2023-05-28-first-blog-post.md","title":"First Blog Post","description":"The website is still a work in progress but things seem to be getting in order","date":"2023-05-28T00:00:00.000Z","formattedDate":"May 28, 2023","tags":[],"readingTime":0.095,"hasTruncateMarker":false,"authors":[{"name":"Jefferson Gonzalez","title":"Contributor of Pragtical","url":"https://github.com/jgmdev","imageURL":"https://github.com/jgmdev.png","key":"jgmdev"}],"frontMatter":{"slug":"first-blog-post","title":"First Blog Post","authors":"jgmdev"},"prevItem":{"title":"Pragtical v3.0.0 Release","permalink":"/blog/pragtical-v300-release"}},"content":"The website is still a work in progress but things seem to be getting in order\\nwith [docusaurus](https://docusaurus.io/) :)"}]}')}}]);