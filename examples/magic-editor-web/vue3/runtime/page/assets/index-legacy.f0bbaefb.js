System.register(["./useStyle-legacy.3c20cb1b.js","./useApp-legacy.d06aeb34.js","./util-legacy.a8cddc4f.js","./index-legacy.9e5cf6a3.js"],(function(e,t){"use strict";var o,a,i,s,l,n,r,c,d=document.createElement("style");return d.textContent=".t-inline-block[data-v-421bebd5]{display:inline-block}\n",document.head.appendChild(d),{setters:[e=>{o=e.u,a=e.a,i=e.L},e=>{s=e.u},e=>{l=e.b,n=e.s,r=e.a},e=>{c=e._}],execute:function(){const t=Vue.defineComponent({__name:"index",props:{config:{type:null,required:!0}},setup(e){const t=e;s(t);const c=Vue.ref(null),d=Vue.shallowRef(),u=()=>{const{dataList:e,colList:o}=t.config.dataSourceModel,a=e.reduce(((e,t)=>{const{xAxisData:a,seriesData:i}=e;return t.forEach(((e,t)=>{if(0===t)a.push(e);else{const a=t-1;i[a]=i[a]||{data:[]},i[a].data.push(e);const s=o?.[t];i[a].color=s.color,i[a].name=s.label,i[a].gradient=s.gradient}})),e}),{xAxisData:[],seriesData:[]});return{xAxisData:a.xAxisData,series:a.seriesData.map((e=>({name:e.name,data:e.data,color:e.color,type:"line",smooth:t.config.smooth,areaStyle:p(t.config.hasAreaStyle,e.gradient)}))),legendData:o?.slice(1).map((e=>e.label))}},p=(e,t)=>e?{opacity:1,color:new i(0,0,0,1,[{offset:0,color:t[0]},{offset:1,color:t[1]}])}:void 0;Vue.onMounted((()=>{const{config:e}=t,a={legend:[{icon:"roundRect",itemWidth:e.legendItemWidth,itemHeight:e.legendItemHeight,data:e.dataSourceModel.colList?.slice(1).map((e=>e.label))}],grid:{top:e.gridTop,right:e.gridRight,bottom:e.gridBottom,left:e.gridLeft,containLabel:!0},tooltip:{show:e.tooltip,trigger:"axis",axisPointer:{type:"cross"}},xAxis:[{type:"category",data:[],boundaryGap:!1,axisLabel:{textStyle:{color:e.axisLabelTextColor}},axisLine:{lineStyle:{color:e.xAxisAxisLineColor}}}],yAxis:[{type:"value",axisLabel:{textStyle:{color:e.axisLabelTextColor}},splitLine:{lineStyle:{type:e.splitLineType,color:e.splitLineColor}}}],series:[]};l(a,u),d.value=o(a,c).value,Vue.watch((()=>t.config),((e,t)=>{const o=d.value?.getOption();if(!o)return;const a=n(e,t);if(r(a,o,e),a("smooth")&&o.series.forEach((t=>{t.smooth=e.smooth})),a("hasAreaStyle")){const t=e.dataSourceModel?.colList;o.series=o.series.map(((o,a)=>(o.areaStyle=p(e.hasAreaStyle,t?.[a+1].gradient),o)))}l(o,u),d.value.setOption(o)}))}));const g=a(t,d);return(e,t)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"t-inline-block magic-ui-echart-module",ref_key:"refContainer",ref:c,style:Vue.normalizeStyle(Vue.unref(g))},null,4))}});e("default",c(t,[["__scopeId","data-v-421bebd5"],["__file","/Users/droden/dirs/new_banker_pro/found-pro/tmagic-editor/packages/ui/src/carea/src/index.vue"]]))}}}));
//# sourceMappingURL=index-legacy.f0bbaefb.js.map
