"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9031],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c="mdxType",g={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),c=s(a),d=r,m=c["".concat(p,".").concat(d)]||c[d]||g[d]||i;return a?n.createElement(m,l(l({ref:e},u),{},{components:a})):n.createElement(m,l({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o[c]="string"==typeof t?t:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9972:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1,description:"Install Pragtical and configure it for your use."},l="Getting Started",o={unversionedId:"setup/getting-started",id:"setup/getting-started",title:"Getting Started",description:"Install Pragtical and configure it for your use.",source:"@site/docs/setup/getting-started.md",sourceDirName:"setup",slug:"/setup/getting-started",permalink:"/docs/setup/getting-started",draft:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/setup/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Install Pragtical and configure it for your use."},sidebar:"tutorialSidebar",previous:{title:"Set Up",permalink:"/docs/category/set-up"},next:{title:"Windows",permalink:"/docs/setup/windows"}},p={},s=[{value:"Install",id:"install",level:2},{value:"Portable application",id:"portable-application",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Further reading",id:"further-reading",level:2}],u={toc:s},c="wrapper";function g(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Setting up Pragtical is easy.\nPragtical comes in ",(0,r.kt)("inlineCode",{parentName:"p"},".zip")," or ",(0,r.kt)("inlineCode",{parentName:"p"},".tar.gz")," packages and installers\ndepending on the platform."),(0,r.kt)("h2",{id:"install"},"Install"),(0,r.kt)("p",null,"Installing Pragtical is usually as simple as downloading the package and extracting it.\nHowever, here are some platform-specific installation instructions."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/setup/windows"},"Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/setup/linux"},"Linux")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/setup/macos"},"macOS"))),(0,r.kt)("h2",{id:"portable-application"},"Portable application"),(0,r.kt)("p",null,"Pragtical stores user configuration in the OS-specific configuration directory.\nThis directory is also known as ",(0,r.kt)("inlineCode",{parentName:"p"},"USERDIR"),"."),(0,r.kt)("p",null,"These paths are checked to determine ",(0,r.kt)("inlineCode",{parentName:"p"},"USERDIR"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"<directory_to_pragtical_binary>/user")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"$PRAGTICAL_USERDIR")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"$XDG_CONFIG_HOME/pragtical")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"$HOME/.config/pragtical")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"$USERPROFILE/.config/pragtical")," on Windows")),(0,r.kt)("p",null,"In order to create a portable installation of Pragtical,\nyou can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"user")," directory where the executable resides.\nPragtical will then store configuration data in that directory."),(0,r.kt)("h2",{id:"plugins"},"Plugins"),(0,r.kt)("p",null,"Pragtical can be extended via plugins written in Lua.\nIn fact, most of Pragtical's features comes from plugins;\nthe core is kept simple and features are added via plugins\nif possible."),(0,r.kt)("p",null,"Pragtical comes with a set of plugins and users can install more on their own.\nHere are common plugins that most users install:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Plugin"),(0,r.kt)("th",{parentName:"tr",align:null},"Use case"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pragtical/plugins/blob/master/plugins/align_carets.lua?raw=1"},"align_carets")),(0,r.kt)("td",{parentName:"tr",align:null},"Align text on multiple carets and selections")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pragtical/plugins/blob/master/plugins/autoinsert.lua?raw=1"},"autoinsert")),(0,r.kt)("td",{parentName:"tr",align:null},"Automatically insert closing brackets and quotes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pragtical/plugins/blob/master/plugins/autosave.lua?raw=1"},"autosave")),(0,r.kt)("td",{parentName:"tr",align:null},"Automatically saves the file when it is modified")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pragtical/plugins/blob/master/plugins/bracketmatch.lua?raw=1"},"bracketmatch")),(0,r.kt)("td",{parentName:"tr",align:null},"Highlight matching brackets")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pragtical/plugins/blob/master/plugins/editorconfig"},"editorconfig")),(0,r.kt)("td",{parentName:"tr",align:null},"EditorConfig support for Pragtical")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pragtical/plugins/blob/master/plugins/ephemeral_tabs.lua?raw=1"},"ephemeral_tabs")),(0,r.kt)("td",{parentName:"tr",align:null},"Ephemeral tabs (previewing files without creating multiple tabs)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pragtical/plugins/blob/master/plugins/indentguide.lua?raw=1"},"indentguide")),(0,r.kt)("td",{parentName:"tr",align:null},"Indent guides")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/liquid600pgm/lintplus"},"lint+")),(0,r.kt)("td",{parentName:"tr",align:null},"Linter support")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pragtical/lsp"},"lsp")),(0,r.kt)("td",{parentName:"tr",align:null},"Language Server support for Pragtical")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pragtical/plugins/blob/master/plugins/minimap.lua?raw=1"},"minimap")),(0,r.kt)("td",{parentName:"tr",align:null},"Minimap")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pragtical/plugins/blob/master/plugins/selectionhighlight.lua?raw=1"},"selectionhighlight")),(0,r.kt)("td",{parentName:"tr",align:null},"Highlight code that matches the selection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://github.com/pragtical/scm"},"scm")),(0,r.kt)("td",{parentName:"tr",align:null},"All in one source control management")))),(0,r.kt)("h2",{id:"further-reading"},"Further reading"),(0,r.kt)("p",null,"You may be interested on these topics:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user-guide/introduction"},"Introduction")," \u2014 A introduction to various Pragtical features and concepts."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user-guide/configuration"},"Configuration")," \u2014 A guide on how to configure Pragtical."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/user-guide/plugins"},"Plugins")," \u2014 An introduction to plugin management.")),(0,r.kt)("p",null,"These are advanced topics that are useful for power users or plugin developers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer-guide/syntaxes-and-themes/creating-themes"},"Creating Themes")," \u2014 A tutorial on how to write themes for Pragtical."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer-guide/syntaxes-and-themes/creating-syntaxes"},"Creating Syntaxes")," \u2014 A guide on how to add support for new languages."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer-guide/simple-plugin"},"Simple plugin")," \u2014 A tutorial on writing a simple plugin."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer-guide/using-regular-expressions"},"Regular expressions")," \u2014 A guide on how to use regular expressions in Pragtical."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developer-guide/child-processes"},"Child processes")," \u2014 A guide on how to start and manage child processes.")))}g.isMDXComponent=!0}}]);