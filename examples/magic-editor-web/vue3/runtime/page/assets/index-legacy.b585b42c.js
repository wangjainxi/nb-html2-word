System.register(["./useApp-legacy.d06aeb34.js","./useStyle-legacy.3c20cb1b.js","./index-legacy.9e5cf6a3.js"],(function(e,t){"use strict";var i,n,o,l,a=document.createElement("style");return a.textContent=".t-inline-block[data-v-9637c150]{display:inline-block}\n",document.head.appendChild(a),{setters:[e=>{i=e.u},e=>{n=e.u,o=e.a},e=>{l=e._}],execute:function(){e("default",l(Vue.defineComponent({__name:"index",props:{config:{type:null,required:!0}},setup(e){const t=e;i(t);const l=Vue.ref(null),a=Vue.shallowRef(),s=e=>({series:[{type:"gauge",radius:"100%",progress:{show:!0,width:e.axisLineLineStyleWidth,itemStyle:{color:e.progressItemStyleColor}},axisLine:{lineStyle:{width:e.axisLineLineStyleWidth,color:[[1,e.axisLineLineStyleColor]]}},axisTick:{show:e.axisTickShow},splitLine:{length:e.splitLineLength,lineStyle:{width:2,color:e.splitLineLineStyleColor}},axisLabel:{color:e.axisLabelColor,fontSize:e.axisLabelFontSize},pointer:{length:`${e.pointerLength}%`,itemStyle:{color:e.progressItemStyleColor}},title:{show:!1},detail:{valueAnimation:!0,fontSize:t.config.detailFontSize,offsetCenter:[0,"70%"],color:t.config.detailColor},data:[t.config.data]}]});Vue.onMounted((()=>{a.value=n(s(t.config),l).value,Vue.watch((()=>t.config),(e=>{const t=a.value?.getOption();t&&a.value.setOption(s(e))}))}));const r=o(t,a);return(e,t)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"t-inline-block magic-ui-echart-module",ref_key:"refCgauge",ref:l,style:Vue.normalizeStyle(Vue.unref(r))},null,4))}}),[["__scopeId","data-v-9637c150"],["__file","/Users/droden/dirs/new_banker_pro/found-pro/tmagic-editor/packages/ui/src/cgauge/src/index.vue"]]))}}}));
//# sourceMappingURL=index-legacy.b585b42c.js.map