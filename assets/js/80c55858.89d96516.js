"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9045],{3905:function(e,n,r){r.d(n,{Zo:function(){return d},kt:function(){return v}});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=t.createContext({}),c=function(e){var n=t.useContext(s),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},d=function(e){var n=c(e.components);return t.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(r),v=o,f=p["".concat(s,".").concat(v)]||p[v]||u[v]||a;return r?t.createElement(f,i(i({ref:n},d),{},{components:r})):t.createElement(f,i({ref:n},d))}));function v(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},67494:function(e,n,r){r.r(n),r.d(n,{assets:function(){return d},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var t=r(87462),o=r(63366),a=(r(67294),r(3905)),i=["components"],l={date:new Date("2019-03-22T00:00:00.000Z"),title:"dkron leave",slug:"dkron_leave",url:"/v1.2/cli/dkron_leave/"},s=void 0,c={unversionedId:"cli/dkron_leave",id:"version-v1/cli/dkron_leave",title:"dkron leave",description:"dkron leave",source:"@site/versioned_docs/version-v1/cli/dkron_leave.md",sourceDirName:"cli",slug:"/cli/dkron_leave",permalink:"/docs/v1/cli/dkron_leave",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/versioned_docs/version-v1/cli/dkron_leave.md",tags:[],version:"v1",frontMatter:{date:"2019-03-22T00:00:00.000Z",title:"dkron leave",slug:"dkron_leave",url:"/v1.2/cli/dkron_leave/"},sidebar:"tutorialSidebar",previous:{title:"dkron keygen",permalink:"/docs/v1/cli/dkron_keygen"},next:{title:"dkron version",permalink:"/docs/v1/cli/dkron_version"}},d={},u=[{value:"dkron leave",id:"dkron-leave",level:2},{value:"Synopsis",id:"synopsis",level:3},{value:"Options",id:"options",level:3},{value:"Options inherited from parent commands",id:"options-inherited-from-parent-commands",level:3},{value:"SEE ALSO",id:"see-also",level:3},{value:"Auto generated by spf13/cobra on 22-Mar-2019",id:"auto-generated-by-spf13cobra-on-22-mar-2019",level:6}],p={toc:u};function v(e){var n=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"dkron-leave"},"dkron leave"),(0,a.kt)("p",null,"Force an agent to leave the cluster"),(0,a.kt)("h3",{id:"synopsis"},"Synopsis"),(0,a.kt)("p",null,"Stop stops an agent, if the agent is a server and is running for election\nstop running for election, if this server was the leader\nthis will force the cluster to elect a new leader and start a new scheduler.\nIf this is a server and has the scheduler started stop it, ignoring if this server\nwas participating in leader election or not (local storage).\nThen actually leave the cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"dkron leave [flags]\n")),(0,a.kt)("h3",{id:"options"},"Options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  -h, --help              help for leave\n      --rpc-addr string   gRPC address of the agent (default "127.0.0.1:6868")\n')),(0,a.kt)("h3",{id:"options-inherited-from-parent-commands"},"Options inherited from parent commands"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      --config string   config file path\n")),(0,a.kt)("h3",{id:"see-also"},"SEE ALSO"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/v1/cli/dkron/"},"dkron"),"\t - Open source distributed job scheduling system")),(0,a.kt)("h6",{id:"auto-generated-by-spf13cobra-on-22-mar-2019"},"Auto generated by spf13/cobra on 22-Mar-2019"))}v.isMDXComponent=!0}}]);