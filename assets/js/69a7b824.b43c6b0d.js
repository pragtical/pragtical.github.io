"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7077],{6079:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var s=i(5893),l=i(1151);const a={sidebar_position:48},r="plugins.search_ui",c={id:"api/plugins.search_ui",title:"plugins.search_ui",description:"config.plugins.search_ui",source:"@site/docs/api/plugins.search_ui.md",sourceDirName:"api",slug:"/api/plugins.search_ui",permalink:"/docs/api/plugins.search_ui",draft:!1,unlisted:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/docs/api/plugins.search_ui.md",tags:[],version:"current",sidebarPosition:48,frontMatter:{sidebar_position:48},sidebar:"tutorialSidebar",previous:{title:"plugins.scale",permalink:"/docs/api/plugins.scale"},next:{title:"plugins.settings",permalink:"/docs/api/plugins.settings"}},d={},u=[{value:"config.plugins.search_ui",id:"configpluginssearch_ui",level:2},{value:"position",id:"position",level:3},{value:"replace_core_find",id:"replace_core_find",level:3},{value:"plugins.search_ui.result",id:"pluginssearch_uiresult",level:2},{value:"Helper class to keep track on amount of matches and display on status label",id:"helper-class-to-keep-track-on-amount-of-matches-and-display-on-status-label",level:2},{value:"col",id:"col",level:3},{value:"line",id:"line",level:3},{value:"plugins.search_ui.results",id:"pluginssearch_uiresults",level:2},{value:"doc",id:"doc",level:3},{value:"matches",id:"matches",level:3},{value:"prev_search_id",id:"prev_search_id",level:3},{value:"text",id:"text",level:3},{value:"clear",id:"clear",level:3},{value:"current",id:"current",level:3},{value:"find",id:"find",level:3},{value:"set_status",id:"set_status",level:3},{value:"update",id:"update",level:3},{value:"plugins.search_ui.ui",id:"pluginssearch_uiui",level:2},{value:"init_size",id:"init_size",level:3},{value:"name",id:"name",level:3},{value:"prev_view",id:"prev_view",level:3},{value:"scrollable",id:"scrollable",level:3},{value:"on_scale_change",id:"on_scale_change",level:3},{value:"update",id:"update-1",level:3},{value:"update_bottom_positioning",id:"update_bottom_positioning",level:3},{value:"update_right_positioning",id:"update_right_positioning",level:3},{value:"update_size",id:"update_size",level:3}];function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"pluginssearch_ui",children:"plugins.search_ui"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local search_ui = require "plugins.search_ui"\n'})}),"\n",(0,s.jsx)(n.h2,{id:"configpluginssearch_ui",children:"config.plugins.search_ui"}),"\n",(0,s.jsxs)(n.p,{children:["Configuration options for ",(0,s.jsx)(n.code,{children:"search_ui"})," plugin."]}),"\n",(0,s.jsx)(n.h3,{id:"position",children:"position"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'(field) position: "bottom"|"right"|"top"\n'})}),"\n",(0,s.jsx)(n.p,{children:"Location of search interface."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"replace_core_find",children:"replace_core_find"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(field) replace_core_find: boolean\n"})}),"\n",(0,s.jsx)(n.p,{children:"Replaces the core find view when using the find shortcut."}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"pluginssearch_uiresult",children:"plugins.search_ui.result"}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"helper-class-to-keep-track-on-amount-of-matches-and-display-on-status-label",children:"Helper class to keep track on amount of matches and display on status label"}),"\n",(0,s.jsx)(n.h3,{id:"col",children:"col"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(field) col: integer\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"line",children:"line"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(field) line: integer\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"pluginssearch_uiresults",children:"plugins.search_ui.results"}),"\n",(0,s.jsx)(n.h3,{id:"doc",children:"doc"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(field) doc: (core.doc)?\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"matches",children:"matches"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(field) matches: plugins.search_ui.result[]\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"prev_search_id",children:"prev_search_id"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(field) prev_search_id: integer\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"text",children:"text"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(field) text: string\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"clear",children:"clear"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(method) plugins.search_ui.results:clear()\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"current",children:"current"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(method) plugins.search_ui.results:current()\n  -> integer\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"find",children:"find"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(method) plugins.search_ui.results:find(text: string, doc: core.doc, force: any)\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"set_status",children:"set_status"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(method) plugins.search_ui.results:set_status()\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"update",children:"update"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(method) plugins.search_ui.results:update()\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"pluginssearch_uiui",children:"plugins.search_ui.ui"}),"\n",(0,s.jsx)(n.p,{children:"The main user interface container."}),"\n",(0,s.jsx)(n.h3,{id:"init_size",children:"init_size"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(field) init_size: boolean\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(field) name: string\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"prev_view",children:"prev_view"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(field) prev_view: (core.docview)?\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"scrollable",children:"scrollable"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(field) scrollable: boolean\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"on_scale_change",children:"on_scale_change"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(method) plugins.search_ui.ui:on_scale_change(...any)\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"update-1",children:"update"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(method) plugins.search_ui.ui:update()\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"update_bottom_positioning",children:"update_bottom_positioning"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(method) plugins.search_ui.ui:update_bottom_positioning()\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"update_right_positioning",children:"update_right_positioning"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(method) plugins.search_ui.ui:update_right_positioning()\n"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h3,{id:"update_size",children:"update_size"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"(method) plugins.search_ui.ui:update_size()\n"})}),"\n",(0,s.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(t,{...e})}):t(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>r});var s=i(7294);const l={},a=s.createContext(l);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);