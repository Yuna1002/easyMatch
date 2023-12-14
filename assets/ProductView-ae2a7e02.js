import{m as _,b as v,_ as S,r as b,o as r,g as P,w as g,c as n,h as C,d as t,n as V,t as s,q as x,f as u,i as $,F as T,a as A,e as w}from"./index-a4363e81.js";import{c as a}from"./cartStore-cd54e778.js";import{P as B,S as I,a as E}from"./pagination.min-ae49036b.js";import{p as k}from"./productsStore-278b375f.js";import"./sweetalert2.all-694180b0.js";import"./scrollStore-42c1bd54.js";const N={props:["product"],emits:["getProduct"],data(){return{modules:[B]}},components:{Swiper:I,SwiperSlide:E},computed:{..._(k,["productsAll"]),..._(a,["cart"]),..._(a,["loadingItem"]),filterCategory(){return this.productsAll.filter(o=>o.category===this.product.category)}},methods:{...v(k,["getProductsAll"]),...v(a,["addToCart"]),handleClick(o,d){console.log(d),o.target.nodeName==="BUTTON"?this.addToCart(d):(this.$router.push(`/product/${d}`),this.$emit("getProduct",d))}},mounted(){this.getProductsAll()}},R=["onClick"],L={class:"card-body px-8 d-flex flex-column"},U={class:"d-flex mb-4"},q={class:"card-title h5 fw-bold mb-0 text-nowrap"},D={class:"badge bg-primary rounded-pill fs-3 fw-normal ms-2"},M={class:"d-flex align-items-center justify-content-start mb-1"},O={class:"fw-semibold text-primary-200"},j={key:0,type:"button",class:"btn btn-secondary text-white disabled rounded-pill py-2"},z=["disabled"],F={key:0,class:"fas fa-spinner fa-pulse"};function G(o,d,f,l,e,h){const m=b("SwiperSlide"),y=b("Swiper");return r(),P(y,{slidesPerView:1,spaceBetween:10,pagination:{clickable:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:16},992:{slidesPerView:3,spaceBetween:16},1200:{slidesPerView:4,spaceBetween:24}},modules:e.modules,class:"pb-15"},{default:g(()=>[(r(!0),n(T,null,C(h.filterCategory,c=>(r(),P(m,{key:c.id},{default:g(()=>{var i;return[t("a",{href:"",class:"card bg-card-bg border-0 h-100 pb-5 products-card",onClick:$(p=>h.handleClick(p,c.id),["prevent"])},[t("div",{style:V([{height:"180px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${c.imageUrl})`}]),class:"mb-2"},null,4),t("div",L,[t("div",U,[t("h3",q,s(c.title),1),t("div",null,[t("span",D,s(c.category),1)])]),t("div",M,[t("p",O,s(`NT$${c.price} /${c.unit}`),1)]),(i=o.cart.carts)!=null&&i.some(p=>p.product_id===c.id)?(r(),n("button",j," 已加入 ")):(r(),n("button",{key:1,type:"button",class:"btn btn-primary-200 text-white rounded-pill btn-hover py-2",disabled:o.loadingItem===c.id},[c.id===o.loadingItem?(r(),n("i",F)):x("",!0),u("加入購物車 ")],8,z))])],8,R)]}),_:2},1024))),128))]),_:1},8,["modules"])}const H=S(N,[["render",G]]),{VITE_APP_URL:J,VITE_APP_PATH:K}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"yuna1002",BASE_URL:"/easyMatch/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},Q={data(){return{product:{}}},components:{RouterLink:A,CategorySwiper:H},methods:{getProduct(o){let d="";o?d=o:d=this.$route.params.id;const f=this.$loading.show();this.$http.get(`${J}/api/${K}/product/${d}`).then(l=>{this.product=l.data.product,f.hide()}).catch(l=>{console.log(l),alert(l.data.message)})},...v(a,["addToCart"])},computed:{..._(a,["cart"]),..._(a,["loadingItem"])},mounted(){this.getProduct()}},W={class:"container pt-20 pt-md-22 pb-10"},X={class:"row justify-content-center"},Y={class:"col-md-10"},Z={"aria-label":"breadcrumb"},tt={class:"breadcrumb"},et={class:"breadcrumb-item"},st={class:"breadcrumb-item"},ot={class:"breadcrumb-item active","aria-current":"page"},ct={class:"row pb-12"},rt={class:"col-md-6 mb-5 mb-md-0"},dt=["src","alt"],nt={class:"col-md-6"},it={class:"d-flex align-items-center mb-6"},lt={class:"h2 fw-bold mb-0"},at={class:"badge bg-primary rounded-pill ms-2"},pt={class:"mb-6"},ut={class:"fs-6 fw-semibold text-primary-200 mb-6"},_t=t("span",{class:"fs-4"},"/顆",-1),ht={key:0,type:"button",class:"btn btn-secondary text-white disabled py-2 px-20"},mt={key:0,class:"fas fa-spinner fa-pulse"},bt=t("hr",{class:"mb-9"},null,-1),gt=t("h2",{class:"h3 text-center mb-8"},"產品說明",-1),ft={class:"tab-content mb-15"},yt={class:"mb-7"},wt=t("h3",{class:"h6 fw-semibold"},"產品保健",-1),vt={class:"mb-7"},xt=t("h3",{class:"h6 fw-semibold"},"說明內容",-1),Pt={class:"mb-7"},kt=t("h3",{class:"h6 fw-semibold"},"食用方法",-1),St={class:"row"},Ct={class:"col-8"},Tt={class:"table"},Vt=t("thead",null,[t("tr",null,[t("th",{class:"ps-0 border-0 mb-2"},"營養標示")])],-1),$t=t("tr",null,[t("td",null,"每一份量"),t("td",{class:"text-center"},"1顆"),t("td")],-1),At=t("tr",null,[t("td",{class:"border-0 pb-0"}),t("td",{class:"border-0 pb-0 text-center"},"每份"),t("td",{class:"border-0 pb-0 text-center"},"每日參考值百分比%")],-1),Bt={key:0},It={class:"text-center"},Et={class:"text-center"},Nt={class:"text-center"},Rt={class:"text-center"},Lt=t("h2",{class:"h3 text-center mb-8"},"產品推薦",-1);function Ut(o,d,f,l,e,h){var c;const m=b("RouterLink"),y=b("CategorySwiper");return r(),n("div",W,[t("div",X,[t("div",Y,[t("nav",Z,[t("ol",tt,[t("li",et,[w(m,{to:"/",class:"text-primary-200"},{default:g(()=>[u("首頁")]),_:1})]),t("li",st,[w(m,{to:"/products",class:"text-primary-200"},{default:g(()=>[u("所有產品")]),_:1})]),t("li",ot,s(e.product.title),1)])]),t("div",ct,[t("div",rt,[t("img",{class:"img-fluid",src:e.product.imageUrl,alt:e.product.title},null,8,dt)]),t("div",nt,[t("div",it,[t("h1",lt,s(e.product.title),1),t("div",null,[t("span",at,s(e.product.category),1)])]),t("p",pt,s(e.product.description),1),t("p",ut,[u(s(`NT$${e.product.price} `)+" ",1),_t]),(c=o.cart.carts)!=null&&c.some(i=>i.product_id===e.product.id)?(r(),n("button",ht," 已加入 ")):(r(),n("button",{key:1,type:"button",class:"btn btn-primary-200 text-white py-2 px-19",onClick:d[0]||(d[0]=i=>o.addToCart(e.product.id,o.qty))},[e.product.id===o.loadingItem?(r(),n("i",mt)):x("",!0),u(" 加入購物車 ")]))])]),bt,gt,t("div",ft,[t("div",null,[t("div",yt,[wt,t("p",null,s(e.product.description),1)]),t("div",vt,[xt,t("p",null,s(e.product.content),1)]),t("div",Pt,[kt,t("p",null,s(e.product.食用方法),1)]),t("div",St,[t("div",Ct,[t("table",Tt,[Vt,t("tbody",null,[$t,At,e.product.element?(r(),n("tr",Bt,[t("td",null,s(e.product.element.title),1),t("td",It,s(e.product.element.quantity),1),t("td",Et,s(e.product.element.percent),1)])):x("",!0),(r(!0),n(T,null,C(e.product.elements,(i,p)=>(r(),n("tr",{key:p},[t("td",null,s(i.title),1),t("td",Nt,s(i.quantity),1),t("td",Rt,s(i.percent),1)]))),128))])])])])])]),Lt,w(y,{product:e.product,onGetProduct:h.getProduct},null,8,["product","onGetProduct"])])])])}const Ft=S(Q,[["render",Ut]]);export{Ft as default};