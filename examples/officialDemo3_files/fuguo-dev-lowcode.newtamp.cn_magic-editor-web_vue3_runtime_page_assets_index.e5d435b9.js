import{C as c}from"./Component.737f8433.js";import{u as i}from"./useApp.8bd6dbd4.js";import{_ as s}from"./index.ee6b6f11.js";const r=Vue.defineComponent({components:{"magic-ui-component":c},props:{config:{type:Object,default:()=>({})}},setup(e){const o=i(e);return{style:Vue.computed(()=>o==null?void 0:o.transformStyle(e.config.style||{})),refresh(){window.location.reload()}}}}),a=["id"];function u(e,o,l,m,p,f){const t=Vue.resolveComponent("magic-ui-component");return Vue.openBlock(),Vue.createElementBlock("div",{id:`${e.config.id||""}`,class:Vue.normalizeClass(`magic-ui-page magic-ui-container magic-layout-${e.config.layout}${e.config.className?` ${e.config.className}`:""}`),style:Vue.normalizeStyle(e.style)},[Vue.renderSlot(e.$slots,"default"),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.config.items,n=>(Vue.openBlock(),Vue.createBlock(t,{key:n.id,config:n},null,8,["config"]))),128))],14,a)}const y=s(r,[["render",u],["__file","/project/packages/ui/src/page/src/index.vue"]]);export{y as default};
//# sourceMappingURL=index.e5d435b9.js.map