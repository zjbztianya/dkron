"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8150],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),u=o,m=p["".concat(c,".").concat(u)]||p[u]||f[u]||a;return t?n.createElement(m,i(i({ref:r},s),{},{components:t})):n.createElement(m,i({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<a;d++)i[d]=t[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6992:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=t(7462),o=(t(7294),t(3905));const a={date:new Date("2022-06-05T00:00:00.000Z"),title:"dkron raft",slug:"dkron_raft",url:"/cli/dkron_raft/"},i=void 0,l={unversionedId:"cli/dkron_raft",id:"cli/dkron_raft",title:"dkron raft",description:"dkron raft",source:"@site/docs/cli/dkron_raft.md",sourceDirName:"cli",slug:"/cli/dkron_raft",permalink:"/docs/cli/dkron_raft",draft:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/cli/dkron_raft.md",tags:[],version:"current",frontMatter:{date:"2022-06-05T00:00:00.000Z",title:"dkron raft",slug:"dkron_raft",url:"/cli/dkron_raft/"},sidebar:"tutorialSidebar",previous:{title:"dkron leave",permalink:"/docs/cli/dkron_leave"},next:{title:"dkron raft list-peers",permalink:"/docs/cli/dkron_raft_list-peers"}},c={},d=[{value:"dkron raft",id:"dkron-raft",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 5-Jun-2022",id:"auto-generated-by-spf13cobra-on-5-jun-2022",level:6}],s={toc:d};function p(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dkron-raft"},"dkron raft"),(0,o.kt)("p",null,"Command to perform some raft operations"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  -h, --help              help for raft\n      --rpc-addr string   gRPC address of the agent. (default "{{ GetPrivateIP }}:6868")\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --config string   config file path\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/dkron/"},"dkron"),"\t - Open source distributed job scheduling system"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/dkron_raft_list-peers/"},"dkron raft list-peers"),"\t - Command to list raft peers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/cli/dkron_raft_remove-peer/"},"dkron raft remove-peer"),"\t - Command to list raft peers")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-5-jun-2022"},"Auto generated by spf13/cobra on 5-Jun-2022"))}p.isMDXComponent=!0}}]);