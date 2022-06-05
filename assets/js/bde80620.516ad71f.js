"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7910],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return b}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=l(t),b=o,d=f["".concat(u,".").concat(b)]||f[b]||p[b]||a;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},27272:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],c={},u="Job chaining",l={unversionedId:"usage/chaining",id:"usage/chaining",title:"Job chaining",description:"You can set some jobs to run after other job is executed. To setup a job that will be executed after any other given job, just set the parent_job property when saving the new job.",source:"@site/docs/usage/chaining.md",sourceDirName:"usage",slug:"/usage/chaining",permalink:"/docs/usage/chaining",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/usage/chaining.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"Cloud Auto-join",permalink:"/docs/usage/cloud-auto-join"}},s={},p=[],f={toc:p};function b(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"job-chaining"},"Job chaining"),(0,a.kt)("p",null,"You can set some jobs to run after other job is executed. To setup a job that will be executed after any other given job, just set the ",(0,a.kt)("inlineCode",{parentName:"p"},"parent_job")," property when saving the new job."),(0,a.kt)("p",null,"The dependent job will be executed after the main job finished a successful execution."),(0,a.kt)("p",null,"Child jobs schedule property will be ignored if it's present."),(0,a.kt)("p",null,"Take into account that parent jobs must be created before any child job."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "job1",\n  "schedule": "@every 10s",\n  "executor": "shell",\n  "executor_config": {\n    "command": "echo \\"Hello from parent\\""\n  }\n}\n\n{\n  "name": "child_job",\n  "parent_job": "job1",\n  "executor": "shell",\n  "executor_config": {\n    "command": "echo \\"Hello from child\\""\n  }\n}\n')))}b.isMDXComponent=!0}}]);