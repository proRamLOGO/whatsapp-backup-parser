(this.webpackJsonptask3=this.webpackJsonptask3||[]).push([[0],{19:function(e,t,n){},20:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n(11),c=n.n(r),a=(n(19),n(20),n(7)),l=n.n(a),o=n(12),s=n(3),d=n.p+"static/media/background.21544187.png",p=n(2);function u(e){var t=[],n=e.matchAll(/\[(\d+\/\d+\/\d+)(,)(\s)(\d+:\d+:\d+)(\s)(\w+)\]/g);console.log(e[66],e[87]);var i,r=Object(p.a)(n);try{for(r.s();!(i=r.n()).done;){var c=i.value;t.push([c[0],c.index,c.index+c[0].length])}}catch(u){r.e(u)}finally{r.f()}t.push(["",e.length,0]);for(var a=[],l=1;l<t.length;++l){var o=e.substring(t[l-1][2],t[l][1]),s=o.indexOf(":"),d=!1;-1!==s&&(d=o.substring(1,s),o=o.substring(s+2)),a.push({timestamp:t[l-1][0],startIdx:t[l-1][1],endIdx:t[l-1][2],messageBody:o,sendersName:d})}return a}var h=n(13),j=n.p+"static/media/sentPin.2421c4b6.svg",b=n.p+"static/media/receivedPin.815f70a9.svg",g=n(14),A=n(0);function x(e){for(var t=(e=e.replace(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gm,(function(e){return'<a style="text-decoration: none; color: #039BE5;" href="'+e+'" target="_blank" rel="noopener noreferrer" >'+e+"</a>"}))).split(/\r\n|\n|\r/),n="",i=0;i<t.length;++i){var r,c="",a=0,l=0,o=0,s=Object(p.a)(t[i]);try{for(s.s();!(r=s.n()).done;){var d=r.value;"*"===d?++a:"_"===d?++l:"~"===d&&++o}}catch(x){s.e(x)}finally{s.f()}var u,h=0,j=0,b=0,g=Object(p.a)(t[i]);try{for(g.s();!(u=g.n()).done;){var A=u.value;if("*"===A){if(1===(1&a)&&h===a)continue;c+=0===(1&h)?"<b>":"</b>",++h}else if("_"===A){if(1===(1&l)&&j===l)continue;c+=0===(1&j)?"<i>":"</i>",++j}else if("*"===A){if(1===(1&o)&&b===o)continue;c+=0===(1&b)?"<s>":"</s>",++b}else c+=A}}catch(x){g.e(x)}finally{g.f()}n+=c+(i<=t.length-2?"<br/>":"")}return n}var v=function(e){var t=e.content,n=e.sender,i=e.theme,r={bannerContainer:{display:"flex",justifyContent:"center"},banner:{padding:"5px 12px 6px",margin:"6px",textAlign:"center",backgroundColor:"light"===i?"#E1F3FB":"#1E2A30",borderRadius:7.5,boxShadow:"0 1px 0.5px rgba(0,0,0,.15)",color:"light"===i?"#1D1E1F":"#FFF",fontSize:12},messageBodyreceived:{padding:"0px 52px 0px 52px",display:"flex",flexDirection:"row",alignItems:"start",color:"light"===i?"#000":"#FFF"},messageBodysent:{padding:"0px 52px 0px 52px",display:"flex",flexDirection:"row-reverse",alignItems:"start",color:"light"===i?"#000":"#FFF"},sent:{padding:"6px 7px 1px 9px",marginBottom:5,maxWidth:"60%",backgroundColor:"light"===i?"#DCF8C6":"#056162",borderRadius:"7.5px 0px 7.5px 7.5px",fontSize:14,boxShadow:"0 1px .5px rgba(0,0,0,.13)",width:"fit-content",wordWrap:"break-word"},received:{padding:"6px 7px 0px 9px",marginBottom:5,maxWidth:"60%",backgroundColor:"light"===i?"#FFF":"#262D31",borderRadius:"0px 7.5px 7.5px 7.5px",boxShadow:"0 1px .5px rgba(0,0,0,.13)",fontSize:14,width:"fit-content",wordWrap:"break-word"},time:Object(h.a)({textAlign:"right",fontSize:11,fontWeight:"500",color:"#8C8C8C"},"color","light"===i?"#8C8C8C":"#9CBCBD"),senderName:{fontSize:12.8,fontWeight:"bold",margin:"0px 0px 5px -2px",padding:"0px 0px 5px 2px"},a:{textDecoration:"none",color:"#039BE5"}};function c(e){var t=e.content;return Object(A.jsx)("div",{className:"banner",style:r.bannerContainer,children:Object(A.jsx)("p",{className:"banner__content",style:r.banner,children:t})})}var a="banner";return!1!==t.sendersName&&(a=t.sendersName===n?"sent":"received"),"banner"===a?Object(A.jsx)(c,{content:t.messageBody}):Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("div",{style:r["messageBody"+a],children:[Object(A.jsx)("img",{src:"sent"===a?j:b,style:{filter:"invert(0.6)"},alt:"msgpin"}),Object(A.jsxs)("div",{className:a,style:r[a],children:[Object(A.jsx)("p",{className:"sender",style:r.senderName,children:t.sendersName}),Object(A.jsx)("div",{className:"contentOfMessage",style:{width:"fit-content",wordWrap:"break-word",lineHeight:"19px"},children:Object(g.a)(x(t.messageBody))}),"banner"!==a?Object(A.jsxs)("p",{style:r.time,children:[" ",t.timestamp.substring(11,21+(":"!==t.timestamp[12]))," "]}):Object(A.jsx)(A.Fragment,{})]})]})})},f=n.p+"static/media/bgimagelight.ed673d52.jpeg",m=n.p+"static/media/bgimagedark.0d75d268.jpeg",O=n.p+"static/media/unknownPerson.d3441b18.svg",y=(n.p,n.p+"static/media/lightModeIcon.5d46322c.png"),z=n.p+"static/media/nightModeIcon.197679fc.png";n.p;var I=function(e){var t=e.content,n=(e.sender,Object(i.useRef)(null)),r=Object(i.useState)("light"),c=Object(s.a)(r,2),a=c[0],l=c[1];Object(i.useEffect)((function(){!function(){var e;null===(e=n.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})}()}),[]);var o={chatRoom:{backgroundImage:"url(".concat("light"===a?f:m,")"),backgroundRepeat:"repeat",backgroundSize:"200px 400px",maxHeight:"80vh",maxWidth:"90vw",overflow:"scroll",fontFamily:"-apple-system, BlinkMacSystemFont",paddingTop:10},chatBar:{height:"59px",display:"flex",flexDirection:"row",width:"100%",backgroundColor:"light"===a?"#EDEDED":"#2A2F32",justifyContent:"space-between",color:"light"===a?"#000":"#FFF",borderBottom:"light"===a?"1px solid rgba(0,0,0,0.1)":"none",boxShadow:"light"===a?"none":"0px 1px 3px rgba(0,0,0,0.4)",zIndex:1},chatIcon:{height:40,paddingLeft:20,paddingRight:10},profileGroup:{width:"90%",display:"flex",alignItems:"center",flexDirection:"row"},h4:{fontSize:16,fontWeight:"500"},utilityButtons:{display:"flex",alignItems:"center",justifyContent:"flex-end",width:"20%",paddingRight:20},utilityButton:{backgroundColor:"transparent",border:"none",paddingRight:20},utilityButtonIcon:{cursor:"pointer",height:24}};return Object(A.jsxs)("div",{style:{display:"flex",flexDirection:"column"},children:[Object(A.jsxs)("div",{style:o.chatBar,children:[Object(A.jsxs)("div",{style:o.profileGroup,children:[Object(A.jsx)("img",{style:o.chatIcon,src:O}),Object(A.jsx)("h4",{style:o.h4,children:"Whatsapp Group / Personal Chat"})]}),Object(A.jsxs)("div",{style:o.utilityButtons,children:[Object(A.jsx)("button",{style:o.utilityButton,children:Object(A.jsx)("img",{style:o.utilityButtonIcon,src:"light"===a?y:z,onClick:function(){return l("dark"===a?"light":"dark")}})}),Object(A.jsx)("button",{style:o.utilityButton,children:Object(A.jsx)("img",{style:o.utilityButtonIcon,src:"data:image/png;base64,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dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1wOkNyZWF0ZURhdGU9IjIwMjEtMDUtMTVUMDM6MDk6MTArMDU6MzAiIHhtcDpNb2RpZnlEYXRlPSIyMDIxLTA1LTE1VDA0OjA1OjE0KzA1OjMwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIxLTA1LTE1VDA0OjA1OjE0KzA1OjMwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkRpc3BsYXkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDIzOWY2MzUtNTNmOS00Zjc4LTgwNGEtYzgyNGE2M2QzNjk4IiB4bXBNTTpEb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZGRjMjQ5ZWItMjM1OC03NjRhLTljNzYtYzMzNjE5NmRlY2JkIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZjQzNTdkZDQtNjVkYi00Yjc4LWIzZWYtYTdhMjUwNGNjZDY1IiBleGlmOlBpeGVsWERpbWVuc2lvbj0iMjcyIiBleGlmOlBpeGVsWURpbWVuc2lvbj0iMjYyIiBleGlmOlVzZXJDb21tZW50PSJTY3JlZW5zaG90Ij4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ZjQzNTdkZDQtNjVkYi00Yjc4LWIzZWYtYTdhMjUwNGNjZDY1IiBzdEV2dDp3aGVuPSIyMDIxLTA1LTE1VDAzOjExOjUwKzA1OjMw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"})})]})]}),Object(A.jsx)("div",{className:"chatRoom",style:o.chatRoom,children:t.map((function(e){return Object(A.jsx)(v,{content:e,sender:"Shubh Bansal",theme:a})}))}),Object(A.jsx)("div",{ref:n})]})},W=n.p+"static/media/icon.f99de59b.png",F={header:{minHeight:"70vh",backgroundImage:"url(".concat(d,")"),color:"#fff",display:"flex",justifyContent:"center"},headerContent:{alignItems:"center",display:"flex",justifyContent:"center",flexDirection:"column",marginTop:100},icon:{height:164},headerText:{fontFamily:"'Poppins', 'sans-serif'",fontSize:48,textAlign:"center"},fileUploadSection:{top:0,height:"30vh",backgroundColor:"#EDFFEB",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",fontFamily:"'Roboto', 'sans-serif'"},h4:{marginTop:20,top:0,fontSize:24,fontWeight:"normal"},uploadButton:{backgroundColor:"#00565A",display:"flex",justifyContent:"center",alignItems:"center",borderRadius:7,width:230,height:45,color:"#fff",cursor:"pointer",fontSize:18,marginTop:20},uploadHelpText:{fontSize:20,fontFamily:"'Roboto', 'sans-serif'",textAlign:"center"},appView:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"}};var N=function(){var e=Object(i.useState)([]),t=Object(s.a)(e,2),n=t[0],r=t[1],c=Object(i.useState)(""),a=Object(s.a)(c,2),d=a[0];return a[1],Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("header",{style:F.header,children:Object(A.jsxs)("div",{style:F.headerContent,children:[Object(A.jsx)("img",{id:"icon",src:W,style:F.icon,alt:"icon"}),Object(A.jsx)("h1",{style:F.headerText,children:"Whatapp Backup Parser"})]})}),Object(A.jsxs)("section",{id:"fileUploadSection",style:F.fileUploadSection,children:[Object(A.jsx)("h4",{style:F.h4,children:"Try Now"}),Object(A.jsxs)("label",{style:F.uploadButton,children:["Choose File",Object(A.jsx)("input",{onChange:function(e){e.preventDefault();var t=new FileReader;t.onload=function(){var e=Object(o.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=u(t.target.result),r(n);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();try{t.readAsText(e.target.files[0]),window.scrollTo(0,document.body.scrollHeight)}catch(n){alert("No file selected!")}},type:"file",placeholder:"",style:{visibility:"hidden",display:"none"}})]}),Object(A.jsxs)("p",{style:F.uploadHelpText,children:["Upload a valid Whatsapp Chat Backup txt file or try ulpoading\xa0",Object(A.jsx)("a",{href:"../../../utils/sampleChat.txt",children:"this file."})]})]}),0!==n.length?Object(A.jsx)("section",{style:F.appView,children:Object(A.jsx)(I,{content:n,sender:d})}):Object(A.jsx)(A.Fragment,{})]})};var w=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsx)(N,{})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),i(e),r(e),c(e),a(e)}))};c.a.render(Object(A.jsx)(w,{}),document.getElementById("root")),R()}},[[36,1,2]]]);
//# sourceMappingURL=main.f74e070b.chunk.js.map