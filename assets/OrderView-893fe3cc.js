import{_ as V,m as y,b as x,r as n,o as u,c as _,d as e,e as t,w as p,F as w,z as I,t as c,g as h,E as m,H as P,J as S}from"./index-24520cbe.js";import{c as b}from"./cartStore-cdfbced9.js";import{S as E}from"./sweetalert2.all-f8838a10.js";const{VITE_APP_URL:k,VITE_APP_PATH:A}={VITE_APP_URL:"https://vue3-course-api.hexschool.io/v2",VITE_APP_PATH:"yuna1002",BASE_URL:"/easyMatch/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},T={data(){return{form:{user:{name:"",email:"",tel:"",address:""},message:""},orderId:""}},computed:{...y(b,["cart"])},methods:{...x(b,["getCart"]),submitOrder(){const o=this.form;this.$http.post(`${k}/api/${A}/order`,{data:o}).then(s=>{E.fire({icon:"success",toast:!0,position:"top",title:"訂單建立成功",timer:1500,showConfirmButton:!1}),this.$refs.form.resetForm(),this.getCart(),localStorage.setItem("totalIncludeGroup",this.cart.total*this.cart.group),this.orderId=s.data.orderId,this.$router.push(`/orderPay/${this.orderId}`)}).catch(s=>{console.log(s)})}},mounted(){const o=localStorage.getItem("selectedGroup");o&&(this.cart.group=parseInt(o))}},U={class:"bg-tertiary-100"},R={class:"container"},C={"aria-label":"breadcrumb",class:"bg-tertiary-100 pt-3"},L={class:"breadcrumb mb-0"},O={class:"breadcrumb-item"},B={class:"breadcrumb-item"},D=e("li",{class:"breadcrumb-item active","aria-current":"page"},"確認訂單",-1),q={class:"row pt-12 pb-12"},$={class:"col-lg-4 mb-8"},F=e("h2",{class:"h4 mb-6 text-center"},"訂單明細",-1),H={class:"bg-card-bg py-6 px-6"},M={class:"d-flex"},N={class:"me-2"},j=e("hr",null,null,-1),z={class:"text-end fw-semibold"},G={class:"col-lg-8"},J=e("h2",{class:"h4 mb-6 text-center"},"顧客資料",-1),K={class:"row justify-content-center"},Q={class:"col-lg-10"},W={class:"mb-4"},X=e("label",{for:"name",class:"form-label"},"收件人姓名",-1),Y={class:"mb-4"},Z=e("label",{for:"tel",class:"form-label"},"收件人電話",-1),ee={class:"mb-4"},se=e("label",{for:"email",class:"form-label"},"Email",-1),te={class:"mb-4"},oe=e("label",{for:"address",class:"form-label"},"收件人地址",-1),le={class:"mb-4"},ae=e("label",{for:"message",class:"form-label"},"留言",-1),re=e("div",{class:"text-end"},[e("button",{type:"submit",class:"btn btn-primary-200 text-white"},"送出訂單")],-1);function ie(o,s,de,ne,l,v){const f=n("RouterLink"),i=n("v-field"),d=n("error-message"),g=n("v-form");return u(),_("div",U,[e("div",R,[e("nav",C,[e("ol",L,[e("li",O,[t(f,{to:"/"},{default:p(()=>[h("首頁")]),_:1})]),e("li",B,[t(f,{to:"/cart"},{default:p(()=>[h("購物車")]),_:1})]),D])]),e("div",q,[e("div",$,[F,e("div",H,[(u(!0),_(w,null,I(o.cart.carts,r=>(u(),_("div",{key:r.id,class:"d-flex justify-content-between mb-1"},[e("p",null,c(r.product.title),1),e("div",M,[e("p",N,c(`${o.cart.group*30}天份`),1),e("p",null,c(`$${r.total*o.cart.group} `),1)])]))),128)),j,e("p",z,c(`總計$ ${o.cart.total*o.cart.group}`),1)])]),e("div",G,[J,e("div",K,[e("div",Q,[t(g,{ref:"form",onSubmit:v.submitOrder},{default:p(({errors:r})=>[e("div",W,[X,t(i,{id:"name",name:"姓名",type:"text",class:m(["form-control",{"is-invalid":r.姓名}]),placeholder:"請輸入姓名",rules:"required",modelValue:l.form.user.name,"onUpdate:modelValue":s[0]||(s[0]=a=>l.form.user.name=a)},null,8,["class","modelValue"]),t(d,{name:"姓名",class:"invalid-feedback"})]),e("div",Y,[Z,t(i,{id:"tel",name:"電話",type:"text",class:m(["form-control",{"is-invalid":r.電話}]),placeholder:"請輸入電話",rules:"required|min:8|max:10",modelValue:l.form.user.tel,"onUpdate:modelValue":s[1]||(s[1]=a=>l.form.user.tel=a)},null,8,["class","modelValue"]),t(d,{name:"電話",class:"invalid-feedback"})]),e("div",ee,[se,t(i,{id:"email",name:"email",type:"email",class:m(["form-control",{"is-invalid":r.email}]),placeholder:"請輸入 Email",rules:"email|required",modelValue:l.form.user.email,"onUpdate:modelValue":s[2]||(s[2]=a=>l.form.user.email=a)},null,8,["class","modelValue"]),t(d,{name:"email",class:"invalid-feedback"})]),e("div",te,[oe,t(i,{id:"address",name:"地址",type:"text",class:m(["form-control",{"is-invalid":r.地址}]),placeholder:"請輸入地址",rules:"required",modelValue:l.form.user.address,"onUpdate:modelValue":s[3]||(s[3]=a=>l.form.user.address=a)},null,8,["class","modelValue"]),t(d,{name:"地址",class:"invalid-feedback"})]),e("div",le,[ae,P(e("textarea",{id:"message",class:"form-control",cols:"30",rows:"5","onUpdate:modelValue":s[4]||(s[4]=a=>l.form.message=a)},null,512),[[S,l.form.message]])]),re]),_:1},8,["onSubmit"])])])])])])])}const _e=V(T,[["render",ie]]);export{_e as default};
