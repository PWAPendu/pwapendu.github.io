(globalThis["webpackChunkpwa_pendu"]=globalThis["webpackChunkpwa_pendu"]||[]).push([[107],{8361:(e,t,s)=>{"use strict";s.d(t,{Z:()=>d});var o=s(9835),a=s(6970);const i={class:"row justify-center items-center"},r={class:"text-bold text-accent text-center q-ma-none q-pa-none"};function l(e,t,s,l,n,u){return(0,o.wg)(),(0,o.iD)("div",i,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.motTab,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"col"},[(0,o._)("h4",r,(0,a.zw)(e.trouve?e.lettre:e.nonTrouve),1)])))),128))])}const n={props:{motProps:{type:Object}},data(){return{motTab:this.motProps}},mounted(){this.initFirstLettre()},methods:{initFirstLettre(){let e=this.motTab[0].lettre;for(let t=0;t<this.motTab.length;t++)this.motTab[t].lettre==e&&(this.motTab[t].trouve=!0);e=" ";for(let t=0;t<this.motTab.length;t++)this.motTab[t].lettre===e&&(this.motTab[t].trouve=!0)}}};var u=s(1639);const c=(0,u.Z)(n,[["render",l]]),d=c},7107:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>M});var o=s(9835),a=s(6970),i=s(8290),r=s.n(i);const l={key:0,class:"row justify-center items-center q-ma-sm"},n={class:"col-4"},u={class:"col text-center"},c={class:"text-bold q-ma-none q-pa-none text-accent text-h6"},d={class:"text-bold q-ma-none q-pa-none text-grey"},p={class:"col"},m={key:1},h={class:"row justify-center items-center"},f={style:{"font-size":"16px"},class:"text-center q-ml-sm q-ma-none q-pa-none"},y={key:0,style:{"font-size":"18px"},class:"q-ml-xl q-mt-lg"},g=(0,o.Uk)(" Au tour de : "),w={class:"text-h6 text-bold"},b={style:{"font-size":"18px"},class:"text-center text-primary q-mt-lg"},q=(0,o.Uk)(" Vie d'équipe : "),x={class:"text-bold"},v={class:"row q-col-gutter-xs justify-center items-center"},P={style:{"font-size":"40px"},class:"text-negative text-center"};function k(e,t,s,i,k,_){const T=(0,o.up)("q-img"),j=(0,o.up)("q-btn"),z=(0,o.up)("q-table"),Z=(0,o.up)("q-card-section"),I=(0,o.up)("q-card"),W=(0,o.up)("q-expansion-item"),D=(0,o.up)("MotTrouver"),Q=(0,o.up)("q-input"),$=(0,o.up)("q-form"),S=(0,o.up)("q-page-sticky"),C=(0,o.up)("q-page");return(0,o.wg)(),(0,o.j4)(C,null,{default:(0,o.w5)((()=>[k.partie?((0,o.wg)(),(0,o.iD)("div",l,[(0,o._)("div",n,[(0,o.Wm)(T,{src:r()})]),(0,o._)("div",u,[(0,o._)("p",c,(0,a.zw)(k.partie.nom),1),(0,o._)("p",d,"#"+(0,a.zw)(k.partie.code),1)]),(0,o._)("div",p,[(0,o.Wm)(j,{onClick:_.leave,color:"secondary","no-caps":"",label:"Quitter",size:"16px",style:{width:"100%","border-radius":"15px"}},null,8,["onClick"])])])):(0,o.kq)("",!0),k.partie?((0,o.wg)(),(0,o.iD)("div",m,[(0,o._)("div",h,[(0,o.Wm)(j,{onClick:t[0]||(t[0]=e=>k.score=!k.score),size:"18px",color:"accent",icon:"scoreboard",flat:"",round:""}),(0,o._)("p",f," Longeur du mot : "+(0,a.zw)(k.partie.mot.length),1)]),(0,o.Wm)(W,{"expanded-icon":"",disable:!k.score,class:"q-mb-lg",modelValue:k.score,"onUpdate:modelValue":t[1]||(t[1]=e=>k.score=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(I,null,{default:(0,o.w5)((()=>[(0,o.Wm)(Z,null,{default:(0,o.w5)((()=>[(0,o.Wm)(z,{"auto-width":"",class:"no-shadow",title:"Tableau des scores",rows:k.rows,columns:k.columns,"row-key":"name"},null,8,["rows","columns"])])),_:1})])),_:1})])),_:1},8,["disable","modelValue"]),(0,o.Wm)(D,{motProps:k.partie.motTab},null,8,["motProps"]),k.joueur?((0,o.wg)(),(0,o.iD)("p",y,[g,(0,o._)("span",w,(0,a.zw)(k.joueur.pseudo),1)])):(0,o.kq)("",!0),(0,o._)("p",b,[q,(0,o._)("span",x,(0,a.zw)(k.partie.vieEquipe),1)]),(0,o._)("div",v,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(k.partie.lettresDite,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"col-1 q-mr-sm"},[(0,o._)("p",P,(0,a.zw)(e),1)])))),128))])])):(0,o.kq)("",!0),(0,o.Wm)(S,{position:"bottom",offset:[18,18]},{default:(0,o.w5)((()=>[(0,o.Wm)($,{onSubmit:_.joue,disable:k.notPlay},{default:(0,o.w5)((()=>[(0,o.Wm)(Q,{loading:k.loading,style:{width:"300px"},disable:k.notPlay,label:"Entrer la lettre",modelValue:k.lettre,"onUpdate:modelValue":t[2]||(t[2]=e=>k.lettre=e),"lazy-rules":"",rules:[e=>e&&1==e.length||"Vous ne pouvez mettre q'une seule lettre"]},null,8,["loading","disable","modelValue","rules"]),(0,o.Wm)(j,{style:{display:"none"},type:"submit"})])),_:1},8,["onSubmit","disable"])])),_:1})])),_:1})}s(6727);var _=s(8361),T=s(7431),j=s(4987),z=s(9017);const Z={data(){return{partie:null,lettre:"",notPlay:!0,joueur:null,loading:!1,score:!1,columns:[{name:"name",required:!0,label:"Pseudo",align:"left",field:e=>e.name,format:e=>`${e}`,sortable:!0},{name:"score",align:"center",label:"Score",field:"Score",field:e=>e.score,sortable:!0}],rows:[]}},components:{MotTrouver:_.Z},async mounted(){let e=await(0,z.IO)((0,z.hJ)(j["default"].firebasebd,"party"),(0,z.ar)("code","==",this.$route.params.code));(0,z.cf)(e,(e=>{e.docChanges().forEach((async e=>{"added"===e.type&&(await this.refresh(),this.checkIfIPlay(),this.getPlay(),this.initScore()),"modified"===e.type&&(await this.refresh(),this.checkIfIPlay(),this.getPlay(),this.initScore(),this.checkIfEnd()),"removed"===e.type&&this.$router.push({name:"home"})}))}))},methods:{initScore(){let e=this.partie.joueurs;this.rows=[];for(let t=0;t<e.length;t++)this.rows.push({name:e[t].pseudo,score:e[t].score})},async refresh(){this.partie=null;let e=await this.$store.dispatch("getParty",{code:this.$route.params.code});this.partie=e},checkIfIPlay(){let e=(0,T.PR)();this.partie.tour.uid==e.auth.user.uid&&""==this.partie.tour.mot&&(this.notPlay=!1)},getPlay(){let e=this.partie.joueurs.filter((e=>e.uid==this.partie.tour.uid));this.joueur=e[0]},async leave(){let e=(0,T.PR)(),t=this.partie;t.joueurs=t.joueurs.filter((t=>t.uid!=e.auth.user.uid)),0==t.joueurs.length?await this.$store.dispatch("deleteParty",{partie:t}):await this.$store.dispatch("editParty",{partie:t}),this.$router.push({name:"home"})},async joue(){if(""!=this.lettre){this.loading=!0;let e=this.partie;e.tour.mot=this.lettre,e.lettresDite.includes(this.lettre)||e.lettresDite.push(this.lettre),await this.$store.dispatch("editParty",{partie:e}),this.lettre="",this.notPlay=!0,this.loading=!1}},checkIfEnd(){let e=this.partie;if(0==e.vieEquipe)this.$router.push({name:"finPartie",params:{code:e.code}});else{let t=0,s=this.partie.motTab;for(let e=0;e<s.length;e++)s[e].trouve&&t++;t==s.length&&this.$router.push({name:"finPartie",params:{code:e.code}})}}}};var I=s(1639),W=s(9885),D=s(335),Q=s(4455),$=s(1123),S=s(4458),C=s(3190),V=s(6152),E=s(627),U=s(8326),F=s(6611),L=s(9984),H=s.n(L);const K=(0,I.Z)(Z,[["render",k]]),M=K;H()(Z,"components",{QPage:W.Z,QImg:D.Z,QBtn:Q.Z,QExpansionItem:$.Z,QCard:S.Z,QCardSection:C.Z,QTable:V.Z,QPageSticky:E.Z,QForm:U.Z,QInput:F.Z})},8290:(e,t,s)=>{e.exports=s.p+"img/logoSimple.3287167f.png"}}]);