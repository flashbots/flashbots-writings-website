"use strict";(self.webpackChunkwrittings_website=self.webpackChunkwrittings_website||[]).push([[1888],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>d});var r=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||n;return a?r.createElement(d,i(i({ref:t},h),{},{components:a})):r.createElement(d,i({ref:t},h))}));function d(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,i=new Array(n);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<n;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6764:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var r=a(7462),o=(a(7294),a(3905));const n={slug:"design-mev-marketplaces",title:"On the Design of MEV Marketplaces",authors:["robert"],tags:["flashbots",1559],image:"/img/design-mev-marketplaces-1.jpeg",hide_table_of_contents:!1},i=void 0,s={permalink:"/design-mev-marketplaces",source:"@site/content/2021-08-04-design-mev-marketplaces.mdx",title:"On the Design of MEV Marketplaces",description:"The beating heart of every blockchain is how space is allocated within a block. In less than 24 hours, Ethereum will undergo a historic change to how blockspace is allocated as transaction inclusion rules drastically change with the activation of EIP-1559. However, EIP-1559 does not affect miners\u2019 ability to reorder, insert, or censor transactions, and as such it largely does not have an impact on MEV (Maximal Extractable Value).",date:"2021-08-04T00:00:00.000Z",formattedDate:"August 4, 2021",tags:[{label:"flashbots",permalink:"/tags/flashbots"},{label:"1559",permalink:"/tags/1559"}],readingTime:5.48,truncated:!0,authors:[{name:"Robert Miller",title:"Product @Flashbots",url:"https://twitter.com/bertcmiller",imageURL:"https://pbs.twimg.com/profile_images/1336354612064911360/qGVMxddJ_400x400.jpg",key:"robert"}],prevItem:{title:"Flashbots Transparency Report \u2014 July & August 2021",permalink:"/transparency-july-august"},nextItem:{title:"MEV and EIP-1559",permalink:"/mev-1559"}},l={authorsImageUrls:[void 0]},c=[{value:"The Changing Role of Block Producers in Ethereum",id:"the-changing-role-of-block-producers-in-ethereum",children:[]},{value:"Desirable Properties of MEV Marketplaces",id:"desirable-properties-of-mev-marketplaces",children:[]},{value:"Conclusion",id:"conclusion",children:[]}],h={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The beating heart of every blockchain is how space is allocated within a block. In less than 24 hours, Ethereum will undergo a historic change to how blockspace is allocated as transaction inclusion rules drastically change with the activation of EIP-1559. However, EIP-1559 does not affect miners\u2019 ability to reorder, insert, or censor transactions, and as such it largely does not have an impact on MEV (Maximal Extractable Value)."),(0,o.kt)("p",null,"At Flashbots our goal is to design systems that are long term incentive aligned for all of Ethereum\u2019s stakeholders, including users, searchers, applications, and the network\u2019s keepers today and in the future: miners and validators. Central to this goal is the design of marketplaces for transaction ordering \u2014 or MEV marketplaces \u2014 that are democratic and efficient. Flashbots has been successful in achieving this goal on Ethereum to date with our Alpha."),(0,o.kt)("p",null,"Given the major changes to the blockspace market on Ethereum today, and how the role of block producers on Ethereum will change in the near future, we\u2019d like to share how Flashbots thinks about designing MEV marketplaces."),(0,o.kt)("h2",{id:"the-changing-role-of-block-producers-in-ethereum"},"The Changing Role of Block Producers in Ethereum"),(0,o.kt)("p",null,"On Ethereum today mining consists of two jobs. First, creating the most profitable block. Second, attesting to this with a proof-of-work and propagating it to the network. Prior to the widespread adoption of MEV extraction the first job mainly consisted of ordering transactions received by their gas price. There was little revenue for miners to have in optimizing this, and they primarily focused on more profitable network-level optimizations."),(0,o.kt)("p",null,"However, since MEV extraction is now widespread on the Ethereum network the job of miners has significantly changed. In order to produce the most profitable block, miners must now find the optimal ordering of transactions within a block to extract the maximum amount of MEV. This daunting task is exponentially more difficult than sorting transactions by gas price, and hence an entire industry has spawned to provide this service to miners. Due to this industry, revenue from MEV now makes up a significant share of miners\u2019 income even prior to EIP-1559."),(0,o.kt)("p",null,"It is essential to the Ethereum network\u2019s security that all miners, no matter how large or small, can build the most profitable blocks possible. Otherwise larger miners will be able to use their resources to optimize their MEV extraction strategies more than other miners. In turn, the greater revenue from MEV can be used to grow more and further cement their dominance in the network."),(0,o.kt)("p",null,"Flashbots believes that a separation between the party that proposes a block and the party that builds a block is the ideal way to achieve our goal of building a long term incentive-aligned system. Instead of block proposers creating MEV-optimized blocks themselves, they should rely on a marketplace of specialized third parties who build blocks for them in return for a fee. The block proposer\u2019s role is then to pick the highest revenue block, an algorithm which is even more simple than ordering by gas price. Block producers who wish can participate as both proposers and builders as well, which allows them to get value from proposing blocks both for themselves and others."),(0,o.kt)("h2",{id:"desirable-properties-of-mev-marketplaces"},"Desirable Properties of MEV Marketplaces"),(0,o.kt)("p",null,"Beyond this high level architecture, how should this system be designed? How can we ensure long term incentive-alignment for all stakeholders and what are the properties that we are optimizing for? Flashbots evaluates MEV marketplaces along these dimensions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Efficiency: the system should provide maximum value to block producers, transaction senders and the Ethereum ecosystem as a whole.")," It should avoid needless inefficiency (eg. waste from failed transactions being included on-chain) and avoid facilitating negative-sum attacks against applications. By doing so it ensures that block producers have access to the most profitable blocks, and in particular blocks that are competitive with any proprietary MEV extraction solutions. As we noted above this is an important property of ensuring that MEV extraction remains democratized.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Avoiding capture:")," the system should avoid deliberately introducing, and maximally protect against the accidental entrenchment of, actors that gain a position of value extraction and control from the MEV marketplace."))),(0,o.kt)("p",null,"For example, an MEV marketplace with a built-in token fails at this: the token holders become a value extractor, and furthermore governance tokens ",(0,o.kt)("a",{parentName:"p",href:"https://hackingdistributed.com/2018/07/02/on-chain-vote-buying/"},"in general are risky"),". This risk may be tolerable for applications, but if a token-governed DAO is used to control base-layer transaction inclusion, a powerful economic actor who captures its governance could use that power to extract value, censor transactions, and even use the carrot of their monopoly on MEV revenue to push other miners into participating in hostile soft forks."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Permissionlessness:")," anyone should be able to participate in the MEV marketplace. Doing so will maximize revenue for market participants and make the market the most robust against shocks in the long term. If required for anti-abuse purposes, cryptoeconomic bonding models are ok, but centrally issued (or even DAO-governed) whitelists should be maximally avoided. Where possible Ether is preferred as a unit of account because it is maximally permissionless.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Privacy:")," MEV marketplaces should give participants privacy until their transactions successfully land on-chain. This is desirable because it enables a more efficient marketplace. Searchers would have the assurance that their strategies would not be frontrunnable or subject to unbundling by block producers. In turn this maintains incentives for permissionless innovation and would lead to more searcher strategies and more revenue for searchers and miners."))),(0,o.kt)("p",null,"We believe that ",(0,o.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/mev-sgx-a-sealed-bid-mev-auction-design/9677"},"MEV-SGX")," ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=GzuyOYiuipg"},"together")," with a ",(0,o.kt)("a",{parentName:"p",href:"https://ethresear.ch/t/proposer-block-builder-separation-friendly-fee-market-designs/9725"},"cryptoeconomic solution for a separation of block proposers and builders")," meet all of these properties. We encourage the community to engage with us as we seek to further specify how such a solution works in practice as well as evaluating alternatives that could also achieve these properties."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Flashbots sees the task of building a democratic and efficient MEV marketplace as existential for cryptocurrency for the reasons outlined above. We believe that building in public is the best way to maximize the likelihood of doing so. That is why we regularly have public conferences, such as ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/flashbots/pm#mev-roast-recordings"},"MEV Roasts"),", hosted by independent third parties where our ideas are publicly scrutinized. It is also why we require feedback from multiple stakeholders as a core part of our development process."),(0,o.kt)("p",null,"As we collectively navigate the current and future changes to Ethereum we invite all members of the cryptocurrency community to hold us to these standards. We encourage engagement on existing and new designs for achieving the properties of efficiency, permissionlessness, avoiding capture, and privacy. Lastly, we caution against sudden changes to the MEV marketplace without careful consideration and study."))}p.isMDXComponent=!0}}]);