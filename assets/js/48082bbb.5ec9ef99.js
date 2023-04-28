"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1191],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(t),u=o,m=d["".concat(c,".").concat(u)]||d[u]||f[u]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6129:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=t(7462),o=(t(7294),t(3905));const a={date:new Date("2022-10-07T00:00:00.000Z"),title:"dkron raft",slug:"dkron_raft",url:"/docs/pro/cli/dkron_raft/"},i=void 0,l={unversionedId:"pro/cli/dkron_raft",id:"pro/cli/dkron_raft",title:"dkron raft",description:"dkron raft",source:"@site/docs/pro/cli/dkron_raft.md",sourceDirName:"pro/cli",slug:"/pro/cli/dkron_raft",permalink:"/docs/pro/cli/dkron_raft",draft:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/pro/cli/dkron_raft.md",tags:[],version:"current",frontMatter:{date:"2022-10-07T00:00:00.000Z",title:"dkron raft",slug:"dkron_raft",url:"/docs/pro/cli/dkron_raft/"},sidebar:"tutorialSidebar",previous:{title:"dkron leave",permalink:"/docs/pro/cli/dkron_leave"},next:{title:"dkron raft list-peers",permalink:"/docs/pro/cli/dkron_raft_list-peers"}},c={},s=[{value:"dkron raft",id:"dkron-raft",level:2},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 7-Oct-2022",id:"auto-generated-by-spf13cobra-on-7-oct-2022",level:6}],p={toc:s};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"dkron-raft"},"dkron raft"),(0,o.kt)("p",null,"Command to perform some raft operations"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      --cert-file string         Path to the client server TLS cert file\n  -h, --help                     help for raft\n      --key-file string          Path to the client server TLS key file\n      --rpc-addr string          gRPC address of the agent. (default "{{ GetPrivateIP }}:6868")\n      --trusted-ca-file string   Path to the client server TLS trusted CA cert file\n')),(0,o.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      --config string   config file (default is /etc/dkron/dkron.yml)\n")),(0,o.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/cli/dkron/"},"dkron"),"\t - Professional distributed job scheduling system"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/cli/dkron_raft_list-peers/"},"dkron raft list-peers"),"\t - Command to list raft peers"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pro/cli/dkron_raft_remove-peer/"},"dkron raft remove-peer"),"\t - Command to list raft peers")),(0,o.kt)("h6",{id:"auto-generated-by-spf13cobra-on-7-oct-2022"},"Auto generated by spf13/cobra on 7-Oct-2022"))}d.isMDXComponent=!0}}]);