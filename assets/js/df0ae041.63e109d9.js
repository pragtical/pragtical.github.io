"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4127],{8294:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>o,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var c=i(5893),t=i(1151);const a={sidebar_position:21},r="core.dirwatch",s={id:"api/core.dirwatch",title:"core.dirwatch",description:"A wrapper around dirmonitor for filesystem monitoring that automatically",source:"@site/docs/api/core.dirwatch.md",sourceDirName:"api",slug:"/api/core.dirwatch",permalink:"/docs/api/core.dirwatch",draft:!1,unlisted:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/docs/api/core.dirwatch.md",tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"tutorialSidebar",previous:{title:"core.contextmenu",permalink:"/docs/api/core.contextmenu"},next:{title:"core.doc",permalink:"/docs/api/core.doc"}},h={},d=[{value:"monitor",id:"monitor",level:2},{value:"reverse_watched",id:"reverse_watched",level:2},{value:"scanned",id:"scanned",level:2},{value:"single_watch_count",id:"single_watch_count",level:2},{value:"single_watch_top",id:"single_watch_top",level:2},{value:"watched",id:"watched",level:2},{value:"check",id:"check",level:2},{value:"new",id:"new",level:2},{value:"scan",id:"scan",level:2},{value:"unwatch",id:"unwatch",level:2},{value:"watch",id:"watch",level:2}];function l(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.h1,{id:"coredirwatch",children:"core.dirwatch"}),"\n",(0,c.jsxs)(n.p,{children:["A wrapper around ",(0,c.jsx)(n.code,{children:"dirmonitor"})," for filesystem monitoring that automatically\ntakes care of the native backend differences and provides some ease of use."]}),"\n",(0,c.jsxs)(n.p,{children:["It can be used to watch changes in files and directories.\nThe user repeatedly calls DirWatch",":check","() with a callback inside a coroutine.\nIf a file or directory had changed, the callback is called with the corresponding file."]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:'local dirwatch = require "core.dirwatch"\n'})}),"\n",(0,c.jsx)(n.h2,{id:"monitor",children:"monitor"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"(field) monitor: dirmonitor\n"})}),"\n",(0,c.jsx)(n.p,{children:"The dirmonitor instance associated with this watcher."}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"reverse_watched",children:"reverse_watched"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"(field) reverse_watched: table<number, string>\n"})}),"\n",(0,c.jsx)(n.p,{children:"Stores the paths mapped by their unique fd."}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"scanned",children:"scanned"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"(field) scanned: table<string, number>\n"})}),"\n",(0,c.jsx)(n.p,{children:"Stores the last modified time of paths."}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"single_watch_count",children:"single_watch_count"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"(field) single_watch_count: number\n"})}),"\n",(0,c.jsx)(n.p,{children:"Number of files that are being watched."}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"single_watch_top",children:"single_watch_top"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"(field) single_watch_top: string\n"})}),"\n",(0,c.jsx)(n.p,{children:"The first file that is being watched."}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"watched",children:"watched"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"(field) watched: table<string, boolean|number>\n"})}),"\n",(0,c.jsx)(n.p,{children:"Stores the paths that are being watched, and their unique fd."}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"check",children:"check"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"(method) core.dirwatch:check(change_callback: fun(path: string), scan_time?: number, wait_time?: number)\n  -> boolean\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Checks each watched paths for changes.\nThis function must be called in a coroutine, e.g. inside a thread created with ",(0,c.jsx)(n.code,{children:"core.add_thread()"}),"."]}),"\n",(0,c.jsxs)(n.p,{children:["@",(0,c.jsx)(n.em,{children:"param"})," ",(0,c.jsx)(n.code,{children:"scan_time"})," \u2014 Maximum amount of time, in seconds, before the function yields execution."]}),"\n",(0,c.jsxs)(n.p,{children:["@",(0,c.jsx)(n.em,{children:"param"})," ",(0,c.jsx)(n.code,{children:"wait_time"})," \u2014 The duration to yield execution (in seconds)."]}),"\n",(0,c.jsxs)(n.p,{children:["@",(0,c.jsx)(n.em,{children:"return"})," \u2014 If true, a path had changed."]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"new",children:"new"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"(method) core.dirwatch:new()\n"})}),"\n",(0,c.jsx)(n.p,{children:"Constructor."}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"scan",children:"scan"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"(method) core.dirwatch:scan(path: string, unwatch?: boolean)\n"})}),"\n",(0,c.jsxs)(n.p,{children:["Similar to ",(0,c.jsx)(n.code,{children:"DirWatch:watch"})," but not using the native ",(0,c.jsx)(n.code,{children:"dirmonitor"})," backends\nand instead relying on continuous file timestamps monitoring which is slower,\nshould not be used unless necessary."]}),"\n",(0,c.jsx)(n.p,{children:"Adding a directory using this function will not report child changes."}),"\n",(0,c.jsxs)(n.p,{children:["@",(0,c.jsx)(n.em,{children:"param"})," ",(0,c.jsx)(n.code,{children:"unwatch"})," \u2014 If true, remove this directory from the watch list."]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"unwatch",children:"unwatch"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"(method) core.dirwatch:unwatch(path: string)\n"})}),"\n",(0,c.jsx)(n.p,{children:"Removes a path from the watch or scan list."}),"\n",(0,c.jsxs)(n.p,{children:["@",(0,c.jsx)(n.em,{children:"param"})," ",(0,c.jsx)(n.code,{children:"path"})," \u2014 The path to remove. This should be an absolute path."]}),"\n",(0,c.jsx)(n.hr,{}),"\n",(0,c.jsx)(n.h2,{id:"watch",children:"watch"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-lua",children:"(method) core.dirwatch:watch(path: string, unwatch?: boolean)\n"})}),"\n",(0,c.jsx)(n.p,{children:"Watches a path."}),"\n",(0,c.jsx)(n.p,{children:"It is recommended to call this function on every subdirectory if the given path\npoints to a directory. This is not required for Windows, but should be done to ensure\ncross-platform compatibility."}),"\n",(0,c.jsx)(n.p,{children:"Using this function on individual files is possible, but discouraged as it can cause\nsystem resource exhaustion."}),"\n",(0,c.jsxs)(n.p,{children:["@",(0,c.jsx)(n.em,{children:"param"})," ",(0,c.jsx)(n.code,{children:"path"})," \u2014 The path to watch. This should be an absolute path."]}),"\n",(0,c.jsxs)(n.p,{children:["@",(0,c.jsx)(n.em,{children:"param"})," ",(0,c.jsx)(n.code,{children:"unwatch"})," \u2014 If true, the path is removed from the watch list."]}),"\n",(0,c.jsx)(n.hr,{})]})}function o(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>r});var c=i(7294);const t={},a=c.createContext(t);function r(e){const n=c.useContext(a);return c.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),c.createElement(a.Provider,{value:n},e.children)}}}]);