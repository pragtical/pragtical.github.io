"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[451],{8174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>c});var i=t(5893),s=t(1151);const r={slug:"pragtical-v350-release",title:"Pragtical v3.5.0 Release",authors:"jgmdev"},l=void 0,a={permalink:"/blog/pragtical-v350-release",editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/blog/2024-09-15-v350-release.md",source:"@site/blog/2024-09-15-v350-release.md",title:"Pragtical v3.5.0 Release",description:"A new week and a new release with fixes and performance improvements!",date:"2024-09-15T00:00:00.000Z",formattedDate:"September 15, 2024",tags:[],readingTime:3,hasTruncateMarker:!1,authors:[{name:"Jefferson Gonzalez",title:"Contributor of Pragtical",url:"https://github.com/jgmdev",imageURL:"https://github.com/jgmdev.png",key:"jgmdev"}],frontMatter:{slug:"pragtical-v350-release",title:"Pragtical v3.5.0 Release",authors:"jgmdev"},unlisted:!1,nextItem:{title:"Pragtical v3.4.4 Release",permalink:"/blog/pragtical-v344-release"}},o={authorsImageUrls:[void 0]},c=[{value:"Changes Log",id:"changes-log",level:2},{value:"Performance Improvements",id:"performance-improvements",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"API",id:"api",level:3},{value:"Fixes",id:"fixes",level:3},{value:"Build System",id:"build-system",level:3},{value:"Widgets",id:"widgets",level:3},{value:"Lite XL Inherited Changes",id:"lite-xl-inherited-changes",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"A new week and a new release with fixes and performance improvements!"}),"\n",(0,i.jsxs)(n.p,{children:["Over the past few days, various people have helped by reporting issues on the GitHub\n",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/issues",children:"issue tracker"}),", and this release\ntackles some of them. One prominent change is the improvement in the way that\ncoroutines are scheduled, resulting in overall better responsiveness and\nperformance of the editor, an improvement that would not have been possible\nwithout the testing of ",(0,i.jsx)(n.a,{href:"https://github.com/AmerM137",children:"AmerM137"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Also, while working on a not-yet-finished C++ native tokenizer (to see if we gain\nsome better performance), I found that the ",(0,i.jsx)(n.code,{children:"utf8.len"})," function accepts a\n",(0,i.jsx)(n.code,{children:"lax"})," parameter that allows calculating the length of the string without\nchecking if it is invalid UTF-8 (we don't need this check since we are passing\nclean UTF-8 text to the tokenizer). Using this flag on the Lua tokenizer calls of\n",(0,i.jsx)(n.code,{children:"ulen"})," gives us over a 75% time reduction in the per-line tokenization process."]}),"\n",(0,i.jsx)(n.p,{children:"Another area that has seen improvements is in the startup and memory usage\ndepartments. We changed how the settings plugin deals with the global status\nof the scrollbar to not depend on a coroutine. In the memory department, we\nmodified various core plugins that make use of weak document table keys to\nclear the content of these tables immediately after a document is closed. This\nchange should result in the garbage collector kicking in sooner for cleanup\nof unused memory."}),"\n",(0,i.jsxs)(n.p,{children:["This release also introduces AppImage and Portable ",(0,i.jsx)(n.code,{children:"ARM64 Linux builds"})," of the\neditor for people working on those platforms, as suggested by\n",(0,i.jsx)(n.a,{href:"https://github.com/jvoisin",children:"jvoisin"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["For plugin developers, we introduced two new functions to deal with ignore\nfiles: ",(0,i.jsx)(n.code,{children:"core.get_ignore_file_rules()"})," and ",(0,i.jsx)(n.code,{children:"common.match_ignore_rule(path, info, ignore_rules)"}),".\nAlso, the editor version was aligned with the mod version, meaning that they\nare now the same."]}),"\n",(0,i.jsx)(n.p,{children:"Some other changes include:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Proper updates to the NoteBook widget on tab change."}),"\n",(0,i.jsxs)(n.li,{children:["Better DPI runtime awareness on Windows (special thanks to\n",(0,i.jsx)(n.a,{href:"https://github.com/LeDominik",children:"LeDominik"}),", who performed macOS scale testing\non previous releases, resulting in today's improvements)."]}),"\n",(0,i.jsxs)(n.li,{children:["Fixes to the regex C API that allow it to work properly on macOS ARM64\n(reported by ",(0,i.jsx)(n.a,{href:"https://github.com/dilpreetsio",children:"dilpreetsio"}),")."]}),"\n",(0,i.jsx)(n.li,{children:"Better borderless behavior when clicking window action buttons."}),"\n",(0,i.jsx)(n.li,{children:"Fixes to window size restoration on startup."}),"\n",(0,i.jsx)(n.li,{children:"Improvements to the findfile and projectsearch plugins in handling\nignore files."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"A big THANK YOU to everyone who reports issues!"}),"\n",(0,i.jsxs)(n.p,{children:["Downloads on ",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/releases/tag/v3.5.0",children:"GitHub"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"changes-log",children:"Changes Log"}),"\n",(0,i.jsx)(n.h3,{id:"performance-improvements",children:"Performance Improvements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Lower input latency improving co-routine scheduling and tokenizer\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/174",children:"#174"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Reduce the amount of co-routines needed on startup\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/176",children:"#176"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Document lax param and use on tokenizer ulen calls\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/183",children:"#183"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added PerMonitor dpi awareness to windows manifest\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/158",children:"#158"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Don't trust weak table keys to clean cached items\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/164",children:"#164"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Introduce new ignore files handling functions\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/177",children:"#177"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Use project version as mods version\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/184",children:"#184"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"fixes",children:"Fixes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fix issues with window size restoration (spotted on Windows)\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/162",children:"#162"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["IPC Plugin: restore current project working dir\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/167",children:"#167"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["If all documents are closed chdir to root project\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/168",children:"#168"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["findfile: use project when resolving file path\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/169",children:"#169"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Fix regex api wrong value set to regex.ENDANCHORED\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/170",children:"#170"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["regex api: use proper type for options parameter\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/171",children:"#171"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Do not maximize window on macOS at startup\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/175",children:"#175"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Process TitleView button actions on mouse release\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/178",children:"#178"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"build-system",children:"Build System"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add Linux AArch64 build target to CI\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/157",children:"#157"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["CI: Properly enable ccache for linux builds\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/161",children:"#161"}),")"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"widgets",children:"Widgets"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Allow scheduling core updates and redraws\n(",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/widget/commit/a2637c377da8a92eb4bd966d12ab6a45e71c4e43",children:"a2637c37"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"lite-xl-inherited-changes",children:"Lite XL Inherited Changes"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["DocView: check token_count not 0\n(",(0,i.jsx)(n.a,{href:"https://github.com/lite-xl/lite-xl/pull/1879",children:"#1879"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Added in keyboard shortcut tooltips.\n(",(0,i.jsx)(n.a,{href:"https://github.com/lite-xl/lite-xl/pull/1880",children:"#1880"}),")"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add primary selection support\n(",(0,i.jsx)(n.a,{href:"https://github.com/lite-xl/lite-xl/pull/1729",children:"#1729"}),")"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var i=t(7294);const s={},r=i.createContext(s);function l(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);