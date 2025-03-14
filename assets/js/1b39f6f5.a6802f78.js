"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3349],{93482:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>h});var l=i(85893),s=i(11151);const t={slug:"pragtical-v352-release",title:"Pragtical v3.5.2 Release",authors:"jgmdev"},r=void 0,a={permalink:"/blog/pragtical-v352-release",editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/blog/2025-03-14-v352-release.md",source:"@site/blog/2025-03-14-v352-release.md",title:"Pragtical v3.5.2 Release",description:"Some fixes, build system corrections, and some new features!",date:"2025-03-14T00:00:00.000Z",formattedDate:"March 14, 2025",tags:[],readingTime:2.185,hasTruncateMarker:!1,authors:[{name:"Jefferson Gonzalez",title:"Contributor of Pragtical",url:"https://github.com/jgmdev",imageURL:"https://github.com/jgmdev.png",key:"jgmdev"}],frontMatter:{slug:"pragtical-v352-release",title:"Pragtical v3.5.2 Release",authors:"jgmdev"},unlisted:!1,nextItem:{title:"Pragtical v3.5.1 Release",permalink:"/blog/pragtical-v351-release"}},c={authorsImageUrls:[void 0]},h=[{value:"Changes Log",id:"changes-log",level:2},{value:"Fixes",id:"fixes",level:3},{value:"Build System",id:"build-system",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Performance",id:"performance",level:3},{value:"Lite XL Inherited Changes",id:"lite-xl-inherited-changes",level:3}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"Some fixes, build system corrections, and some new features!"}),"\n",(0,l.jsx)(n.p,{children:"This release consists mostly of fixes with some minor new additions. One\nof the relevant changes is proper handling of BOM on opened documents with\na new status bar indicator, which lets you know if the current document has a\nBOM as shown on the screenshot:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://github.com/user-attachments/assets/93226cf1-dd91-4019-bf9a-8acd010b2ef7",alt:"bom-statusbar"})}),"\n",(0,l.jsxs)(n.p,{children:["Another notable change is the addition of an ",(0,l.jsx)(n.code,{children:"Advanced"})," settings pane that lets\nyou modify the garbage collector behaviour. Modifying these values lets you\nchoose between a more responsive text editor or a more memory efficient one:"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:"https://github.com/user-attachments/assets/9de6ea72-6678-4260-b172-67883f47e235",alt:"gc-settings"})}),"\n",(0,l.jsxs)(n.p,{children:["Also, more syntax annotation types where added in order to offer more\nflexibility when providing doc comments highlighting support on language files.\nThis is the case of ",(0,l.jsx)(n.code,{children:"language_php"})," which is now making use of them:"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"language-php-annotations",src:i(51859).Z+"",width:"1082",height:"497"})}),"\n",(0,l.jsx)(n.p,{children:"Finally, this release incorporates various upstream changes, the most notable\nof them being tab stops support!"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"tab-stops",src:i(75032).Z+"",width:"773",height:"146"})}),"\n",(0,l.jsxs)(n.p,{children:["Downloads on ",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/releases/tag/v3.5.2",children:"GitHub"}),"."]}),"\n",(0,l.jsx)(n.h2,{id:"changes-log",children:"Changes Log"}),"\n",(0,l.jsx)(n.h3,{id:"fixes",children:"Fixes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Respect multi-byte sequences on SHIFT_JIS \xa5 handling\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/202",children:"#202"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Explicitly include limits.h on utf8 lib\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/207",children:"#207"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Fix treeview new dir/folder path suggestions\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/208",children:"#208"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Explicitly added missing headers\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/209",children:"#209"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Also redirect stdin to console on windows\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/206",children:"#206"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Fix handling of documents Bytes Order Mark (BOM)\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/218",children:"#218"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Silence shmem API compiler warnings\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/223",children:"#223"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Fix invalid size given to _wgetcwd\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/227",children:"#227"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Disable a compatibility io overwrite on LuaJIT\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/229",children:"#229"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"build-system",children:"Build System"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Bump minimum required meson version\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/217",children:"#217"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Disabled addition of open_ext plugin on CI\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/219",children:"#219"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Fix msys CI build\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/221",children:"#221"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Perform Lua unicode patching directly on Meson\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/225",children:"#225"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Added more annotation subtypes\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/220",children:"#220"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Sync lua-compat-5.3 with upstream\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/224",children:"#224"}),")"]}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"performance",children:"Performance"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["Perform collectgarbage step instead of collect\n(",(0,l.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/226",children:"#226"}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"lite-xl-inherited-changes",children:"Lite XL Inherited Changes"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Implement logic for tracking target window\n(",(0,l.jsx)(n.a,{href:"https://github.com/lite-xl/lite-xl/pull/1891",children:"#1891"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"allocator: add arena_allocator"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"utfconv: add functions that use arena_allocator"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"process: migrate arg validation and checking to Lua"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Additional small fixes for windows as part of the process API move to lua."}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add support for relative requires\n(",(0,l.jsx)(n.a,{href:"https://github.com/lite-xl/lite-xl/pull/1634",children:"#1634"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Fix multi-type usage in delimited patterns\n(",(0,l.jsx)(n.a,{href:"https://github.com/lite-xl/lite-xl/pull/1740",children:"#1740"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add inclusive parameter to Doc",":get_text","\n(",(0,l.jsx)(n.a,{href:"https://github.com/lite-xl/lite-xl/pull/1586",children:"#1586"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Add minimum_thumb_size and {contracted,expanded}_scrollbar_margin to ",(0,l.jsx)(n.code,{children:"Scrollbar"}),"\n(",(0,l.jsx)(n.a,{href:"https://github.com/lite-xl/lite-xl/pull/1589",children:"#1589"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"Format renderer font scale code to be actually readable"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["check item type before creating input text\n(",(0,l.jsx)(n.a,{href:"https://github.com/lite-xl/lite-xl/pull/1904",children:"#1904"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["docview: prevent overscroll when DocView size is less than lh * 2\n(",(0,l.jsx)(n.a,{href:"https://github.com/lite-xl/lite-xl/pull/1971",children:"#1971"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["process: do not return nil until process exited\n(",(0,l.jsx)(n.a,{href:"https://github.com/lite-xl/lite-xl/pull/1973",children:"#1973"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsx)(n.p,{children:"process: call poll_process when getting returncode"}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["feat: add support for tab stops\n(",(0,l.jsx)(n.a,{href:"https://github.com/lite-xl/lite-xl/pull/1945",children:"#1945"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Update CSS plugin to support more units\n(",(0,l.jsx)(n.a,{href:"https://github.com/lite-xl/lite-xl/pull/2010",children:"#2010"}),")"]}),"\n"]}),"\n",(0,l.jsxs)(n.li,{children:["\n",(0,l.jsxs)(n.p,{children:["Added in stdlib\n(",(0,l.jsx)(n.a,{href:"https://github.com/lite-xl/lite-xl/pull/2017",children:"#2017"}),")"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},51859:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/language-php-annotations-9f291537bc9cf80e845ffcae36617dc8.png"},75032:(e,n,i)=>{i.d(n,{Z:()=>l});const l=i.p+"assets/images/tab-stops-c3afdfca37a619555e4a9a8c233bdec6.png"},11151:(e,n,i)=>{i.d(n,{Z:()=>a,a:()=>r});var l=i(67294);const s={},t=l.createContext(s);function r(e){const n=l.useContext(t);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),l.createElement(t.Provider,{value:n},e.children)}}}]);