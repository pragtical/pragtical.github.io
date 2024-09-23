"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9506],{2267:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var t=n(5893),s=n(1151);const r={sidebar_position:52},l="plugins.trimwhitespace",a={id:"api/plugins.trimwhitespace",title:"plugins.trimwhitespace",description:"config.plugins.trimwhitespace",source:"@site/docs/api/plugins.trimwhitespace.md",sourceDirName:"api",slug:"/api/plugins.trimwhitespace",permalink:"/docs/api/plugins.trimwhitespace",draft:!1,unlisted:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/docs/api/plugins.trimwhitespace.md",tags:[],version:"current",sidebarPosition:52,frontMatter:{sidebar_position:52},sidebar:"tutorialSidebar",previous:{title:"plugins.treeview",permalink:"/docs/api/plugins.treeview"},next:{title:"Contributors",permalink:"/docs/contributors"}},c={},d=[{value:"config.plugins.trimwhitespace",id:"configpluginstrimwhitespace",level:2},{value:"enabled",id:"enabled",level:3},{value:"trim_empty_end_lines",id:"trim_empty_end_lines",level:3},{value:"disable",id:"disable",level:2},{value:"enable",id:"enable",level:2},{value:"trim",id:"trim",level:2},{value:"trim_empty_end_lines",id:"trim_empty_end_lines-1",level:2}];function o(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"pluginstrimwhitespace",children:"plugins.trimwhitespace"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:'local trimwhitespace = require "plugins.trimwhitespace"\n'})}),"\n",(0,t.jsx)(i.h2,{id:"configpluginstrimwhitespace",children:"config.plugins.trimwhitespace"}),"\n",(0,t.jsxs)(i.p,{children:["Configuration options for ",(0,t.jsx)(i.code,{children:"trimwhitespace"})," plugin."]}),"\n",(0,t.jsx)(i.h3,{id:"enabled",children:"enabled"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:"(field) enabled: boolean\n"})}),"\n",(0,t.jsx)(i.p,{children:"Disable or enable the trimming of white spaces by default."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h3,{id:"trim_empty_end_lines",children:"trim_empty_end_lines"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:"(field) trim_empty_end_lines: boolean\n"})}),"\n",(0,t.jsx)(i.p,{children:"Remove any empty new lines at the end of documents."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"disable",children:"disable"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:"function plugins.trimwhitespace.disable(doc: core.doc)\n"})}),"\n",(0,t.jsx)(i.p,{children:"Disable whitespace trimming for a specific document."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"enable",children:"enable"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:"function plugins.trimwhitespace.enable(doc: core.doc)\n"})}),"\n",(0,t.jsx)(i.p,{children:"Re-enable whitespace trimming if previously disabled."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"trim",children:"trim"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:"function plugins.trimwhitespace.trim(doc: core.doc)\n"})}),"\n",(0,t.jsx)(i.p,{children:"Perform whitespace trimming in all lines of a document except the\nline where the caret is currently positioned."}),"\n",(0,t.jsx)(i.hr,{}),"\n",(0,t.jsx)(i.h2,{id:"trim_empty_end_lines-1",children:"trim_empty_end_lines"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-lua",children:"function plugins.trimwhitespace.trim_empty_end_lines(doc: core.doc, raw_remove?: boolean)\n"})}),"\n",(0,t.jsx)(i.p,{children:"Removes all empty new lines at the end of the document."}),"\n",(0,t.jsxs)(i.p,{children:["@",(0,t.jsx)(i.em,{children:"param"})," ",(0,t.jsx)(i.code,{children:"raw_remove"})," \u2014 Perform the removal not registering to undo stack"]}),"\n",(0,t.jsx)(i.hr,{})]})}function p(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>l});var t=n(7294);const s={},r=t.createContext(s);function l(e){const i=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:i},e.children)}}}]);