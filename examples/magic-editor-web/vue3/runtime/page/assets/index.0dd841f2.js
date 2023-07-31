import{u as B,a as k,L as F}from"./useStyle.1d5c1b91.js";import{l as I,s as b}from"./commonConfig.81e6abfa.js";import{u as O}from"./useApp.8bd6dbd4.js";import{s as E,a as N,b as T,c as w}from"./util.80e82fe7.js";import{_ as G}from"./index.d2badf28.js";const V=Vue.defineComponent({__name:"index",props:{config:{type:null,required:!0}},setup(L){const n=L;O(n);const g=Vue.ref(null),x=Vue.shallowRef(),_=()=>{const e=n.config,{dataList:s,colList:t}=n.config.dataSourceModel,{smooth:m,hasAreaStyle:a}=e,c=a&&e.lineChartLowestLevel?1:0,f=[e.borderRadiusLT,e.borderRadiusRT,e.borderRadiusRB,e.borderRadiusLB].map(i=>Number(i||0));let r="";const l=s.reduce((i,y)=>{const{xAxisData:z,seriesData:S}=i;return y.forEach((u,h)=>{if(h===0)z.push(u);else{const A=h-1;S[A]=S[A]||{data:[]};const o=S[A],p=t==null?void 0:t[h],{type:d}=p,R=d==="line";o.type=d,o.name=p.label,o.color=p.color,o.tooltip={valueFormatter(D){return D+p.suffix||""}},r||(r=d),r!==d&&(o.yAxisIndex=1),R?(o.label=b(e),o.data.push(u),o.smooth=m,o.areaStyle=v(e.hasAreaStyle,p.gradient,e.areaStyleOpacity),o.symbol=e.markSymbol,o.symbolSize=e.symbolSize):(o.data.push({value:u,itemStyle:w(u,{borderRadius:f}),label:b(e,{isBar:!0,value:u})}),o.zlevel=c)}}),i},{xAxisData:[],seriesData:[]});return{xAxisData:l.xAxisData,series:l.seriesData,legendData:t==null?void 0:t.slice(1).map(i=>i.label)}},v=(e,s,t)=>e?{color:new F(0,0,0,1,[{offset:0,color:s[0]},{offset:1,color:s[t?1:0]}])}:void 0;Vue.onMounted(()=>{const{config:e}=n,s={legend:[{...I(e),data:[]}],grid:{top:e.gridTop,right:e.gridRight,bottom:e.gridBottom,left:e.gridLeft,containLabel:!0},tooltip:[{show:e.tooltip,trigger:"axis",axisPointer:{type:"cross"},confine:!0}],xAxis:[{type:"category",nameGap:5,data:[],axisLabel:{textStyle:{color:e.xAxisFontSizeColor},fontSize:e.xAxisFontSize},axisLine:{lineStyle:{color:e.xAxisAxisLineColor}}}],yAxis:[{type:"value",nameGap:5,axisLabel:{textStyle:{color:e.yAxisFontSizeColor},fontSize:e.yAxisFontSize},splitLine:{lineStyle:{type:e.splitLineType,color:e.splitLineColor}}},{type:"value",nameGap:5,axisLabel:{textStyle:{color:e.yAxisFontSizeColor},fontSize:e.yAxisFontSize},splitLine:{lineStyle:{type:e.splitLineType,color:e.splitLineColor}}}],series:[]};x.value=B(s,g).value,Vue.watch(()=>n.config,(t,m={})=>{var f;const a=(f=x.value)==null?void 0:f.getOption(),c=E(t,m);if(N(c,a,t,{isMixin:!0}),c("yAxisLeftSuffix","yAxisRightSuffix","yAxisShowZero")){const r=[t.yAxisLeftSuffix,t.yAxisRightSuffix];a.yAxis.forEach((l,i)=>{l.axisLabel.formatter=y=>!t.yAxisShowZero&&!y?"":y+r[i]})}if(c("yAxisLeftName","yAxisRightName")){const r=[t.yAxisLeftName,t.yAxisRightName];a.yAxis.forEach((l,i)=>{l.name=r[i]})}T(a,_),x.value.setOption(a,!0)},{immediate:!0})});const C=k(n,x);return(e,s)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"t-inline-block magic-ui-echart-module",ref_key:"refContainer",ref:g,style:Vue.normalizeStyle(Vue.unref(C))},null,4))}});const Y=G(V,[["__scopeId","data-v-a4a1e244"],["__file","/Users/droden/dirs/new_banker_pro/found-pro/tmagic-editor/packages/ui/src/clinebar/src/index.vue"]]);export{Y as default};
//# sourceMappingURL=index.0dd841f2.js.map
