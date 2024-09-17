"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9688],{6145:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=o(5893),t=o(1151);const i={sidebar_position:12,description:"Learn to utilize coroutines for executing long-running operations in Pragtical."},s="Coroutines",a={id:"developer-guide/coroutines",title:"Coroutines",description:"Learn to utilize coroutines for executing long-running operations in Pragtical.",source:"@site/docs/developer-guide/coroutines.md",sourceDirName:"developer-guide",slug:"/developer-guide/coroutines",permalink:"/docs/developer-guide/coroutines",draft:!1,unlisted:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/docs/developer-guide/coroutines.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,description:"Learn to utilize coroutines for executing long-running operations in Pragtical."},sidebar:"tutorialSidebar",previous:{title:"Views",permalink:"/docs/developer-guide/views"},next:{title:"About Pragtical",permalink:"/docs/category/about-pragtical"}},c={},d=[{value:"Coroutine Types",id:"coroutine-types",level:2},{value:"Basic Example",id:"basic-example",level:2},{value:"Example: Managing a child process",id:"example-managing-a-child-process",level:2},{value:"Example: Defer execution of certain functions",id:"example-defer-execution-of-certain-functions",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"coroutines",children:"Coroutines"}),"\n",(0,r.jsxs)(n.p,{children:["Pragtical employs ",(0,r.jsx)(n.a,{href:"https://www.lua.org/pil/9.html",children:"Lua Coroutines"})," to perform various tasks, such as syntax\nhighlighting, project search and filesystem monitoring. Pragtical internally\nrefers to these coroutines as threads but they are not really threads just\nco-operative functions executed one after another by a coroutine scheduler.\nThe scheduler keeps track of the tasks and per-frame rendering time to decide\nif running a task is possible. This strategy ensures that the program runs on a\nsingle thread for most of its time."]}),"\n",(0,r.jsx)(n.h2,{id:"coroutine-types",children:"Coroutine Types"}),"\n",(0,r.jsx)(n.p,{children:"There are two types of coroutines used on Pragtical:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"foreground"})," - only runs when the editor has user focus"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"background"})," - keeps running even if the editor doesn't has focus"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["To schedule a ",(0,r.jsx)(n.strong,{children:"foreground"})," task for execution, you can use ",(0,r.jsx)(n.code,{children:"core.add_thread(f, weak_ref, ...)"}),".\nTo schedule a ",(0,r.jsx)(n.strong,{children:"background"})," task for execution, you can use ",(0,r.jsx)(n.code,{children:"core.add_background_thread(f, weak_ref, ...)"}),".\nThese functions accept a coroutine function, a weak reference to an object, and\nother arguments to pass to the coroutine function."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Use background coroutines responsibly, only when strictly necessary, and ensure\nthat the task will not consume excessive CPU time."})}),"\n",(0,r.jsxs)(n.p,{children:["The coroutine function takes any arguments passed into ",(0,r.jsx)(n.code,{children:"core.add_thread()"})," or\n",(0,r.jsx)(n.code,{children:"core.add_background_thread()"})," and it should call ",(0,r.jsx)(n.code,{children:"coroutine.yield()"})," with the\ntimeout in seconds. If the timeout is 0, the coroutine will be resumed as soon\nas possible. If the timeout isn't specified, a timeout will be automatically\nassigned by the coroutine scheduler depending on the time the function takes\nto run."]}),"\n",(0,r.jsx)(n.h2,{id:"basic-example",children:"Basic Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'local core = require "core"\n\n-- Schedule a function for execution later\ncore.add_thread(function()\n    print("Hello world!")\nend)\n\n-- Schedule a function to run until the weak reference is destroyed\n-- This is used by the syntax highlighter to run the highlighter\n-- until the underlying Doc is destroyed/closed.\ncore.add_thread(function()\n    while true do\n        coroutine.yield(1)\n        print("Doc is still open!")\n    end\nend, doc)\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsx)(n.p,{children:"Weak references in Lua allow you to reference objects without preventing them\nfrom being garbage collected. However, if weak references form a circular\nreference (where two or more objects reference each other) this can create a\nsituation where the garbage collector is unable to free the memory, as it sees\nthese objects as still in use. Therefore, it's important to use weak references\ncarefully to avoid memory leaks and ensure that unused objects can be properly\ncollected by the garbage collector."})}),"\n",(0,r.jsx)(n.h2,{id:"example-managing-a-child-process",children:"Example: Managing a child process"}),"\n",(0,r.jsx)(n.p,{children:"This example uses a foreground task to manage a long-running child process.\nThe task reads from the child process and prints it to stdout after the process\nexits."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'local core = require "core"\n\ncore.add_thread(function()\n    local proc = assert(process.start({ "cat", "/dev/urandom" }, { stdin = process.REDIRECT_PIPE }))\n\n    local buffer = {}\n    while true do\n        local current_buffer = proc:read()\n        if not current_buffer then break end\n\n        table.insert(buffer, current_buffer)\n        coroutine.yield(0)\n    end\n\n    print(table.concat(buffer))\nend)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"example-defer-execution-of-certain-functions",children:"Example: Defer execution of certain functions"}),"\n",(0,r.jsxs)(n.p,{children:["This example shows a lesser-known use case for ",(0,r.jsx)(n.code,{children:"core.add_thread()"})," \u2014 deferring\nexecution until Pragtical is fully loaded. Coroutines scheduled with\n",(0,r.jsx)(n.code,{children:"core.add_thread()"})," will run after the UI and plugins are loaded, so it could\nbe used to run commands added by plugins."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'local core = require "core"\nlocal command = require "core.command"\nlocal config = require "core.config"\n\ncore.add_thread(function()\n    -- At this points, plugins are not loaded yet.\n    -- We need to defer the execution after the editor is loaded.\n    command:perform "my-plugin:show"\nend)\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Remember the difference between ",(0,r.jsx)(n.code,{children:"core.add_thread()"})," (foreground) and\n",(0,r.jsx)(n.code,{children:"core.add_background_thread()"})," (background). Most of the time you will only\nneed to use ",(0,r.jsx)(n.code,{children:"core.add_thread()"}),". In some cases like the IPC plugin\n",(0,r.jsx)(n.code,{children:"core.add_background_thread()"})," is useful because the plugin needs to scan if\nnew messages were received even if the editor window does not has focus."]})})]})}function u(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>a,a:()=>s});var r=o(7294);const t={},i=r.createContext(t);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);