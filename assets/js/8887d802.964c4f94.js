"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[764],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>m});var r=o(7294);function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,c=function(e,t){if(null==e)return{};var o,r,c={},l=Object.keys(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||(c[o]=e[o]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)o=l[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(c[o]=e[o])}return c}var a=r.createContext({}),i=function(e){var t=r.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},d=function(e){var t=i(e.components);return r.createElement(a.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var o=e.components,c=e.mdxType,l=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(o),f=c,m=p["".concat(a,".").concat(f)]||p[f]||u[f]||l;return o?r.createElement(m,n(n({ref:t},d),{},{components:o})):r.createElement(m,n({ref:t},d))}));function m(e,t){var o=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=o.length,n=new Array(l);n[0]=f;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[p]="string"==typeof e?e:c,n[1]=s;for(var i=2;i<l;i++)n[i]=o[i];return r.createElement.apply(null,n)}return r.createElement.apply(null,o)}f.displayName="MDXCreateElement"},1173:(e,t,o)=>{o.d(t,{Z:()=>c});var r=o(7294);function c(e){let{jsonData:t}=e;return r.createElement("table",{style:{width:"100%"}},r.createElement("thead",null,r.createElement("tr",null,r.createElement("th",null,"Command"),r.createElement("th",null,"Keys"))),r.createElement("tbody",null,t.map(((e,t)=>r.createElement("tr",{key:t},r.createElement("td",null,e[0]),r.createElement("td",null,e[1].map(((e,t)=>0==t?r.createElement("kbd",null,e):r.createElement("span",null," , ",r.createElement("kbd",null,e))))))))))}},7361:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=o(7462),c=(o(7294),o(3905));const l=JSON.parse('[["autocomplete:cancel",["escape"]],["autocomplete:complete",["tab"]],["autocomplete:next",["down"]],["autocomplete:previous",["up"]],["command:complete",["tab"]],["command:escape",["escape"]],["command:select-next",["down"]],["command:select-previous",["up"]],["command:submit",["keypad enter","return"]],["context:focus-next",["down"]],["context:focus-previous",["up"]],["context:hide",["escape"]],["context:on-selected",["return"]],["context:show",["menu"]],["core:change-project-folder",["ctrl+shift+c"]],["core:find-command",["ctrl+shift+p"]],["core:find-file",["ctrl+p"]],["core:new-doc",["ctrl+n"]],["core:open-file",["ctrl+o"]],["core:open-project-folder",["ctrl+shift+o"]],["core:restart",["ctrl+alt+r"]],["core:toggle-fullscreen",["f11","alt+return"]],["dialog:next-entry",["right"]],["dialog:previous-entry",["left"]],["dialog:select",["keypad enter","return"]],["dialog:select-no",["escape"]],["doc:backspace",["backspace","shift+backspace"]],["doc:copy",["ctrl+insert","ctrl+c"]],["doc:create-cursor-next-line",["ctrl+shift+down"]],["doc:create-cursor-previous-line",["ctrl+shift+up"]],["doc:cut",["ctrl+x"]],["doc:delete",["shift+delete","delete"]],["doc:delete-lines",["ctrl+shift+k"]],["doc:delete-to-next-word-end",["ctrl+delete","ctrl+shift+delete"]],["doc:delete-to-previous-word-start",["ctrl+shift+backspace","ctrl+backspace"]],["doc:duplicate-lines",["ctrl+shift+d"]],["doc:go-to-line",["ctrl+g"]],["doc:indent",["tab"]],["doc:join-lines",["ctrl+j"]],["doc:move-lines-down",["ctrl+down"]],["doc:move-lines-up",["ctrl+up"]],["doc:move-to-end-of-doc",["ctrl+end"]],["doc:move-to-end-of-line",["end"]],["doc:move-to-next-block-end",["ctrl+]"]],["doc:move-to-next-char",["right"]],["doc:move-to-next-line",["down"]],["doc:move-to-next-page",["pagedown"]],["doc:move-to-next-word-end",["ctrl+right"]],["doc:move-to-previous-block-start",["ctrl+["]],["doc:move-to-previous-char",["left"]],["doc:move-to-previous-line",["up"]],["doc:move-to-previous-page",["pageup"]],["doc:move-to-previous-word-start",["ctrl+left"]],["doc:move-to-start-of-doc",["ctrl+home"]],["doc:move-to-start-of-indentation",["home"]],["doc:newline",["keypad enter","return"]],["doc:newline-above",["ctrl+shift+return"]],["doc:newline-below",["ctrl+return"]],["doc:paste",["ctrl+v","shift+insert"]],["doc:redo",["ctrl+y"]],["doc:save",["ctrl+s"]],["doc:save-as",["ctrl+shift+s"]],["doc:select-all",["ctrl+a"]],["doc:select-lines",["ctrl+l"]],["doc:select-none",["escape"]],["doc:select-to-cursor",["shift+1lclick"]],["doc:select-to-end-of-doc",["ctrl+shift+end"]],["doc:select-to-end-of-line",["shift+end"]],["doc:select-to-next-block-end",["ctrl+shift+]"]],["doc:select-to-next-char",["shift+right"]],["doc:select-to-next-line",["shift+down"]],["doc:select-to-next-page",["shift+pagedown"]],["doc:select-to-next-word-end",["ctrl+shift+right"]],["doc:select-to-previous-block-start",["ctrl+shift+["]],["doc:select-to-previous-char",["shift+left"]],["doc:select-to-previous-line",["shift+up"]],["doc:select-to-previous-page",["shift+pageup"]],["doc:select-to-previous-word-start",["ctrl+shift+left"]],["doc:select-to-start-of-doc",["ctrl+shift+home"]],["doc:select-to-start-of-indentation",["shift+home"]],["doc:select-word",["ctrl+d","ctrl+shift+l"]],["doc:set-cursor",["1lclick"]],["doc:set-cursor-line",["3lclick"]],["doc:set-cursor-word",["2lclick"]],["doc:split-cursor",["ctrl+1lclick"]],["doc:toggle-block-comments",["ctrl+shift+/"]],["doc:toggle-line-comments",["ctrl+/"]],["doc:undo",["ctrl+z"]],["doc:unindent",["shift+tab"]],["find-replace:find",["ctrl+f"]],["find-replace:previous-find",["shift+f3"]],["find-replace:repeat-find",["f3"]],["find-replace:replace",["ctrl+r"]],["find-replace:select-add-all",["ctrl+shift+l"]],["find-replace:select-add-next",["ctrl+d"]],["find-replace:select-next",["ctrl+f3"]],["find-replace:select-previous",["ctrl+shift+f3"]],["find-replace:toggle-regex",["ctrl+shift+i"]],["find-replace:toggle-sensitivity",["ctrl+i"]],["line-wrapping:toggle",["f10"]],["macro:play",["ctrl+;"]],["macro:toggle-record",["ctrl+shift+;"]],["project-search:find",["ctrl+shift+f"]],["project-search:move-to-end-of-doc",["ctrl+end","end"]],["project-search:move-to-next-page",["pagedown"]],["project-search:move-to-previous-page",["pageup"]],["project-search:move-to-start-of-doc",["home","ctrl+home"]],["project-search:open-selected",["return"]],["project-search:refresh",["f5"]],["project-search:select-next",["down"]],["project-search:select-previous",["up"]],["quote:quote",["ctrl+\'"]],["reflow:reflow",["ctrl+shift+q"]],["root:close",["ctrl+w"]],["root:horizontal-scroll",["shift+wheel","hwheel"]],["root:move-tab-left",["ctrl+pageup"]],["root:move-tab-right",["ctrl+pagedown"]],["root:scroll",["wheel"]],["root:split-down",["alt+shift+k"]],["root:split-left",["alt+shift+j"]],["root:split-right",["alt+shift+l"]],["root:split-up",["alt+shift+i"]],["root:switch-to-down",["alt+k"]],["root:switch-to-left",["alt+j"]],["root:switch-to-next-tab",["ctrl+tab"]],["root:switch-to-previous-tab",["ctrl+shift+tab"]],["root:switch-to-right",["alt+l"]],["root:switch-to-tab-1",["alt+1"]],["root:switch-to-tab-2",["alt+2"]],["root:switch-to-tab-3",["alt+3"]],["root:switch-to-tab-4",["alt+4"]],["root:switch-to-tab-5",["alt+5"]],["root:switch-to-tab-6",["alt+6"]],["root:switch-to-tab-7",["alt+7"]],["root:switch-to-tab-8",["alt+8"]],["root:switch-to-tab-9",["alt+9"]],["root:switch-to-up",["alt+i"]],["scale:decrease",["ctrl+-","ctrl+wheeldown"]],["scale:increase",["ctrl+=","ctrl+wheelup"]],["scale:reset",["ctrl+0"]],["treeview:collapse",["left"]],["treeview:delete",["delete"]],["treeview:deselect",["escape"]],["treeview:expand",["right"]],["treeview:new-folder",["ctrl+return","ctrl+lclick"]],["treeview:next",["down"]],["treeview:open",["return"]],["treeview:previous",["up"]],["treeview:select",["mclick"]],["treeview:select-and-open",["lclick"]],["treeview:toggle",["ctrl+\\\\"]]]');var n=o(1173);const s={sidebar_position:4,description:"A list of default keyboard shortcuts on Windows, Linux and other non-macOS platforms."},a="Keymaps",i={unversionedId:"user-guide/keymap",id:"user-guide/keymap",title:"Keymaps",description:"A list of default keyboard shortcuts on Windows, Linux and other non-macOS platforms.",source:"@site/docs/user-guide/keymap.md",sourceDirName:"user-guide",slug:"/user-guide/keymap",permalink:"/docs/user-guide/keymap",draft:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/keymap.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"A list of default keyboard shortcuts on Windows, Linux and other non-macOS platforms."},sidebar:"tutorialSidebar",previous:{title:"Plugins",permalink:"/docs/user-guide/plugins"},next:{title:"macOS Keymap",permalink:"/docs/user-guide/macos-keymap"}},d={},p=[],u={toc:p},f="wrapper";function m(e){let{components:t,...o}=e;return(0,c.kt)(f,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"keymaps"},"Keymaps"),(0,c.kt)("p",null,"This is the default keyboard shortcuts on non-macOS platforms.\nYour configuration may differ as plugins can modify them."),(0,c.kt)(n.Z,{jsonData:l,mdxType:"KeymapList"}))}m.isMDXComponent=!0}}]);