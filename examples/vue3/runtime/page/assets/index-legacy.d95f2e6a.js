System.register(["./commonConfig-legacy.c5b0b5bf.js","./useApp-legacy.d06aeb34.js","./useStyle-legacy.3c20cb1b.js","./util-legacy.a8cddc4f.js","./index-legacy.9e5cf6a3.js"],(function(e,t){"use strict";var o,n,i,l,s,c,r,a=document.createElement("style");return a.textContent=".t-inline-block[data-v-132dbd46]{display:inline-block}\n",document.head.appendChild(a),{setters:[e=>{o=e.l},e=>{n=e.u},e=>{i=e.u,l=e.a},e=>{s=e.s,c=e.d},e=>{r=e._}],execute:function(){const t=Vue.defineComponent({__name:"index",props:{config:{type:null,required:!0}},setup(e){const t=e;n(t);const r=Vue.ref(null),a=Vue.shallowRef(),u=()=>{const{dataList:e,colList:o,colors:n}=t.config.dataSourceModel,{sort:i,gap:l,gridTop:s,gridRight:c,gridBottom:r,gridLeft:a}=t.config,u={name:o[1].label,type:"funnel",top:s,right:c,bottom:r,left:a,sort:i,gap:Number(l),label:{show:!0,position:"inside"},data:e?.map(((e,t)=>{const[o,i]=e,l={name:o,value:i},s=n[t];return s&&(l.itemStyle={color:s}),l}))};return{series:[u]}};Vue.onMounted((()=>{const{config:e}=t,n={legend:[o(e)],tooltip:[{show:e.tooltip,trigger:"item"}],series:[]};a.value=i(n,r).value,Vue.watch((()=>t.config),((e,t={})=>{const o=a.value?.getOption(),n=s(e,t);c(n,o,e),n("tooltip")&&(o.tooltip[0].show=e.tooltip),((e,t)=>{const o=t();e.series=o.series})(o,u),a.value.setOption(o)}),{immediate:!0})}));const d=l(t,a);return(e,t)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"t-inline-block magic-ui-echart-module",ref_key:"refCplot",ref:r,style:Vue.normalizeStyle(Vue.unref(d))},null,4))}});e("default",r(t,[["__scopeId","data-v-132dbd46"],["__file","/Users/droden/dirs/new_banker_pro/found-pro/tmagic-editor/packages/ui/src/cplot/src/index.vue"]]))}}}));
//# sourceMappingURL=index-legacy.d95f2e6a.js.map
