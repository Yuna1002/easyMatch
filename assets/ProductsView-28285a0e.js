import{_ as $,o as a,c as r,d as t,l as p,i as c,F as w,h as S,t as u,b as m,m as _,r as b,e as k,w as V,g as E,q as y,f as x,n as I}from"./index-ffca9aed.js";import{c as h}from"./cartStore-84dca245.js";import{p as C}from"./productsStore-85e8e578.js";import{s as T}from"./scrollStore-ba1954a8.js";import{S as N}from"./SuccessToast-0444bb68.js";import"./sweetalert2.all-62e38067.js";const R={props:["pages"],emits:["getProducts"]},B={"aria-label":"Page navigation example "},L={class:"pagination"},U=t("span",{"aria-hidden":"true"},"«",-1),j=[U],D={key:0,class:"page-link"},z=["onClick"],M=t("span",{"aria-hidden":"true"},"»",-1),O=[M];function F(s,e,o,g,l,d){return a(),r("nav",B,[t("ul",L,[t("li",{class:p(["page-item",{disabled:!o.pages.has_pre}])},[t("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:e[0]||(e[0]=c(n=>s.$emit("getProducts",o.pages.current_page-1),["prevent"]))},j)],2),(a(!0),r(w,null,S(o.pages.total_pages,n=>(a(),r("li",{class:p(["page-item",{active:n===o.pages.current_page}]),key:n},[n===o.pages.current_page?(a(),r("span",D,u(n),1)):(a(),r("a",{key:1,class:"page-link",href:"#",onClick:c(v=>s.$emit("getProducts",n),["prevent"])},u(n),9,z))],2))),128)),t("li",{class:p(["page-item",{disabled:!o.pages.has_next}])},[t("a",{class:"page-link",href:"#","aria-label":"Next",onClick:e[1]||(e[1]=c(n=>s.$emit("getProducts",o.pages.current_page+1),["prevent"]))},O)],2)])])}const G=$(R,[["render",F]]);const{VITE_APP_URL:H,VITE_APP_PATH:q}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"yuna1002",BASE_URL:"/easyMatch/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},J={data(){return{products:[],filterProducts:[],tempProduct:{},pages:{},active:"全部",fullPage:!1}},components:{SuccessToast:N,PaginationComponent:G},methods:{getProducts(s=1){const e=this.$loading.show({container:this.fullPage?null:this.$refs.productsContainer});this.$http.get(`${H}/api/${q}/products/?page=${s}`).then(o=>{this.products=o.data.products,this.pages=o.data.pagination,this.filterProducts=this.products,this.scrollToTop(),e.hide()}).catch(o=>{alert(o.data.message)})},filterProduct(s){if(this.active=s,s==="全部")this.getProducts(),this.scrollToTop(),this.filterProducts=this.products;else{this.getProductsAll(),this.scrollToTop();const o=this.productsAll.filter(g=>g.category===s);this.filterProducts=o}},handleClick(s,e){s.target.nodeName==="BUTTON"?this.addToCart(e):this.$router.push(`/product/${e}`)},...m(C,["getProductsAll"]),...m(h,["getCart"]),...m(h,["addToCart"]),...m(T,["scrollToTop"])},computed:{..._(C,["productsAll"]),..._(h,["cart"]),..._(h,["loadingItem"]),..._(T,["scrollPosition"])},mounted(){this.getProducts()}},K={class:"bg-tertiary-100 pt-20 pt-md-22"},Q={class:"container pt-lg-0 pb-40"},W={class:"row"},X={"aria-label":"breadcrumb",class:"bg-tertiary-100 mb-9"},Y={class:"breadcrumb mb-0"},Z={class:"breadcrumb-item"},tt=t("li",{class:"breadcrumb-item active","aria-current":"page"},"所有產品",-1),et={class:"col-md-3 sidebar-position"},st={class:"list-group d-flex justify-content-center flex-row flex-md-column bg-tertiary-100 rounded-0 sidebar-position overflow-auto"},ot={class:"fs-4 ps-md-8 mb-6"},it={class:"fs-4 ps-md-3 ps-md-8 mb-6"},at={class:"fs-4 ps-md-3 ps-md-8 mb-6"},rt={class:"fs-4 ps-md-3 ps-md-8 mb-6"},nt={class:"col-md-9 vl-parent",ref:"productsContainer"},lt={class:"d-flex flex-column align-items-center"},ct={class:"row justify-content-center justify-content-lg-start mb-20"},dt=["onClick"],pt={class:"card-body px-8 d-flex flex-column"},ut={class:"d-flex mb-4"},mt={class:"card-title h5 fw-bold mb-0"},_t={class:"badge bg-primary rounded-pill fs-3 fw-normal ms-2"},ht={class:"card-text mb-4 h-100"},gt={class:"d-flex align-items-center justify-content-end mb-1"},ft={class:"fw-semibold text-primary-200"},bt={key:0,type:"button",class:"btn btn-secondary text-white disabled rounded-pill py-2"},vt=["disabled"],Pt={key:0,class:"fas fa-spinner fa-pulse"};function kt(s,e,o,g,l,d){const n=b("SuccessToast"),v=b("RouterLink"),A=b("PaginationComponent");return a(),r("div",K,[k(n),t("div",Q,[t("div",W,[t("nav",X,[t("ol",Y,[t("li",Z,[k(v,{to:"/",class:"text-primary-200"},{default:V(()=>[x("首頁")]),_:1})]),tt])]),t("div",et,[t("div",st,[t("h2",ot,[t("a",{href:"",class:p(["list-group-item sidebar-link text-nowrap",{"sidebar-link-active":l.active==="全部"}]),onClick:e[0]||(e[0]=c(i=>d.filterProduct("全部"),["prevent"]))}," 全部產品 ",2)]),t("h2",it,[t("a",{href:"",class:p(["list-group-item sidebar-link text-nowrap",{"sidebar-link-active":l.active==="維生素"}]),onClick:e[1]||(e[1]=c(i=>d.filterProduct("維生素"),["prevent"]))}," 維生素 ",2)]),t("h2",at,[t("a",{href:"",class:p(["list-group-item sidebar-link text-nowrap",{"sidebar-link-active":l.active==="礦物質"}]),onClick:e[2]||(e[2]=c(i=>d.filterProduct("礦物質"),["prevent"]))}," 礦物質 ",2)]),t("h2",rt,[t("a",{href:"",class:p(["list-group-item sidebar-link text-nowrap",{"sidebar-link-active":l.active==="功能性補給"}]),onClick:e[3]||(e[3]=c(i=>d.filterProduct("功能性補給"),["prevent"]))}," 功能性補給 ",2)])])]),t("div",nt,[t("div",lt,[t("div",ct,[(a(!0),r(w,null,S(l.filterProducts,i=>{var P;return a(),r("div",{class:"col-10 col-sm-12 col-xl-4 col-lg-6 mb-6",key:i.id},[t("a",{href:"",class:"card bg-card-bg border-0 h-100 pb-5 products-card",onClick:c(f=>d.handleClick(f,i.id),["prevent"])},[t("div",{style:I([{height:"180px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${i.imageUrl})`}]),class:"mb-2"},null,4),t("div",pt,[t("div",ut,[t("h3",mt,u(i.title),1),t("div",null,[t("span",_t,u(i.category),1)])]),t("p",ht,u(i.simple),1),t("div",gt,[t("p",ft,u(`NT$${i.price} /${i.unit}`),1)]),(P=s.cart.carts)!=null&&P.some(f=>f.product_id===i.id)?(a(),r("button",bt," 已加入 ")):(a(),r("button",{key:1,type:"button",class:"btn btn-primary-200 text-white rounded-pill btn-hover py-2",disabled:s.loadingItem===i.id},[i.id===s.loadingItem?(a(),r("i",Pt)):y("",!0),x("加入購物車 ")],8,vt))])],8,dt)])}),128))]),l.active==="全部"?(a(),E(A,{key:0,pages:l.pages,onGetProducts:d.getProducts},null,8,["pages","onGetProducts"])):y("",!0)])],512)])])])}const St=$(J,[["render",kt]]);export{St as default};
