(this["webpackJsonpscrollytelling-template"]=this["webpackJsonpscrollytelling-template"]||[]).push([[0],[,,,,,,,,,,,,,,,function(n,t,e){n.exports=e(29)},,,,,function(n,t,e){},function(n,t,e){},function(n){n.exports=JSON.parse('[{"key":"1","description":"coda-labs"},{"key":"2","description":"audio"},{"key":"3","description":"glitch"},{"key":"4","description":"and more"},{"key":"5","description":"contact: info@coda-labs.com"}]')},function(n,t,e){var a={"./1.png":24,"./2.png":25,"./3.png":26,"./4.png":27,"./5.png":28};function o(n){var t=r(n);return e(t)}function r(n){if(!e.o(a,n)){var t=new Error("Cannot find module '"+n+"'");throw t.code="MODULE_NOT_FOUND",t}return a[n]}o.keys=function(){return Object.keys(a)},o.resolve=r,n.exports=o,o.id=23},function(n,t,e){n.exports=e.p+"static/media/1.5f1fbf63.png"},function(n,t,e){n.exports=e.p+"static/media/2.59cf1f22.png"},function(n,t,e){n.exports=e.p+"static/media/3.89e9faa5.png"},function(n,t,e){n.exports=e.p+"static/media/4.e125a1b3.png"},function(n,t,e){n.exports=e.p+"static/media/5.6092fa6a.png"},function(n,t,e){"use strict";e.r(t);var a=e(0),o=e.n(a),r=e(7),c=e.n(r),i=(e(20),e(21),e(8)),s=e(9),l=e(14),p=e(13),d=e(10),g=e(1),u=e(31),b=e(5);function f(){var n=Object(d.a)(["\n  img {\n    max-width: 800px;\n  }\n  .main {\n    padding: 10vh 2vw;\n    display: flex;\n    justify-content: space-between;\n  }\n  .graphic {\n    flex-basis: 80%;\n    position: sticky;\n    top: 15vh;\n    width: 100%;\n    height: 75vh;\n    align-self: flex-start;\n  }\n  .data {\n    font-size: 5rem;\n    text-align: center\n  }\n  .scroller {\n    background-color: #0E0004;\n    flex-basis: 30%;\n  }\n  .card-text {\n    background-color: #0E0004;\n    color: white;\n    font-size: 18px !important;\n    line-height: 1.3;\n  }\n  .scrollama {\n    background-color: #0E0004;\n  }\n  .step {\n    background-color: #0E0004;\n    margin-right: 50px;\n    padding-top: 200px;\n    padding-bottom: 200px;\n    '&:last-child': {\n      margin-bottom: 0;\n    }\n    font-size: 20px;\n  }\n  .card {\n    background-color: #0E0004;\n    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.25);\n    margin-left: 10px;\n    margin-right:0px;\n    text-align: center;\n    padding: 5%;\n  }\n  .desc {\n    background-color: #0E0004;\n    margin-left:20px;\n    margin-right:20px;\n  }\n  .btn {\n    color: #575757;\n  }\n  .card-text-s {\n    background-color: #0E0004;\n    padding: 10%;\n    font-size: 24px !important;\n  }\n"]);return f=function(){return n},n}var m=e(22),h=Object(g.a)(f()),x=function(n){Object(l.a)(a,n);var t=Object(p.a)(a);function a(n){var e;return Object(i.a)(this,a),(e=t.call(this,n)).onStepEnter=function(n){n.element;var t=n.data;e.setState({data:t})},e.onStepExit=function(n){n.element.style.backgroundColor="#000"},e.onStepProgress=function(n){n.element;var t=n.progress;e.setState({progress:t})},e.update=function(n){var t="./assets/images/"+n+".png";e.setState({src:t})},e.state={data:"1",progress:0,src:""},e}return Object(s.a)(a,[{key:"render",value:function(){var n=this.state.data;console.log(n);var t="./assets/images/"+n+".png";return console.log(t),Object(g.b)("div",null,Object(g.b)("div",{css:h},Object(g.b)("div",{className:"main"},Object(g.b)("div",{className:"graphic"},Object(g.b)(u.a,null,Object(g.b)(u.a.Img,{variant:"top",src:e(23)("./".concat(this.state.data,".png"))}))),Object(g.b)("div",{className:"scroller"},Object(g.b)(b.a,{className:"scrollama",onStepEnter:this.onStepEnter,onStepExit:this.onStepExit,progress:!0,onStepProgress:this.onStepProgress,offset:.33},m.map((function(n){return Object(g.b)(b.b,{data:n.key,key:n.key},Object(g.b)("div",{className:"step"},Object(g.b)("p",{className:"desc",id:"desc"+n.key},Object(g.b)(u.a,null,Object(g.b)(u.a.Body,null,Object(g.b)(u.a.Text,null,n.description))))))})))))))}}]),a}(a.Component);var v=function(){return o.a.createElement(x,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.f634725e.chunk.js.map