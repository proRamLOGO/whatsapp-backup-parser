(this.webpackJsonptask3=this.webpackJsonptask3||[]).push([[0],{11:function(e,t,n){},25:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n(8),a=n.n(o),r=(n(25),n(11),n(12)),s=n.n(r),l=n(17),c=n(3),d=n.p+"static/media/background.21544187.png",p=n.p+"static/media/bgimagedark.0d75d268.jpeg",h=n(6);function u(e){var t=parseInt(e.substring(1,3)),n=parseInt(e.substring(4,6)),i=2e3+parseInt(e.substring(7,9)),o=e.substring(11,e.length-1),a=":"!==o[1],r=parseInt(o.substring(0,1+a)),s=parseInt(o.substring(2+a,4+a)),l=parseInt(o.substring(5+a,7+a));return"P"===o[o.length-2]&&(r+=12),new Date(i,n,t,r,s,l)}function g(e){var t,n=[],i=new Set(["Select a Sender"]),o=e.matchAll(/\[(\d+\/\d+\/\d+)(,)(\s)(\d+:\d+:\d+)(\s)(\w+)\]/g),a=Object(h.a)(o);try{for(a.s();!(t=a.n()).done;){var r=t.value;n.push([r[0],r.index,r.index+r[0].length])}}catch(f){a.e(f)}finally{a.f()}n.push(["",e.length,0]);for(var s=[],l=new Date,c=1;c<n.length;++c){var d=e.substring(n[c-1][2],n[c][1]),p=d.indexOf(":"),g=!1;-1!==p&&(g=d.substring(1,p),i.add(g),d=d.substring(p+2));var b=n[c-1][0].substring(1,9);b!==l&&(s.push({timestamp:b,messageBody:b,sendersName:!1}),l=b),s.push({timestamp:u(n[c-1][0]),messageBody:d,sendersName:g})}return[Array.from(i),s]}var b=n(18),f=n.n(b),x=n(5),m=n.p+"static/media/darkSentPin.bea17d1d.svg",j=n.p+"static/media/darkReceivedPin.120e8946.svg",y=n.p+"static/media/lightSentPin.2421c4b6.svg",v=n.p+"static/media/lightReceivedPin.815f70a9.svg",O=n(19),w=n(0);function S(e){for(var t=(e=e.replace(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm,(function(e){return'<a style="text-decoration: none; color: #039BE5;" href="'+e+'" target="_blank" rel="noopener noreferrer" >'+e+"</a>"}))).split(/\r\n|\n|\r/),n="",i=0;i<t.length;++i){var o,a="",r=0,s=0,l=0,c=Object(h.a)(t[i]);try{for(c.s();!(o=c.n()).done;){var d=o.value;"*"===d?++r:"_"===d?++s:"~"===d&&++l}}catch(m){c.e(m)}finally{c.f()}var p,u=0,g=0,b=0,f=Object(h.a)(t[i]);try{for(f.s();!(p=f.n()).done;){var x=p.value;if("*"===x){if(1===(1&r)&&u===r-1)continue;a+=0===(1&u)?"<b>":"</b>",++u}else if("_"===x){if(1===(1&s)&&g===s-1)continue;a+=0===(1&g)?"<i>":"</i>",++g}else if("~"===x){if(1===(1&l)&&b===l-1)continue;a+=0===(1&b)?"<s>":"</s>",++b}else a+=x}}catch(m){f.e(m)}finally{f.f()}n+=a+(i<=t.length-2?"<br/>":"")}return n}var k=function(e){var t=e.content,n=e.sender,i=e.theme,o={bannerContainer:{display:"flex",justifyContent:"center"},banner:{padding:"5px 12px 6px",margin:"6px",textAlign:"center",backgroundColor:"light"===i?"#E1F3FB":"#1E2A30",borderRadius:7.5,boxShadow:"0 1px 0.5px rgba(0,0,0,.15)",color:"light"===i?"#1D1E1F":"#FFF",fontSize:12},messageBodyreceived:{padding:"0px 52px 0px 52px",display:"flex",flexDirection:"row",alignItems:"start",color:"light"===i?"#000":"#FFF"},messageBodysent:{padding:"0px 52px 0px 52px",display:"flex",flexDirection:"row-reverse",alignItems:"start",color:"light"===i?"#000":"#FFF"},sent:{padding:"6px 7px 1px 9px",marginBottom:5,maxWidth:"60%",backgroundColor:"light"===i?"#DCF8C6":"#056162",borderRadius:"7.5px 0px 7.5px 7.5px",fontSize:14,boxShadow:"0 1px .5px rgba(0,0,0,.13)",width:"fit-content",wordWrap:"break-word"},received:{padding:"6px 7px 0px 9px",marginBottom:5,maxWidth:"60%",backgroundColor:"light"===i?"#FFF":"#262D31",borderRadius:"0px 7.5px 7.5px 7.5px",boxShadow:"0 1px .5px rgba(0,0,0,.13)",fontSize:14,width:"fit-content",wordWrap:"break-word"},time:{textAlign:"right",fontSize:11,fontWeight:"500",color:"light"===i?"#8C8C8C":"#9CBCBD"},senderName:{fontSize:12.8,fontWeight:"bold",margin:"0px 0px 5px -2px",padding:"0px 0px 5px 2px"},a:{textDecoration:"none",color:"#039BE5"}};function a(e){var t=e.content;return Object(w.jsx)("div",{className:"banner",style:o.bannerContainer,children:Object(w.jsx)("p",{className:"banner__content",style:o.banner,children:t})})}var r="banner";return!1!==t.sendersName&&(r=t.sendersName===n?"sent":"received"),"banner"===r?Object(w.jsx)(a,{content:t.messageBody}):Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)("div",{style:o["messageBody"+r],children:[Object(w.jsx)("img",{src:"light"===i?"sent"===r?y:v:"sent"===r?m:j,alt:"msgpin"}),Object(w.jsxs)("div",{className:r,style:o[r],children:[Object(w.jsx)("p",{className:"sender",style:o.senderName,children:t.sendersName}),Object(w.jsx)("div",{className:"contentOfMessage",style:{width:"fit-content",wordWrap:"break-word",lineHeight:"19px"},children:Object(O.a)(S(t.messageBody))}),"banner"!==r?Object(w.jsx)("p",{style:o.time,children:t.timestamp.toLocaleString("en-US",{hour:"numeric",minute:"numeric",hour12:!0})}):Object(w.jsx)(w.Fragment,{})]})]})})};var B=n.p+"static/media/bgimagelight.ed673d52.jpeg",C=(n.p,n.p+"static/media/unknownGroup.be341f2d.svg"),F=n.p+"static/media/lightModeIcon.a406a237.svg",I=n.p+"static/media/darkModeIcon.f4c2a235.svg",T=n.p+"static/media/infoIcon.c296ef03.svg",R=n.p+"static/media/screenShotIcon.cd294823.svg",E=n.p+"static/media/enableFullScreenIcon.7b25107c.svg",D=n.p+"static/media/disableFullScreenIcon.5bfd39d3.svg";var N=function(e){var t=e.content,n=e.sender,o=e.setModalState,a=Object(i.useRef)(null),r=Object(i.useState)("light"),s=Object(c.a)(r,2),l=s[0],d=s[1],h=Object(i.useState)("disabled"),u=Object(c.a)(h,2),g=u[0],b=u[1];Object(i.useEffect)((function(){!function(){var e;null===(e=a.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}()}),[g]);var m={chatRoom:{backgroundImage:"url(".concat("light"===l?B:p,")"),backgroundRepeat:"repeat",backgroundSize:"200px 400px",height:"enabled"===g?"92vh":"80vh",width:"enabled"===g?"100vw":"90vw",overflow:"scroll",fontFamily:"-apple-system, BlinkMacSystemFont, Helvetica Neue",paddingTop:10,display:"block"},chatBar:{width:"enabled"===g?"100vw":"90vw",height:"7vh",display:"flex",flexDirection:"row",backgroundColor:"light"===l?"#EDEDED":"#2A2F32",justifyContent:"space-between",color:"light"===l?"#000":"#FFF",borderBottom:"light"===l?"1px solid rgba(0,0,0,0.1)":"none",boxShadow:"light"===l?"none":"0px 1px 3px rgba(0,0,0,0.4)",zIndex:1},chatIcon:{height:40},profileGroup:{width:"90%",display:"flex",alignItems:"center",flexDirection:"row"},h4:{fontSize:16,fontWeight:"500"},utilityButtons:{display:"flex",alignItems:"center",justifyContent:"flex-end",width:"20%",paddingRight:10},utilityButton:{backgroundColor:"transparent",border:"none",marginRight:10,height:50,width:50,borderRadius:50},utilityButtonIcon:{cursor:"pointer",height:24},profileButton:{backgroundColor:"transparent",borderColor:"transparent",borderRadius:30,marginLeft:"20px",width:60,cursor:"pointer"}};return Object(w.jsxs)("div",{id:"chatRoom",className:"enabled"===g?"fullscreen":"",style:{display:"flex",flexDirection:"column"},children:[Object(w.jsxs)("div",{style:m.chatBar,id:"chatHeader",children:[Object(w.jsxs)("div",{style:m.profileGroup,children:[Object(w.jsxs)("button",{style:m.profileButton,onClick:function(){return o(!0)},children:[Object(w.jsx)("img",{"data-tip":!0,"data-for":"profileButtonToolTip",style:m.chatIcon,src:C,alt:"Chat Icon"}),Object(w.jsx)(x.a,{id:"profileButtonToolTip",place:"bottom",effect:"solid",type:"light"===l?"dark":"light",children:"Set Sender"})]}),Object(w.jsx)("h4",{style:m.h4,children:"Whatsapp Chat"})]}),Object(w.jsxs)("div",{style:m.utilityButtons,children:[Object(w.jsxs)("button",{style:m.utilityButton,className:"ripple",children:[Object(w.jsx)("img",{"data-tip":!0,"data-for":"screenshotButtonToolTip",style:m.utilityButtonIcon,src:R,onClick:function(){var e=document.getElementById("chatRoom");f()(e,{scrollY:-(-50+document.getElementById("chatHeader").offsetTop)}).then((function(e){!function(e,t){var n=window.document.createElement("a");n.href=e,n.download=t,n.style="display:none;",(document.body||document.documentElement).appendChild(n),"function"===typeof n.click?n.click():(n.target="_blank",n.dispatchEvent(new MouseEvent("click",{view:window,bubbles:!0,cancelable:!0}))),URL.revokeObjectURL(n.href),n.remove()}(e.toDataURL("image/png",1),"Whatsapp Chat Screenshot")}))},alt:"ScreenShot Button"}),Object(w.jsx)(x.a,{id:"screenshotButtonToolTip",place:"bottom",effect:"solid",type:"light"===l?"dark":"light",children:"Take ScreenShot"})]}),Object(w.jsxs)("button",{style:m.utilityButton,className:"ripple",children:[Object(w.jsx)("img",{"data-tip":!0,"data-for":"screenSizeButtonToolTip",style:m.utilityButtonIcon,src:"disabled"===g?E:D,onClick:function(){b("disabled"===g?"enabled":"disabled"),function(e){var t=window.document,n=t.documentElement,i=n.requestFullscreen||n.mozRequestFullScreen||n.webkitRequestFullScreen||n.msRequestFullscreen,o=t.exitFullscreen||t.mozCancelFullScreen||t.webkitExitFullscreen||t.msExitFullscreen;"enabled"===e?o.call(t):i.call(n)}(g)},alt:"FullScreen Button"}),Object(w.jsx)(x.a,{id:"screenSizeButtonToolTip",place:"bottom",effect:"solid",type:"light"===l?"dark":"light",children:"disabled"===g?"Enter FullScreen":"Exit Fullscreen"})]}),Object(w.jsxs)("button",{style:m.utilityButton,className:"ripple",children:[Object(w.jsx)("img",{"data-tip":!0,"data-for":"themeButtonToolTip",style:m.utilityButtonIcon,src:"light"===l?F:I,onClick:function(){return d("dark"===l?"light":"dark")},alt:"Toggle Theme Button"}),Object(w.jsx)(x.a,{id:"themeButtonToolTip",place:"bottom",effect:"solid",type:"light"===l?"dark":"light",children:"light"===l?"Dark Mode":"Light Mode"})]}),Object(w.jsxs)("button",{style:m.utilityButton,className:"ripple",children:[Object(w.jsx)("img",{"data-tip":!0,"data-for":"infoButtonToolTip",style:m.utilityButtonIcon,src:T,alt:"Info Button"}),Object(w.jsx)(x.a,{id:"infoButtonToolTip",place:"bottom",effect:"solid",type:"light"===l?"dark":"light",children:"Chat Info"})]})]})]}),Object(w.jsxs)("div",{className:"chatRoom",style:m.chatRoom,children:[t.map((function(e,t){return Object(w.jsx)(k,{content:e,sender:n,theme:l},"Message"+t)})),Object(w.jsx)("div",{ref:a})]})]})},z=n.p+"static/media/icon.f99de59b.png",W=n.p+"static/media/githubIcon.79edf289.svg",M=n(20);n(44);function A(e){var t=e.authorsList,n=e.setSenderName,o=e.modalState,a=e.setModalState,r=function(){return a(!1)};Object(i.useEffect)((function(){t.length>1&&a(!0)}),[t]);var s={forModal:{modal:{borderRadius:"4px",maxWidth:"30vw"}},div:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",lineHeight:"21px"},select:{margin:"10px 0 10px 0",backgroundColor:"#EEE",borderRadius:"2px",height:"5vh",border:"none",padding:"0 5px 0 5px",appearence:"none",fontSize:"18px"},okButton:{backgroundColor:"#00565A",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:7,height:45,color:"#fff",cursor:"pointer",fontSize:18,marginTop:20}};return Object(w.jsx)(M.a,{open:o,onClose:r,center:!0,closeOnEsc:!0,styles:s.forModal,children:Object(w.jsxs)("div",{style:s.div,children:[Object(w.jsx)("h3",{children:"Select a sender please!"}),Object(w.jsx)("p",{children:"Please select the sender for this conversation from the below list of participants. You can change the sender anytime for a conversation by clicking on the profile icon on the top right of chatroom. Messages sent by this person will appear to the right side."}),Object(w.jsx)("select",{onChange:function(e){return n(e.target.value)},style:s.select,children:t.map((function(e,t){return Object(w.jsx)("option",{value:e,children:e},t)}))}),Object(w.jsx)("button",{onClick:r,style:s.okButton,children:"See My Chats"})]})})}var L=n.p+"static/media/sampleChat.c9282040.txt",P={header:{minHeight:"65vh",backgroundImage:"url(".concat(d,")"),color:"#fff",display:"flex",justifyContent:"center"},headerContent:{alignItems:"center",display:"flex",justifyContent:"center",flexDirection:"column",marginTop:100},icon:{height:164},headerText:{fontFamily:"'Poppins', 'sans-serif'",fontSize:48,textAlign:"center"},p:{fontSize:20,padding:"0px 100px 0px 100px",lineHeight:"30px",textAlign:"center"},fileUploadSection:{top:0,height:"35vh",backgroundColor:"#EDFFEB",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",fontFamily:"'Roboto', 'sans-serif'"},h4:{marginTop:20,top:0,fontSize:20,fontWeight:"normal"},uploadButton:{backgroundColor:"#00565A",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:7,width:230,height:45,color:"#fff",cursor:"pointer",fontSize:18,marginTop:0},uploadHelpText:{fontSize:20,fontFamily:"'Roboto', 'sans-serif'",textAlign:"center"},sampleFileLink:{textDecoration:"none",color:"#00565A",borderBottom:"1px dotted #00565A"},appView:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},footer:{fontFamily:"'Poppins', 'sans-serif'",fontSize:27,width:"100vw",height:"10vh",display:"flex",justifyContent:"space-between",alignItems:"center",backgroundImage:"url(".concat(p,")"),color:"#FFF",fontWeight:"bold",boxShadow:"rgba(0, 0, 0, 0.4) 0px 1px 3px"},footerDiv:{paddingLeft:"4vw",width:"100vw",display:"flex",justifyContent:"center",alignItems:"center"},githubIcon:{zIndex:1,height:"6vh",marginTop:"auto",marginLeft:"auto",marginRight:"10px",marginBottom:"-10px"},privacyText:{color:"#0A0908",backgroundColor:"#FDF4C3",padding:"10px 10px 10px 10px",width:"80vw",textAlign:"center",paddingBottom:"-40px",borderRadius:8,boxShadow:"rgb(0 0 0 / 20%) 0px 1px 3px"}};var H=function(){var e=Object(i.useState)([]),t=Object(c.a)(e,2),n=t[0],o=t[1],a=Object(i.useState)([]),r=Object(c.a)(a,2),d=r[0],p=r[1],h=Object(i.useState)(""),u=Object(c.a)(h,2),b=u[0],f=u[1],x=Object(i.useState)(!1),m=Object(c.a)(x,2),j=m[0],y=m[1];return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(A,{setSenderName:f,authorsList:d,modalState:j,setModalState:y}),Object(w.jsx)("header",{style:P.header,children:Object(w.jsxs)("div",{style:P.headerContent,children:[Object(w.jsx)("img",{id:"icon",src:z,style:P.icon,alt:"icon"}),Object(w.jsx)("h1",{style:P.headerText,children:"Whatapp Backup Parser"}),Object(w.jsx)("p",{style:P.p,children:"Now browse through your old exported Whatsapp Chat text files conviniently as if they were right in your Whatsapp!"})]})}),Object(w.jsxs)("section",{id:"fileUploadSection",style:P.fileUploadSection,children:[Object(w.jsx)("h4",{style:P.h4,children:"Try Now"}),Object(w.jsxs)("label",{style:P.uploadButton,children:["Choose File",Object(w.jsx)("input",{onChange:function(e){f(""),e.preventDefault();var t=new FileReader;t.onload=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,i,a,r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=g(t.target.result),i=Object(c.a)(n,2),a=i[0],r=i[1],p(a),o(r),a.length>1&&(y(!0),window.scrollTo(0,document.body.scrollHeight-900));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();try{t.readAsText(e.target.files[0])}catch(n){alert("No file selected!")}},type:"file",placeholder:"",style:{visibility:"hidden",display:"none"}})]}),Object(w.jsxs)("p",{style:P.uploadHelpText,children:["Upload a valid Whatsapp Chat Backup txt file or try uploading\xa0",Object(w.jsx)("a",{href:L,download:"Sample Whatsapp Exported Chat",style:P.sampleFileLink,children:"this file."})]}),Object(w.jsx)("p",{style:P.privacyText,children:"\ud83d\udd12 : Your Chats are absolutely safe. We do not retain your messages in the ordinary course of providing the service to you. Instead, your messages are stored on your device and not on any server."})]}),0!==n.length?Object(w.jsx)("section",{style:P.appView,id:"chatRoomSection",children:Object(w.jsx)(N,{content:n,sender:b,setModalState:y})}):Object(w.jsx)(w.Fragment,{}),Object(w.jsxs)("footer",{style:P.footer,children:[Object(w.jsxs)("div",{style:P.footerDiv,children:["Made by\xa0",Object(w.jsx)("a",{href:"http://proramlogo.github.io/",className:"footerLink",children:"Shubh Bansal"})]}),Object(w.jsx)("a",{href:"https://github.com/proRamLOGO/whatsapp-backup-parser",children:Object(w.jsx)("img",{src:W,style:P.githubIcon})})]})]})};var U=function(){return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(H,{})})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,a=t.getLCP,r=t.getTTFB;n(e),i(e),o(e),a(e),r(e)}))};a.a.render(Object(w.jsx)(U,{}),document.getElementById("root")),_()}},[[45,1,2]]]);
//# sourceMappingURL=main.a37b015e.chunk.js.map