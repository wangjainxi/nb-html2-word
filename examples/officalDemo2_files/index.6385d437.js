import{u as A,a as _,L as b}from"./useStyle.ad081fd0.js";import{l as L}from"./commonConfig.8df41513.js";import{u as D}from"./useApp.8bd6dbd4.js";import{s as v,a as C,g as k,b as T}from"./util.44ab047a.js";import{_ as F}from"./index.ee6b6f11.js";const O=Vue.defineComponent({__name:"index",props:{config:{type:null,required:!0}},setup(y){const n=y;D(n);const f=Vue.ref(null),p=Vue.shallowRef();let m=[];const h=()=>{const{dataList:e,colList:a}=n.config.dataSourceModel,t=e.reduce((c,i)=>{const{xAxisData:l,seriesData:x}=c;return i.forEach((u,o)=>{if(o===0)l.push(u);else{const s=o-1;x[s]=x[s]||{data:[]};const r=x[s];r.type="line",r.data.push(u);const d=a==null?void 0:a[o];r.color=d.color,r.name=d.label,r.gradient=d.gradient,r.smooth=n.config.smooth,r.areaStyle=g(n.config.hasAreaStyle,d.gradient,n.config.areaStyleOpacity),r.symbol=n.config.markSymbol}}),c},{xAxisData:[],seriesData:[]});return m=t.xAxisData,{xAxisData:t.xAxisData,series:t.seriesData,legendData:a==null?void 0:a.slice(1).map(c=>c.label)}},g=(e,a,t)=>e?{color:new b(0,0,0,1,[{offset:0,color:a[0]},{offset:1,color:a[t?1:0]}])}:void 0;Vue.onMounted(()=>{const{config:e}=n,a={legend:[{...L(e),data:[]}],grid:{top:e.gridTop,right:e.gridRight,bottom:e.gridBottom,left:e.gridLeft,containLabel:!0},tooltip:[{show:e.tooltip,trigger:"axis",axisPointer:{type:"cross"},confine:!0}],xAxis:[{type:"category",nameGap:5,data:[],boundaryGap:!1,axisLabel:{textStyle:{color:e.axisLabelTextColor},fontSize:e.xAxisFontSize},axisLine:{lineStyle:{color:e.xAxisAxisLineColor}}}],yAxis:[{type:"value",nameGap:5,axisLabel:{textStyle:{color:e.axisLabelTextColor}},splitLine:{lineStyle:{type:e.splitLineType,color:e.splitLineColor}}}],series:[]};p.value=A(a,f).value,Vue.watch(()=>n.config,(t,c={})=>{var x,u;const i=(x=p.value)==null?void 0:x.getOption(),l=v(t,c);if(C(l,i,t,{suffixFormat:!0}),l("smooth")&&i.series.forEach(o=>{o.smooth=t.smooth}),l("hasAreaStyle")){const o=(u=t.dataSourceModel)==null?void 0:u.colList;i.series=i.series.map((s,r)=>(s.areaStyle=g(t.hasAreaStyle,(o==null?void 0:o[r+1]).gradient,t.getAreaStyle),s))}if(l("markSymbol")&&i.series.forEach(o=>{var s;o.symbol=(s=t.markSymbol)!=null?s:"none"}),l("xAxisHeadTailTextFormat","xAxisFontSize")){const o=m.length-1,s=t.xAxisHeadTailTextFormat&&o>0;Object.assign(i.xAxis[0].axisLabel,s?k(o,t.xAxisFontSize):{formatter:void 0,rich:void 0})}T(i,h),p.value.setOption(i,!0)},{immediate:!0})});const S=_(n,p);return(e,a)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"t-inline-block magic-ui-echart-module",ref_key:"refContainer",ref:f,style:Vue.normalizeStyle(Vue.unref(S))},null,4))}});const M=F(O,[["__scopeId","data-v-eda6676e"],["__file","/project/packages/ui/src/cline/src/index.vue"]]);export{M as default};
//# sourceMappingURL=index.6385d437.js.map
