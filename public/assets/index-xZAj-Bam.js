(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();function H(){gsap.set(".intro__title > div",{autoAlpha:0});var a=gsap.timeline();a.to(".title1",{duration:.5,autoAlpha:1,delay:.8}).to(".title2",{duration:.5,autoAlpha:1},"+=0.2").to(".title3",{duration:.5,autoAlpha:1},"+=0.2").to(".title4",{duration:.5,autoAlpha:1},"+=0.1");var t={x:.5,y:.5};document.addEventListener("mousemove",function(w){t={x:w.clientX/window.innerWidth,y:w.clientY/window.innerHeight}});var e=0,n=new THREE.Scene,o=new THREE.PerspectiveCamera(95,window.innerWidth/window.innerHeight,.1,1e3);o.position.z=30;var s=document.getElementById("animation-container"),i=new THREE.WebGLRenderer({alpha:!0});i.setSize(window.innerWidth,window.innerHeight),s.appendChild(i.domElement);var r=.2,l=new THREE.BoxGeometry(r,r,r),f=new THREE.MeshBasicMaterial({transparent:!0,color:16776960,opacity:.4,side:THREE.DoubleSide}),v=60,u=v/2,c=v*u,d=Math.pow(c,1/3),y=16,g=new THREE.Object3D;n.add(g);function h(w){return(w/d-.5)*y*1.2}for(var _=0;_<v;_++)for(var m=Math.PI*2*_/v,T=0;T<u;T++){var S=Math.PI*(T/u-.5),p=new THREE.Mesh(l,f);g.add(p);var x=new THREE.Vector3;x.z=Math.sin(m)*Math.cos(S)*y,x.x=Math.cos(m)*Math.cos(S)*y,x.y=Math.sin(S)*y,p.position.x=h(g.children.length%d),p.position.y=h(Math.floor(g.children.length/d)%d),p.position.z=h(Math.floor(g.children.length/Math.pow(d,2))%d),console.log(d,g.children.length,p.position.x,p.position.y,p.position.z),p.userData={dests:[x,p.position.clone()],speed:new THREE.Vector3}}function M(){e+=.002;for(var w=0,z=g.children.length;w<z;w++){var E=g.children[w],b=E.userData.dests[Math.floor(e)%E.userData.dests.length].clone(),P=b.sub(E.position);E.userData.speed.divideScalar(1.02),E.userData.speed.add(P.divideScalar(400)),E.position.add(E.userData.speed),E.lookAt(b)}g.rotation.y=e*3,g.rotation.x=(t.y-.5)*Math.PI,g.rotation.z=(t.x-.5)*Math.PI,i.render(n,o),requestAnimationFrame(M)}M()}function I(){const a=e=>{gsap.set(e,{autoAlpha:0})},t=e=>{let n=0,o=0,s=e.dataset.delay;e.classList.contains("reveal_LTR")?(n=-100,o=0):e.classList.contains("reveal_BTT")?(n=0,o=100):e.classList.contains("reveal_TTB")?(n=0,o=-100):(e.classList.contains("reveal_RTL"),n=100,o=0),gsap.fromTo(e,{autoAlpha:0,x:n,y:o},{autoAlpha:1,x:0,y:0,delay:s,duration:1.25,overwrite:"auto",ease:"expo"})};gsap.utils.toArray(".reveal").forEach(e=>{a(e),ScrollTrigger.create({trigger:e,start:"top bottom",end:"bottom top",onEnter:()=>{t(e)}})})}function k(){const a=document.querySelector(".rotating-img");gsap.registerPlugin(ScrollTrigger),gsap.to(a,{rotation:720,ease:"ease-in-out",scrollTrigger:{trigger:a,start:"-=900",end:"+=4000",scrub:!0}}),gsap.registerPlugin(ScrollTrigger),gsap.utils.toArray(".split").forEach(o=>{let s=new SplitType(o,{type:"lines, words, chars"});s.lines,s.words,s.chars}),gsap.set(".about__text1 .t5 .char",{opacity:0}),gsap.to(".split.t5 .char",{opacity:1,y:0,ease:"power1.out",stagger:.05,duration:2,scrollTrigger:{trigger:".split.t5 .char",start:"top 80%",end:"bottom 30%",scrub:!0,markers:!1}});const e=document.querySelector(".rotating-img2");gsap.registerPlugin(ScrollTrigger),gsap.to(e,{rotation:720,ease:"ease-in-out",scrollTrigger:{trigger:e,start:"-=900",end:"+=4000",scrub:!0}});const n=document.querySelector(".about__img2");n.addEventListener("mouseenter",()=>{n.classList.add("shaking")}),n.addEventListener("mouseleave",()=>{n.classList.remove("shaking")})}function N(){gsap.registerPlugin(ScrollTrigger),gsap.utils.toArray(".tech__stack.t6").forEach(a=>{const t=a.querySelector(".stack__name"),e=a.querySelector(".stack__desc");gsap.set([t,e],{opacity:0,y:"+=20"}),ScrollTrigger.create({trigger:a,start:"top 60%",onEnter:()=>{gsap.to([t,e],{opacity:1,y:0,duration:.5,stagger:.2})}})})}function q(){gsap.registerPlugin(ScrollTrigger);const a=gsap.utils.toArray(".info__item");gsap.to(a,{xPercent:-120*(a.length-1),ease:"none",scrollTrigger:{trigger:"#info",start:"top 56px",end:"+=3000",pin:!0,scrub:1,markers:!1,invalidateOnRefresh:!0,anticipatePin:1}})}function D(){let a,t,e;class n{constructor(){this.points=[]}init(){for(let i=0;i<this.numPoints;i++){let r=new o(this.divisional*(i+1),this);this.push(r)}}render(){let i=this.canvas,r=this.ctx;this.position;let l=this.points;this.radius;let f=this.numPoints;this.divisional;let v=this.center;var u=new Image;u.src="./assets/img/contact.jpg",u.onload=function(){var c=i.width,d=document.createElement("canvas"),y=d.getContext("2d");d.width=c,d.height=c,y.drawImage(this,0,0,this.width,this.height,0,0,c,c),r.clearRect(0,0,i.width,i.height),l[0].solveWith(l[f-1],l[1]);let g=l[f-1].position,h=l[0].position,_=h;r.beginPath(),r.moveTo(v.x,v.y),r.moveTo((g.x+h.x)/2,(g.y+h.y)/2);for(let S=1;S<f;S++){l[S].solveWith(l[S-1],l[S+1]||l[0]);let p=l[S].position;var m=(h.x+p.x)/2,T=(h.y+p.y)/2;r.quadraticCurveTo(h.x,h.y,m,T),r.fillStyle="#000000",h=p}var m=(h.x+_.x)/2,T=(h.y+_.y)/2;r.quadraticCurveTo(h.x,h.y,m,T),r.fillStyle=r.createPattern(d,"repeat"),r.fill(),r.strokeStyle="#000000"},requestAnimationFrame(this.render.bind(this))}push(i){i instanceof o&&this.points.push(i)}set color(i){this._color=i}get color(){return this._color||"#000000"}set canvas(i){i instanceof HTMLElement&&i.tagName.toLowerCase()==="canvas"&&(this._canvas=a,this.ctx=this._canvas.getContext("2d"))}get canvas(){return this._canvas}set numPoints(i){i>2&&(this._points=i)}get numPoints(){return this._points||32}set radius(i){i>0&&(this._radius=i)}get radius(){return this._radius||window.innerHeight/2}set position(i){typeof i=="object"&&i.x&&i.y&&(this._position=i)}get position(){return this._position||{x:.5,y:.5}}get divisional(){return Math.PI*2/this.numPoints}get center(){return{x:this.canvas.width*this.position.x,y:this.canvas.height*this.position.y}}set running(i){this._running=i===!0}get running(){return this.running!==!1}}class o{constructor(i,r){this.parent=r,this.azimuth=Math.PI-i,this._components={x:Math.cos(this.azimuth),y:Math.sin(this.azimuth)},this.acceleration=-.3+Math.random()*.6}solveWith(i,r){this.acceleration=(-.3*this.radialEffect+(i.radialEffect-this.radialEffect)+(r.radialEffect-this.radialEffect))*this.elasticity-this.speed*this.friction}set acceleration(i){typeof i=="number"&&(this._acceleration=i,this.speed+=this._acceleration*2)}get acceleration(){return this._acceleration||0}set speed(i){typeof i=="number"&&(this._speed=i,this.radialEffect+=this._speed*5)}get speed(){return this._speed||0}set radialEffect(i){typeof i=="number"&&(this._radialEffect=i)}get radialEffect(){return this._radialEffect||0}get position(){return{x:this.parent.center.x+this.components.x*(this.parent.radius+this.radialEffect),y:this.parent.center.y+this.components.y*(this.parent.radius+this.radialEffect)}}get components(){return this._components}set elasticity(i){typeof i=="number"&&(this._elasticity=i)}get elasticity(){return this._elasticity||.001}set friction(i){typeof i=="number"&&(this._friction=i)}get friction(){return this._friction||.0085}}e=new n,t=function(){a=document.createElement("canvas"),a.setAttribute("touch-action","none");let s=function(){a.width=window.innerWidth,a.height=window.innerHeight};window.addEventListener("resize",s),s();let i=document.getElementById("contact"),r=document.createElement("div");r.className="canvaswrap",r.appendChild(a),i.appendChild(r);let l={x:0,y:0},f=!1,v=function(u){let c=e.center,d={x:u.clientX-c.x,y:u.clientY-c.y},y=Math.sqrt(d.x*d.x+d.y*d.y),g=null;if(e.mousePos={x:c.x-u.clientX,y:c.y-u.clientY},y<e.radius&&f===!1){let h={x:u.clientX-c.x,y:u.clientY-c.y};g=Math.atan2(h.y,h.x),f=!0}else if(y>e.radius&&f===!0){let h={x:u.clientX-c.x,y:u.clientY-c.y};g=Math.atan2(h.y,h.x),f=!1,e.color=null}if(typeof g=="number"){let h=null,_=100;if(e.points.forEach(m=>{Math.abs(g-m.azimuth)<_&&(h=m,_=Math.abs(g-m.azimuth))}),h){let m={x:l.x-u.clientX,y:l.y-u.clientY};m=Math.sqrt(m.x*m.x+m.y*m.y)*10,m>100&&(m=100),h.acceleration=m/100*(f?-1:1)}}l.x=u.clientX,l.y=u.clientY};window.addEventListener("pointermove",v),e.canvas=a,e.init(),e.render()},t()}function C(){return C=Object.assign?Object.assign.bind():function(a){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n])}return a},C.apply(this,arguments)}function R(a,t,e){return Math.max(a,Math.min(t,e))}class X{advance(t){var e;if(!this.isRunning)return;let n=!1;if(this.lerp)this.value=(o=this.value,s=this.to,(1-(i=1-Math.exp(-60*this.lerp*t)))*o+i*s),Math.round(this.value)===this.to&&(this.value=this.to,n=!0);else{this.currentTime+=t;const r=R(0,this.currentTime/this.duration,1);n=r>=1;const l=n?1:this.easing(r);this.value=this.from+(this.to-this.from)*l}var o,s,i;(e=this.onUpdate)==null||e.call(this,this.value,n),n&&this.stop()}stop(){this.isRunning=!1}fromTo(t,e,{lerp:n=.1,duration:o=1,easing:s=l=>l,onStart:i,onUpdate:r}){this.from=this.value=t,this.to=e,this.lerp=n,this.duration=o,this.easing=s,this.currentTime=0,this.isRunning=!0,i==null||i(),this.onUpdate=r}}class Y{constructor({wrapper:t,content:e,autoResize:n=!0}={}){if(this.resize=()=>{this.onWrapperResize(),this.onContentResize()},this.onWrapperResize=()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)},this.onContentResize=()=>{this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth},this.wrapper=t,this.content=e,n){const o=function(s,i){let r;return function(){let l=arguments,f=this;clearTimeout(r),r=setTimeout(function(){s.apply(f,l)},250)}}(this.resize);this.wrapper!==window&&(this.wrapperResizeObserver=new ResizeObserver(o),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(o),this.contentResizeObserver.observe(this.content)}this.resize()}destroy(){var t,e;(t=this.wrapperResizeObserver)==null||t.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect()}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class A{constructor(){this.events={}}emit(t,...e){let n=this.events[t]||[];for(let o=0,s=n.length;o<s;o++)n[o](...e)}on(t,e){var n;return(n=this.events[t])!=null&&n.push(e)||(this.events[t]=[e]),()=>{var o;this.events[t]=(o=this.events[t])==null?void 0:o.filter(s=>e!==s)}}off(t,e){var n;this.events[t]=(n=this.events[t])==null?void 0:n.filter(o=>e!==o)}destroy(){this.events={}}}class B{constructor(t,{wheelMultiplier:e=1,touchMultiplier:n=2,normalizeWheel:o=!1}){this.onTouchStart=s=>{const{clientX:i,clientY:r}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=i,this.touchStart.y=r,this.lastDelta={x:0,y:0}},this.onTouchMove=s=>{const{clientX:i,clientY:r}=s.targetTouches?s.targetTouches[0]:s,l=-(i-this.touchStart.x)*this.touchMultiplier,f=-(r-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=i,this.touchStart.y=r,this.lastDelta={x:l,y:f},this.emitter.emit("scroll",{deltaX:l,deltaY:f,event:s})},this.onTouchEnd=s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})},this.onWheel=s=>{let{deltaX:i,deltaY:r}=s;this.normalizeWheel&&(i=R(-100,i,100),r=R(-100,r,100)),i*=this.wheelMultiplier,r*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:i,deltaY:r,event:s})},this.element=t,this.wheelMultiplier=e,this.touchMultiplier=n,this.normalizeWheel=o,this.touchStart={x:null,y:null},this.emitter=new A,this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(t,e){return this.emitter.on(t,e)}destroy(){this.emitter.destroy(),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class F{constructor({wrapper:t=window,content:e=document.documentElement,wheelEventsTarget:n=t,eventsTarget:o=n,smoothWheel:s=!0,smoothTouch:i=!1,syncTouch:r=!1,syncTouchLerp:l=.1,__iosNoInertiaSyncTouchLerp:f=.4,touchInertiaMultiplier:v=35,duration:u,easing:c=p=>Math.min(1,1.001-Math.pow(2,-10*p)),lerp:d=!u&&.1,infinite:y=!1,orientation:g="vertical",gestureOrientation:h="vertical",touchMultiplier:_=1,wheelMultiplier:m=1,normalizeWheel:T=!1,autoResize:S=!0}={}){this.onVirtualScroll=({deltaX:p,deltaY:x,event:M})=>{if(M.ctrlKey)return;const w=M.type.includes("touch"),z=M.type.includes("wheel");if(this.options.gestureOrientation==="both"&&p===0&&x===0||this.options.gestureOrientation==="vertical"&&x===0||this.options.gestureOrientation==="horizontal"&&p===0||w&&this.options.gestureOrientation==="vertical"&&this.scroll===0&&!this.options.infinite&&x<=0)return;let E=M.composedPath();if(E=E.slice(0,E.indexOf(this.rootElement)),E.find(L=>{var W;return(L.hasAttribute==null?void 0:L.hasAttribute("data-lenis-prevent"))||w&&(L.hasAttribute==null?void 0:L.hasAttribute("data-lenis-prevent-touch"))||z&&(L.hasAttribute==null?void 0:L.hasAttribute("data-lenis-prevent-wheel"))||((W=L.classList)==null?void 0:W.contains("lenis"))}))return;if(this.isStopped||this.isLocked)return void M.preventDefault();if(this.isSmooth=(this.options.smoothTouch||this.options.syncTouch)&&w||this.options.smoothWheel&&z,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();M.preventDefault();let b=x;this.options.gestureOrientation==="both"?b=Math.abs(x)>Math.abs(p)?x:p:this.options.gestureOrientation==="horizontal"&&(b=p);const P=w&&this.options.syncTouch,O=w&&M.type==="touchend"&&Math.abs(b)>1;O&&(b=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+b,C({programmatic:!1},P&&{lerp:O?this.syncTouchLerp:this.options.__iosNoInertiaSyncTouchLerp}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const p=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-p),this.emit()}},window.lenisVersion="1.0.29",t!==document.documentElement&&t!==document.body||(t=window),this.options={wrapper:t,content:e,wheelEventsTarget:n,eventsTarget:o,smoothWheel:s,smoothTouch:i,syncTouch:r,syncTouchLerp:l,__iosNoInertiaSyncTouchLerp:f,touchInertiaMultiplier:v,duration:u,easing:c,lerp:d,infinite:y,gestureOrientation:h,orientation:g,touchMultiplier:_,wheelMultiplier:m,normalizeWheel:T,autoResize:S},this.animate=new X,this.emitter=new A,this.dimensions=new Y({wrapper:t,content:e,autoResize:S}),this.toggleClass("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=r||s||i,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,{passive:!1}),this.virtualScroll=new B(o,{touchMultiplier:_,wheelMultiplier:m,normalizeWheel:T}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,{passive:!1}),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClass("lenis",!1),this.toggleClass("lenis-smooth",!1),this.toggleClass("lenis-scrolling",!1),this.toggleClass("lenis-stopped",!1),this.toggleClass("lenis-locked",!1)}on(t,e){return this.emitter.on(t,e)}off(t,e){return this.emitter.off(t,e)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:e=0,immediate:n=!1,lock:o=!1,duration:s=this.options.duration,easing:i=this.options.easing,lerp:r=!s&&this.options.lerp,onComplete:l=null,force:f=!1,programmatic:v=!0}={}){if(!this.isStopped&&!this.isLocked||f){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var u;let c;if(typeof t=="string"?c=document.querySelector(t):(u=t)!=null&&u.nodeType&&(c=t),c){if(this.options.wrapper!==window){const y=this.options.wrapper.getBoundingClientRect();e-=this.isHorizontal?y.left:y.top}const d=c.getBoundingClientRect();t=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=e,t=Math.round(t),this.options.infinite?v&&(this.targetScroll=this.animatedScroll=this.scroll):t=R(0,t,this.limit),n)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!v){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:s,easing:i,lerp:r,onStart:()=>{o&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(c,d)=>{this.isScrolling=!0,this.velocity=c-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=c,this.setScroll(this.scroll),v&&(this.targetScroll=c),d||this.emit(),d&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll;var t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.__isSmooth=t,this.toggleClass("lenis-smooth",t))}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.__isScrolling=t,this.toggleClass("lenis-scrolling",t))}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.__isStopped=t,this.toggleClass("lenis-stopped",t))}get isLocked(){return this.__isLocked}set isLocked(t){this.__isLocked!==t&&(this.__isLocked=t,this.toggleClass("lenis-locked",t))}get className(){let t="lenis";return this.isStopped&&(t+=" lenis-stopped"),this.isLocked&&(t+=" lenis-locked"),this.isScrolling&&(t+=" lenis-scrolling"),this.isSmooth&&(t+=" lenis-smooth"),t}toggleClass(t,e){this.rootElement.classList.toggle(t,e),this.emitter.emit("className change",this)}}function j(){const a=new F({duration:1,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e))});function t(e){a.raf(e),requestAnimationFrame(t)}requestAnimationFrame(t),a.on("scroll",e=>{console.log(e)})}window.addEventListener("load",function(){H(),I(),k(),N(),q(),D(),j()});
