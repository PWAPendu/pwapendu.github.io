(globalThis["webpackChunkpwa_pendu"]=globalThis["webpackChunkpwa_pendu"]||[]).push([[219],{4219:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>L});var s=a(9835),r=a(6970),i=a(8290),n=a.n(i);const o={key:0},l={class:"row justify-center items-center q-ma-sm"},u={class:"col-4"},c={class:"col text-center"},p={class:"text-bold q-ma-none q-pa-none text-accent text-h6"},d={class:"text-bold q-ma-none q-pa-none text-grey"},m={class:"col"},h={class:"q-ml-md"},g=(0,s._)("p",{class:"text-accent text-bold q-ma-none q-pa-none",style:{"font-size":"16px"}}," Créateur ",-1),w={class:"row justify-center items-center"},q={class:"col"},y={style:{"font-size":"15px"},class:"q-ml-md"},f={class:"col-4"},_={style:{"font-size":"15px"},class:"q-ml-md"},v={key:0,class:"row items-center justify-center"},x=(0,s._)("p",{class:"text-center text-grey q-ma-none q-pa-none q-mr-sm"}," En attente de joueur supplémentaire... ",-1),b={key:1,class:"row items-center justify-center"},j=(0,s._)("p",{class:"text-center text-grey q-ma-none q-pa-none q-mr-sm"}," Tous les joueurs sont présent ",-1),z=(0,s._)("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1),k={class:"q-ma-none q-pa-none q-ml-sm"};function Z(e,t,a,i,Z,C){const Q=(0,s.up)("q-img"),$=(0,s.up)("q-btn"),W=(0,s.up)("q-spinner-orbit"),D=(0,s.up)("q-icon"),P=(0,s.up)("q-avatar"),E=(0,s.up)("q-card-section"),I=(0,s.up)("q-card"),S=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(S,null,{default:(0,s.w5)((()=>[Z.partie?((0,s.wg)(),(0,s.iD)("main",o,[(0,s._)("div",l,[(0,s._)("div",u,[(0,s.Wm)(Q,{src:n()})]),(0,s._)("div",c,[(0,s._)("p",p,(0,r.zw)(Z.partie.nom),1),(0,s._)("p",d," #"+(0,r.zw)(Z.partie.code),1)]),(0,s._)("div",m,[(0,s.Wm)($,{loading:Z.loading,onClick:C.leave,color:"secondary","no-caps":"",label:"Quitter",size:"16px",style:{width:"100%","border-radius":"15px"}},null,8,["loading","onClick"])])]),(0,s._)("div",h,[g,(0,s._)("div",w,[(0,s._)("div",q,[(0,s._)("p",y,(0,r.zw)(Z.partie.createur.pseudo),1)]),(0,s._)("div",f,[(0,s._)("p",_,(0,r.zw)(Z.partie.joueurs.length)+"/"+(0,r.zw)(Z.partie.max)+" joueurs ",1)])])]),(0,s._)("div",null,[Z.partie.max!=Z.partie.joueurs.length?((0,s.wg)(),(0,s.iD)("div",v,[x,(0,s.Wm)(W,{color:"grey",size:"2em"})])):((0,s.wg)(),(0,s.iD)("div",b,[j,(0,s.Wm)(D,{name:"done"})])),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(Z.partie.joueurs,((e,t)=>((0,s.wg)(),(0,s.iD)("div",{class:"q-ma-md",key:t},[(0,s.Wm)(I,{class:"q-mb-sm"},{default:(0,s.w5)((()=>[(0,s.Wm)(E,{horizontal:""},{default:(0,s.w5)((()=>[(0,s.Wm)(P,{size:"80px"},{default:(0,s.w5)((()=>[z])),_:1}),(0,s._)("h6",k,(0,r.zw)(e.pseudo),1)])),_:2},1024)])),_:2},1024)])))),128))])])):(0,s.kq)("",!0)])),_:1})}var C=a(7431),Q=a(4987),$=a(9302),W=a(9017);const D={data(){return{partie:null,utils:(0,$.Z)(),loading:!1}},async mounted(){let e=await(0,W.IO)((0,W.hJ)(Q["default"].firebasebd,"party"),(0,W.ar)("code","==",this.$route.params.code));(0,W.cf)(e,(e=>{e.docChanges().forEach((async e=>{"added"===e.type&&await this.refresh(),"modified"===e.type&&(await this.refresh(),this.check(),"En cours"==this.partie.statut&&this.$router.push({name:"partieEnCours",params:{code:this.partie.code}})),"removed"===e.type&&((0,C.h4)("La partie a été supprimer par le créateur","warning"),this.$router.push({name:"home"}))}))}))},methods:{async refresh(){this.partie=null;let e=await this.$store.dispatch("getParty",{code:this.$route.params.code});this.partie=e},async leave(){let e=(0,C.PR)(),t=this.partie;t.joueurs=t.joueurs.filter((t=>t.uid!=e.auth.user.uid)),await this.$store.dispatch("editParty",{partie:t}),this.$router.push({name:"home"})},check(){let e=this.partie,t=(0,C.PR)(),a=!1;for(let s=0;s<e.joueurs.length;s++)e.joueurs[s].uid==t.auth.user.uid&&(a=!0);a||((0,C.h4)("Vous avez été exclu de la partie !","warning"),this.$router.push({name:"home"}))}}};var P=a(1639),E=a(9885),I=a(335),S=a(4455),T=a(786),O=a(2857),R=a(4458),A=a(3190),B=a(1357),H=a(9984),J=a.n(H);const K=(0,P.Z)(D,[["render",Z]]),L=K;J()(D,"components",{QPage:E.Z,QImg:I.Z,QBtn:S.Z,QSpinnerOrbit:T.Z,QIcon:O.Z,QCard:R.Z,QCardSection:A.Z,QAvatar:B.Z})},8290:(e,t,a)=>{e.exports=a.p+"img/logoSimple.3287167f.png"}}]);