import{_ as v,b as f,m as _,r as g,o as r,c as a,e as P,d as t,E as d,B as c,F as k,z as y,A as C,t as n,G as x,g as T}from"./index-a3e96386.js";import{c as u}from"./cartStore-0153855b.js";import{S as w}from"./SuccessToast-1cf1edff.js";import"./sweetalert2.all-73b96a89.js";const{VITE_APP_URL:S,VITE_APP_PATH:V}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"yuna1002",BASE_URL:"/easyMatch/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},A={data(){return{products:[],filterProducts:[],tempProduct:{},active:"全部",fullPage:!1}},components:{SuccessToast:w},methods:{getProducts(){const i=this.$loading.show({container:this.fullPage?null:this.$refs.productsContainer});this.$http.get(`${S}/api/${V}/products/all`).then(s=>{this.products=s.data.products,this.filterProducts=this.products,i.hide()}).catch(s=>{alert(s.data.message)})},filterProduct(i){if(this.active=i,i==="全部")this.getProducts(),this.filterProducts=this.products;else{const s=this.products.filter(p=>p.category===i);this.filterProducts=s}},handleClick(i,s){i.target.nodeName==="BUTTON"?this.addToCart(s):this.$router.push(`/product/${s}`)},...f(u,["getCart"]),...f(u,["addToCart"])},computed:{..._(u,["cart"]),..._(u,["loadingItem"])},mounted(){this.getProducts()}},E={class:"bg-tertiary-100"},I={class:"container pt-12 pb-40"},$={class:"row"},B={class:"col-md-3 sidebar-position"},N={class:"list-group flex-row flex-md-column pt-4 bg-tertiary-100 rounded-0 sidebar-position"},R={class:"fs-4 ps-8 mb-6"},U={class:"fs-4 ps-8 mb-6"},z={class:"fs-4 ps-8 mb-6"},D={class:"fs-4 ps-8 mb-6"},L={class:"col-md-9 vl-parent",ref:"productsContainer"},M={class:"row"},O=["onClick"],F={class:"card-body px-8 d-flex flex-column"},H={class:"d-flex mb-4"},j={class:"card-title h5 fw-bold mb-0"},G={class:"badge bg-primary rounded-pill fs-3 fw-normal ms-2"},q={class:"card-text mb-4 h-100"},J={class:"d-flex align-items-center justify-content-end mb-1"},K={class:"fw-semibold text-primary-200"},Q={key:0,type:"button",class:"btn btn-secondary text-white disabled"},W=["disabled"],X={key:0,class:"fas fa-spinner fa-pulse"};function Y(i,s,p,Z,o,l){const b=g("SuccessToast");return r(),a("div",E,[P(b),t("div",I,[t("div",$,[t("div",B,[t("div",N,[t("h2",R,[t("a",{href:"",class:d(["list-group-item sidebar-link",{"sidebar-link-active":o.active==="全部"}]),onClick:s[0]||(s[0]=c(e=>l.filterProduct("全部"),["prevent"]))}," 全部產品 ",2)]),t("h2",U,[t("a",{href:"",class:d(["list-group-item sidebar-link",{"sidebar-link-active":o.active==="維生素"}]),onClick:[s[1]||(s[1]=c(e=>l.filterProduct("維生素"),["prevent"])),s[2]||(s[2]=e=>o.active="維生素")]}," 維生素 ",2)]),t("h2",z,[t("a",{href:"",class:d(["list-group-item sidebar-link",{"sidebar-link-active":o.active==="礦物質"}]),onClick:s[3]||(s[3]=c(e=>l.filterProduct("礦物質"),["prevent"]))}," 礦物質 ",2)]),t("h2",D,[t("a",{href:"",class:d(["list-group-item sidebar-link",{"sidebar-link-active":o.active==="功能性補給"}]),onClick:s[4]||(s[4]=c(e=>l.filterProduct("功能性補給"),["prevent"]))}," 功能性補給 ",2)])])]),t("div",L,[t("div",M,[(r(!0),a(k,null,y(o.filterProducts,e=>{var m;return r(),a("div",{class:"col-xl-4 col-lg-6 mb-6",key:e.id},[t("a",{href:"",class:"card bg-card-bg border-0 h-100 pb-5 products-card",onClick:c(h=>l.handleClick(h,e.id),["prevent"])},[t("div",{style:C([{height:"180px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${e.imageUrl})`}]),class:"mb-2"},null,4),t("div",F,[t("div",H,[t("h3",j,n(e.title),1),t("div",null,[t("span",G,n(e.category),1)])]),t("p",q,n(e.simple),1),t("div",J,[t("p",K,n(`$${e.price} /顆`),1)]),(m=i.cart.carts)!=null&&m.some(h=>h.product_id===e.id)?(r(),a("button",Q," 已加入 ")):(r(),a("button",{key:1,type:"button",class:"btn btn-primary-200 text-white",disabled:i.loadingItem===e.id},[e.id===i.loadingItem?(r(),a("i",X)):x("",!0),T("加入購物車 ")],8,W))])],8,O)])}),128))])],512)])])])}const ot=v(A,[["render",Y]]);export{ot as default};
