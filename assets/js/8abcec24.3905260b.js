"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5777],{9394:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var i=t(5893),o=t(1151);const a={sidebar_position:2,description:"A list of frequently-asked questions."},s="FAQ",r={id:"about/faq",title:"FAQ",description:"A list of frequently-asked questions.",source:"@site/docs/about/faq.md",sourceDirName:"about",slug:"/about/faq",permalink:"/docs/about/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/docs/about/faq.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"A list of frequently-asked questions."},sidebar:"tutorialSidebar",previous:{title:"Contributors",permalink:"/docs/about/contributors"}},l={},d=[{value:"Can I get smart autocompletion (intellisense/LSP)?",id:"can-i-get-smart-autocompletion-intellisenselsp",level:4},{value:"Where is the integrated terminal?",id:"where-is-the-integrated-terminal",level:4},{value:"Tabs and indent size?",id:"tabs-and-indent-size",level:4},{value:"How to enable line wrapping?",id:"how-to-enable-line-wrapping",level:4},{value:"How to bind commands to keys?",id:"how-to-bind-commands-to-keys",level:4},{value:"How to unbind commands for certain keys?",id:"how-to-unbind-commands-for-certain-keys",level:4},{value:"How to get commands for those keybinds?",id:"how-to-get-commands-for-those-keybinds",level:4},{value:"What version of Lua does Pragtical use?",id:"what-version-of-lua-does-pragtical-use",level:4},{value:"Vim mode?",id:"vim-mode",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h4:"h4",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"faq",children:"FAQ"}),"\n",(0,i.jsx)(n.h4,{id:"can-i-get-smart-autocompletion-intellisenselsp",children:"Can I get smart autocompletion (intellisense/LSP)?"}),"\n",(0,i.jsxs)(n.p,{children:["Check out the ",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/lsp",children:"lsp"})," plugin."]}),"\n",(0,i.jsx)(n.h4,{id:"where-is-the-integrated-terminal",children:"Where is the integrated terminal?"}),"\n",(0,i.jsxs)(n.p,{children:["Work is being done on the ",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/terminal",children:"terminal"})," plugin which is the most feature complete\nterminal plugin at the moment. You can install it directly from within\nthe plugin manager of the editor."]}),"\n",(0,i.jsx)(n.h4,{id:"tabs-and-indent-size",children:"Tabs and indent size?"}),"\n",(0,i.jsx)(n.p,{children:"In your user config (the cog icon in the file tree):"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'config.tab_type = "soft" -- soft for spaces, hard for real tabs (\\t)\nconfig.indent_size = 4   -- 4 spaces\n'})}),"\n",(0,i.jsx)(n.h4,{id:"how-to-enable-line-wrapping",children:"How to enable line wrapping?"}),"\n",(0,i.jsxs)(n.p,{children:["You can enable line wrapping by pressing F10, alternatively hard wrapping is\nsupported via ",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/plugins/blob/master/plugins/autowrap.lua?raw=1",children:"autowrap"})," plugin."]}),"\n",(0,i.jsx)(n.h4,{id:"how-to-bind-commands-to-keys",children:"How to bind commands to keys?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local keymap = require "core.keymap"\nkeymap.add { ["ctrl+escape"] = "core:quit" }\n'})}),"\n",(0,i.jsx)(n.h4,{id:"how-to-unbind-commands-for-certain-keys",children:"How to unbind commands for certain keys?"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'-- the second parameter lets you override commands for certain keys\n-- in this case it maps it to nothing\nkeymap.add({ ["ctrl+escape"] = {} }, true)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"how-to-get-commands-for-those-keybinds",children:"How to get commands for those keybinds?"}),"\n",(0,i.jsx)(n.p,{children:"You can search for commands in the command palette."}),"\n",(0,i.jsx)(n.p,{children:"For each command, replace the spaces on the right side with dashes."}),"\n",(0,i.jsxs)(n.p,{children:["For example: ",(0,i.jsx)(n.code,{children:"Core: Find Command"})," \u2192 ",(0,i.jsx)(n.code,{children:"core:find-command"})]}),"\n",(0,i.jsx)(n.h4,{id:"what-version-of-lua-does-pragtical-use",children:"What version of Lua does Pragtical use?"}),"\n",(0,i.jsx)(n.p,{children:"LuaJIT using compat-5.3 for compatbility on the C api and user space\nup to Lua 5.3 with the exception of missing bit operators. The editor\nshould also compile with latest versions of Lua 5.4"}),"\n",(0,i.jsx)(n.h4,{id:"vim-mode",children:"Vim mode?"}),"\n",(0,i.jsxs)(n.p,{children:["You need the ",(0,i.jsx)(n.a,{href:"https://github.com/pragtical/vibe",children:"vibe"})," plugin."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var i=t(7294);const o={},a=i.createContext(o);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);