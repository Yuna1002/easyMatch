import{_ as v,b as f,m as _,r as g,o as r,c as a,e as P,d as t,E as l,B as n,F as k,z as y,A as x,t as d,G as C,g as w}from"./index-7628257a.js";import{c as p}from"./cartStore-e80fcb0b.js";import{S as T}from"./SuccessToast-6dee4db7.js";import"./sweetalert2.all-7c262b2e.js";const{VITE_APP_URL:S,VITE_APP_PATH:V}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"yuna1002",BASE_URL:"/easyMatch/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},A={data(){return{products:[],filterProducts:[],tempProduct:{},active:"全部",fullPage:!1}},components:{SuccessToast:T},methods:{getProducts(){const i=this.$loading.show({container:this.fullPage?null:this.$refs.productsContainer});this.$http.get(`${S}/api/${V}/products/all`).then(s=>{this.products=s.data.products,this.filterProducts=this.products,i.hide()}).catch(s=>{alert(s.data.message)})},filterProduct(i){if(this.active=i,i==="全部")this.getProducts(),this.filterProducts=this.products;else{const s=this.products.filter(m=>m.category===i);this.filterProducts=s}},handleClick(i,s){i.target.nodeName==="BUTTON"?this.addToCart(s):this.$router.push(`/product/${s}`)},...f(p,["getCart"]),...f(p,["addToCart"])},computed:{..._(p,["cart"]),..._(p,["loadingItem"])},mounted(){this.getProducts()}},E={class:"bg-tertiary-100"},I={class:"container pt-12 pb-40"},$={class:"row"},N={class:"col-md-3 sidebar-position"},B={class:"list-group d-flex justify-content-center flex-row flex-md-column pt-4 bg-tertiary-100 rounded-0 sidebar-position"},R={class:"fs-4 ps-md-8 mb-6"},U={class:"fs-4 ps-3 ps-md-8 mb-6"},j={class:"fs-4 ps-3 ps-md-8 mb-6"},z={class:"fs-4 ps-3 ps-md-8 mb-6"},D={class:"col-md-9 vl-parent",ref:"productsContainer"},L={class:"row justify-content-center justify-content-lg-start"},M=["onClick"],O={class:"card-body px-8 d-flex flex-column"},F={class:"d-flex mb-4"},H={class:"card-title h5 fw-bold mb-0"},G={class:"badge bg-primary rounded-pill fs-3 fw-normal ms-2"},q={class:"card-text mb-4 h-100"},J={class:"d-flex align-items-center justify-content-end mb-1"},K={class:"fw-semibold text-primary-200"},Q={key:0,type:"button",class:"btn btn-secondary text-white disabled"},W=["disabled"],X={key:0,class:"fas fa-spinner fa-pulse"};function Y(i,s,m,Z,o,c){const b=g("SuccessToast");return r(),a("div",E,[P(b),t("div",I,[t("div",$,[t("div",N,[t("div",B,[t("h2",R,[t("a",{href:"",class:l(["list-group-item sidebar-link text-nowrap",{"sidebar-link-active":o.active==="全部"}]),onClick:s[0]||(s[0]=n(e=>c.filterProduct("全部"),["prevent"]))}," 全部產品 ",2)]),t("h2",U,[t("a",{href:"",class:l(["list-group-item sidebar-link text-nowrap",{"sidebar-link-active":o.active==="維生素"}]),onClick:[s[1]||(s[1]=n(e=>c.filterProduct("維生素"),["prevent"])),s[2]||(s[2]=e=>o.active="維生素")]}," 維生素 ",2)]),t("h2",j,[t("a",{href:"",class:l(["list-group-item sidebar-link text-nowrap",{"sidebar-link-active":o.active==="礦物質"}]),onClick:s[3]||(s[3]=n(e=>c.filterProduct("礦物質"),["prevent"]))}," 礦物質 ",2)]),t("h2",z,[t("a",{href:"",class:l(["list-group-item sidebar-link text-nowrap",{"sidebar-link-active":o.active==="功能性補給"}]),onClick:s[4]||(s[4]=n(e=>c.filterProduct("功能性補給"),["prevent"]))}," 功能性補給 ",2)])])]),t("div",D,[t("div",L,[(r(!0),a(k,null,y(o.filterProducts,e=>{var h;return r(),a("div",{class:"col-10 col-sm-12 col-xl-4 col-lg-6 mb-6",key:e.id},[t("a",{href:"",class:"card bg-card-bg border-0 h-100 pb-5 products-card",onClick:n(u=>c.handleClick(u,e.id),["prevent"])},[t("div",{style:x([{height:"180px","background-size":"cover","background-position":"center"},{backgroundImage:`url(${e.imageUrl})`}]),class:"mb-2"},null,4),t("div",O,[t("div",F,[t("h3",H,d(e.title),1),t("div",null,[t("span",G,d(e.category),1)])]),t("p",q,d(e.simple),1),t("div",J,[t("p",K,d(`NT$${e.price} /顆`),1)]),(h=i.cart.carts)!=null&&h.some(u=>u.product_id===e.id)?(r(),a("button",Q," 已加入 ")):(r(),a("button",{key:1,type:"button",class:"btn btn-primary-200 text-white",disabled:i.loadingItem===e.id},[e.id===i.loadingItem?(r(),a("i",X)):C("",!0),w("加入購物車 ")],8,W))])],8,M)])}),128))])],512)])])])}const ot=v(A,[["render",Y]]);export{ot as default};
