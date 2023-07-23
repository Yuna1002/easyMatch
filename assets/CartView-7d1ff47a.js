import{_ as f,a as b,m as h,b as c,r as g,o,c as a,d as t,F as m,h as p,f as r,e as y,w,q as _,H as v,I as k,t as i}from"./index-ffca9aed.js";import{c as d}from"./cartStore-84dca245.js";import{S as C}from"./sweetalert2.all-62e38067.js";const $={components:{RouterLink:b},computed:{...h(d,["cart"]),...h(d,["loadingItem"])},methods:{...c(d,["getCart"]),...c(d,["delCart"]),...c(d,["saveToLocal"]),checkCart(){this.cart.carts.length?this.$router.push("/order"):C.fire({icon:"warning",title:"購物車尚無資料",confirmButtonText:"前往購物",confirmButtonColor:"#46afa2"}).then(e=>{e.isConfirmed&&this.$router.push("/products")})}},mounted(){const e=this.$loading.show();setTimeout(()=>{e.hide()},600),this.getCart()}},x={class:"bg-tertiary-100 pt-30"},T={class:"container pb-40"},L=t("h1",{class:"h2 text-center mb-8"},"購物車",-1),N={class:"row justify-content-center"},S={class:"col-md-10"},V={class:"bg-card-bg px-8 py-12 mb-8"},B=t("h2",{class:"h4 text-center fw-semibold mb-6"},"30天份自由配",-1),j={class:"table align-middle border"},I=t("thead",{class:"bg-primary text-white"},[t("tr",null,[t("th",{class:"fw-semibold align-middle"},"產品"),t("th",{class:"fw-semibold text-center align-middle"},"單價"),t("th",{class:"fw-semibold text-center align-middle"},"30天份金額"),t("th",{class:"fw-semibold"})])],-1),A={key:0},R={class:"d-md-flex align-items-md-center"},D={class:"me-8 d-none d-md-block",style:{width:"150px"}},F=["src","alt"],U={class:"fw-semibold"},q={class:"text-center"},E={class:"text-center"},H={class:"text-center"},M=["onClick","disabled"],z={key:0,class:"fas fa-spinner fa-pulse"},G={key:1},J={class:"text-center ps-9",colspan:"3"},K={class:"d-flex align-items-center justify-content-end mb-8"},O=t("p",{class:"me-4"},"組數",-1),P={class:"me-4",style:{width:"80px"}},Q=["value"],W={class:"ps-1"},X={class:"d-flex justify-content-end align-items-center"},Y=t("p",{class:"me-4 fw-semibold"},"總計",-1),Z={class:"fw-semibold fs-5"},tt={class:"d-flex justify-content-end"},st=t("span",{class:"material-symbols-outlined fw-semibold"}," chevron_right ",-1);function et(e,n,ot,at,nt,l){const u=g("RouterLink");return o(),a("div",x,[t("div",T,[L,t("div",N,[t("div",S,[t("div",V,[B,t("table",j,[I,Array.isArray(e.cart.carts)?(o(),a("tbody",A,[e.cart.carts.length>0?(o(!0),a(m,{key:0},p(e.cart.carts,s=>(o(),a("tr",{key:s.id},[t("td",R,[t("div",D,[t("img",{class:"img-fluid",src:s.product.imageUrl,alt:s.product.title},null,8,F)]),t("p",U,i(s.product.title),1)]),t("td",q,i(`NT$${s.product.price}`),1),t("td",E,i(`NT$${s.total}`),1),t("td",H,[t("button",{type:"button",class:"btn btn-outline-danger btn-sm",onClick:it=>e.delCart(s.id),disabled:e.loadingItem===s.id},[s.id===e.loadingItem?(o(),a("i",z)):_("",!0),r(" x ")],8,M)])]))),128)):(o(),a("tr",G,[t("td",J,[r(" 購物車尚未有產品 "),y(u,{to:"/products",class:"btn btn-primary-200 rounded-pill py-1 text-white ms-2 fs-4"},{default:w(()=>[r("前往購物")]),_:1})])]))])):_("",!0)]),t("div",K,[O,t("div",P,[v(t("select",{name:"",id:"",class:"form-control me-2","onUpdate:modelValue":n[0]||(n[0]=s=>e.cart.group=s),onChange:n[1]||(n[1]=(...s)=>e.saveToLocal&&e.saveToLocal(...s))},[(o(),a(m,null,p(5,s=>t("option",{value:s,key:s,class:"text-center"},i(s),9,Q)),64))],544),[[k,e.cart.group]])]),t("span",W,i(`${e.cart.group*30}天份`),1)]),t("div",X,[Y,t("p",Z,i(`NT$${e.$filters.toThousands(e.cart.total*e.cart.group)}`),1)])]),t("div",tt,[t("a",{class:"btn btn-primary-200 text-white rounded-pill btn-hover ps-8 pe-6 py-3 d-flex align-items-center",onClick:n[2]||(n[2]=(...s)=>l.checkCart&&l.checkCart(...s))},[r(" 前往結帳"),st])])])])])])}const lt=f($,[["render",et]]);export{lt as default};
