System.register(["./commonConfig-legacy.c5b0b5bf.js","./useApp-legacy.d06aeb34.js","./useStyle-legacy.3c20cb1b.js","./util-legacy.a8cddc4f.js","./index-legacy.9e5cf6a3.js"],(function(e,t){"use strict";var a,i,o,l,s,n,c,r,d,u=document.createElement("style");return u.textContent=".t-inline-block[data-v-8027c00c]{display:inline-block}\n",document.head.appendChild(u),{setters:[e=>{a=e.l},e=>{i=e.u},e=>{o=e.u,l=e.a},e=>{s=e.s,n=e.a,c=e.g,r=e.b},e=>{d=e._}],execute:function(){e("default",d(Vue.defineComponent({__name:"index",props:{config:{type:null,required:!0}},setup(e){const t=e;i(t);const d=Vue.ref(null),u=Vue.shallowRef();let x=[];const p=()=>{const{dataList:e,colList:a}=t.config.dataSourceModel,i=e.reduce(((e,t)=>{const{xAxisData:i,seriesData:o}=e;return t.forEach(((e,t)=>{if(0===t)i.push(e);else{const i=t-1;o[i]=o[i]||{data:[]};const l=o[i],s=a[t];l.name=s.label,l.type=s.type,"candlestick"===s.type?l.data.push(e.split(",")):(l.symbol=s.hasSymbol?"emptyCircle":"none",l.color=s.color,l.lineStyle={opacity:.5},l.data.push(e))}})),e}),{xAxisData:[],seriesData:[]});return x=i.xAxisData,{xAxisData:i.xAxisData,series:i.seriesData,legendData:a?.slice(1).map((e=>e.label))}};Vue.onMounted((()=>{const{config:e}=t,i={legend:[{...a(e),data:e.dataSourceModel.colList?.slice(1).map((e=>e.label))}],grid:{top:e.gridTop,right:e.gridRight,bottom:e.gridBottom,left:e.gridLeft,containLabel:!0},tooltip:[{show:e.tooltip,trigger:"axis",axisPointer:{type:"cross"}}],xAxis:[{type:"category",data:[],boundaryGap:!1,axisLabel:{textStyle:{color:e.axisLabelTextColor},fontSize:e.xAxisFontSize},axisLine:{onZero:!1,lineStyle:{color:e.xAxisAxisLineColor}},min:"dataMin",max:"dataMax"}],yAxis:[{type:"value",axisLabel:{textStyle:{color:e.axisLabelTextColor}},splitLine:{lineStyle:{type:e.splitLineType,color:e.splitLineColor}}}],series:[]};u.value=o(i,d).value,Vue.watch((()=>t.config),((e,t={})=>{const a=u.value?.getOption(),i=s(e,t);if(n(i,a,e,{suffixFormat:!0}),i("xAxisHeadTailTextFormat","xAxisFontSize")){const t=x.length-1,i=e.xAxisHeadTailTextFormat&&t>0;Object.assign(a.xAxis[0].axisLabel,i?c(t,e.xAxisFontSize):{formatter:void 0,rich:void 0})}r(a,p),u.value.setOption(a,!0)}),{immediate:!0})}));const y=l(t,u);return(e,t)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"t-inline-block magic-ui-echart-module",ref_key:"refKCline",ref:d,style:Vue.normalizeStyle(Vue.unref(y))},null,4))}}),[["__scopeId","data-v-8027c00c"],["__file","/Users/droden/dirs/new_banker_pro/found-pro/tmagic-editor/packages/ui/src/ckline/src/index.vue"]]))}}}));
//# sourceMappingURL=index-legacy.4ba8793e.js.map
