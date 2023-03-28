import{_ as x,m as V,b as w,r as c,o as u,c as _,d as e,e as t,w as f,F as y,z as P,t as n,f as S,g as v,E as m,H as E,J as k}from"./index-a3e96386.js";import{c as b}from"./cartStore-0153855b.js";import{S as I}from"./sweetalert2.all-73b96a89.js";const{VITE_APP_URL:T,VITE_APP_PATH:A}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"yuna1002",BASE_URL:"/easyMatch/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},U={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""},orderId:""}},computed:{...V(b,["cart"])},methods:{...w(b,["getCart"]),submitOrder(){const l=this.form;this.$http.post(`${T}/api/${A}/order`,{data:l}).then(s=>{I.fire({icon:"success",toast:!0,position:"top",title:"訂單建立成功",timer:1500,showConfirmButton:!1}),this.$refs.form.resetForm(),this.getCart(),localStorage.setItem("totalIncludeGroup",this.cart.total*this.cart.group),this.orderId=s.data.orderId,this.$router.push(`/orderPay/${this.orderId}`)}).catch(s=>{console.log(s)})}},mounted(){const l=this.$loading.show();setTimeout(()=>{l.hide()},600),this.getCart()}},C={class:"bg-tertiary-100"},R={class:"container"},L={"aria-label":"breadcrumb",class:"bg-tertiary-100 pt-3 mb-6"},B={class:"breadcrumb mb-0"},D={class:"breadcrumb-item"},O={class:"breadcrumb-item"},$=e("li",{class:"breadcrumb-item active","aria-current":"page"},"確認訂單",-1),q=S('<div class="mb-12"><div class="row"><div class="col-9 col-md-7 mx-auto"><div class="border border-black"></div></div></div><div class="row"><div class="col-3 col-md-5"><div class="pointer d-flex flex-column align-items-center ps-5"><div class="pointer-num pointer-num-active fs-3 mb-1 text-white fw-semibold">1</div><p class="fs-4 text-primary-200">填寫資料</p></div></div><div class="col-6 col-md-2"><div class="pointer d-flex flex-column align-items-center"><div class="pointer-num fs-3 mb-1 fw-semibold">2</div><p class="fs-4">確認付款</p></div></div><div class="col-3 col-md-5"><div class="pointer d-flex flex-column align-items-center pe-2"><div class="pointer-num fs-3 mb-1 fw-semibold">3</div><p class="fs-4">訂購完成</p></div></div></div></div>',1),N={class:"row pb-40"},F={class:"col-lg-4 mb-8"},H=e("h2",{class:"h4 mb-6 text-center"},"訂單明細",-1),M={class:"bg-card-bg py-6 px-6"},j={class:"d-flex"},z={class:"me-2"},G=e("hr",null,null,-1),J={class:"text-end fw-semibold"},K={class:"col-lg-8"},Q=e("h2",{class:"h4 mb-6 text-center"},"顧客資料",-1),W={class:"row justify-content-center"},X={class:"col-lg-10"},Y={class:"mb-4"},Z=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),ee={class:"mb-4"},se=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),te={class:"mb-4"},oe=e("label",{for:"email",class:"form-label"},"Email",-1),le={class:"mb-4"},ae=e("label",{for:"address",class:"form-label"},"收件人地址",-1),ie={class:"mb-4"},re=e("label",{for:"message",class:"form-label"},"留言",-1),de=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-primary-200 text-white"},"送出訂單")],-1);function ce(l,s,ne,me,o,h){const p=c("RouterLink"),r=c("v-field"),d=c("error-message"),g=c("v-form");return u(),_("div",C,[e("div",R,[e("nav",L,[e("ol",B,[e("li",D,[t(p,{to:"/",class:"text-primary-200"},{default:f(()=>[v("首頁")]),_:1})]),e("li",O,[t(p,{to:"/cart",class:"text-primary-200"},{default:f(()=>[v("購物車")]),_:1})]),$])]),q,e("div",N,[e("div",F,[H,e("div",M,[(u(!0),_(y,null,P(l.cart.carts,i=>(u(),_("div",{key:i.id,class:"d-flex justify-content-between mb-1"},[e("p",null,n(i.product.title),1),e("div",j,[e("p",z,n(`${l.cart.group*30}天份`),1),e("p",null,n(`$${i.total*l.cart.group} `),1)])]))),128)),G,e("p",J,n(`總計$ ${l.cart.total*l.cart.group}`),1)])]),e("div",K,[Q,e("div",W,[e("div",X,[t(g,{ref:"form",onSubmit:h.submitOrder},{default:f(({errors:i})=>[e("div",Y,[Z,t(r,{id:"name",name:"姓名",type:"text",class:m(["form-control",{"is-invalid":i.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:o.form.user.name,"onUpdate:modelValue":s[0]||(s[0]=a=>o.form.user.name=a)},null,8,["class","modelValue"]),t(d,{name:"姓名",class:"invalid-feedback"})]),e("div",ee,[se,t(r,{id:"tel",name:"電話",type:"text",class:m(["form-control",{"is-invalid":i.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:o.form.user.tel,"onUpdate:modelValue":s[1]||(s[1]=a=>o.form.user.tel=a)},null,8,["class","modelValue"]),t(d,{name:"電話",class:"invalid-feedback"})]),e("div",te,[oe,t(r,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":i.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:o.form.user.email,"onUpdate:modelValue":s[2]||(s[2]=a=>o.form.user.email=a)},null,8,["class","modelValue"]),t(d,{name:"email",class:"invalid-feedback"})]),e("div",le,[ae,t(r,{id:"address",name:"地址",type:"text",class:m(["form-control",{"is-invalid":i.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:o.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=a=>o.form.user.address=a)},null,8,["class","modelValue"]),t(d,{name:"地址",class:"invalid-feedback"})]),e("div",ie,[re,E(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"5","onUpdate:modelValue":s[4]||(s[4]=a=>o.form.message=a)},null,512),[[k,o.form.message]])]),de]),_:1},8,["onSubmit"])])])])])])])}const pe=x(U,[["render",ce]]);export{pe as default};
