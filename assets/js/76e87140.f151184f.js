"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3795],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=l,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(k,o(o({ref:t},c),{},{components:r})):n.createElement(k,o({ref:t},c))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6727:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(7462),l=(r(7294),r(3905));const a={title:"Clustering"},o=void 0,i={unversionedId:"usage/clustering",id:"usage/clustering",title:"Clustering",description:"Configure a cluster",source:"@site/docs/usage/clustering.md",sourceDirName:"usage",slug:"/usage/clustering",permalink:"/docs/usage/clustering",draft:!1,editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/usage/clustering.md",tags:[],version:"current",frontMatter:{title:"Clustering"},sidebar:"tutorialSidebar",previous:{title:"Cloud Auto-join",permalink:"/docs/usage/cloud-auto-join"},next:{title:"Concurrency",permalink:"/docs/usage/concurrency"}},s={},u=[{value:"Configure a cluster",id:"configure-a-cluster",level:2},{value:"Deployment Table",id:"deployment-table",level:2}],c={toc:u};function d(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"configure-a-cluster"},"Configure a cluster"),(0,l.kt)("p",null,"Dkron can run in HA mode, avoiding SPOFs, this mode provides better scalability and better reliability for users that wants a high level of confidence in the cron jobs they need to run."),(0,l.kt)("p",null,"Manually bootstrapping a Dkron cluster does not rely on additional tooling, but does require operator participation in the cluster formation process. When bootstrapping, Dkron servers and clients must be started and informed with the address of at least one Dkron server."),(0,l.kt)("p",null,"As you can tell, this creates a chicken-and-egg problem where one server must first be fully bootstrapped and configured before the remaining servers and clients can join the cluster. This requirement can add additional provisioning time as well as ordered dependencies during provisioning."),(0,l.kt)("p",null,"First, we bootstrap a single Dkron server and capture its IP address. After we have that nodes IP address, we place this address in the configuration."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"First bootstrap a node with a configuration like this:")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# dkron.yml\nserver: true\nbootstrap-expect: 1\n")),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Then stop the bootstrapped server and capture the server IP address.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"To form a cluster, configure server nodes (including the bootstrapped server) with the address of its peers as in the following example:"))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"# dkron.yml\nserver: true\nbootstrap-expect: 3\nretry-join:\n- 10.19.3.9\n- 10.19.4.64\n- 10.19.7.215\n")),(0,l.kt)("h2",{id:"deployment-table"},"Deployment Table"),(0,l.kt)("p",null,"Below is a table that shows quorum size and failure tolerance for various\ncluster sizes. The recommended deployment is either 3 or 5 servers. A single\nserver deployment is ",(0,l.kt)("em",{parentName:"p"},(0,l.kt)("strong",{parentName:"em"},"highly"))," discouraged as data loss is inevitable in a\nfailure scenario."),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Servers"),(0,l.kt)("th",null,"Quorum Size"),(0,l.kt)("th",null,"Failure Tolerance"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"1"),(0,l.kt)("td",null,"0")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"0")),(0,l.kt)("tr",{class:"warning"},(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"2"),(0,l.kt)("td",null,"1")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"4"),(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"1")),(0,l.kt)("tr",{class:"warning"},(0,l.kt)("td",null,"5"),(0,l.kt)("td",null,"3"),(0,l.kt)("td",null,"2")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"6"),(0,l.kt)("td",null,"4"),(0,l.kt)("td",null,"2")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"7"),(0,l.kt)("td",null,"4"),(0,l.kt)("td",null,"3")))))}d.isMDXComponent=!0}}]);