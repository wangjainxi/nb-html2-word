import{u as p}from"./useApp.8bd6dbd4.js";import{_}from"./index.ee6b6f11.js";const V=["innerHTML"],x=Vue.defineComponent({__name:"index",props:{config:{type:Object,required:!0},model:{type:Object,required:!1}},setup(g){const e=g,s=Vue.ref(1),l=Vue.ref(1),d=Vue.ref(!0);Vue.watch(()=>e.config.src,o=>{console.log(o,"props.config.src")},{immediate:!0}),p(e);const u=Vue.computed(()=>e.config.size);Vue.onMounted(()=>{var n;const o=document.querySelector(`.magic-ui-svgicon.${(n=e.config)==null?void 0:n.id}`)||null,t=new ResizeObserver(i=>{i.forEach(c=>{var r,a;if(((r=c==null?void 0:c.target)==null?void 0:r.id)===((a=e.config)==null?void 0:a.id)){const{width:f,height:m}=c.contentRect;s.value=f/u.value,l.value=m/u.value,e.config.style.width=f,e.config.style.height=m}})});o&&t.observe(o),Vue.onBeforeUnmount(()=>{o&&t.unobserve(o)})});const v=o=>{var i;const t=/fill=("([^>+].*?)"|'([^>+].*?)')/g;return o.config.svgHtmlStr.replace(t,`fill="${(i=o.config)==null?void 0:i.fill}"`)};return(o,t)=>{var n;return Vue.openBlock(),Vue.createElementBlock("div",{class:Vue.normalizeClass(["magic-ui-svgicon t-inline-block magic-ui-image-module",`${(n=e.config)==null?void 0:n.id}`])},[d.value?(Vue.openBlock(),Vue.createElementBlock("div",{key:0,style:Vue.normalizeStyle({transform:`scale(${s.value},${l.value})`}),class:"svg-icon-box"},[Vue.createElementVNode("div",{innerHTML:v(e),style:Vue.normalizeStyle([{display:"inline-flex"},{fontSize:`${e.config.size}px`}])},null,12,V)],4)):Vue.createCommentVNode("v-if",!0)],2)}}});const z=_(x,[["__file","/project/packages/ui/src/svgIcon/src/index.vue"]]);export{z as default};
//# sourceMappingURL=index.5ab8f016.js.map
