(globalThis["webpackChunkpwa_pendu"]=globalThis["webpackChunkpwa_pendu"]||[]).push([[822],{8703:(e,t,o)=>{"use strict";o.d(t,{Z:()=>C});var a=o(9835),s=o(744),l=o.n(s);const n={class:"col-8"},i=(0,a._)("p",{class:"text-h6"},"Bonjour !",-1),r=(0,a._)("p",{class:"text-grey text-center"}," Veuillez rentrer vos information afin de vous connectez ",-1),u={class:"row justify-center"},d={class:"row justify-center q-mt-sm q-mb-md"};function m(e,t,o,s,m,c){const p=(0,a.up)("q-img"),g=(0,a.up)("q-space"),h=(0,a.up)("q-btn"),w=(0,a.up)("q-card-section"),f=(0,a.up)("q-icon"),v=(0,a.up)("q-input"),q=(0,a.up)("q-form"),b=(0,a.up)("q-card"),y=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(b,null,{default:(0,a.w5)((()=>[(0,a.Wm)(w,{class:"row items-center q-pb-none"},{default:(0,a.w5)((()=>[(0,a._)("div",n,[(0,a.Wm)(p,{src:l()})]),(0,a.Wm)(g),(0,a.wy)((0,a.Wm)(h,{icon:"close",flat:"",round:"",dense:""},null,512),[[y]])])),_:1}),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[i,r,(0,a.Wm)(q,{onSubmit:c.submit},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{modelValue:m.infos.email,"onUpdate:modelValue":t[0]||(t[0]=e=>m.infos.email=e),"lazy-rules":"",rules:[e=>e&&e.length>0||"Veuillez mettre une adresse mail"],type:"email",placeholder:"example@gmail.com",rounded:"",outlined:"",label:"Adresse email"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(f,{name:"mail"})])),_:1},8,["modelValue","rules"]),(0,a.Wm)(v,{rules:[e=>e.length>=1||"Vous devez reneigner votre mot de passe"],modelValue:m.infos.mdp,"onUpdate:modelValue":t[2]||(t[2]=e=>m.infos.mdp=e),rounded:"",outlined:"",label:"Mot de passe",type:m.isPwd?"password":"text",placeholder:"Exemple : dqA@.kd55z52d"},{append:(0,a.w5)((()=>[(0,a.Wm)(f,{name:m.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:t[1]||(t[1]=e=>m.isPwd=!m.isPwd)},null,8,["name"])])),prepend:(0,a.w5)((()=>[(0,a.Wm)(f,{name:"lock"})])),_:1},8,["rules","modelValue","type"]),(0,a._)("div",u,[(0,a.Wm)(h,{loading:m.loading,type:"submit",rounded:"",color:"secondary",label:"Connexion"},null,8,["loading"])]),(0,a._)("div",d,[(0,a.Wm)(h,{flat:"",rounded:"",color:"accent",label:"Mot de passe oublie ?","no-caps":""})])])),_:1},8,["onSubmit"])])),_:1})])),_:1})}const c={data(){return{loading:!1,isPwd:!0,infos:{mdp:"",email:""}}},methods:{async submit(){this.loading=!0,await this.$store.dispatch("logIn",{infos:this.infos}),this.loading=!1,this.$router.push({name:"home"})}}};var p=o(1639),g=o(4458),h=o(3190),w=o(335),f=o(136),v=o(4455),q=o(8326),b=o(6611),y=o(2857),x=o(2146),_=o(9984),W=o.n(_);const Z=(0,p.Z)(c,[["render",m]]),C=Z;W()(c,"components",{QCard:g.Z,QCardSection:h.Z,QImg:w.Z,QSpace:f.Z,QBtn:v.Z,QForm:q.Z,QInput:b.Z,QIcon:y.Z}),W()(c,"directives",{ClosePopup:x.Z})},5822:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>z});var a=o(9835),s=o(6970),l=o(744),n=o.n(l);const i={key:0,class:"row justify-center items-center q-mt-md q-mb-xl"},r={class:"col-5"},u=(0,a._)("p",{class:"text-h4 text-center q-pa-none q-ma-none text-bold text-primary"}," Entrez votre pseudo ! ",-1),d={class:"col-2"},m={class:"col row justify-center"},c=(0,a._)("p",{class:"text-center text-h4 q-pa-none q-ma-none text-accent text-bold q-mt-md q-mb-md"}," OU ",-1),p={class:"row justify-center q-mb-lg"};function g(e,t,o,l,g,h){const w=(0,a.up)("q-img"),f=(0,a.up)("q-input"),v=(0,a.up)("q-avatar"),q=(0,a.up)("q-carousel-slide"),b=(0,a.up)("q-carousel"),y=(0,a.up)("q-btn"),x=(0,a.up)("q-form"),_=(0,a.up)("ConnexionModal"),W=(0,a.up)("q-dialog"),Z=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(Z,null,{default:(0,a.w5)((()=>[g.utils?((0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",{class:(0,s.C_)(g.utils.screen.gt.md?"col-4 row justify-center":"col-9 row justify-center")},[(0,a.Wm)(w,{src:n()})],2)])):(0,a.kq)("",!0),g.utils?((0,a.wg)(),(0,a.j4)(x,{key:1,class:(0,s.C_)(g.utils.screen.gt.md?"row q-mt-md justify-center":"q-mt-md"),onSubmit:h.submit},{default:(0,a.w5)((()=>[(0,a._)("div",r,[u,(0,a.Wm)(f,{"lazy-rules":"",rules:[e=>e&&e.length>0||"Vous devez avoir un pseudo !"],autofocus:"",style:{"font-size":"20px"},modelValue:g.user.pseudo,"onUpdate:modelValue":t[0]||(t[0]=e=>g.user.pseudo=e),class:"q-ma-sm",color:"secondary"},null,8,["rules","modelValue"]),(0,a.Wm)(b,{"control-color":"accent",animated:"",modelValue:g.avatarChoix,"onUpdate:modelValue":t[1]||(t[1]=e=>g.avatarChoix=e),infinite:"",arrows:"",padding:"",swipeable:"",height:"180px","transition-prev":"slide-right","transition-next":"slide-left"},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(g.avatars,((e,t)=>((0,a.wg)(),(0,a.j4)(q,{key:t,name:t,class:"row justify-center"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{size:"140px"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,{src:e},null,8,["src"])])),_:2},1024)])),_:2},1032,["name"])))),128))])),_:1},8,["modelValue"])]),(0,a._)("div",d,[(0,a._)("div",m,[(0,a.Wm)(y,{loading:g.loading,type:"submit",class:"q-mt-lg",icon:"east",color:"primary",size:"30px",round:""},null,8,["loading"])])])])),_:1},8,["class","onSubmit"])):(0,a.kq)("",!0),c,(0,a._)("div",p,[(0,a.Wm)(y,{to:{name:"créationCompte"},flat:"",color:"secondary",label:"Créer son compte"}),(0,a.Wm)(y,{onClick:t[2]||(t[2]=e=>g.connexion=!0),color:"accent",class:"q-ml-sm",label:"Connectez vous",flat:""})]),(0,a.Wm)(W,{modelValue:g.connexion,"onUpdate:modelValue":t[3]||(t[3]=e=>g.connexion=e)},{default:(0,a.w5)((()=>[(0,a.Wm)(_)])),_:1},8,["modelValue"])])),_:1})}var h=o(8703),w=o(9302);const f={data(){return{connexion:!1,loading:!1,user:{pseudo:"",uid:"",avatar:""},avatarChoix:0,avatars:null,utils:null}},components:{ConnexionModal:h.Z},async mounted(){this.utils=(0,w.Z)();let e=await this.$store.dispatch("getAllAvatars");this.avatars=e},methods:{async submit(){this.loading=!0,this.setAvatar();let e=await this.$store.dispatch("loginAnnonyme",{infos:this.user});e&&this.$router.push({name:"home"}),this.loading=!1},setAvatar(){this.user.avatar=this.avatars[this.avatarChoix]}}};var v=o(1639),q=o(9885),b=o(335),y=o(8326),x=o(6611),_=o(7052),W=o(1694),Z=o(1357),C=o(4455),V=o(3706),Q=o(9984),j=o.n(Q);const k=(0,v.Z)(f,[["render",g]]),z=k;j()(f,"components",{QPage:q.Z,QImg:b.Z,QForm:y.Z,QInput:x.Z,QCarousel:_.Z,QCarouselSlide:W.Z,QAvatar:Z.Z,QBtn:C.Z,QDialog:V.Z})},744:(e,t,o)=>{e.exports=o.p+"img/logo.b5971477.png"}}]);