System.register(["./Component-legacy.6af3d30b.js","./useApp-legacy.d06aeb34.js","./index-legacy.9e5cf6a3.js"],(function(e,n){"use strict";var o,t,i;return{setters:[e=>{o=e.C},e=>{t=e.u},e=>{i=e._}],execute:function(){const n=e=>({show:()=>{e.config.style.display="initial"},hide:()=>{e.config.style.display="none"}}),c=Vue.defineComponent({components:{"magic-ui-component":o},props:{config:{type:Object,default:()=>({})}},setup(e){const o=t(e);return console.log(e.config,"props.config"),{style:Vue.computed((()=>o?.transformStyle(e.config.style||{}))),display:()=>{const n=e.config?.display;return"function"==typeof n?n(o):!1!==n},isImageArea:Vue.computed((()=>e.config.isImageArea)),...n(e)}}}),s=["id"];e("default",i(c,[["render",function(e,n,o,t,i,c){const a=Vue.resolveComponent("magic-ui-component");return e.display()?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,id:`${e.config.id||""}`,class:Vue.normalizeClass(`magic-ui-container magic-layout-${e.config.layout}${e.config.className?` ${e.config.className}`:""} ${e.isImageArea?"magic-ui-area-module":""}`),style:Vue.normalizeStyle(e.style)},[Vue.renderSlot(e.$slots,"default"),(Vue.openBlock(!0),Vue.createElementBlock(Vue.Fragment,null,Vue.renderList(e.config.items,(e=>(Vue.openBlock(),Vue.createBlock(a,{key:e.id,config:e},null,8,["config"])))),128))],14,s)):Vue.createCommentVNode("v-if",!0)}],["__file","/Users/droden/dirs/new_banker_pro/found-pro/tmagic-editor/packages/ui/src/container/src/Container.vue"]]))}}}));
//# sourceMappingURL=Container-legacy.6e326b4a.js.map
