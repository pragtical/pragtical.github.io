"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5777],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1447:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905));const r={sidebar_position:2,description:"A list of frequently-asked questions."},i="FAQ",s={unversionedId:"about/faq",id:"about/faq",title:"FAQ",description:"A list of frequently-asked questions.",source:"@site/docs/about/faq.md",sourceDirName:"about",slug:"/about/faq",permalink:"/docs/about/faq",draft:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/about/faq.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"A list of frequently-asked questions."},sidebar:"tutorialSidebar",previous:{title:"Contributors",permalink:"/docs/about/contributors"}},l={},p=[{value:"Can I get smart autocompletion (intellisense/LSP)?",id:"can-i-get-smart-autocompletion-intellisenselsp",level:4},{value:"Where is the integrated terminal?",id:"where-is-the-integrated-terminal",level:4},{value:"Tabs and indent size?",id:"tabs-and-indent-size",level:4},{value:"How to enable line wrapping?",id:"how-to-enable-line-wrapping",level:4},{value:"How to bind commands to keys?",id:"how-to-bind-commands-to-keys",level:4},{value:"How to unbind commands for certain keys?",id:"how-to-unbind-commands-for-certain-keys",level:4},{value:"How to get commands for those keybinds?",id:"how-to-get-commands-for-those-keybinds",level:4},{value:"What version of Lua does Pragtical use?",id:"what-version-of-lua-does-pragtical-use",level:4},{value:"Vim mode?",id:"vim-mode",level:4},{value:"Where&#39;s feature X? How about Y?",id:"wheres-feature-x-how-about-y",level:4}],u={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h4",{id:"can-i-get-smart-autocompletion-intellisenselsp"},"Can I get smart autocompletion (intellisense/LSP)?"),(0,o.kt)("p",null,"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pragtical/lsp"},"lsp")," plugin."),(0,o.kt)("h4",{id:"where-is-the-integrated-terminal"},"Where is the integrated terminal?"),(0,o.kt)("p",null,"Work is being done on ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/benjcollins/lite-xl-terminal"},"pragtical-terminal")," and ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ColonelPhantom/lite-xl-tmt"},"pragtical-tmt"),".\nBoth plugins have their own supported features and bugs,\nso you should try both out and see which one works for you."),(0,o.kt)("h4",{id:"tabs-and-indent-size"},"Tabs and indent size?"),(0,o.kt)("p",null,"In your user config (the cog icon in the file tree):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'config.tab_type = "soft" -- soft for spaces, hard for real tabs (\\t)\nconfig.indent_size = 4   -- 4 spaces\n')),(0,o.kt)("h4",{id:"how-to-enable-line-wrapping"},"How to enable line wrapping?"),(0,o.kt)("p",null,"Since ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/releases/tag/v2.1.0"},"v2.1.0"),", you can enable line wrapping by pressing F10.\nBefore v2.1.0, only hard wrapping is supported via ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pragtical/plugins/blob/master/plugins/autowrap.lua?raw=1"},"autowrap"),"."),(0,o.kt)("h4",{id:"how-to-bind-commands-to-keys"},"How to bind commands to keys?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local keymap = require "core.keymap"\nkeymap.add { ["ctrl+escape"] = "core:quit" }\n')),(0,o.kt)("h4",{id:"how-to-unbind-commands-for-certain-keys"},"How to unbind commands for certain keys?"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'-- the second parameter lets you override commands for certain keys\n-- in this case it maps it to nothing\nkeymap.add({ ["ctrl+escape"] = {} }, true)\n')),(0,o.kt)("h4",{id:"how-to-get-commands-for-those-keybinds"},"How to get commands for those keybinds?"),(0,o.kt)("p",null,"You can search for commands in the command palette."),(0,o.kt)("p",null,"For each command, replace the spaces on the right side with dashes."),(0,o.kt)("p",null,"For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"Core: Find Command")," \u2192 ",(0,o.kt)("inlineCode",{parentName:"p"},"core:find-command")),(0,o.kt)("h4",{id:"what-version-of-lua-does-pragtical-use"},"What version of Lua does Pragtical use?"),(0,o.kt)("p",null,"LuaJIT using compat-5.3 for compatbility on the C api and user space\nup to Lua 5.3 with the exception of missing bit operators. The editor\nshould also compile with latest versions of Lua 5.4"),(0,o.kt)("h4",{id:"vim-mode"},"Vim mode?"),(0,o.kt)("p",null,"You need to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eugenpt/lite-xl-vibe"},"vibe"),"."),(0,o.kt)("h4",{id:"wheres-feature-x-how-about-y"},"Where's feature X? How about Y?"),(0,o.kt)("p",null,"You can get more info in ",(0,o.kt)("a",{parentName:"p",href:"/about/features"},"Features"),"."))}d.isMDXComponent=!0}}]);