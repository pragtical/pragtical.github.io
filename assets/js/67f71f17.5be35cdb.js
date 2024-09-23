"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7293],{173:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>o});var l=i(5893),r=i(1151);const a={sidebar_position:45},s="plugins.linewrapping",t={id:"api/plugins.linewrapping",title:"plugins.linewrapping",description:"config.plugins.linewrapping",source:"@site/docs/api/plugins.linewrapping.md",sourceDirName:"api",slug:"/api/plugins.linewrapping",permalink:"/docs/api/plugins.linewrapping",draft:!1,unlisted:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/docs/api/plugins.linewrapping.md",tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45},sidebar:"tutorialSidebar",previous:{title:"plugins.lineguide",permalink:"/docs/api/plugins.lineguide"},next:{title:"plugins.projectsearch",permalink:"/docs/api/plugins.projectsearch"}},d={},o=[{value:"config.plugins.linewrapping",id:"configpluginslinewrapping",level:2},{value:"enable_by_default",id:"enable_by_default",level:3},{value:"guide",id:"guide",level:3},{value:"indent",id:"indent",level:3},{value:"mode",id:"mode",level:3},{value:"require_tokenization",id:"require_tokenization",level:3},{value:"width_override",id:"width_override",level:3},{value:"compute_line_breaks",id:"compute_line_breaks",level:2},{value:"draw_guide",id:"draw_guide",level:2},{value:"reconstruct_breaks",id:"reconstruct_breaks",level:2},{value:"update_breaks",id:"update_breaks",level:2},{value:"update_docview_breaks",id:"update_docview_breaks",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"pluginslinewrapping",children:"plugins.linewrapping"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'local linewrapping = require "plugins.linewrapping"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"configpluginslinewrapping",children:"config.plugins.linewrapping"}),"\n",(0,l.jsxs)(n.p,{children:["Configuration options for ",(0,l.jsx)(n.code,{children:"linewrapping"})," plugin."]}),"\n",(0,l.jsx)(n.h3,{id:"enable_by_default",children:"enable_by_default"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) enable_by_default: boolean\n"})}),"\n",(0,l.jsx)(n.p,{children:"Whether or not to enable wrapping by default when opening files."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"guide",children:"guide"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) guide: boolean\n"})}),"\n",(0,l.jsx)(n.p,{children:"Whether or not to draw a guide"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"indent",children:"indent"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) indent: boolean\n"})}),"\n",(0,l.jsx)(n.p,{children:"Whether or not we should indent ourselves like the first line of a wrapped block."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"mode",children:"mode"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'(field) mode: "letter"|"word"\n'})}),"\n",(0,l.jsx)(n.p,{children:'The type of wrapping to perform. Can be "letter" or "word".'}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"require_tokenization",children:"require_tokenization"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) require_tokenization: boolean\n"})}),"\n",(0,l.jsx)(n.p,{children:"Requires tokenization"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"width_override",children:"width_override"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) width_override: (number|function)?\n"})}),"\n",(0,l.jsxs)(n.p,{children:[")",":number"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"compute_line_breaks",children:"compute_line_breaks"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"function plugins.linewrapping.compute_line_breaks(doc: any, default_font: any, line: any, width: any, mode: any)\n  -> table\n  2. integer\n"})}),"\n",(0,l.jsx)(n.p,{children:"Computes the breaks for a given line, width and mode. Returns a list of columns\nat which the line should be broken."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"draw_guide",children:"draw_guide"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"function plugins.linewrapping.draw_guide(docview: any)\n"})}),"\n",(0,l.jsx)(n.p,{children:"Draws a guide if applicable to show where wrapping is occurring."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"reconstruct_breaks",children:"reconstruct_breaks"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"function plugins.linewrapping.reconstruct_breaks(docview: any, default_font: any, width: any, line_offset: any)\n"})}),"\n",(0,l.jsx)(n.p,{children:"breaks are held in a single table that contains n*2 elements, where n is the amount of line breaks.\neach element represents line and column of the break. line_offset will check from the specified line\nif the first line has not changed breaks, it will stop there."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"update_breaks",children:"update_breaks"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"function plugins.linewrapping.update_breaks(docview: any, old_line1: any, old_line2: any, net_lines: any)\n"})}),"\n",(0,l.jsx)(n.p,{children:"When we have an insertion or deletion, we have four sections of text."}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"The unaffected section, located prior to the cursor. This is completely ignored."}),"\n",(0,l.jsx)(n.li,{children:"The beginning of the affected line prior to the insertion or deletion. Begins on column 1 of the selection."}),"\n",(0,l.jsx)(n.li,{children:"The removed/pasted lines."}),"\n",(0,l.jsx)(n.li,{children:"Every line after the modification, begins one line after the selection in the initial document."}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"update_docview_breaks",children:"update_docview_breaks"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"function plugins.linewrapping.update_docview_breaks(docview: any)\n"})}),"\n",(0,l.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>t,a:()=>s});var l=i(7294);const r={},a=l.createContext(r);function s(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);