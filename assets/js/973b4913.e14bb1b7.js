"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9565],{8002:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=l(85893),a=l(11151);const r={sidebar_position:15},s="core.cli",c={id:"api/core.cli",title:"core.cli",description:"Provides the CLI parser functionality.",source:"@site/docs/api/core.cli.md",sourceDirName:"api",slug:"/api/core.cli",permalink:"/docs/api/core.cli",draft:!1,unlisted:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/docs/api/core.cli.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"tutorialSidebar",previous:{title:"core",permalink:"/docs/api/core"},next:{title:"core.command",permalink:"/docs/api/core.command"}},d={},o=[{value:"app_description",id:"app_description",level:2},{value:"app_name",id:"app_name",level:2},{value:"app_version",id:"app_version",level:2},{value:"commands",id:"commands",level:2},{value:"core.cli.command",id:"coreclicommand",level:2},{value:"arguments",id:"arguments",level:3},{value:"command",id:"command",level:3},{value:"description",id:"description",level:3},{value:"execute",id:"execute",level:3},{value:"exit_editor",id:"exit_editor",level:3},{value:"flags",id:"flags",level:3},{value:"long_description",id:"long_description",level:3},{value:"max_arguments",id:"max_arguments",level:3},{value:"min_arguments",id:"min_arguments",level:3},{value:"subcommands",id:"subcommands",level:3},{value:"usage",id:"usage",level:3},{value:"core.cli.flag",id:"corecliflag",level:2},{value:"description",id:"description-1",level:3},{value:"name",id:"name",level:3},{value:"short_name",id:"short_name",level:3},{value:"type",id:"type",level:3},{value:"value",id:"value",level:3},{value:"colorize",id:"colorize",level:2},{value:"get_default",id:"get_default",level:2},{value:"parse",id:"parse",level:2},{value:"print_help",id:"print_help",level:2},{value:"register",id:"register",level:2},{value:"set_default",id:"set_default",level:2},{value:"unregister",id:"unregister",level:2}];function t(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"corecli",children:"core.cli"}),"\n",(0,i.jsx)(n.p,{children:"Provides the CLI parser functionality."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'local cli = require "core.cli"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"app_description",children:"app_description"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) app_description: string\n"})}),"\n",(0,i.jsx)(n.p,{children:"Application description"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"app_name",children:"app_name"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) app_name: string\n"})}),"\n",(0,i.jsx)(n.p,{children:"Application name"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"app_version",children:"app_version"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) app_version: string\n"})}),"\n",(0,i.jsx)(n.p,{children:"Application version"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"commands",children:"commands"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) commands: table<string, core.cli.command>\n"})}),"\n",(0,i.jsx)(n.p,{children:"List of registered commands"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"coreclicommand",children:"core.cli.command"}),"\n",(0,i.jsx)(n.p,{children:"Representation of a command line subcommand."}),"\n",(0,i.jsx)(n.h3,{id:"arguments",children:"arguments"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) arguments: table<string, string>?\n"})}),"\n",(0,i.jsx)(n.p,{children:"Description of the arguments printed on command help."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"command",children:"command"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) command: string\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Subcommand name invoked with ",(0,i.jsx)(n.code,{children:"app mycommand"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"description",children:"description"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) description: string\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Description used for the command when running ",(0,i.jsx)(n.code,{children:"app help"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"execute",children:"execute"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) execute: fun(flags: core.cli.flag[], arguments: string[])?\n"})}),"\n",(0,i.jsx)(n.p,{children:"Function called when the command is invoked by the user"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"exit_editor",children:"exit_editor"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) exit_editor: boolean?\n"})}),"\n",(0,i.jsx)(n.p,{children:"Flag true by default which causes the editor to not launch when command is executed"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"flags",children:"flags"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) flags: core.cli.flag[]?\n"})}),"\n",(0,i.jsx)(n.p,{children:"Optional list of flags that can be used as part of the command"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"long_description",children:"long_description"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) long_description: string?\n"})}),"\n",(0,i.jsx)(n.p,{children:"Optional more detailed description that shows how to use the command"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"max_arguments",children:"max_arguments"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) max_arguments: integer?\n"})}),"\n",(0,i.jsx)(n.p,{children:"The maximum amount of arguments required for the command where -1 is any"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"min_arguments",children:"min_arguments"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) min_arguments: integer?\n"})}),"\n",(0,i.jsx)(n.p,{children:"The minimum amount of arguments required for the command"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"subcommands",children:"subcommands"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) subcommands: core.cli.command[]?\n"})}),"\n",(0,i.jsx)(n.p,{children:"Optional list of subcommands that belong to the parent subcommand"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"usage",children:"usage"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) usage: string?\n"})}),"\n",(0,i.jsx)(n.p,{children:"Single line brief of using the command, eg: [options] [<argument>]"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"corecliflag",children:"core.cli.flag"}),"\n",(0,i.jsx)(n.p,{children:"Representation of a command line flag."}),"\n",(0,i.jsx)(n.h3,{id:"description-1",children:"description"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) description: string\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Description used for the flag when running ",(0,i.jsx)(n.code,{children:"app help mycommand"})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"name",children:"name"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) name: string\n"})}),"\n",(0,i.jsx)(n.p,{children:"Long name of the flag eg: my-flag for --my-flag"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"short_name",children:"short_name"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) short_name: string\n"})}),"\n",(0,i.jsx)(n.p,{children:"Short name eg: m for -m"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"type",children:"type"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'(field) type: ("boolean"|"empty"|"list"|"number"|"string")?\n'})}),"\n",(0,i.jsx)(n.p,{children:"Data type of the flag if an argument/value can be given to it"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"value",children:"value"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"(field) value: (boolean|string|number|table)?\n"})}),"\n",(0,i.jsx)(n.p,{children:"Value assigned to the flag"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"colorize",children:"colorize"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'function core.cli.colorize(text: string, color: "blue"|"gray"|"green"|"liteblue"|"purple"...(+2))\n  -> colorized_text: string\n'})}),"\n",(0,i.jsx)(n.p,{children:"Adds color to given text on non windows systems."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:'color:\n    | "red"\n    | "green"\n    | "yellow"\n    | "purple"\n    | "blue"\n    | "liteblue"\n    | "gray"\n'})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"get_default",children:"get_default"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"function core.cli.get_default()\n  -> (core.cli.command)?\n"})}),"\n",(0,i.jsx)(n.p,{children:"Get the default command used by the CLI parser."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"parse",children:"parse"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"function core.cli.parse(args: string[])\n"})}),"\n",(0,i.jsx)(n.p,{children:"Parse the command line arguments and execute the applicable commands."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"print_help",children:"print_help"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"function core.cli.print_help(command?: core.cli.command)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Display the generated application help or a specific command help."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"register",children:"register"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"function core.cli.register(command: core.cli.command, overwrite?: boolean)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Add a new command to the cli parser."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"set_default",children:"set_default"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"function core.cli.set_default(command: core.cli.command)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Set the default command used by the CLI parser."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"unregister",children:"unregister"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-lua",children:"function core.cli.unregister(command: string)\n"})}),"\n",(0,i.jsx)(n.p,{children:"Removes an existing command from the cli parser."}),"\n",(0,i.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},11151:(e,n,l)=>{l.d(n,{Z:()=>c,a:()=>s});var i=l(67294);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);