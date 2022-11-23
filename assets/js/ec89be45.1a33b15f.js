"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[8373],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3766:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},assets:function(){return u},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={slug:"the-future-of-mev-is-suave",title:"The Future of MEV is SUAVE",authors:["flashbots"],tags:["suave","sgx","orderflow auction","roadmap"],image:"/img/posts/suave/logo-landscape.jpg",hide_table_of_contents:!1,description:"After successfully isolating the centralizing effects of MEV to the block builder role, we turn ourselves toward a new challenge - to decentralize block building itself."},s=void 0,c={permalink:"/the-future-of-mev-is-suave",source:"@site/content/2022-11-23-suave.mdx",title:"The Future of MEV is SUAVE",description:"After successfully isolating the centralizing effects of MEV to the block builder role, we turn ourselves toward a new challenge - to decentralize block building itself.",date:"2022-11-23T00:00:00.000Z",formattedDate:"November 23, 2022",tags:[{label:"suave",permalink:"/tags/suave"},{label:"sgx",permalink:"/tags/sgx"},{label:"orderflow auction",permalink:"/tags/orderflow-auction"},{label:"roadmap",permalink:"/tags/roadmap"}],readingTime:19.37,truncated:!0,authors:[{name:"Flashbots",title:"The Flashbots Collective",url:"https://flashbots.net",imageURL:"https://s5-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/389/100/original/Robot_Emoji_OG.png?1657818356",key:"flashbots"}],nextItem:{title:"The Cost of Resilience",permalink:"/the-cost-of-resilience"}},u={authorsImageUrls:[void 0]},p=[],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"TLDR:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"After successfully isolating the centralizing effects of MEV to the block builder role, we turn ourselves toward a new challenge: ",(0,a.kt)("em",{parentName:"li"},"to decentralize block building itself"),". Exclusive orderflow and cross-domain MEV present emerging centralization threats to all cryptocurrencies, so ",(0,a.kt)("strong",{parentName:"li"},"we must make sure to keep MEV decentralized, or the decentralization of crypto will be lost.")),(0,a.kt)("li",{parentName:"ul"},"To hold ourselves to our decentralization commitments, we are building ",(0,a.kt)("strong",{parentName:"li"},"SUAVE - the Single Unifying Auction for Value Expression"),"."),(0,a.kt)("li",{parentName:"ul"},"SUAVE ",(0,a.kt)("strong",{parentName:"li"},"unbundles the mempool and block builder role")," from existing blockchains and offers a highly specialized and decentralized ",(0,a.kt)("strong",{parentName:"li"},"plug-and-play alternative"),". Sharing the same sequencing layer allows crypto to stay decentralized, block builders to capture cross-domain MEV, validators to maximize their revenue, and users to transact with the best execution, while reducing the economic centralization pressure on each domain."),(0,a.kt)("li",{parentName:"ul"},"We are building SUAVE in the open and invite all interested parties \u2014 users, wallets, searchers, builders, researchers, and blockchain developers \u2014 to work with us.")))}d.isMDXComponent=!0}}]);