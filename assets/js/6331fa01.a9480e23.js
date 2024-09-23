"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6158],{1108:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var t=a(5893),r=a(1151);const l={sidebar_position:12},i="thread",s={id:"api/thread",title:"thread",description:"Provides threading capabilities.",source:"@site/docs/api/thread.md",sourceDirName:"api",slug:"/api/thread",permalink:"/docs/api/thread",draft:!1,unlisted:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/docs/api/thread.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"tutorialSidebar",previous:{title:"system",permalink:"/docs/api/system"},next:{title:"utf8extra",permalink:"/docs/api/utf8extra"}},h={},d=[{value:"thread.Channel",id:"threadchannel",level:2},{value:"__tostring",id:"__tostring",level:3},{value:"clear",id:"clear",level:3},{value:"first",id:"first",level:3},{value:"last",id:"last",level:3},{value:"pop",id:"pop",level:3},{value:"push",id:"push",level:3},{value:"supply",id:"supply",level:3},{value:"wait",id:"wait",level:3},{value:"thread.Thread",id:"threadthread",level:2},{value:"__eq",id:"__eq",level:3},{value:"__tostring",id:"__tostring-1",level:3},{value:"get_id",id:"get_id",level:3},{value:"get_name",id:"get_name",level:3},{value:"wait",id:"wait-1",level:3},{value:"create",id:"create",level:2},{value:"get_channel",id:"get_channel",level:2},{value:"get_cpu_count",id:"get_cpu_count",level:2}];function c(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"thread",children:"thread"}),"\n",(0,t.jsx)(n.p,{children:"Provides threading capabilities."}),"\n",(0,t.jsx)(n.h2,{id:"threadchannel",children:"thread.Channel"}),"\n",(0,t.jsx)(n.p,{children:"A channel object."}),"\n",(0,t.jsx)(n.h3,{id:"__tostring",children:"__tostring"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"(method) thread.Channel:__tostring()\n  -> string\n"})}),"\n",(0,t.jsx)(n.p,{children:"Metamethod that automatically converts a channel to a string representation."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"clear",children:"clear"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"(method) thread.Channel:clear()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Remove all elements from the channel."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"first",children:"first"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"(method) thread.Channel:first()\n  -> boolean|string|number|table|nil\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the first element of the list in the channel."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"last",children:"last"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"(method) thread.Channel:last()\n  -> boolean|string|number|table|nil\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the last element of the list in the channel."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"pop",children:"pop"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"(method) thread.Channel:pop()\n"})}),"\n",(0,t.jsx)(n.p,{children:"Remove the first element of a channel."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"push",children:"push"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"(method) thread.Channel:push(element: boolean|string|number|table|nil)\n  -> boolean|nil\n  2. errorMessage: string\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add a new element to the end of a channel list."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"supply",children:"supply"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"(method) thread.Channel:supply(element: boolean|string|number|table|nil)\n  -> boolean|nil\n  2. errorMessage: string\n"})}),"\n",(0,t.jsx)(n.p,{children:"Add a new element to the end of a channel list and waits for thread to read it."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"wait",children:"wait"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"(method) thread.Channel:wait()\n  -> boolean|string|number|table|nil\n"})}),"\n",(0,t.jsx)(n.p,{children:"Wait until the channel has one element and return it."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"threadthread",children:"thread.Thread"}),"\n",(0,t.jsx)(n.p,{children:"A thread object."}),"\n",(0,t.jsx)(n.h3,{id:"__eq",children:"__eq"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"(method) thread.Thread:__eq(thread1: thread.Thread, thread2: thread.Thread)\n  -> boolean\n"})}),"\n",(0,t.jsx)(n.p,{children:"Metamethod to automatically compare two threads."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"__tostring-1",children:"__tostring"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"(method) thread.Thread:__tostring()\n  -> string\n"})}),"\n",(0,t.jsx)(n.p,{children:"Metamethod that automatically converts a thread to a string representation."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"get_id",children:"get_id"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"(method) thread.Thread:get_id()\n  -> integer\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the id of a thread."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"get_name",children:"get_name"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"(method) thread.Thread:get_name()\n  -> string\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the name assigned to a thread."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"wait-1",children:"wait"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"(method) thread.Thread:wait()\n  -> integer\n"})}),"\n",(0,t.jsx)(n.p,{children:"Wait for a thread to finish and get the return code."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"create",children:"create"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"function thread.create(name: string, callback: function, ...boolean|string|number|table|nil)\n  -> thread.Thread|nil\n  2. errorMessage: string\n"})}),"\n",(0,t.jsx)(n.p,{children:"Create a new thread and starts it."}),"\n",(0,t.jsxs)(n.p,{children:["@",(0,t.jsx)(n.em,{children:"param"})," ",(0,t.jsx)(n.code,{children:"..."})," \u2014 Optional arguments passed to callback"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"get_channel",children:"get_channel"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"function thread.get_channel(name: string)\n  -> thread.Channel|nil\n  2. errorMessage: string\n"})}),"\n",(0,t.jsx)(n.p,{children:"Creates a new channel or retrieve existing one."}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"get_cpu_count",children:"get_cpu_count"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-lua",children:"function thread.get_cpu_count()\n  -> number\n"})}),"\n",(0,t.jsx)(n.p,{children:"Get the number of CPU cores available."}),"\n",(0,t.jsx)(n.p,{children:"Returns the total number of logical CPU cores. On CPUs that include\ntechnologies such as hyperthreading, the number of logical cores may be\nmore than the number of physical cores."}),"\n",(0,t.jsx)(n.hr,{})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>s,a:()=>i});var t=a(7294);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);