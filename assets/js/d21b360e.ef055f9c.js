"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9188],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return k}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),k=o,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||a;return t?r.createElement(m,i(i({ref:n},p),{},{components:t})):r.createElement(m,i({ref:n},p))}));function k(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},42315:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={},s="Installation",u={unversionedId:"basics/installation",id:"basics/installation",title:"Installation",description:"Running the binary",source:"@site/docs/basics/installation.md",sourceDirName:"basics",slug:"/basics/installation",permalink:"/docs/basics/installation",editUrl:"https://github.com/distribworks/dkron/tree/main/website/docs/docs/basics/installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Configuration",permalink:"/docs/basics/configuration"},next:{title:"Intro",permalink:"/docs/intro"}},p={},c=[{value:"Running the binary",id:"running-the-binary",level:2},{value:"Installing the package",id:"installing-the-package",level:2},{value:"Debian repo",id:"debian-repo",level:3},{value:"YUM repo",id:"yum-repo",level:3},{value:"Running in Docker",id:"running-in-docker",level:2},{value:"Launching Dkron as a new container",id:"launching-dkron-as-a-new-container",level:3},{value:"Mounting a mapped file storage volume",id:"mounting-a-mapped-file-storage-volume",level:3}],d={toc:c};function k(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("h2",{id:"running-the-binary"},"Running the binary"),(0,a.kt)("p",null,"Download the packaged archive for your platform from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/distribworks/dkron/releases"},"downloads page")," and extract the package to a shared location in your drive, like /opt/local/bin."),(0,a.kt)("p",null,"Run Dkron with default setting: ",(0,a.kt)("inlineCode",{parentName:"p"},"dkron agent --server --bootstrap-expect=1")),(0,a.kt)("p",null,"Navigate to http://localhost:8080/ui"),(0,a.kt)("h2",{id:"installing-the-package"},"Installing the package"),(0,a.kt)("h3",{id:"debian-repo"},"Debian repo"),(0,a.kt)("p",null,"APT repository: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"deb [trusted=yes] https://repo.distrib.works/apt/ /\n")),(0,a.kt)("p",null,"Then install: ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo apt-get install dkron")),(0,a.kt)("h3",{id:"yum-repo"},"YUM repo"),(0,a.kt)("p",null,"YUM repository:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"[dkron]\nname=Dkron Pro Private Repo\nbaseurl=https://repo.distrib.works/yum/\nenabled=1\ngpgcheck=0\n")),(0,a.kt)("p",null,"Then install: ",(0,a.kt)("inlineCode",{parentName:"p"},"sudo yum install dkron")),(0,a.kt)("p",null,"This will start Dkron as a system service and the place example configuration file under ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/dkron/dkron.yml")),(0,a.kt)("h2",{id:"running-in-docker"},"Running in Docker"),(0,a.kt)("p",null,"Dkron provides an official Docker image vi Dockerhub that can be used for deployment on any system running Docker."),(0,a.kt)("h3",{id:"launching-dkron-as-a-new-container"},"Launching Dkron as a new container"),(0,a.kt)("p",null,"Here\u2019s a quick one-liner to get you off the ground (please note, we recommend further configuration for production deployments below):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d -p 8080:8080 --name dkron dkron/dkron agent --server --bootstrap-expect=1 --node-name=node1\n")),(0,a.kt)("p",null,"This will launch a Dkron server on port 8080 by default. You can use ",(0,a.kt)("inlineCode",{parentName:"p"},"docker logs -f dkron")," to follow the rest of the initialization progress. Once the Dkron startup completes you can access the app at localhost:8080"),(0,a.kt)("p",null,"Since Docker containers have their own ports and we just map them to the system ports as needed it\u2019s easy to move Dkron onto a different system port if you wish. For example running Dkron on port 12345:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d -p 12345:8080 --name dkron dkron/dkron agent --server --bootstrap-expect=1 --node-name=node1\n")),(0,a.kt)("h3",{id:"mounting-a-mapped-file-storage-volume"},"Mounting a mapped file storage volume"),(0,a.kt)("p",null,"Dkron uses the local filesystem for storing the embedded database to store its own application data and the Raft protocol log. The end result is that your Dkron data will be on disk inside your container and lost if you ever remove the container."),(0,a.kt)("p",null,"To persist your data outside of the container and make it available for use between container launches we can mount a local path inside our container."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"docker run -d -p 8080:8080 -v ~/dkron.data:/dkron.data --name dkron dkron/dkron agent --server --bootstrap-expect=1 --data-dir=/dkron.data\n")),(0,a.kt)("p",null,"Now when you launch your container we are mounting that folder from our local filesystem into the container."))}k.isMDXComponent=!0}}]);