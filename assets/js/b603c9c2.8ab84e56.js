"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9031],{10268:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var n=t(85893),s=t(11151);const r={sidebar_position:1,description:"Install Pragtical and configure it for your use."},l="Getting Started",a={id:"setup/getting-started",title:"Getting Started",description:"Install Pragtical and configure it for your use.",source:"@site/docs/setup/getting-started.md",sourceDirName:"setup",slug:"/setup/getting-started",permalink:"/docs/setup/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/docs/setup/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Install Pragtical and configure it for your use."},sidebar:"tutorialSidebar",previous:{title:"Set Up",permalink:"/docs/category/set-up"},next:{title:"Windows",permalink:"/docs/setup/windows"}},c={},d=[{value:"Install",id:"install",level:2},{value:"Portable application",id:"portable-application",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Further reading",id:"further-reading",level:2}];function o(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"getting-started",children:"Getting Started"}),"\n",(0,n.jsxs)(i.p,{children:["Setting up Pragtical is easy.\nPragtical comes in ",(0,n.jsx)(i.code,{children:".zip"})," or ",(0,n.jsx)(i.code,{children:".tar.gz"})," packages and installers\ndepending on the platform."]}),"\n",(0,n.jsx)(i.h2,{id:"install",children:"Install"}),"\n",(0,n.jsx)(i.p,{children:"Installing Pragtical is usually as simple as downloading the package and extracting it.\nHowever, here are some platform-specific installation instructions."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/docs/setup/windows",children:"Windows"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/docs/setup/linux",children:"Linux"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"/docs/setup/macos",children:"macOS"})}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"portable-application",children:"Portable application"}),"\n",(0,n.jsxs)(i.p,{children:["Pragtical stores user configuration in the OS-specific configuration directory.\nThis directory is also known as ",(0,n.jsx)(i.code,{children:"USERDIR"}),"."]}),"\n",(0,n.jsxs)(i.p,{children:["These paths are checked to determine ",(0,n.jsx)(i.code,{children:"USERDIR"}),":"]}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"<directory_to_pragtical_binary>/user"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"$PRAGTICAL_USERDIR"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.code,{children:"$XDG_CONFIG_HOME/pragtical"})}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.code,{children:"$HOME/.config/pragtical"})," or ",(0,n.jsx)(i.code,{children:"$USERPROFILE/.config/pragtical"})," on Windows"]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["In order to create a portable installation of Pragtical,\nyou can create a ",(0,n.jsx)(i.code,{children:"user"})," directory where the executable resides.\nPragtical will then store configuration data in that directory."]}),"\n",(0,n.jsx)(i.h2,{id:"plugins",children:"Plugins"}),"\n",(0,n.jsx)(i.p,{children:"Pragtical can be extended via plugins written in Lua.\nIn fact, most of Pragtical's features comes from plugins;\nthe core is kept simple and features are added via plugins\nif possible."}),"\n",(0,n.jsx)(i.p,{children:"Pragtical comes with a set of plugins and users can install more on their own.\nHere are common plugins that most users install:"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Plugin"}),(0,n.jsx)(i.th,{children:"Use case"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"https://github.com/pragtical/plugins/blob/master/plugins/align_carets.lua?raw=1",children:"align_carets"})}),(0,n.jsx)(i.td,{children:"Align text on multiple carets and selections"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"https://github.com/pragtical/plugins/blob/master/plugins/autoinsert.lua?raw=1",children:"autoinsert"})}),(0,n.jsx)(i.td,{children:"Automatically insert closing brackets and quotes"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"https://github.com/pragtical/plugins/blob/master/plugins/autosave.lua?raw=1",children:"autosave"})}),(0,n.jsx)(i.td,{children:"Automatically saves the file when it is modified"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"https://github.com/pragtical/plugins/blob/master/plugins/bracketmatch.lua?raw=1",children:"bracketmatch"})}),(0,n.jsx)(i.td,{children:"Highlight matching brackets"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"https://github.com/pragtical/plugins/blob/master/plugins/editorconfig",children:"editorconfig"})}),(0,n.jsx)(i.td,{children:"EditorConfig support for Pragtical"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"https://github.com/pragtical/plugins/blob/master/plugins/ephemeral_tabs.lua?raw=1",children:"ephemeral_tabs"})}),(0,n.jsx)(i.td,{children:"Ephemeral tabs (previewing files without creating multiple tabs)"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"https://github.com/pragtical/plugins/blob/master/plugins/indentguide.lua?raw=1",children:"indentguide"})}),(0,n.jsx)(i.td,{children:"Indent guides"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"https://github.com/liquid600pgm/lintplus",children:"lint+"})}),(0,n.jsx)(i.td,{children:"Linter support"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"https://github.com/pragtical/lsp",children:"lsp"})}),(0,n.jsx)(i.td,{children:"Language Server support for Pragtical"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"https://github.com/pragtical/plugins/blob/master/plugins/minimap.lua?raw=1",children:"minimap"})}),(0,n.jsx)(i.td,{children:"Minimap"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"https://github.com/pragtical/plugins/blob/master/plugins/selectionhighlight.lua?raw=1",children:"selectionhighlight"})}),(0,n.jsx)(i.td,{children:"Highlight code that matches the selection"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.a,{href:"https://github.com/pragtical/scm",children:"scm"})}),(0,n.jsx)(i.td,{children:"All in one source control management"})]})]})]}),"\n",(0,n.jsx)(i.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsx)(i.p,{children:"You may be interested on these topics:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/user-guide/introduction",children:"Introduction"})," \u2014 A introduction to various Pragtical features and concepts."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/user-guide/configuration",children:"Configuration"})," \u2014 A guide on how to configure Pragtical."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/user-guide/plugins",children:"Plugins"})," \u2014 An introduction to plugin management."]}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:"These are advanced topics that are useful for power users or plugin developers:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/developer-guide/syntaxes-and-themes/creating-themes",children:"Creating Themes"})," \u2014 A tutorial on how to write themes for Pragtical."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/developer-guide/syntaxes-and-themes/creating-syntaxes",children:"Creating Syntaxes"})," \u2014 A guide on how to add support for new languages."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/developer-guide/simple-plugin",children:"Simple plugin"})," \u2014 A tutorial on writing a simple plugin."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/developer-guide/using-regular-expressions",children:"Regular expressions"})," \u2014 A guide on how to use regular expressions in Pragtical."]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"/docs/developer-guide/child-processes",children:"Child processes"})," \u2014 A guide on how to start and manage child processes."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>a,a:()=>l});var n=t(67294);const s={},r=n.createContext(s);function l(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);