import{d as c,u as i,_ as r}from"./index.d2badf28.js";c.extend(i);const u=(e="")=>e.replace(/\B([A-Z])/g,"-$1").toLowerCase(),l=Vue.defineComponent({props:{config:{type:Object,default:()=>({})}},setup(e){var t;const a=(t=Vue.getCurrentInstance())==null?void 0:t.proxy,o=Vue.inject("app");return Vue.provide("hoc",a),{tagName:Vue.computed(()=>`magic-ui-${u(e.config.type)}`),style:Vue.computed(()=>o==null?void 0:o.transformStyle(e.config.style)),display:()=>{var s;const n=(s=e.config)==null?void 0:s.display;return typeof n=="function"?n(o):n!==!1}}}});function p(e,a,o,t,n,s){return e.display()?(Vue.openBlock(),Vue.createBlock(Vue.resolveDynamicComponent(e.tagName),{key:0,id:e.config.id,class:Vue.normalizeClass(`magic-ui-component${e.config.className?` ${e.config.className}`:""}`),style:Vue.normalizeStyle(e.style),config:e.config},null,8,["id","class","style","config"])):Vue.createCommentVNode("v-if",!0)}const d=r(l,[["render",p],["__file","/Users/droden/dirs/new_banker_pro/found-pro/tmagic-editor/packages/ui/src/Component.vue"]]);export{d as C};
//# sourceMappingURL=Component.7fb42065.js.map
