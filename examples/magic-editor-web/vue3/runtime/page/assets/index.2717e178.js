import{u}from"./useApp.8bd6dbd4.js";import{_ as i}from"./index.d2badf28.js";const a=Vue.defineComponent({props:{config:{type:Object,default:()=>({opacity:0,blur:0,hueRotate:0})},model:{type:Object,default:()=>({})}},setup(e){u(e);const t=Vue.ref(100);return Vue.watch(()=>e.config.opacity,o=>{t.value=o/100},{immediate:!0}),{opacity:t,hueRotate:Vue.computed(()=>e.config.hueRotate),blur:Vue.computed(()=>e.config.blur)}}}),c=["src"];function r(e,t,o,n,s,l){return Vue.openBlock(),Vue.createElementBlock("img",{class:"magic-ui-img magic-ui-image-module",style:Vue.normalizeStyle({opacity:e.opacity,filter:`blur(${e.blur}px) hue-rotate(${e.hueRotate}deg)`}),src:e.config.src,alt:"magic ui image"},null,12,c)}const d=i(a,[["render",r],["__file","/Users/droden/dirs/new_banker_pro/found-pro/tmagic-editor/packages/ui/src/img/src/index.vue"]]);export{d as default};
//# sourceMappingURL=index.2717e178.js.map