(globalThis["webpackChunkpwa_pendu"]=globalThis["webpackChunkpwa_pendu"]||[]).push([[959],{959:(t,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>W});var s=a(9835),r=a(6970),i=a(8290),n=a.n(i);const o={key:0},c={key:0,class:"row justify-center items-center q-ma-sm"},l={class:"col-4"},u={class:"col text-center"},p={class:"text-bold q-ma-none q-pa-none text-accent text-h6"},d={class:"text-bold q-ma-none q-pa-none text-grey"},h={class:"text-center text-bold text-accent text-h4"},m=(0,s._)("p",{class:"text-center text-bold text-accent text-h4"},"GAGNER PAR",-1),g={class:"row justify-center"},w=(0,s._)("img",{src:"https://cdn.quasar.dev/img/avatar.png"},null,-1),x={class:"text-center text-bold text-accent text-h4 q-mt-md q-mb-xl"},b=(0,s._)("p",{class:"text-center"},"Le mot était :",-1),f={class:"text-center text-bold text-primary text-h4"},y={class:"row justify-center q-mt-md q-mb-lg"};function q(t,e,a,i,q,_){const v=(0,s.up)("q-img"),k=(0,s.up)("q-avatar"),j=(0,s.up)("q-table"),$=(0,s.up)("q-btn"),z=(0,s.up)("q-page");return(0,s.wg)(),(0,s.j4)(z,null,{default:(0,s.w5)((()=>[q.partie&&q.gagnant?((0,s.wg)(),(0,s.iD)("main",o,[q.partie?((0,s.wg)(),(0,s.iD)("div",c,[(0,s._)("div",l,[(0,s.Wm)(v,{src:n()})]),(0,s._)("div",u,[(0,s._)("p",p,(0,r.zw)(q.partie.nom),1),(0,s._)("p",d,"#"+(0,r.zw)(q.partie.code),1)])])):(0,s.kq)("",!0),(0,s._)("p",h,(0,r.zw)(q.gagnant.score)+" points (+ 15 bonus) ",1),m,(0,s._)("div",g,[(0,s.Wm)(k,{size:"150px"},{default:(0,s.w5)((()=>[w])),_:1})]),(0,s._)("p",x,(0,r.zw)(q.gagnant.pseudo),1),b,(0,s._)("p",f,(0,r.zw)(q.partie.mot),1),(0,s.Wm)(j,{"auto-width":"",class:"no-shadow",title:"Tableau des scores",rows:q.rows,columns:q.columns,"row-key":"name"},null,8,["rows","columns"]),(0,s._)("div",y,[(0,s.Wm)($,{style:{width:"200px","border-radius":"30px"},"no-caps":"",size:"25px",onClick:_.quitter,color:"secondary",label:"Quitter"},null,8,["onClick"])])])):(0,s.kq)("",!0)])),_:1})}var _=a(4987),v=a(7431),k=a(9017);const j={data(){return{partie:null,gagnant:null,gagantMis:!1,columns:[{name:"name",required:!0,label:"Pseudo",align:"left",field:t=>t.name,format:t=>`${t}`,sortable:!0},{name:"score",align:"center",label:"Score",field:"Score",field:t=>t.score,sortable:!0}],rows:[]}},async mounted(){let t=await(0,k.IO)((0,k.hJ)(_["default"].firebasebd,"party"),(0,k.ar)("code","==",this.$route.params.code));(0,k.cf)(t,(t=>{t.docChanges().forEach((async t=>{"added"===t.type&&(await this.refresh(),this.getGagnant(),this.initScore()),"modified"===t.type&&(await this.refresh(),this.getGagnant(),this.initScore()),"removed"===t.type&&this.$router.push({name:"home"})}))}))},methods:{async refresh(){this.partie=null;let t=await this.$store.dispatch("getParty",{code:this.$route.params.code});this.partie=t},async quitter(){let t=(0,v.PR)(),e=this.partie;e.createur.uid==t.auth.user.uid&&(e.createur.uid="");for(let a=0;a<e.joueurs.length;a++)e.joueurs[a].uid==t.auth.user.uid&&e.joueurs.splice(a,1);0==e.joueurs.length&&""==e.createur.uid?await this.$store.dispatch("deleteParty",{partie:e}):(await this.$store.dispatch("editParty",{partie:e}),this.$router.push({name:"home"}))},getGagnant(){if(!this.gagantMis){let t=this.partie.joueurs,e=this.partie.createur;e.pseudo+=" (créateur)";let a=t[0];t.push(e);for(let s=1;s<t.length;s++)t[s].score>a.score&&(a=t[s]);a.score+=15,this.gagnant=a,this.gagantMis=!0}},initScore(){let t=this.partie.joueurs;this.rows=[];for(let e=0;e<t.length;e++)this.rows.push({name:t[e].pseudo,score:t[e].score})}}};var $=a(1639),z=a(9885),P=a(335),Q=a(1357),S=a(6152),Z=a(4455),C=a(9984),G=a.n(C);const T=(0,$.Z)(j,[["render",q]]),W=T;G()(j,"components",{QPage:z.Z,QImg:P.Z,QAvatar:Q.Z,QTable:S.Z,QBtn:Z.Z})},8290:(t,e,a)=>{t.exports=a.p+"img/logoSimple.3287167f.png"}}]);