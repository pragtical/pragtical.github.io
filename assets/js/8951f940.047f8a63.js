"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2474],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,m=n(e,["components","mdxType","originalType","parentName"]),s=o(a),d=l,h=s["".concat(c,".").concat(d)]||s[d]||u[d]||i;return a?r.createElement(h,p(p({ref:t},m),{},{components:a})):r.createElement(h,p({ref:t},m))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,p=new Array(i);p[0]=d;var n={};for(var c in t)hasOwnProperty.call(t,c)&&(n[c]=t[c]);n.originalType=e,n[s]="string"==typeof e?e:l,p[1]=n;for(var o=2;o<i;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3386:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>o});var r=a(7462),l=(a(7294),a(3905));const i={slug:"pragtical-v312-release",title:"Pragtical v3.1.2 Release",authors:"jgmdev"},p=void 0,n={permalink:"/blog/pragtical-v312-release",editUrl:"https://github.com/pragtical/pragtical.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2023-09-24-v312-release.md",source:"@site/blog/2023-09-24-v312-release.md",title:"Pragtical v3.1.2 Release",description:"This release introduces a new widgets based welcome screen:",date:"2023-09-24T00:00:00.000Z",formattedDate:"September 24, 2023",tags:[],readingTime:1.93,hasTruncateMarker:!1,authors:[{name:"Jefferson Gonzalez",title:"Contributor of Pragtical",url:"https://github.com/jgmdev",imageURL:"https://github.com/jgmdev.png",key:"jgmdev"}],frontMatter:{slug:"pragtical-v312-release",title:"Pragtical v3.1.2 Release",authors:"jgmdev"},nextItem:{title:"Pragtical v3.1.1 Release",permalink:"/blog/pragtical-v311-release"}},c={authorsImageUrls:[void 0]},o=[{value:"New Features",id:"new-features",level:3},{value:"Fixes",id:"fixes",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"UI Enhancements",id:"ui-enhancements",level:3},{value:"Colors",id:"colors",level:3},{value:"Build System",id:"build-system",level:3},{value:"Widgets",id:"widgets",level:3},{value:"Lite XL Inherited Changes",id:"lite-xl-inherited-changes",level:3}],m={toc:o},s="wrapper";function u(e){let{components:t,...a}=e;return(0,l.kt)(s,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This release introduces a new widgets based welcome screen:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/pragtical/pragtical/assets/1702572/a04fd0fb-542e-42c7-8cbd-d473f4c25107",alt:"pragtical-welcome"})),(0,l.kt)("p",null,"It also features compatibility changes to properly work with the terminal\nplugin, and includes the accumulated bug fixes listed above as new color schemes."),(0,l.kt)("p",null,"Downloads on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/releases/tag/v3.1.2"},"GitHub"),"."),(0,l.kt)("h1",{id:"changes-log"},"Changes Log"),(0,l.kt)("h3",{id:"new-features"},"New Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Syntax files symbol_pattern, non_word_chars props (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/pull/12"},"#12"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"New Welcome Screen - Converted emptyview to widget with additions (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/e08f1b18b28e26351a27dd9a5aeeb2bcc4c2d48f"},"e08f1b18"),")"))),(0,l.kt)("h3",{id:"fixes"},"Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixes #10 by using the scrollbar expanded size (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/pull/11"},"#11"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fix core:open-file to not be dependant on chdir (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/47bfcb07bb1db489f97d2fa4a6c0432905eb87c0"},"47bfcb07"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Respect coroutines redraw requests while on focus (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/f450b6124e53b83c5bf41d6261e79ecac555d0ce"},"f450b612"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Do not process clicks on contextmenu divider (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/pull/22"},"#22"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed issue with open file command (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/d8906c2111b056438c142622c16c338fef61a70d"},"d8906c21"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"MacOS: allow combining cmd+ctrl and replace alt with option (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/0674f1f5a5ebc0866b7e826eeacaadc355325e69"},"0674f1f5"),")"))),(0,l.kt)("h3",{id:"enhancements"},"Enhancements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Improvements to language_css (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/f2a0790d2c6b0ace73b66b31a5ea59ac60e7c3c4"},"f2a0790d"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Better compat math.{tointeger|type|ult} for luajit (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/80bce6c0b1275050a779eac85e79dc472e309d91"},"80bce6c0"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added Mike Pall bitops library to non jit lua for consistency (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/5efc02a84350c544a6475255e04e5110eff083b7"},"5efc02a8"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use native bit operators on Lua >= 5.3 (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/10cecbec61015d1b3a01837f082b205d00da87b5"},"10cecbec"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Highlight CUDA source code the same as C++ (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/pull/15"},"#15"),")"))),(0,l.kt)("h3",{id:"ui-enhancements"},"UI Enhancements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"statusview: separate item for doc position percent ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1579"},"lite-xl/lite-xl#1579"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Highlight default theme on settings ui, fixes #23 (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/cd7181dfa5f0d2d2a95081cf3096460b271beec6"},"cd7181df"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"treeview: do not show hidden files by default (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/ecda0a0ab7ff1c4f4795bb7af745ab728b5a6798"},"ecda0a0a"),")"))),(0,l.kt)("h3",{id:"colors"},"Colors"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added new Yaru dark and light theme (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/colors/commit/5fa3cc13fdf33f4ae7dc0d79c2b377f21761ec3c"},"5fa3cc13"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Improvements to tokyo-night (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/colors/commit/551c351d8c57818bcd350a4dae9d10e7c9506384"},"551c351d"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added solarized_dark theme (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/colors/commit/b9791efad6d7c726b2485cb4126681067c2e3a1c"},"b9791efa"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Improvements to Monokai themes (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/colors/commit/79264c47449aa5d7f86c2f03558d2205931644eb"},"79264c47"),")"))),(0,l.kt)("h3",{id:"build-system"},"Build System"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Switch to an older ubuntu builder, fixes #13 (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/pull/16"},"#16"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixes for msvc ci run (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/39caabc0ac7775141c8cfaff0e53b12abe66d4d8"},"39caabc0"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Applied msvc fixes from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1577"},"lite-xl/lite-xl#1572"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Rename latest builds to rolling (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/51754f3375d2cb3d0daae04e6014fa75fa8d45cd"},"51754f33"),")"))),(0,l.kt)("h3",{id:"widgets"},"Widgets"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Widget: delay RootView require"),(0,l.kt)("li",{parentName:"ul"},"ListBox: rendering fixes"),(0,l.kt)("li",{parentName:"ul"},"Skip ctrl+wheel by default, better tooltip remove"),(0,l.kt)("li",{parentName:"ul"},"Fix floating ListBox rows offset"),(0,l.kt)("li",{parentName:"ul"},"ListBox: horizontal scroll support"),(0,l.kt)("li",{parentName:"ul"},"SelectBox: hide list when clicking outside"),(0,l.kt)("li",{parentName:"ul"},"Better handle ctrl modkey state"),(0,l.kt)("li",{parentName:"ul"},"Make widgets inherit name from parent (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/pragtical/widget/pull/2"},"#2"),")"),(0,l.kt)("li",{parentName:"ul"},"Give selectbox container same name as the selectbox (",(0,l.kt)("a",{parentName:"li",href:"https://github.com/pragtical/widget/pull/1"},"#1"),")")),(0,l.kt)("h3",{id:"lite-xl-inherited-changes"},"Lite XL Inherited Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Normalize strokes in fixed order (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1572"},"#1572"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"fix(core): defer core:open-log until everything is loaded (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1585"},"#1585"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fix scrollbar misinterpreting percent (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1587"},"#1587"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fix returned percent when clicking the Scrollbar track (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/e07ea0fe11b6dc02a9ed1edd4d2333db0846340a"},"e07ea0fe"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Adds super as a modkey. (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1590"},"#1590"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Add NaN guard to View:update_scrollbar (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/aa0d6f6c71d4f02bbdbc09ef7f5984f50a21c87c"},"aa0d6f6c"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed C++14 digit separators (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1593"},"#1593"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fix Scrollbar.{expanded,contracted}_size documentation (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/70245ba0862761237e6aabbc7f7a1f259402a4ee"},"70245ba0"),")"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/compare/v3.1.1...v3.1.2"},"https://github.com/pragtical/pragtical/compare/v3.1.1...v3.1.2")))}u.isMDXComponent=!0}}]);