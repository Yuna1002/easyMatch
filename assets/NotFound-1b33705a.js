import{_ as e,o,c,d as t,t as n,g as a}from"./index-5ef0d95b.js";const i="/easyMatch/assets/img404-27937d3b.jpg",r={data(){return{count:3}},mounted(){setInterval(()=>{this.count--,this.count===0&&this.$router.push("/")},1e3)}},l={class:"container"},d={class:"row justify-content-center align-items-center vh-100"},_={class:"col-md-5 text-center"},u=t("img",{src:i,alt:"404",width:"300",height:"250",class:"mb-4 img-fluid"},null,-1),h=t("h1",{class:"mb-6 h2"},[a("404 ERROR! "),t("br"),t("small",null,"您找的網頁不存在")],-1);function m(p,f,g,v,s,x){return o(),c("div",l,[t("div",d,[t("div",_,[u,h,t("p",null,n(s.count)+" 秒後自動跳轉至首頁",1)])])])}const $=e(r,[["render",m]]);export{$ as default};
