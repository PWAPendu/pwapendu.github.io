(globalThis["webpackChunkpwa_pendu"]=globalThis["webpackChunkpwa_pendu"]||[]).push([[505],{8505:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>Y});var a=s(9835),r=s(6970),n=s(8290),i=s.n(n);const o={key:0},l={class:"row justify-center items-center q-ma-sm"},u={class:"col-4"},c={class:"col text-center"},p={class:"text-bold q-ma-none q-pa-none text-accent text-h6"},d={class:"text-bold q-ma-none q-pa-none text-grey"},m={class:"col"},h={class:"q-ml-md"},w=(0,a._)("p",{class:"text-accent text-bold q-ma-none q-pa-none",style:{"font-size":"16px"}}," Créateur ",-1),g={class:"row justify-center items-center"},q={class:"col row items-center q-mb-md"},y=["src"],_={style:{"font-size":"15px"},class:"q-ma-none q-pa-none"},f={class:"col-4"},v={style:{"font-size":"15px"},class:"q-ml-md"},x={key:0,class:"row items-center justify-center"},b=(0,a._)("p",{class:"text-center text-grey q-ma-none q-pa-none q-mr-sm"}," En attente de joueur supplémentaire... ",-1),j={key:1,class:"row items-center justify-center"},k=(0,a._)("p",{class:"text-center text-grey q-ma-none q-pa-none q-mr-sm"}," Tous les joueurs sont présent ",-1),z={class:"row q-pa-sm"},Z=["src"],C={class:"q-ma-none q-pa-none q-ml-sm"},Q=(0,a._)("p",{class:"q-ml-sm text-bold text-grey"},"Joueur annonyme",-1);function $(e,t,s,n,$,W){const D=(0,a.up)("q-img"),P=(0,a.up)("q-btn"),E=(0,a.up)("q-avatar"),I=(0,a.up)("q-spinner-orbit"),T=(0,a.up)("q-icon"),J=(0,a.up)("q-card"),O=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(O,null,{default:(0,a.w5)((()=>[$.partie?((0,a.wg)(),(0,a.iD)("main",o,[(0,a._)("div",l,[(0,a._)("div",u,[(0,a.Wm)(D,{src:i()})]),(0,a._)("div",c,[(0,a._)("p",p,(0,r.zw)($.partie.nom),1),(0,a._)("p",d,"#"+(0,r.zw)($.partie.code),1)]),(0,a._)("div",m,[(0,a.Wm)(P,{loading:$.loading,onClick:W.leave,color:"secondary","no-caps":"",label:"Quitter",size:"16px",style:{width:"100%","border-radius":"15px"}},null,8,["loading","onClick"])])]),(0,a._)("div",h,[w,(0,a._)("div",g,[(0,a._)("div",q,[(0,a.Wm)(E,{class:"q-mr-sm"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:$.partie.createur.avatar},null,8,y)])),_:1}),(0,a._)("p",_,(0,r.zw)($.partie.createur.pseudo),1)]),(0,a._)("div",f,[(0,a._)("p",v,(0,r.zw)($.partie.joueurs.length)+"/"+(0,r.zw)($.partie.max)+" joueurs ",1)])])]),(0,a._)("div",null,[$.partie.max!=$.partie.joueurs.length?((0,a.wg)(),(0,a.iD)("div",x,[b,(0,a.Wm)(I,{color:"grey",size:"2em"})])):((0,a.wg)(),(0,a.iD)("div",j,[k,(0,a.Wm)(T,{name:"done"})])),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)($.partie.joueurs,((e,t)=>((0,a.wg)(),(0,a.iD)("div",{class:"q-ma-md",key:t},[(0,a.Wm)(J,{class:"q-mb-sm"},{default:(0,a.w5)((()=>[(0,a._)("div",z,[(0,a.Wm)(E,{size:"80px"},{default:(0,a.w5)((()=>[(0,a._)("img",{src:e.avatar},null,8,Z)])),_:2},1024),(0,a._)("div",null,[(0,a._)("h6",C,(0,r.zw)(e.pseudo.length>13?e.pseudo.substr(0,18)+"...":e.pseudo),1),Q])])])),_:2},1024)])))),128))])])):(0,a.kq)("",!0)])),_:1})}var W=s(7431),D=s(4987),P=s(9302),E=s(9017);const I={data(){return{partie:null,utils:(0,P.Z)(),loading:!1}},async mounted(){await this.refresh();let e=await(0,E.IO)((0,E.hJ)(D["default"].firebasebd,"party"),(0,E.ar)("code","==",this.$route.params.code));(0,E.cf)(e,(e=>{e.docChanges().forEach((async e=>{"added"===e.type&&await this.refresh(),"modified"===e.type&&(await this.refresh(),this.check(),"En cours"==this.partie.statut&&this.$router.push({name:"partieEnCours",params:{code:this.partie.code}})),"removed"===e.type&&((0,W.h4)("La partie a été supprimer par le créateur","warning"),this.$router.push({name:"home"}))}))}))},methods:{async refresh(){this.partie=null;let e=await this.$store.dispatch("getParty",{code:this.$route.params.code});this.partie=e},async leave(){let e=(0,W.PR)(),t=(e.user,this.partie);t.joueurs=t.joueurs.filter((t=>t.uid!=e.auth.user.uid)),await this.$store.dispatch("editParty",{partie:t}),this.$router.push({name:"home"})},check(){let e=this.partie,t=(0,W.PR)(),s=(t.user,!1);for(let a=0;a<e.joueurs.length;a++)e.joueurs[a].uid==t.auth.user.uid&&(s=!0);s||((0,W.h4)("Vous avez été exclu de la partie !","warning"),this.$router.push({name:"home"}))}}};var T=s(1639),J=s(9885),O=s(335),R=s(4455),S=s(1357),A=s(786),B=s(2857),H=s(4458),K=s(9984),L=s.n(K);const V=(0,T.Z)(I,[["render",$]]),Y=V;L()(I,"components",{QPage:J.Z,QImg:O.Z,QBtn:R.Z,QAvatar:S.Z,QSpinnerOrbit:A.Z,QIcon:B.Z,QCard:H.Z})},8290:(e,t,s)=>{e.exports=s.p+"img/logoSimple.3287167f.png"}}]);