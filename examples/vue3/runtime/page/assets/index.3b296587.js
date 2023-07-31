import{u as C,a as v,R as x}from"./useStyle.1d5c1b91.js";import{l as b}from"./commonConfig.81e6abfa.js";import{u as D}from"./useApp.8bd6dbd4.js";import{s as k,d as V,e as O}from"./util.80e82fe7.js";import{_ as w}from"./index.d2badf28.js";const A=Vue.defineComponent({__name:"index",props:{config:{type:null,required:!0}},setup(m){const t=m;D(t);const f=Vue.ref(null),c=Vue.shallowRef(),g=()=>{const{dataList:e,colList:a}=t.config.dataSourceModel,o=e.reduce((r,d)=>{const{radar:s,seriesData:n}=r;return s.indicator=s.indicator||[],n.data=n.data||(a==null?void 0:a.slice(1).map(i=>({value:[],name:i.label}))),n.type="radar",d.forEach((i,u)=>{if(u===0)s.indicator.push({name:i});else{const S=u-1,l=n.data[S];l.value.push(i);const p=a==null?void 0:a[u];p.color&&(l.lineStyle={color:p.color}),l.areaStyle=_(p.gradient),l.itemStyle=l.areaStyle}}),r},{radar:{},seriesData:{}});return Object.assign(o.radar,O(t.config),{shape:t.config.shape,axisName:{color:t.config.axisNameColor},axisLine:{lineStyle:{color:t.config.axisLineColor}},splitLine:{lineStyle:{color:t.config.splitLineColor}},splitArea:{areaStyle:{color:t.config.splitAreaColor}}}),Object.assign(o.seriesData,{symbol:t.config.markSymbol}),{radar:[o.radar],series:[o.seriesData],legendData:a==null?void 0:a.slice(1).map(r=>r.label)}},_=e=>({color:new x(.5,.5,1,[{offset:0,color:e[0]},{offset:1,color:e[1]}])}),y=(e,a)=>{const o=a();e.series=o.series,e.radar=o.radar,e.legend[0]={...e.legend[0],data:o.legendData}};Vue.onMounted(()=>{var o;const{config:e}=t,a={legend:[{...b(e),data:(o=e.dataSourceModel.colList)==null?void 0:o.slice(1).map(r=>r.label)}],tooltip:[{show:e.tooltip,trigger:"item"}],radar:[],series:[]};c.value=C(a,f).value,Vue.watch(()=>t.config,(r,d={})=>{var i;const s=(i=c.value)==null?void 0:i.getOption(),n=k(r,d);V(n,s,r),n("tooltip")&&(s.tooltip[0].show=r.tooltip),y(s,g),c.value.setOption(s,!0)},{immediate:!0})});const h=v(t,c);return(e,a)=>(Vue.openBlock(),Vue.createElementBlock("div",{class:"t-inline-block magic-ui-echart-module",ref_key:"refCradar",ref:f,style:Vue.normalizeStyle(Vue.unref(h))},null,4))}});const j=w(A,[["__scopeId","data-v-06a66635"],["__file","/Users/droden/dirs/new_banker_pro/found-pro/tmagic-editor/packages/ui/src/cradar/src/index.vue"]]);export{j as default};
//# sourceMappingURL=index.3b296587.js.map
