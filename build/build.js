!function e(t,n,o){function i(s,l){if(!n[s]){if(!t[s]){var a="function"==typeof require&&require;if(!l&&a)return a(s,!0);if(r)return r(s,!0);throw new Error("Cannot find module '"+s+"'")}var c=n[s]={exports:{}};t[s][0].call(c.exports,function(e){var n=t[s][1][e];return i(n?n:e)},c,c.exports,e,t,n,o)}return n[s].exports}for(var r="function"==typeof require&&require,s=0;s<o.length;s++)i(o[s]);return i}({1:[function(e,t){t.exports=function(e){return function(t){var n,o,i=function(e){return 0!==e.length&&-1!==(e[0].getAttribute("class")||"").split(" ").indexOf("step-0")},r=function(e,t){return s(e)-s(t)},s=function(e){for(var t,n=e.getAttribute("class").split(/\s+/),o=0,i=n.length;i>o;o++)if((t=n[o]).startsWith("step-"))return parseInt(t.substr(5),10);return-1},l=t.slides.map(function(t){var n=[].slice.call(t.querySelectorAll("string"==typeof e?e:"[data-bespoke-bullet]"),0);return i(n)&&n.sort(r),n}),a=function(){var e=n+1;return d(1)?(u(n,o+1),!1):(l[e]&&u(e,0),void 0)},c=function(){var e=n-1;return d(-1)?(u(n,o-1),!1):(l[e]&&u(e,l[e].length-1),void 0)},u=function(e,t){n=e,o=t,l.forEach(function(n,o){n.forEach(function(n,i){n.classList.add("bespoke-bullet"),e>o||o===e&&t>=i?(n.classList.add("bespoke-bullet-active"),n.classList.remove("bespoke-bullet-inactive")):(n.classList.add("bespoke-bullet-inactive"),n.classList.remove("bespoke-bullet-active")),o===e&&i===t?n.classList.add("bespoke-bullet-current"):n.classList.remove("bespoke-bullet-current")})})},d=function(e){return void 0!==l[n][o+e]};t.on("next",a),t.on("prev",c),t.on("slide",function(e){u(e.index,0)}),u(0,0)}}},{}],2:[function(e,t){t.exports=function(){return function(e){var t=function(e,t){e.classList.add("bespoke-"+t)},n=function(e,t){e.className=e.className.replace(new RegExp("bespoke-"+t+"(\\s|$)","g")," ").trim()},o=function(o,i){var r=e.slides[e.slide()],s=i-e.slide(),l=s>0?"after":"before";["before(-\\d+)?","after(-\\d+)?","active","inactive"].map(n.bind(null,o)),o!==r&&["inactive",l,l+"-"+Math.abs(s)].map(t.bind(null,o))};t(e.parent,"parent"),e.slides.map(function(e){t(e,"slide")}),e.on("activate",function(i){e.slides.map(o),t(i.slide,"active"),n(i.slide,"inactive")})}}},{}],3:[function(e,t){t.exports=function(){return function(e){var t=70,n=122,o="keydown",i=function(){var e,t;t=document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement?(e=document).exitFullscreen||e.webkitExitFullscreen||e.mozCancelFullScreen||e.msExitFullscreen:(e=document.documentElement).requestFullscreen||e.webkitRequestFullscreen||e.mozRequestFullScreen||e.msRequestFullscreen,t.apply(e)},r=function(e){return!!(e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)},s=function(e){var o=e.which;o!==t&&o!==n||r(e)||(i(),o===n&&e.preventDefault())};(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)&&(e.on("destroy",function(){document.removeEventListener(o,s)}),e.on("fullscreen.toggle",i),document.addEventListener(o,s))}}},{}],4:[function(e,t){t.exports=function(){return function(e){var t=function(){var t=window.location.hash.slice(1),o=parseInt(t,10);t&&(o?n(o-1):e.slides.forEach(function(e,o){e.getAttribute("data-bespoke-hash")===t&&n(o)}))},n=function(t){var n=t>-1&&t<e.slides.length?t:0;n!==e.slide()&&e.slide(n)};setTimeout(function(){t(),e.on("activate",function(e){var t=e.slide.getAttribute("data-bespoke-hash");window.location.hash=t||e.index+1}),window.addEventListener("hashchange",t)},0)}}},{}],5:[function(e,t){t.exports=function(t){t=t||{};var n=e("bespoke-nav-kbd")(t.kbd),o=e("bespoke-nav-touch")(t.touch);return function(e){n(e),o(e)}}},{"bespoke-nav-kbd":6,"bespoke-nav-touch":7}],6:[function(e,t){t.exports=function(){return function(e){var t=32,n=33,o=34,i=35,r=36,s=37,l=39,a=72,c=76,u=function(e,n){return e.ctrlKey||e.shiftKey&&n!==t||e.altKey||e.metaKey},d=function(d){if(!u(d,d.which))switch(d.which){case t:return d.shiftKey?e.prev():e.next();case l:case o:case c:return e.next();case s:case n:case a:return e.prev();case r:return e.slide(0);case i:return e.slide(e.slides.length-1)}};e.on("destroy",function(){document.removeEventListener("keydown",d)}),document.addEventListener("keydown",d)}}},{}],7:[function(e,t){t.exports=function(e){return function(t){e=e||{};var n="touchstart",o="touchmove",i=null,r="page"+(e.axis&&-1!==["x","y"].indexOf(e.axis)?e.axis.toUpperCase():"X"),s="number"==typeof e.threshold?Math.abs(e.threshold):Math.ceil(50/window.devicePixelRatio),l=function(e){1===e.touches.length&&(i=e.touches[0][r])},a=function(e){if(null!==i){var n=e.touches[0][r]-i;Math.abs(n)>s&&(t[n>0?"prev":"next"](),i=null)}};t.on("destroy",function(){t.parent.removeEventListener(n,l),t.parent.removeEventListener(o,a)}),t.parent.addEventListener(n,l),t.parent.addEventListener(o,a)}}},{}],8:[function(e,t){t.exports=function(t){return e("insert-css")(".bespoke-parent.bespoke-overview{pointer-events:auto}.bespoke-overview :not(img){pointer-events:none}.bespoke-overview .bespoke-slide{opacity:1;visibility:visible;cursor:pointer;pointer-events:auto}.bespoke-overview .bespoke-active{outline:6px solid #cfd8dc;outline-offset:-3px;-moz-outline-radius:3px}.bespoke-overview .bespoke-bullet{opacity:1;visibility:visible}.bespoke-overview-counter{counter-reset:overview}.bespoke-overview-counter .bespoke-slide::after{counter-increment:overview;content:counter(overview);position:absolute;right:.75em;bottom:.5em;font-size:1.25rem;line-height:1.25}.bespoke-title{visibility:hidden;position:absolute;top:0;left:0;width:100%;pointer-events:auto}.bespoke-title h1{margin:0;font-size:1.6em;line-height:1.2;text-align:center}.bespoke-overview:not(.bespoke-overview-to) .bespoke-title{visibility:visible}.bespoke-overview-to .bespoke-active,.bespoke-overview-from .bespoke-active{z-index:1}",{prepend:!0}),function(e){t="object"==typeof t?t:{};var n,o=79,i=13,r=38,s=40,l=/, */,a=/^none(?:, ?none)*$/,c=/^translate\((.+?)px, ?(.+?)px\) scale\((.+?)\)$/,u=/(^\?|&)overview(?=$|&)/,d=!("transition"in document.body.style)&&"webkitTransition"in document.body.style?"webkitTransitionEnd":"transitionend",f=["webkit","Moz"],p="number"==typeof t.columns?parseInt(t.columns):3,v="number"==typeof t.margin?parseFloat(t.margin):15,m=null,b=function(e,t){if(!(t in e.style))for(var n=t.charAt(0).toUpperCase()+t.substr(1),o=0,i=f.length;i>o;o++)if(f[o]+n in e.style)return f[o]+n;return t},h=function(e,t){return parseFloat(e.style[t].slice(6,-1))},y=function(e){return"zoom"in e.style?parseFloat(e.style.zoom)||void 0:void 0},k=function(e){var t=[],n=getComputedStyle(e),o=n[b(e,"transitionProperty")];if(!o||a.test(o))return t;o=o.split(l);var i=n[b(e,"transitionDuration")].split(l),r=n[b(e,"transitionDelay")].split(l);return o.forEach(function(e,n){("0s"!==i[n]||"0s"!==r[n])&&t.push(e)}),t},w=function(e,t,n,o){t&&(e.style[t]=n),e.offsetHeight,t&&(e.style[t]=o)},x=function(){e.on("activate",x)(),e.parent.scrollLeft=e.parent.scrollTop=0,(t.autostart||u.test(location.search))&&setTimeout(T,100)},g=function(){C(e.slides.indexOf(this))},E=function(t,n){var o=n.index+t;return o>=0&&o<e.slides.length&&e.slide(o,{preview:!0}),!1},L=function(e){e.scrollIntoView!==!1&&F(e.slide,e.index,y(e.slide))},z=function(e){var t=location.search.replace(u,"").replace(/^[^?]/,"?$&");e?history.replaceState(null,null,location.pathname+(t.length>0?t+"&":"?")+"overview"+location.hash):history.replaceState(null,null,location.pathname+t+location.hash)},F=function(t,n,o){e.parent.scrollTop=p>n?0:e.parent.scrollTop+t.getBoundingClientRect().top*(o||1)},K=function(e,t,o,i){o.removeEventListener(d,n,!1),i&&i!==o&&i.removeEventListener(d,n,!1),n=void 0,t.remove("bespoke-overview-"+e)},S=function(e){var t=e.firstElementChild;if(t.classList.contains("bespoke-title"))return t.style.width="",t;var n=document.createElement("header");n.className="bespoke-title",n.style[b(n,"transformOrigin")]="0 0";var o=document.createElement("h1");return o.appendChild(document.createTextNode(e.getAttribute("data-title")||document.title)),n.appendChild(o),w(e.insertBefore(n,t)),n},T=function(){var o,i,r=e.slides,s=e.parent,l=s.classList,a=r.length-1,c=e.slide(),u=c>0?r[0]:r[a],f=b(u,"transform"),x=s.querySelector(".bespoke-scale-parent"),C=1,q=0,A=m,O="webkitAppearance"in s.style;x?C=h(x,f):(o=y(u))&&(C=o),n&&K("from",l,r[0],r[a]),t.title&&(i=S(s)),A||(e.slide(c,{preview:!0}),l.add("bespoke-overview"),addEventListener("resize",T,!1),m=[e.on("activate",L),e.on("prev",E.bind(null,-1)),e.on("next",E.bind(null,1))],t.counter&&l.add("bespoke-overview-counter"),t.location&&z(!0),l.add("bespoke-overview-to"),q=a>0?k(u).length:k(u).join(" ").indexOf("transform")<0?0:1,s.style.overflowY="scroll",s.style.scrollBehavior="smooth",O&&r.forEach(function(e){w(e,"marginBottom","0%","")}));var W=s.clientWidth/C,B=s.clientHeight/C,N=(x||s).offsetWidth-s.clientWidth,H=x?N/2/C:0,M=u.offsetWidth,R=u.offsetHeight,I=W/(p*M+(p+1)*v),$=C*I,j=M*I,D=R*I,P=(W-j)/2,Y=(B-D)/2,U=v*I,V=0,X=0,G=0;i&&(t.scaleTitle!==!1?(i.style[o?"zoom":f]=o?$:"scale("+$+")",i.style.width=s.clientWidth/$+"px",V=i.offsetHeight*I):(N>0&&(i.style.width=s.clientWidth+"px"),V=i.offsetHeight/C)),r.forEach(function(e){var t=G*j+(G+1)*U-H-P,n=X*D+(X+1)*U+V-Y;e.style[f]="translate("+(t.toString().indexOf("e-")<0?t:0)+"px, "+(n.toString().indexOf("e-")<0?n:0)+"px) scale("+I+")",X*p+G===a&&(e.style.marginBottom=v+"px"),e.addEventListener("click",g,!1),G===p-1?(X+=1,G=0):G+=1}),A?F(r[c],c,o):q>0?u.addEventListener(d,n=function(e){e.target===this&&0===(q-=1)&&(K("to",l,this),O&&s.scrollHeight>s.clientHeight&&w(s,"overflowY","auto","scroll"),F(r[c],c,o))},!1):(r.forEach(function(e){w(e)}),l.remove("bespoke-overview-to"),F(r[c],c,o))},C=function(o){e.slide("number"==typeof o?o:e.slide(),{scrollIntoView:!1});var i,r=e.slides,s=e.parent,l=s.classList,a=r.length-1,u=e.slide()>0?r[0]:r[a],f=b(u,"transform"),p=b(u,"transition"),v=s.querySelector(".bespoke-scale-parent"),x="webkitAppearance"in s.style;v?i=h(v,f):(i=y(u))||(i=1),n&&K("to",l,r[0],r[a]);var E=s.scrollTop/i,L=(s.offsetWidth-(v||s).clientWidth)/2/i;s.style.scrollBehavior=s.style.overflowY="",r.forEach(function(e){x&&w(e,"marginBottom","0%",""),e.removeEventListener("click",g,!1)}),(E||L)&&r.forEach(function(e){var t=e.style[f].match(c);e.style[f]="translate("+(parseFloat(t[1])-L)+"px, "+(parseFloat(t[2])-E)+"px) scale("+t[3]+")",w(e,p,"none","")}),s.scrollTop=0,l.remove("bespoke-overview"),removeEventListener("resize",T,!1),(m||[]).forEach(function(e){e()}),m=null,t.counter&&l.remove("bespoke-overview-counter"),t.location&&z(!1),l.add("bespoke-overview-from");var F=a>0?k(u).length:k(u).join(" ").indexOf("transform")<0?0:1;r.forEach(function(e){e.style[f]=""}),F>0?u.addEventListener(d,n=function(e){e.target===this&&0===(F-=1)&&K("from",l,this)},!1):(r.forEach(function(e){w(e)}),l.remove("bespoke-overview-from"))},q=function(){m?C():T()},A=function(t){if(t.which===o)t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||q();else if(m)switch(t.which){case i:t.altKey||t.ctrlKey||t.metaKey||t.shiftKey||C();break;case r:return E(-p,{index:e.slide()});case s:return E(p,{index:e.slide()})}};e.on("activate",x),e.on("destroy",function(){removeEventListener("resize",T,!1),document.removeEventListener("keydown",A,!1)}),e.on("overview",q),document.addEventListener("keydown",A,!1)}}},{"insert-css":11}],9:[function(e,t){t.exports=function(e){return function(t){var n=t.parent,o=t.slides[0],i=o.offsetHeight,r=o.offsetWidth,s="zoom"===e||"zoom"in n.style&&"transform"!==e,l=function(e){var t=document.createElement("div");return t.className="bespoke-scale-parent",e.parentNode.insertBefore(t,e),t.appendChild(e),t},a=s?t.slides:t.slides.map(l),c=function(e){var t="Moz Webkit O ms".split(" ");return t.reduce(function(t,o){return o+e in n.style?o+e:t},e.toLowerCase())}("Transform"),u=s?function(e,t){t.style.zoom=e}:function(e,t){t.style[c]="scale("+e+")"},d=function(){var e=n.offsetWidth/r,t=n.offsetHeight/i;a.forEach(u.bind(null,Math.min(e,t)))};window.addEventListener("resize",d),d()}}},{}],10:[function(e,t){var n=function(e,t){var n=1===(e.parent||e).nodeType?e.parent||e:document.querySelector(e.parent||e),o=[].filter.call("string"==typeof e.slides?n.querySelectorAll(e.slides):e.slides||n.children,function(e){return"SCRIPT"!==e.nodeName}),i=o[0],r={},s=function(e,t){o[e]&&(d("deactivate",f(i,t)),i=o[e],d("activate",f(i,t)))},l=function(e,t){return arguments.length?(d("slide",f(o[e],t))&&s(e,t),void 0):o.indexOf(i)},a=function(e,t){var n=o.indexOf(i)+e;d(e>0?"next":"prev",f(i,t))&&s(n,t)},c=function(e,t){return(r[e]||(r[e]=[])).push(t),u.bind(null,e,t)},u=function(e,t){r[e]=(r[e]||[]).filter(function(e){return e!==t})},d=function(e,t){return(r[e]||[]).reduce(function(e,n){return e&&n(t)!==!1},!0)},f=function(e,t){return t=t||{},t.index=o.indexOf(e),t.slide=e,t},p={on:c,off:u,fire:d,slide:l,next:a.bind(null,1),prev:a.bind(null,-1),parent:n,slides:o};return(t||[]).forEach(function(e){e(p)}),s(0),p};t.exports={from:n}},{}],11:[function(e,t){var n={};t.exports=function(e,t){if(!n[e]){n[e]=!0;var o=document.createElement("style");o.setAttribute("type","text/css"),"textContent"in o?o.textContent=e:o.styleSheet.cssText=e;var i=document.getElementsByTagName("head")[0];t&&t.prepend?i.insertBefore(o,i.childNodes[0]):i.appendChild(o)}}},{}],12:[function(e){var t=("webkitAppearance"in document.documentElement.style,"transform"),n=e("bespoke"),o=e("bespoke-bullets"),i=e("bespoke-classes"),r=e("bespoke-fullscreen"),s=e("bespoke-hash"),l=e("bespoke-nav"),a=e("bespoke-overview"),c=e("bespoke-scale");n.from(".deck",[i(),function(e){var t=String(e.slides.length);e.slides.forEach(function(e){e.setAttribute("data-slide-count",t)})},l(),r(),t?c(t):function(){},function(e){var n=e.slides[0],o=document.createElement("div");o.classList.add("bespoke-slide-canvas"),n.parentNode.insertBefore(o,n),"zoom"===t&&(o.style.zoom=n.style.zoom,new MutationObserver(function(){o.style.zoom!==n.style.zoom&&(o.style.zoom=n.style.zoom)}).observe(n,{attributes:!0,attributeFilter:["style"]}))},a({margin:20}),o(".build, .build-items > *:not(.build-items)"),s(),function(){setTimeout(function(){document.body.classList.add("loaded")},0)}])},{bespoke:10,"bespoke-bullets":1,"bespoke-classes":2,"bespoke-fullscreen":3,"bespoke-hash":4,"bespoke-nav":5,"bespoke-overview":8,"bespoke-scale":9}]},{},[12]);