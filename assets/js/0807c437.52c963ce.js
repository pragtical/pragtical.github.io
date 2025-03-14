"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3439],{40564:(e,l,i)=>{i.r(l),i.d(l,{assets:()=>a,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>h});var t=i(85893),n=i(11151);const s={slug:"pragtical-v320-release",title:"Pragtical v3.2.0 Release",authors:"jgmdev"},r=void 0,c={permalink:"/blog/pragtical-v320-release",editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/blog/2023-11-21-v320-release.md",source:"@site/blog/2023-11-21-v320-release.md",title:"Pragtical v3.2.0 Release",description:"This release introduces a new CLI api and bundles the plugin manager by default:",date:"2023-11-21T00:00:00.000Z",formattedDate:"November 21, 2023",tags:[],readingTime:2.205,hasTruncateMarker:!1,authors:[{name:"Jefferson Gonzalez",title:"Contributor of Pragtical",url:"https://github.com/jgmdev",imageURL:"https://github.com/jgmdev.png",key:"jgmdev"}],frontMatter:{slug:"pragtical-v320-release",title:"Pragtical v3.2.0 Release",authors:"jgmdev"},unlisted:!1,prevItem:{title:"Pragtical v3.2.1 Release",permalink:"/blog/pragtical-v321-release"},nextItem:{title:"Pragtical v3.1.2 Release",permalink:"/blog/pragtical-v312-release"}},a={authorsImageUrls:[void 0]},h=[{value:"Changes Log",id:"changes-log",level:2},{value:"New Features",id:"new-features",level:3},{value:"Fixes",id:"fixes",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Build System",id:"build-system",level:3},{value:"Other Changes",id:"other-changes",level:3},{value:"Lite XL Inherited Changes",id:"lite-xl-inherited-changes",level:3}];function d(e){const l={a:"a",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(l.p,{children:"This release introduces a new CLI api and bundles the plugin manager by default:"}),"\n",(0,t.jsx)(l.p,{children:(0,t.jsx)(l.img,{src:"https://github.com/pragtical/pragtical/assets/1702572/0cca8ae5-46a8-4002-a902-b70180af86cf",alt:"pragtical-cli"})}),"\n",(0,t.jsx)(l.p,{children:"It also incorporates various bug fixes both from upstream and our side."}),"\n",(0,t.jsxs)(l.p,{children:["Downloads on ",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/releases/tag/v3.2.0",children:"GitHub"}),"."]}),"\n",(0,t.jsx)(l.h2,{id:"changes-log",children:"Changes Log"}),"\n",(0,t.jsx)(l.h3,{id:"new-features",children:"New Features"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["CLI parser API (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/pull/28",children:"#28"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Bundle the plugin manager as a meson subproject and new plugins button as part of the welcome screen (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/pull/33",children:"#33"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Allow console output on windows (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/pull/37",children:"#37"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(l.h3,{id:"fixes",children:"Fixes"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsx)(l.p,{children:"Some overwrite mode fixes:"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["Overwrite mode only on single character input (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/commit/32f23027f41dd4c0cd80215b629f7073de2b6369",children:"32f23027"}),")"]}),"\n",(0,t.jsxs)(l.li,{children:["Overwrite mode only when no text selected (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/commit/ae0d35024c408d0f7876763d296e79b0fd1567b7",children:"ae0d3502"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Fixed IPC plugin shmem not detected on MacOS (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/commit/3cb3bf08bed98c00a961ecc0b80c772d93a64d1a",children:"3cb3bf08"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Fix node resizing on touch events (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1657",children:"lite-xl/lite-xl#1657"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Call process.__gc() when restarting on LuaJIT (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/commit/3066f278bc889aec1ce0223cf1786bb8053183de",children:"3066f278"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Set a minimum window size to prevent sizing issues (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/commit/c87ae5598dde30300a63fbdd16586503a14cdf42",children:"c87ae559"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Fix an shmem segfault triggered on macOS (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/pull/44",children:"#44"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Check in autocomplete plugin if doc cached on symbols iterator (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/commit/6546ee8c66ee9df79852a8e2f12089a1706d657e",children:"6546ee8c"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Fix editor crash on invalid UTF-8 (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/pull/38",children:"#38"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(l.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Improve toggle fullscreen using previous win state (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/commit/c108b2d09896a8503d6b66b0c94e843d9cfd7b54",children:"c108b2d0"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Added document types and app category to Mac bundle (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/commit/418e92f893c8b5ad2aac926e4efc5c76d6c4be7f",children:"418e92f8"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Added defaults for the 'tag' highlight group (better evergreen support) (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/commit/cfc96634c474568ed5457e86bd5a810b25607bec",children:"cfc96634"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(l.h3,{id:"build-system",children:"Build System"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Switch luajit wrap to git branch v2.1 (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/commit/05e778d15af350a40c34149948b0bca4b220bac3",children:"05e778d1"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Do no check for X11 presence on macOS (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/commit/5e518511fa4ac1b2a26b0f5cbd3a7a7de2360334",children:"5e518511"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Added luajit meson support for msvc (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/pull/43",children:"#43"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(l.h3,{id:"other-changes",children:"Other Changes"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Expose lua_setglobal/getglobal implementations for LuaJIT (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/commit/82d61cca4cfdea4702470924b97456ee0aa0c54c",children:"82d61cca"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Some work to better support different lua runtimes (",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/pull/40",children:"#40"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:['StatusView: micro optimization that skips counting of tabs on current line if tab type is not set to "hard". (',(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/commit/a359b947713716fef81da30c33097c7364e1a79e",children:"a359b947"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Merge: Update luautf8 to latest (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1613",children:"lite-xl/lite-xl#1613"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Merge: Improve font/color change detection in language_md (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1614",children:"lite-xl/lite-xl#1614"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Merge: Fix deleting indentation with multiple cursors (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1670",children:"lite-xl/lite-xl#1670"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Merge: Fix running core.step when receiving an event while not waiting (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1667",children:"lite-xl/lite-xl#1667"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Merge: Limit system.{sleep,wait_event} to timeouts >= 0 (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1666",children:"lite-xl/lite-xl#1666"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Merge: Allow writing to hidden files on Windows (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1653",children:"lite-xl/lite-xl#1653"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Merge: Expose plaintext syntax (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1652",children:"lite-xl/lite-xl#1652"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Merge: Configurable statusview icon (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1617",children:"lite-xl/lite-xl#1617"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Merge: Fix selecting newlines with find-replace:select-add-{next,all} (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1608",children:"lite-xl/lite-xl#1608"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Merge: wasm cross file improvements (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1660",children:"lite-xl/lite-xl#1660"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(l.h3,{id:"lite-xl-inherited-changes",children:"Lite XL Inherited Changes"}),"\n",(0,t.jsxs)(l.ul,{children:["\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["fix: dim rendering when antialiasing is turned off (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1641",children:"#1641"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Mark unsaved named files as dirty (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1598",children:"#1598"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Improve common.serialize (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1640",children:"#1640"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Ignore keypresses during IME composition (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1573",children:"#1573"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Save in the workspace unsaved named files and crlf status (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1597",children:"#1597"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:['ci: fix diff files having "wrong" path separator (',(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1648",children:"#1648"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Set SDL hint to prefer software render driver (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1646",children:"#1646"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["fix(dirmonitor): deadlock if error handler jumps somewhere else (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1647",children:"#1647"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["Sanitize tab index in Node",":add_view"," (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1651",children:"#1651"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(l.li,{children:["\n",(0,t.jsxs)(l.p,{children:["ease transparency of nagbar dim (",(0,t.jsx)(l.a,{href:"https://github.com/lite-xl/lite-xl/pull/1658",children:"#1658"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(l.p,{children:[(0,t.jsx)(l.strong,{children:"Full Changelog"}),": ",(0,t.jsx)(l.a,{href:"https://github.com/pragtical/pragtical/compare/v3.1.2...v3.2.0",children:"https://github.com/pragtical/pragtical/compare/v3.1.2...v3.2.0"})]})]})}function p(e={}){const{wrapper:l}={...(0,n.a)(),...e.components};return l?(0,t.jsx)(l,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,l,i)=>{i.d(l,{Z:()=>c,a:()=>r});var t=i(67294);const n={},s=t.createContext(n);function r(e){const l=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(l):{...l,...e}}),[l,e])}function c(e){let l;return l=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),t.createElement(s.Provider,{value:l},e.children)}}}]);