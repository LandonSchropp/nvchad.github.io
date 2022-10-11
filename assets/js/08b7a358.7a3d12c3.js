"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=l,g=m["".concat(u,".").concat(p)]||m[p]||h[p]||a;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function p(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2482:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var r=n(7462),l=(n(7294),n(3905));const a={id:"theming",title:"Highlight groups"},i=void 0,o={unversionedId:"config/theming",id:"config/theming",title:"Highlight groups",description:"Override default highlight groups",source:"@site/docs/config/theming.md",sourceDirName:"config",slug:"/config/theming",permalink:"/config/theming",tags:[],version:"current",frontMatter:{id:"theming",title:"Highlight groups"},sidebar:"config",previous:{title:"Format & lint",permalink:"/config/Format & lint"},next:{title:"Features",permalink:"/features"}},u={},s=[{value:"Override default highlight groups",id:"override-default-highlight-groups",level:3},{value:"Add new highlight groups",id:"add-new-highlight-groups",level:3},{value:"Customize themes",id:"customize-themes",level:2},{value:"Local themes",id:"local-themes",level:3},{value:"Override specific colors in themes",id:"override-specific-colors-in-themes",level:3}],c={toc:s};function h(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"override-default-highlight-groups"},"Override default highlight groups"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Make sure you use a valid highlight group!"),(0,l.kt)("li",{parentName:"ul"},"Check your theme colors in this dir:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"~/.local/share/nvim/site/pack/packer/opt/base46/lua/hl_themes\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"In your theme file, for instance onedark.lua, only the variables from base_30 can be used in overriding your custom highlight groups. "),(0,l.kt)("li",{parentName:"ul"},"You can even use hex colors in the fg/bg field, but it's preferable to use variable names (for instance: blue, darker_black, one_bg, etc.) from your theme file as these will look better."),(0,l.kt)("li",{parentName:"ul"},"No need to write hex colors manually!")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'M.ui = {\n   hl_override = {\n      Pmenu = { bg = "white" },\n\n      MyHighlightGroup = {\n         fg = "red",\n         bg = "darker_black"\n      }\n   },\n}\n')),(0,l.kt)("p",null,"OR "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"You can even use the path of the table in hl_override (but make sure you load it in variable before):")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- custom.highlights file\nreturn   {\n      Pmenu = { bg = "#ffffff" },\n      MyHighlightGroup = {\n         fg = "blue",\n         bg = "grey"\n      }\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- chadrc\nM.ui = {\n   hl_override =  require "custom.highlights" \n}\n')),(0,l.kt)("h3",{id:"add-new-highlight-groups"},"Add new highlight groups"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The same method can be used as above, but instead of ",(0,l.kt)("inlineCode",{parentName:"li"},"hl_override"),", you can use the ",(0,l.kt)("inlineCode",{parentName:"li"},"hl_add")," field in chadrc.")),(0,l.kt)("h2",{id:"customize-themes"},"Customize themes"),(0,l.kt)("h3",{id:"local-themes"},"Local themes"),(0,l.kt)("p",null,"(WARNING: Do this at your own risk because you might not be able to make perfect nvchad themes like siduck.)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Default themes are in our nvim-base16 repo's hl_themes dir."),(0,l.kt)("li",{parentName:"ul"},"Any nvchad theme structure looks like this:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'-- theme file is custom/themes/siduck.lua\n\nlocal M = {}\n\nM.base_30 = {\n    -- my colors\n}\n\nM.base_16 = {\n    -- my base16 colors\n}\n\nvim.opt.bg = "dark" -- or light \nreturn M\n')),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Make sure to use the exact variable names!")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'M.ui = {\n   theme = "siduck",\n}\n')),(0,l.kt)("h3",{id:"override-specific-colors-in-themes"},"Override specific colors in themes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},'M.ui = {\n\n   changed_themes = {\n      onedark = {\n         base_16 = {\n            base00 = "#mycol",\n         },\n         base_30 = {\n            red = "#mycol",\n            white = "#mycol",\n         },\n      },\n\n      nord = {\n         -- and so on!\n      },\n   },\n}\n')))}h.isMDXComponent=!0}}]);