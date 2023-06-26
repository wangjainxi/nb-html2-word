import{l as A}from"./commonConfig.8df41513.js";import{u as v}from"./useApp.8bd6dbd4.js";import{u as C,a as D}from"./useStyle.ad081fd0.js";import{s as L,a as R,b as B,c as S}from"./util.44ab047a.js";import{_ as V}from"./index.ee6b6f11.js";const T=Vue.defineComponent({__name:"index",props:{config:{type:null,required:!0}},setup(g){const r=g;v(r);const f=Vue.ref(null),i=Vue.shallowRef(),_=()=>{const e=r.config,{dataList:n,colList:t}=e.dataSourceModel,p=[e.borderRadiusLT,e.borderRadiusRT,e.borderRadiusRB,e.borderRadiusLB].map(o=>Number(o||0)),a=n.reduce((o,l)=>{const{xAxisData:c,seriesData:s}=o;return l.forEach((d,x)=>{if(x===0)c.push(d);else{const m=x-1;s[m]=s[m]||{data:[]};const u=s[m];u.type="bar";const b=t==null?void 0:t[x];u.name=b.label,u.color=b.color,u.data.push({value:d,itemStyle:S(d,{borderRadius:p,orient:y})})}}),o},{xAxisData:[],seriesData:[]});return{xAxisData:a.xAxisData,series:a.seriesData,legendData:t==null?void 0:t.slice(1).map(o=>o.label)}};let y;Vue.onMounted(()=>{const{config:e}=r,n={legend:[{...A(e),data:[]}],grid:{top:e.gridTop,right:e.gridRight,bottom:e.gridBottom,left:e.gridLeft,containLabel:!0},tooltip:[{show:e.tooltip,trigger:"axis",axisPointer:{type:"cross"},confine:!0}],xAxis:[{type:"category",nameGap:5,data:[],axisLabel:{textStyle:{color:e.axisLabelTextColor}}}],yAxis:[{type:"value",nameGap:5,axisLabel:{textStyle:{color:e.axisLabelTextColor}},splitLine:{lineStyle:{type:e.splitLineType,color:e.splitLineColor}}}],series:[]};i.value=C(n,f).value,Vue.watch(()=>r.config,(t,p={orient:"vertical"})=>{var c;const a=(c=i.value)==null?void 0:c.getOption(),o=L(t,p),l=t.orient==="horizontal"?"yAxis":"xAxis";if(o("orient")){y=t.orient;const s=a.xAxis;a.xAxis=a.yAxis,a.yAxis=s}R(o,a,t,{suffixFormat:!0,orientAxis:l}),B(a,_,l),i.value.setOption(a,!0)},{immediate:!0})});const h=D(r,i);return(e,n)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"t-inline-block magic-ui-echart-module",ref_key:"refCbar",ref:f,style:Vue.normalizeStyle(Vue.unref(h))},null,4))}});const G=V(T,[["__scopeId","data-v-20a37b2c"],["__file","/project/packages/ui/src/cbar/src/index.vue"]]);export{G as default};
//# sourceMappingURL=index.53929c5e.js.map
