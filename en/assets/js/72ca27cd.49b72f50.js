"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,g=c["".concat(l,".").concat(m)]||c[m]||p[m]||s;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<s;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const s={title:"Middleware"},o=void 0,i={unversionedId:"basic/middleware",id:"basic/middleware",title:"Middleware",description:"You can functionally compose your store any way you like.\u3002",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/basic/middleware.md",sourceDirName:"basic",slug:"/basic/middleware",permalink:"/zustand-vue/en/docs/basic/middleware",draft:!1,editUrl:"https://github.com/AwesomeDevin/zustand-vue/tree/main/docs/docs/basic/middleware.md",tags:[],version:"current",frontMatter:{title:"Middleware"},sidebar:"tutorialSidebar",previous:{title:"Async Actions",permalink:"/zustand-vue/en/docs/basic/async"},next:{title:"Change Deeply Nested State\uff1f",permalink:"/zustand-vue/en/docs/advanced/sickof-changing-nested-state"}},l={},d=[{value:"Persist middleware",id:"persist-middleware",level:2},{value:"Immer middleware",id:"immer-middleware",level:2},{value:"Redux middleware",id:"redux-middleware",level:2},{value:"Devtools middle",id:"devtools-middle",level:2}],u={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can functionally compose your ",(0,a.kt)("inlineCode",{parentName:"p"},"store")," any way you like.\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Log every time state is changed\nconst log = (config) => (set, get, api) =>\n  config(\n    (...args) => {\n      console.log('  applying', args)\n      set(...args)\n      console.log('  new state', get())\n    },\n    get,\n    api\n  )\n\n// zustand / zustand-vue\nconst useBeeStore = create(\n  log((set) => ({\n    bees: false,\n    setBees: (input) => set({ bees: input }),\n  }))\n)\n\n// zustand-pub\nconst Pub = new PubStore('yourPub')\nconst pubStore = Pub.defineStore('yourPubStore', \n  log((set) => ({\n    bees: false,\n    setBees: (input) => set({ bees: input }),\n  }))\n)\n")),(0,a.kt)("h2",{id:"persist-middleware"},"Persist middleware"),(0,a.kt)("p",null,"You can persist your store's data using any kind of storage. (localStorage/cookie/database, etc.)\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { create } from 'zustand-vue'\n\n// import { create } from 'zustand'\n\n\nimport { persist, createJSONStorage } from 'zustand/middleware'\n\nconst useFishStore = create(\n  persist(\n    (set, get) => ({\n      fishes: 0,\n      addAFish: () => set({ fishes: get().fishes + 1 }),\n    }),\n    {\n      name: 'food-storage', // unique name\n      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used\n    }\n  )\n)\n")),(0,a.kt)("h2",{id:"immer-middleware"},"Immer middleware"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Immer")," is available as middleware too."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { create } from 'zustand-vue'\n\n// import { create } from 'zustand'\n\nimport { immer } from 'zustand/middleware/immer'\n\nconst useBeeStore = create(\n  immer((set) => ({\n    bees: 0,\n    addBees: (by) =>\n      set((state) => {\n        state.bees += by\n      }),\n  }))\n)\n")),(0,a.kt)("h2",{id:"redux-middleware"},"Redux middleware"),(0,a.kt)("p",null,"Let you write ",(0,a.kt)("inlineCode",{parentName:"p"},"zustand")," like ",(0,a.kt)("inlineCode",{parentName:"p"},"redux")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { redux } from 'zustand/middleware'\n\nconst types = { increase: 'INCREASE', decrease: 'DECREASE' }\n\nconst reducer = (state, { type, by = 1 }) => {\n  switch (type) {\n    case types.increase:\n      return { grumpiness: state.grumpiness + by }\n    case types.decrease:\n      return { grumpiness: state.grumpiness - by }\n  }\n}\n\nconst initialState = {\n  grumpiness: 0,\n  dispatch: (args) => set((state) => reducer(state, args)),\n}\n\nconst useReduxStore = create(redux(reducer, initialState))\n")),(0,a.kt)("h2",{id:"devtools-middle"},"Devtools middle"),(0,a.kt)("p",null,"Use the developer tool ",(0,a.kt)("inlineCode",{parentName:"p"},"Debug/Trace")," Store"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { devtools, persist } from 'zustand/middleware'\n\nconst useFishStore = create(\n  devtools(persist(\n    (set, get) => ({\n      fishes: 0,\n      addAFish: () => set({ fishes: get().fishes + 1 }),\n    }),\n  ))\n)\n")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/pmndrs/zustand/blob/main/docs/integrations/persisting-store-data.md"},"See the full documentation for this middleware.")))}c.isMDXComponent=!0}}]);