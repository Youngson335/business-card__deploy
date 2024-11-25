(function(){"use strict";var e={3960:function(e,i,t){var n=t(3751),o=t(641);const a={class:"app__loading content",ref:"refAPP"},s={key:0,class:"load--block",ref:"refLoader"};function r(e,i,t,n,r,l){const c=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.CE)("div",a,[r.showLoader?((0,o.uX)(),(0,o.CE)("div",s,i[0]||(i[0]=[(0,o.Lk)("div",{class:"loader"},null,-1)]),512)):(0,o.Q3)("",!0),(0,o.bF)(c,{onGetLoaderState:l.setLoaderState},null,8,["onGetLoaderState"])],512)}var l={data(){return{showLoader:!0}},methods:{setLoaderState(e){const i=this.$refs.refLoader,t=this.$refs.refAPP;console.log("отработал"),!1===e&&(i.classList.add("hidden__loader"),setTimeout((()=>{this.showLoader=!1,t.classList.remove("app__loading")}),1500))}}},c=t(6262);const g=(0,c.A)(l,[["render",r],["__scopeId","data-v-0569453c"]]);var p=g,d=t(5220);const m={class:"home container"},u={class:"home__header"};function k(e,i,t,n,a,s){const r=(0,o.g2)("User"),l=(0,o.g2)("UserExperience"),c=(0,o.g2)("UserLink"),g=(0,o.g2)("CarouselReviews"),p=(0,o.g2)("UserPortfolio"),d=(0,o.g2)("UserGoal"),k=(0,o.g2)("Logo");return(0,o.uX)(),(0,o.CE)("div",m,[(0,o.Lk)("header",u,[(0,o.bF)(r)]),(0,o.Lk)("main",null,[(0,o.bF)(l,{onStopLoader:s.stopLoaderUserExperience},null,8,["onStopLoader"]),(0,o.bF)(c,{onStopLoader:s.stopLoaderUserLink},null,8,["onStopLoader"]),(0,o.bF)(g),(0,o.bF)(p),(0,o.bF)(d)]),(0,o.bF)(k)])}var v=t.p+"img/logo.bc35b25d.png";const f={class:"logo"};function h(e,i,t,n,a,s){return(0,o.uX)(),(0,o.CE)("div",f,i[0]||(i[0]=[(0,o.Lk)("img",{class:"logo--img",src:v,alt:""},null,-1)]))}var b={};const L=(0,c.A)(b,[["render",h]]);var _=L;const y={class:"user"};function w(e,i,t,n,a,s){const r=(0,o.g2)("UserAvatar"),l=(0,o.g2)("UserInfo");return(0,o.uX)(),(0,o.CE)("div",y,[(0,o.bF)(r),(0,o.bF)(l)])}var C=t.p+"img/avatar.a7a04384.jpg";const E={class:"user__avatar"};function P(e,i,t,n,a,s){return(0,o.uX)(),(0,o.CE)("div",E,i[0]||(i[0]=[(0,o.Lk)("img",{src:C,alt:""},null,-1)]))}var x={};const A=(0,c.A)(x,[["render",P]]);var I=A;const U={class:"user__info"},X={class:"user__description"},F={class:"description__copy"},S=["src"],H={class:"description__copy"},T=["src"];function O(e,i,t,n,a,s){return(0,o.uX)(),(0,o.CE)("div",U,[i[8]||(i[8]=(0,o.Lk)("div",{class:"user__title"},[(0,o.Lk)("h2",{class:"user__title--h2"},"Frontend developer")],-1)),(0,o.Lk)("div",X,[i[4]||(i[4]=(0,o.Lk)("p",null,"- Толстов Владислав Денисович",-1)),i[5]||(i[5]=(0,o.Lk)("p",null,"- 19 лет",-1)),i[6]||(i[6]=(0,o.Lk)("p",null,"- Опыт работы: 1,5 года",-1)),(0,o.Lk)("div",F,[i[2]||(i[2]=(0,o.Lk)("p",null,[(0,o.eW)("- telegram: "),(0,o.Lk)("strong",null,"@young_son335")],-1)),(0,o.Lk)("img",{src:s.copyTelegram,alt:"",onClick:i[0]||(i[0]=e=>s.copyText(1,"young_son335"))},null,8,S)]),i[7]||(i[7]=(0,o.Lk)("p",null,"+ 7 (914)-576-69-73",-1)),(0,o.Lk)("div",H,[i[3]||(i[3]=(0,o.Lk)("p",null,[(0,o.eW)("- почта: "),(0,o.Lk)("strong",null,"tolstovvlad335@gmail.com")],-1)),(0,o.Lk)("img",{src:s.copyMail,alt:"",onClick:i[1]||(i[1]=e=>s.copyText(2,"tolstovvlad335@gmail.com"))},null,8,T)])])])}var j=t.p+"img/copy.299c7adc.svg",W=t.p+"img/done-copy.a3580204.svg",M={data(){return{telegram:0,mail:0}},computed:{copyTelegram(){return 0===this.telegram?W:j},copyMail(){return 0===this.mail?W:j}},methods:{copyText(e,i){1===e?(this.telegram=e,navigator.clipboard.writeText(i)):2===e&&(this.mail=e,navigator.clipboard.writeText(i))}}};const G=(0,c.A)(M,[["render",O]]);var K=G,N={components:{UserAvatar:I,UserInfo:K}};const Q=(0,c.A)(N,[["render",w]]);var Y=Q,$=t(33),q=t.p+"img/img5.da25e9d9.png";const V={class:"experience"},R={class:"experience__text"},B={class:"image-container active__img"};function J(e,i,t,n,a,s){return(0,o.uX)(),(0,o.CE)("div",V,[(0,o.Lk)("div",R,[(0,o.Lk)("p",null,[i[1]||(i[1]=(0,o.Lk)("strong",null,"Стэк: ",-1)),((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.words,((e,i)=>((0,o.uX)(),(0,o.CE)("span",{key:i,class:(0,$.C4)({active:i===a.activeIndex})},(0,$.v_)(e)+", ",3)))),128))])]),(0,o.Lk)("div",B,[(0,o.Lk)("img",{ref:"experienceIMG",onLoad:i[0]||(i[0]=(...e)=>s.checkImageLoading&&s.checkImageLoading(...e)),src:q,alt:"experience",style:{display:"none"}},null,544)])])}var z={data(){return{words:["HTML5","CSS3","JavaScript","Vue3/Vuex","Pinia","NuxtJS","TypeScript","Docker","Scss","npm","webpack","bootstrap5","vite","опыт работы c API","github/lub","telegramWebApp","БЭМ","Leaflet","tailwind"],activeIndex:0,imageLoading:!0}},methods:{checkImageLoading(){const e=this.$refs.experienceIMG;this.imageLoading=!1,!1===this.imageLoading&&(e.style.display="block",this.$emit("stopLoader",!0))}},mounted(){setInterval((()=>{this.activeIndex=(this.activeIndex+1)%this.words.length}),1500)}};const D=(0,c.A)(z,[["render",J]]);var Z=D,ee=t.p+"img/img2.280f4ee8.png";const ie={class:"user__link"},te={class:"link__image"};function ne(e,i,t,n,a,s){return(0,o.uX)(),(0,o.CE)("div",ie,[(0,o.Lk)("div",te,[(0,o.Lk)("img",{onLoad:i[0]||(i[0]=(...e)=>s.checkImageLoading&&s.checkImageLoading(...e)),src:ee,alt:"",style:{display:"none"},ref:"experienceIMG"},null,544)]),i[1]||(i[1]=(0,o.Fv)('<div class="link__items"><div class="link__item"><p> Мой githab: <a href="https://github.com/Youngson335" target="_blank">https://github.com/Youngson335</a></p></div><div class="link__item"><p> Мой telegram: <a href="https://t.me/young_son335" target="_blank">https://t.me/young_son335</a></p></div><div class="link__item"><p> Профиль на <a href="https://freelance.habr.com/freelancers/Vladislav335" target="_blank">ХабрФрилансе</a></p></div></div>',1))])}var oe={data(){return{imageLoading:!0}},methods:{checkImageLoading(){const e=this.$refs.experienceIMG;this.imageLoading=!1,!1===this.imageLoading&&(e.style.display="block",this.$emit("stopLoader",!0))}}};const ae=(0,c.A)(oe,[["render",ne]]);var se=ae,re=t.p+"img/img7.a496a58d.png",le=t.p+"img/img3.39965650.png";const ce={class:"carousel__block"},ge={class:"carousel"},pe={class:"carousel__item"},de={key:0,class:"carousel__image",src:re,alt:""},me={key:1,src:le,alt:"",class:"carousel__image"},ue={style:{position:"relative","z-index":"2"}},ke=["src"];function ve(e,i,t,n,a,s){const r=(0,o.g2)("Slide"),l=(0,o.g2)("Navigation"),c=(0,o.g2)("Pagination"),g=(0,o.g2)("Carousel");return(0,o.uX)(),(0,o.CE)("div",ce,[(0,o.Lk)("div",ge,[(0,o.bF)(g,null,{addons:(0,o.k6)((()=>[(0,o.bF)(l),(0,o.bF)(c)])),default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.reviews,(e=>((0,o.uX)(),(0,o.Wv)(r,{key:e},{default:(0,o.k6)((()=>[(0,o.Lk)("div",pe,[e.id%2===0?((0,o.uX)(),(0,o.CE)("img",de)):(0,o.Q3)("",!0),e.id%2!==0?((0,o.uX)(),(0,o.CE)("img",me)):(0,o.Q3)("",!0),(0,o.Lk)("div",ue,[((0,o.uX)(),(0,o.CE)("img",{class:"carousel__item--img",key:e.id,src:e.img,alt:""},null,8,ke))])])])),_:2},1024)))),128))])),_:1})])])}var fe=t(2091),he=t.p+"img/1.c5652062.png",be=t.p+"img/2.4ff760e5.png",Le=t.p+"img/3.aef27f6c.png",_e=t.p+"img/4.683a6c61.png",ye=t.p+"img/5.828a9cba.png",we=(0,o.pM)({name:"Basic",components:{Carousel:fe.FN,Slide:fe.q7,Pagination:fe.dK,Navigation:fe.Vx},data(){return{reviews:[{id:1,img:he},{id:2,img:be},{id:3,img:Le},{id:4,img:_e},{id:5,img:ye}]}}});const Ce=(0,c.A)(we,[["render",ve]]);var Ee=Ce,Pe=t(953),xe=t.p+"img/img8.4b623024.png",Ae=t(6278);const Ie={class:"select__portfolio"},Ue={class:"select__items"},Xe=["onClick"],Fe={class:"select__description"},Se={key:0},He=["href"],Te={key:1},Oe={key:2},je=["href"],We={key:3},Me={class:"portfolio"},Ge={class:"carousel__block"},Ke={class:"carousel"},Ne={class:"slide__images"},Qe={key:0,class:"load-portfolio"},Ye=["src"],$e=(0,o.pM)({name:"Basic",components:{Carousel:fe.FN,Slide:fe.q7,Pagination:fe.dK,Navigation:fe.Vx},data(){return{activePortfolio:1,loadImage:!0}},computed:{...(0,Ae.L8)(["getPortfolio"]),checkUserPortfolio(){return this.getPortfolio},checkActivePortfolio(){return this.getPortfolio.find((e=>e.id===this.activePortfolio))}},methods:{selectPortfolio(e){this.loadImage=!0,this.activePortfolio=e,this.checkActivePortfolio,console.log(e)},checkImageLoading(){console.log("отработал"),this.loadImage=!1}},mounted(){console.log(this.checkUserPortfolio)}});var qe=Object.assign($e,{setup(e){return(0,o.sV)((async()=>{await(0,o.dY)();const e=document.querySelectorAll(".carousel__next")[1],i=document.querySelectorAll(".carousel__prev")[1],t=document.querySelector(".portfolio__image"),n=[e,i];for(let o of n)o.addEventListener("click",(()=>{t.classList.add("jump__active"),setTimeout((()=>{t.classList.remove("jump__active")}),500)}))})),(e,i)=>((0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("div",Ie,[i[1]||(i[1]=(0,o.Lk)("div",{class:"select__title"},[(0,o.Lk)("h3",null,"Выбрать работу")],-1)),(0,o.Lk)("div",Ue,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.checkUserPortfolio,(i=>((0,o.uX)(),(0,o.CE)("button",{class:(0,$.C4)(["select__items--btn",{active__item:i.id===e.activePortfolio}]),key:i.id,onClick:t=>e.selectPortfolio(i.id)},(0,$.v_)(i.title),11,Xe)))),128))])]),(0,o.Lk)("div",Fe,[(0,o.Lk)("h4",null,[i[2]||(i[2]=(0,o.eW)(" Описание: ")),(0,o.Lk)("p",null,(0,$.v_)(e.checkActivePortfolio.description),1)]),null!==e.checkActivePortfolio.link?((0,o.uX)(),(0,o.CE)("p",Se,[i[3]||(i[3]=(0,o.eW)(" ccылка на проект: ")),(0,o.Lk)("a",{href:e.checkActivePortfolio.link,target:"_blank"},"клик",8,He)])):(0,o.Q3)("",!0),null===e.checkActivePortfolio.link?((0,o.uX)(),(0,o.CE)("p",Te,i[4]||(i[4]=[(0,o.eW)(" Ссылка на проект "),(0,o.Lk)("span",null,"не доступна",-1)]))):(0,o.Q3)("",!0),null!==e.checkActivePortfolio.gitHub?((0,o.uX)(),(0,o.CE)("p",Oe,[i[5]||(i[5]=(0,o.eW)(" ccылка на gitHub: ")),(0,o.Lk)("a",{href:e.checkActivePortfolio.link,target:"_blank"},"клик",8,je)])):(0,o.Q3)("",!0),null===e.checkActivePortfolio.gitHub?((0,o.uX)(),(0,o.CE)("p",We,i[6]||(i[6]=[(0,o.eW)(" ccылка на gitHub "),(0,o.Lk)("span",null,"не доступна",-1)]))):(0,o.Q3)("",!0)]),(0,o.Lk)("div",Me,[i[8]||(i[8]=(0,o.Lk)("div",{class:"portfolio__image"},[(0,o.Lk)("img",{src:xe,alt:""})],-1)),(0,o.Lk)("div",Ge,[(0,o.Lk)("div",Ke,[(0,o.bF)((0,Pe.R1)(fe.FN),null,{addons:(0,o.k6)((()=>[(0,o.bF)((0,Pe.R1)(fe.Vx)),(0,o.bF)((0,Pe.R1)(fe.dK))])),default:(0,o.k6)((()=>[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(e.checkActivePortfolio.images,(t=>((0,o.uX)(),(0,o.Wv)((0,Pe.R1)(fe.q7),{key:t,class:"portfolio__images"},{default:(0,o.k6)((()=>[(0,o.Lk)("div",Ne,[!0===e.loadImage?((0,o.uX)(),(0,o.CE)("div",Qe,i[7]||(i[7]=[(0,o.Lk)("div",{class:"loader"},null,-1)]))):(0,o.Q3)("",!0),(0,o.Lk)("img",{src:t,alt:"",onLoad:i[0]||(i[0]=(...i)=>e.checkImageLoading&&e.checkImageLoading(...i))},null,40,Ye)])])),_:2},1024)))),128))])),_:1})])])])],64))}});const Ve=(0,c.A)(qe,[["__scopeId","data-v-97f615f2"]]);var Re=Ve,Be=t.p+"img/goal.9184a0a7.png",Je=t.p+"img/img10.55e4ca27.png";const ze={class:"user-goal"};function De(e,i,t,n,a,s){return(0,o.uX)(),(0,o.CE)("div",ze,i[0]||(i[0]=[(0,o.Lk)("div",{class:"user-goal__title"},[(0,o.Lk)("h2",null,"Моя цель")],-1),(0,o.Lk)("div",{class:"user-goal__img"},[(0,o.Lk)("img",{src:Be,alt:""})],-1),(0,o.Lk)("img",{class:"user-goal__people",src:Je,alt:""},null,-1)]))}var Ze={};const ei=(0,c.A)(Ze,[["render",De]]);var ii=ei,ti={data(){return{imageUserExperience:!1,imageUserLink:!1,countLoad:0}},components:{Logo:_,User:Y,UserExperience:Z,UserLink:se,CarouselReviews:Ee,UserPortfolio:Re,UserGoal:ii},inject:["updateState"],computed:{},watch:{imageUserExperience(){!0===this.imageUserExperience&&this.increment(1)},imageUserLink(){!0===this.imageUserLink&&this.increment(1)},countLoad(){2===this.countLoad&&this.sendStateLoader()}},methods:{stopLoaderUserExperience(e){this.imageUserExperience=e},stopLoaderUserLink(e){this.imageUserLink=e},sendStateLoader(){this.$emit("getLoaderState",!1)},increment(e){this.countLoad+=e}}};const ni=(0,c.A)(ti,[["render",k]]);var oi=ni;const ai=[{path:"/",name:"HomePage",component:oi}],si=(0,d.aE)({history:(0,d.Bt)(),routes:ai});var ri=si,li=t.p+"img/1.59bc7dc8.png",ci=t.p+"img/2.66c79383.png",gi=t.p+"img/3.40025275.png",pi=t.p+"img/4.b1623e5e.png",di=t.p+"img/5.7a5ec512.png",mi=t.p+"img/6.4a761c2b.png",ui=t.p+"img/7.65f0731d.png",ki=t.p+"img/8.9675d7bc.png",vi=t.p+"img/9.534209b3.png",fi=t.p+"img/1.a5a8d38c.png",hi=t.p+"img/2.8a08e1c5.png",bi=t.p+"img/3.dddb3bab.png",Li=t.p+"img/4.dfc2a3ce.png",_i=t.p+"img/5.38ea28d6.png",yi=t.p+"img/1.bcca6a05.png",wi=t.p+"img/2.e33c3196.png",Ci=t.p+"img/3.69c5b5e0.png",Ei=t.p+"img/4.3eb5dd4c.png",Pi=t.p+"img/5.6447ee43.png",xi=t.p+"img/1.27f8ae76.png",Ai=t.p+"img/2.43b4086c.png",Ii=t.p+"img/3.703be8e5.png",Ui=t.p+"img/4.a8609c76.png",Xi=t.p+"img/5.36999d87.png",Fi=t.p+"img/1.354ac05c.png",Si=t.p+"img/2.86e40667.png",Hi=t.p+"img/1.f5e4d7eb.png",Ti=t.p+"img/2.6b9eee24.png",Oi=t.p+"img/3.b8e71fa0.png",ji=t.p+"img/4.81672419.png",Wi=t.p+"img/1.7f45d885.png",Mi=t.p+"img/2.4c0d1449.png",Gi=t.p+"img/3.a7a22458.png",Ki=t.p+"img/4.8276b63a.png",Ni=t.p+"img/5.b8a07646.png",Qi=t.p+"img/6.3774a15f.png",Yi=t.p+"img/7.891ec2fb.png",$i=t.p+"img/1.6369be9b.png",qi=t.p+"img/2.e4146ba2.png",Vi=t.p+"img/3.637ea023.png",Ri=t.p+"img/4.eae15a6d.png",Bi=t.p+"img/5.35d476fa.png",Ji=t.p+"img/6.583cc400.png",zi=t.p+"img/7.83569692.png",Di=t.p+"img/1.c7e6e8b4.png",Zi=t.p+"img/2.8314d560.png",et=t.p+"img/3.9f7fa25f.png",it=t.p+"img/4.1e01019d.png",tt=t.p+"img/5.d29851cc.png",nt=t.p+"img/1.a1c417a8.png",ot=t.p+"img/2.94971b6d.png",at=t.p+"img/3.b0722596.png",st=t.p+"img/1.a9858089.png",rt=t.p+"img/2.c79110ee.png",lt=t.p+"img/3.4c58e6e1.png",ct=t.p+"img/4.0128508f.png",gt=t.p+"img/5.5cb4d57e.png",pt=t.p+"img/6.a1b18932.png",dt=t.p+"img/7.4798dd37.png",mt=t.p+"img/1.0cacc62c.png",ut=t.p+"img/2.62e9e1bb.png",kt=t.p+"img/3.050075f1.png",vt=t.p+"img/4.f0426e39.png",ft=t.p+"img/5.d28983ad.png",ht=t.p+"img/6.4cedc4f4.png",bt=t.p+"img/1.f8988aac.png",Lt=t.p+"img/2.17819628.png",_t=t.p+"img/3.d877d2a7.png",yt=t.p+"img/4.9b131150.png",wt=t.p+"img/1.6a3e37c0.png",Ct=t.p+"img/2.57e0b23e.png",Et=t.p+"img/3.e7a89f5c.png",Pt=t.p+"img/4.306929d1.png",xt=t.p+"img/5.b94c4065.png",At=t.p+"img/6.5240ad67.png",It=t.p+"img/7.e2594b47.png",Ut=t.p+"img/8.354ff6d4.png",Xt=t.p+"img/9.d895cbc9.png",Ft=t.p+"img/10.d6afac1c.png",St=t.p+"img/1.dc642904.png",Ht=t.p+"img/2.d742d69c.png",Tt=t.p+"img/3.9528faf0.png",Ot=t.p+"img/4.3dd96bb1.png",jt=t.p+"img/5.4d7ef980.png",Wt=(0,Ae.y$)({state:{portfolio:[{id:1,name:"work1",title:"Сервис доставки",description:"Разработка сервиса доставки для telegram webApp",link:null,gitHub:null,images:[li,ci,gi,pi,di,mi,ui,ki,vi]},{id:2,name:"work2",title:"Тестовое задание №1",description:"Разработка тестового задания для it компании",link:"https://test-pricing-plans.vercel.app/",gitHub:"https://github.com/Youngson335/test-pricing-plans",images:[fi,hi,bi,Li,_i]},{id:3,name:"work3",title:"Тестовое задание №2",description:"Разработка тестового задания для it компании",link:"https://test-app-book-build.vercel.app/",gitHub:"https://github.com/Youngson335/test-app-books",images:[yi,wi,Ci,Ei,Pi]},{id:4,name:"work4",title:"Тестовое задание №3",description:"Разработка тестового задания для it компании",link:"https://alef-build.vercel.app/",gitHub:"https://github.com/Youngson335/test-alef",images:[xi,Ai,Ii,Ui,Xi]},{id:5,name:"work5",title:"Разработка анимации",description:"Разработка анимации для главной страницы",link:"https://delivery-murom-build.vercel.app/",gitHub:null,images:[Fi,Si]},{id:6,name:"work6",title:"Ознакомительный лендинг",description:"Разработка ознакомительного лендинга",link:"https://meme-coin-build.vercel.app/",gitHub:null,images:[Hi,Ti,Oi,ji]},{id:7,name:"work7",title:"telegram webApp игра",description:"Разработка telegram webApp игры",link:null,gitHub:null,images:[Wi,Mi,Gi,Ki,Ni,Qi,Yi]},{id:8,name:"work8",title:"Интернет магазин",description:"Разработка интернет магазина",link:null,gitHub:null,images:[$i,qi,Vi,Ri,Bi,Ji,zi]},{id:9,name:"work9",title:"Интернет магазин",description:"Разработка интернет магазина",link:null,gitHub:null,images:[Di,Zi,et,it,tt]},{id:10,name:"work10",title:"Интернет магазин",description:"Командная разработка интернет магазина",link:null,gitHub:null,images:[nt,ot,at]},{id:11,name:"work11",title:"Лендинг",description:"Разработка ознакомительного лендинга для компании по разработке мобильных приложений!",link:"https://nmnh-front.vercel.app/",gitHub:"https://github.com/Youngson335/currency-converter",images:[st,rt,lt,ct,gt,pt,dt]},{id:12,name:"work12",title:"Админ-панель",description:"Разработка мини-админ панели для управления api",link:"https://tg-admin-panel.vercel.app/",gitHub:"https://github.com/Youngson335/tg-admin-panel",images:[mt,ut,kt,vt,ft,ht]},{id:13,name:"work13",title:"Лендинг",description:"Разработка ознакомительного лендинга для компании на привлечение новых рабочих",link:null,gitHub:null,images:[bt,Lt,_t,yt]},{id:14,name:"work14",title:"Сервис записи в barbershops Москвы",description:"Разработка сервиса для выбора и записи в разные барбершовы Москвы! Данный сервис разрабатывался на Nuxt/TypeScript/Pinia",link:null,gitHub:null,images:[wt,Ct,Et,Pt,xt,At,It,Ut,Xt,Ft]},{id:15,name:"work15",title:"Разработка регистрации!",description:"Разработал на vue3 регистрацию для сервиса! На стадии заполнения формы все необходимые данные сохраняются в query параметры, что дает гаранитую их сохранения после случайного или целенаправленного их обновления!",link:null,gitHub:null,images:[St,Ht,Tt,Ot,jt]}]},getters:{getPortfolio(e){return e.portfolio}},mutations:{},actions:{},modules:{}});(0,n.Ef)(p).use(Wt).use(ri).mount("#app")}},i={};function t(n){var o=i[n];if(void 0!==o)return o.exports;var a=i[n]={exports:{}};return e[n](a,a.exports,t),a.exports}t.m=e,function(){var e=[];t.O=function(i,n,o,a){if(!n){var s=1/0;for(g=0;g<e.length;g++){n=e[g][0],o=e[g][1],a=e[g][2];for(var r=!0,l=0;l<n.length;l++)(!1&a||s>=a)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(r=!1,a<s&&(s=a));if(r){e.splice(g--,1);var c=o();void 0!==c&&(i=c)}}return i}a=a||0;for(var g=e.length;g>0&&e[g-1][2]>a;g--)e[g]=e[g-1];e[g]=[n,o,a]}}(),function(){t.d=function(e,i){for(var n in i)t.o(i,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:i[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)}}(),function(){t.p="/"}(),function(){var e={524:0};t.O.j=function(i){return 0===e[i]};var i=function(i,n){var o,a,s=n[0],r=n[1],l=n[2],c=0;if(s.some((function(i){return 0!==e[i]}))){for(o in r)t.o(r,o)&&(t.m[o]=r[o]);if(l)var g=l(t)}for(i&&i(n);c<s.length;c++)a=s[c],t.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return t.O(g)},n=self["webpackChunkbusiness_card"]=self["webpackChunkbusiness_card"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(3960)}));n=t.O(n)})();
//# sourceMappingURL=app.1190cc15.js.map