import{u as p}from"./useApp.8bd6dbd4.js";import{_}from"./index.d2badf28.js";const V=["innerHTML"],x=Vue.defineComponent({__name:"index",props:{config:{type:Object,required:!0},model:{type:Object,required:!1}},setup(m){const e=m,s=Vue.ref(1),l=Vue.ref(1),g=Vue.ref(!0);Vue.watch(()=>e.config.src,o=>{console.log(o,"props.config.src")},{immediate:!0}),p(e);const r=Vue.computed(()=>e.config.size);Vue.onMounted(()=>{var n;const o=document.querySelector(`.magic-ui-svgicon.${(n=e.config)==null?void 0:n.id}`)||null,i=new ResizeObserver(t=>{t.forEach(c=>{var u,a;if(((u=c==null?void 0:c.target)==null?void 0:u.id)===((a=e.config)==null?void 0:a.id)){const{width:f,height:d}=c.contentRect;s.value=f/r.value,l.value=d/r.value,e.config.style.width=f,e.config.style.height=d}})});o&&i.observe(o),Vue.onBeforeUnmount(()=>{o&&i.unobserve(o)})});const v=o=>{var t;const i=/fill=("([^>+].*?)"|'([^>+].*?)')/g;return o.config.svgHtmlStr.replace(i,`fill="${(t=o.config)==null?void 0:t.fill}"`)};return(o,i)=>{var n;return Vue.openBlock(),Vue.createElementBlock("div",{class:Vue.normalizeClass(["magic-ui-svgicon t-inline-block magic-ui-image-module",`${(n=e.config)==null?void 0:n.id}`])},[g.value?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,style:Vue.normalizeStyle({transform:`scale(${s.value},${l.value})`}),class:"svg-icon-box"},[Vue.createElementVNode("div",{innerHTML:v(e),style:Vue.normalizeStyle([{display:"inline-flex"},{fontSize:`${e.config.size}px`}])},null,12,V)],4)):Vue.createCommentVNode("v-if",!0)],2)}}});const z=_(x,[["__file","/Users/droden/dirs/new_banker_pro/found-pro/tmagic-editor/packages/ui/src/svgIcon/src/index.vue"]]);export{z as default};
//# sourceMappingURL=index.7d1317ed.js.map
