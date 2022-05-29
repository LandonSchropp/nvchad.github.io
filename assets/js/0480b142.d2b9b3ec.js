"use strict";(self.webpackChunknvchad_site=self.webpackChunknvchad_site||[]).push([[836],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return h}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=a.createContext({}),d=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),h=i,m=p["".concat(u,".").concat(h)]||p[h]||c[h]||o;return t?a.createElement(m,r(r({ref:n},s),{},{components:t})):a.createElement(m,r({ref:n},s))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=t[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},3584:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return c}});var a=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],l={},u="FAQ",d={unversionedId:"faq",id:"faq",title:"FAQ",description:"Configuration",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/faq",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Features",permalink:"/features"},next:{title:"Support & Debugging",permalink:"/support-debugging"}},s={},c=[{value:"Configuration",id:"configuration",level:2},{value:"How to change theme of NvChad?",id:"how-to-change-theme-of-nvchad",level:3},{value:"How can I update NvChad?",id:"how-can-i-update-nvchad",level:3},{value:"How can I check default mappings of NvChad?",id:"how-can-i-check-default-mappings-of-nvchad",level:3},{value:"My icons aren&#39;t working, what should I do?",id:"my-icons-arent-working-what-should-i-do",level:3},{value:"NvChad is not working, I have nvim installed",id:"nvchad-is-not-working-i-have-nvim-installed",level:3},{value:"How can I add external plugin in NvChad?",id:"how-can-i-add-external-plugin-in-nvchad",level:3},{value:"General",id:"general",level:2},{value:"Would lots of plugins in NvChad make it slow?",id:"would-lots-of-plugins-in-nvchad-make-it-slow",level:3}],p={toc:c};function h(e){var n=e.components,t=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"faq"},"FAQ"),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("h3",{id:"how-to-change-theme-of-nvchad"},"How to change theme of NvChad?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Copy the examples dir files in the custom dir ",(0,o.kt)("inlineCode",{parentName:"li"},"lua/custom"),", see ",(0,o.kt)("a",{parentName:"li",href:"config/Custom%20config"},"Custom config")," "),(0,o.kt)("li",{parentName:"ul"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"<leader> + th"),", then select your theme and press enter, type y (to set the default theme), restart nvim and done \ud83d\udc4d. (",(0,o.kt)("inlineCode",{parentName:"li"},"<leader>")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"<space>")," by default)")),(0,o.kt)("h3",{id:"how-can-i-update-nvchad"},"How can I update NvChad?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"<leader> + uu"),", to update NvChad. (",(0,o.kt)("inlineCode",{parentName:"li"},"<leader>")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"<space>")," by default)")),(0,o.kt)("h3",{id:"how-can-i-check-default-mappings-of-nvchad"},"How can I check default mappings of NvChad?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Press ",(0,o.kt)("inlineCode",{parentName:"li"},"<leader> + ch"),", to see the cheatsheet. (",(0,o.kt)("inlineCode",{parentName:"li"},"<leader>")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"<space>")," by default)")),(0,o.kt)("h3",{id:"my-icons-arent-working-what-should-i-do"},"My icons aren't working, what should I do?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"It's probably because you aren't using correct font, download and install any font from ",(0,o.kt)("a",{parentName:"li",href:"https://www.nerdfonts.com/font-downloads"},"Nerd Fonts")," and set that font to your terminal and your icons will work fine \ud83d\udc4d.")),(0,o.kt)("h3",{id:"nvchad-is-not-working-i-have-nvim-installed"},"NvChad is not working, I have nvim installed"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Make sure you have NeoVim 0.5.1+ version.")),(0,o.kt)("h3",{id:"how-can-i-add-external-plugin-in-nvchad"},"How can I add external plugin in NvChad?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"config/Custom%20config#add-new-plugins"},"Docs"))),(0,o.kt)("h2",{id:"general"},"General"),(0,o.kt)("h3",{id:"would-lots-of-plugins-in-nvchad-make-it-slow"},"Would lots of plugins in NvChad make it slow?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"NvChad has like 30 ~ plugins but that doesn't mean those plugins are compromising NeoVim's speed, snappiness, or making it slow. No matter how many plugins I'd add on NvChad, it wouldn't compromise speed/snappiness/make it slow or whatever since it uses ",(0,o.kt)("inlineCode",{parentName:"li"},"packer.nvim")," as plugin manager. ",(0,o.kt)("inlineCode",{parentName:"li"},"packer.nvim")," lets you lazy load plugins i.e. loading plugins on certain events, mappings, sequentially loading them, etc, thus loading them only when needed. I have lazy loaded all the plugins so most plugins aren't loaded by default, hence not affecting NeoVim's startup/launch time.")))}h.isMDXComponent=!0}}]);