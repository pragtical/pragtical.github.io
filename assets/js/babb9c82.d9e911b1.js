"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5574],{3986:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var l=r(5893),s=r(1151);const a={sidebar_position:32},t="core.scrollbar",c={id:"api/core.scrollbar",title:"core.scrollbar",description:"Scrollbar",source:"@site/docs/api/core.scrollbar.md",sourceDirName:"api",slug:"/api/core.scrollbar",permalink:"/docs/api/core.scrollbar",draft:!1,unlisted:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/docs/api/core.scrollbar.md",tags:[],version:"current",sidebarPosition:32,frontMatter:{sidebar_position:32},sidebar:"tutorialSidebar",previous:{title:"core.rootview",permalink:"/docs/api/core.rootview"},next:{title:"core.statusview",permalink:"/docs/api/core.statusview"}},o={},d=[{value:"__index",id:"__index",level:2},{value:"alignment",id:"alignment",level:2},{value:"contracted_size",id:"contracted_size",level:2},{value:"direction",id:"direction",level:2},{value:"drag_start_offset",id:"drag_start_offset",level:2},{value:"dragging",id:"dragging",level:2},{value:"expand_percent",id:"expand_percent",level:2},{value:"expanded_size",id:"expanded_size",level:2},{value:"force_status",id:"force_status",level:2},{value:"hovering",id:"hovering",level:2},{value:"normal_rect",id:"normal_rect",level:2},{value:"percent",id:"percent",level:2},{value:"rect",id:"rect",level:2},{value:"super",id:"super",level:2},{value:"ScrollbarOptions",id:"scrollbaroptions",level:2},{value:"alignment",id:"alignment-1",level:3},{value:"contracted_size",id:"contracted_size-1",level:3},{value:"direction",id:"direction-1",level:3},{value:"expanded_size",id:"expanded_size-1",level:3},{value:"force_status",id:"force_status-1",level:3},{value:"__call",id:"__call",level:2},{value:"__tostring",id:"__tostring",level:2},{value:"_get_thumb_rect_normal",id:"_get_thumb_rect_normal",level:2},{value:"_get_track_rect_normal",id:"_get_track_rect_normal",level:2},{value:"_on_mouse_moved_normal",id:"_on_mouse_moved_normal",level:2},{value:"_on_mouse_pressed_normal",id:"_on_mouse_pressed_normal",level:2},{value:"_on_mouse_released_normal",id:"_on_mouse_released_normal",level:2},{value:"_overlaps_normal",id:"_overlaps_normal",level:2},{value:"_update_hover_status_normal",id:"_update_hover_status_normal",level:2},{value:"draw",id:"draw",level:2},{value:"draw_thumb",id:"draw_thumb",level:2},{value:"draw_track",id:"draw_track",level:2},{value:"extend",id:"extend",level:2},{value:"extends",id:"extends",level:2},{value:"get_thumb_rect",id:"get_thumb_rect",level:2},{value:"get_track_rect",id:"get_track_rect",level:2},{value:"is",id:"is",level:2},{value:"is_class_of",id:"is_class_of",level:2},{value:"is_extended_by",id:"is_extended_by",level:2},{value:"new",id:"new",level:2},{value:"normal_to_real",id:"normal_to_real",level:2},{value:"on_mouse_left",id:"on_mouse_left",level:2},{value:"on_mouse_moved",id:"on_mouse_moved",level:2},{value:"on_mouse_pressed",id:"on_mouse_pressed",level:2},{value:"on_mouse_released",id:"on_mouse_released",level:2},{value:"overlaps",id:"overlaps",level:2},{value:"real_to_normal",id:"real_to_normal",level:2},{value:"set_forced_status",id:"set_forced_status",level:2},{value:"set_percent",id:"set_percent",level:2},{value:"set_size",id:"set_size",level:2},{value:"update",id:"update",level:2}];function i(e){const n={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.h1,{id:"corescrollbar",children:"core.scrollbar"}),"\n",(0,l.jsxs)(n.p,{children:["Scrollbar\nUse Scrollbar",":set_size"," to set the bounding box of the view the scrollbar belongs to.\nUse Scrollbar",":update"," to update the scrollbar animations.\nUse Scrollbar",":draw"," to draw the scrollbar.\nUse Scrollbar",":on_mouse_pressed",", Scrollbar",":on_mouse_released",",\nScrollbar",":on_mouse_moved"," and Scrollbar",":on_mouse_left"," to react to mouse movements;\nthe scrollbar won't update automatically.\nUse Scrollbar",":set_percent"," to set the scrollbar location externally."]}),"\n",(0,l.jsx)(n.p,{children:'To manage all the orientations, the scrollbar changes the coordinates system\naccordingly. The "normal" coordinate system adapts the scrollbar coordinates\nas if it\'s always a vertical scrollbar, positioned at the end of the bounding box.'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'local scrollbar = require "core.scrollbar"\n'})}),"\n",(0,l.jsx)(n.h2,{id:"__index",children:"__index"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) __index: core.object\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"alignment",children:"alignment"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'(field) alignment: "e"|"s"\n'})}),"\n",(0,l.jsx)(n.p,{children:"Start or End (left to right, top to bottom)"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"contracted_size",children:"contracted_size"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) contracted_size: number?\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Override the default value specified by ",(0,l.jsx)(n.code,{children:"style.scrollbar_size"})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"direction",children:"direction"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'(field) direction: "h"|"v"\n'})}),"\n",(0,l.jsx)(n.p,{children:"Vertical or Horizontal"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"drag_start_offset",children:"drag_start_offset"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) drag_start_offset: integer\n"})}),"\n",(0,l.jsx)(n.p,{children:"Private. Used to offset the start of the drag from the top of the thumb"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"dragging",children:"dragging"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) dragging: boolean\n"})}),"\n",(0,l.jsx)(n.p,{children:"Scrollbar dragging status"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"expand_percent",children:"expand_percent"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) expand_percent: number\n"})}),"\n",(0,l.jsx)(n.p,{children:"Private. Used to keep track of animations"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"expanded_size",children:"expanded_size"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) expanded_size: number?\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Override the default value specified by ",(0,l.jsx)(n.code,{children:"style.expanded_scrollbar_size"})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"force_status",children:"force_status"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'(field) force_status: "contracted"|"expanded"|false\n'})}),"\n",(0,l.jsx)(n.p,{children:"Force the scrollbar status"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"hovering",children:"hovering"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) hovering: table\n"})}),"\n",(0,l.jsxs)(n.p,{children:["What is currently being hovered. ",(0,l.jsx)(n.code,{children:"thumb"})," implies",(0,l.jsx)(n.code,{children:" track"})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"normal_rect",children:"normal_rect"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) normal_rect: table\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"percent",children:"percent"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) percent: integer\n"})}),"\n",(0,l.jsx)(n.p,{children:"Position in percent [0-1]"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"rect",children:"rect"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) rect: table\n"})}),"\n",(0,l.jsx)(n.p,{children:"Position information of the owner"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"super",children:"super"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) super: core.object\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"scrollbaroptions",children:"ScrollbarOptions"}),"\n",(0,l.jsx)(n.h3,{id:"alignment-1",children:"alignment"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'(field) alignment: "e"|"s"\n'})}),"\n",(0,l.jsx)(n.p,{children:"Start or End (left to right, top to bottom)"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"contracted_size-1",children:"contracted_size"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) contracted_size: number?\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Override the default value specified by ",(0,l.jsx)(n.code,{children:"style.scrollbar_size"})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"direction-1",children:"direction"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'(field) direction: "h"|"v"\n'})}),"\n",(0,l.jsx)(n.p,{children:"Vertical or Horizontal"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"expanded_size-1",children:"expanded_size"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(field) expanded_size: number?\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Override the default value specified by ",(0,l.jsx)(n.code,{children:"style.expanded_scrollbar_size"})]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h3,{id:"force_status-1",children:"force_status"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'(field) force_status: "contracted"|"expanded"|false\n'})}),"\n",(0,l.jsx)(n.p,{children:"Force the scrollbar status"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"__call",children:"__call"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.object:__call(...any)\n  -> core.object\n"})}),"\n",(0,l.jsx)(n.p,{children:"Metamethod to allow using the object call as a constructor."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"__tostring",children:"__tostring"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.object:__tostring()\n  -> string\n"})}),"\n",(0,l.jsx)(n.p,{children:"Metamethod to get a string representation of an object."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"_get_thumb_rect_normal",children:"_get_thumb_rect_normal"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:_get_thumb_rect_normal()\n  -> number\n  2. integer\n  3. number\n  4. integer\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"_get_track_rect_normal",children:"_get_track_rect_normal"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:_get_track_rect_normal()\n  -> number\n  2. integer\n  3. number\n  4. integer\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"_on_mouse_moved_normal",children:"_on_mouse_moved_normal"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:_on_mouse_moved_normal(x: any, y: any, dx: any, dy: any)\n  -> boolean|number\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"_on_mouse_pressed_normal",children:"_on_mouse_pressed_normal"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:_on_mouse_pressed_normal(button: any, x: any, y: any, clicks: any)\n  -> boolean|number\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"_on_mouse_released_normal",children:"_on_mouse_released_normal"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:_on_mouse_released_normal(button: any, x: any, y: any)\n  -> boolean\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"_overlaps_normal",children:"_overlaps_normal"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:_overlaps_normal(x: any, y: any)\n  -> string|unknown\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"_update_hover_status_normal",children:"_update_hover_status_normal"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:_update_hover_status_normal(x: any, y: any)\n  -> boolean\n"})}),"\n",(0,l.jsx)(n.p,{children:"Updates the scrollbar hover status.\nThis gets called by other functions and shouldn't be called manually"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"draw",children:"draw"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:draw()\n"})}),"\n",(0,l.jsx)(n.p,{children:"Draw both the scrollbar track and thumb"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"draw_thumb",children:"draw_thumb"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:draw_thumb()\n"})}),"\n",(0,l.jsx)(n.p,{children:"Draw the scrollbar thumb"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"draw_track",children:"draw_track"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:draw_track()\n"})}),"\n",(0,l.jsx)(n.p,{children:"Draw the scrollbar track"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"extend",children:"extend"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.object:extend()\n  -> core.object\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"extends",children:"extends"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.object:extends(T: any)\n  -> boolean\n"})}),"\n",(0,l.jsx)(n.p,{children:"Check if the object inherits from the given type."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"get_thumb_rect",children:"get_thumb_rect"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:get_thumb_rect()\n  -> integer\n  2. integer\n  3. integer\n  4. integer\n"})}),"\n",(0,l.jsx)(n.p,{children:"Get the thumb rect (the part of the scrollbar that can be dragged)"}),"\n",(0,l.jsxs)(n.p,{children:["@",(0,l.jsx)(n.em,{children:"return"})," \u2014 x, y, w, h"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"get_track_rect",children:"get_track_rect"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:get_track_rect()\n  -> number\n  2. number\n  3. number\n  4. number\n"})}),"\n",(0,l.jsx)(n.p,{children:'Get the track rect (the "background" of the scrollbar)'}),"\n",(0,l.jsxs)(n.p,{children:["@",(0,l.jsx)(n.em,{children:"return"})," \u2014 x, y, w, h"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"is",children:"is"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.object:is(T: any)\n  -> boolean\n"})}),"\n",(0,l.jsx)(n.p,{children:"Check if the object is strictly of the given type."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"is_class_of",children:"is_class_of"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.object:is_class_of(T: any)\n  -> boolean\n"})}),"\n",(0,l.jsx)(n.p,{children:"Check if the parameter is strictly of the object type."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"is_extended_by",children:"is_extended_by"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.object:is_extended_by(T: any)\n  -> boolean\n"})}),"\n",(0,l.jsx)(n.p,{children:"Check if the parameter inherits from the object."}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"new",children:"new"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:new(options: ScrollbarOptions)\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"normal_to_real",children:"normal_to_real"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:normal_to_real(x: any, y: any, w: any, h: any)\n  -> unknown\n  2. unknown\n  3. unknown\n  4. unknown\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"on_mouse_left",children:"on_mouse_left"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:on_mouse_left()\n"})}),"\n",(0,l.jsx)(n.p,{children:"Updates the scrollbar hovering status"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"on_mouse_moved",children:"on_mouse_moved"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:on_mouse_moved(x: any, y: any, dx: any, dy: any)\n  -> boolean|number\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Updates the scrollbar with mouse moved info.\nWon't update the scrollbar position automatically.\nUse Scrollbar",":set_percent"," to update it."]}),"\n",(0,l.jsx)(n.p,{children:"This updates the hovering status."}),"\n",(0,l.jsxs)(n.p,{children:["Returns a falsy value if the event happened outside the scrollbar.\nReturns ",(0,l.jsx)(n.code,{children:"true"})," if the scrollbar is hovered.\nIf the scrollbar was being dragged, this returns a value between 0 and 1\nrepresenting the percent of the position."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"on_mouse_pressed",children:"on_mouse_pressed"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:on_mouse_pressed(button: any, x: any, y: any, clicks: any)\n  -> boolean|number\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Updates the scrollbar with mouse pressed info.\nWon't update the scrollbar position automatically.\nUse Scrollbar",":set_percent"," to update it."]}),"\n",(0,l.jsx)(n.p,{children:"This sets the dragging status if needed."}),"\n",(0,l.jsxs)(n.p,{children:["Returns a falsy value if the event happened outside the scrollbar.\nReturns ",(0,l.jsx)(n.code,{children:"true"})," if the thumb was pressed.\nIf the track was pressed this returns a value between 0 and 1\nrepresenting the percent of the position."]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"on_mouse_released",children:"on_mouse_released"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:on_mouse_released(button: any, x: any, y: any)\n  -> boolean|nil\n"})}),"\n",(0,l.jsx)(n.p,{children:"Updates the scrollbar dragging status"}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"overlaps",children:"overlaps"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'(method) core.scrollbar:overlaps(x: any, y: any)\n  -> "thumb"|"track"|nil\n'})}),"\n",(0,l.jsx)(n.p,{children:"Get what part of the scrollbar the coordinates overlap"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'return #1:\n    | "thumb"\n    | "track"\n'})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"real_to_normal",children:"real_to_normal"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:real_to_normal(x: any, y: any, w: any, h: any)\n  -> unknown\n  2. unknown\n  3. unknown\n  4. unknown\n"})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"set_forced_status",children:"set_forced_status"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'(method) core.scrollbar:set_forced_status(status: "contracted"|"expanded"|false)\n'})}),"\n",(0,l.jsx)(n.p,{children:"Set the status the scrollbar is forced to keep"}),"\n",(0,l.jsxs)(n.p,{children:["@",(0,l.jsx)(n.em,{children:"param"})," ",(0,l.jsx)(n.code,{children:"status"})," \u2014 The status to force"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:'status:\n    | "expanded"\n    | "contracted"\n    | false\n'})}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"set_percent",children:"set_percent"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:set_percent(percent: number)\n"})}),"\n",(0,l.jsx)(n.p,{children:"Updates the scrollbar location"}),"\n",(0,l.jsxs)(n.p,{children:["@",(0,l.jsx)(n.em,{children:"param"})," ",(0,l.jsx)(n.code,{children:"percent"})," \u2014 number between 0 and 1 where 0 means thumb at the top and 1 at the bottom"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"set_size",children:"set_size"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:set_size(x: number, y: number, w: number, h: number, scrollable: number)\n"})}),"\n",(0,l.jsx)(n.p,{children:"Updates the bounding box of the view the scrollbar belongs to."}),"\n",(0,l.jsxs)(n.p,{children:["@",(0,l.jsx)(n.em,{children:"param"})," ",(0,l.jsx)(n.code,{children:"scrollable"})," \u2014 size of the scrollable area"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.h2,{id:"update",children:"update"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-lua",children:"(method) core.scrollbar:update()\n"})}),"\n",(0,l.jsx)(n.p,{children:"Updates the scrollbar animations"}),"\n",(0,l.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>t});var l=r(7294);const s={},a=l.createContext(s);function t(e){const n=l.useContext(a);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(a.Provider,{value:n},e.children)}}}]);