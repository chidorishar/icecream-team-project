function e(e){"BUTTON"==e.target.nodeName&&e.currentTarget.classList.toggle("is-flipped")}document.querySelectorAll(".product-cards__card").forEach((t=>t.addEventListener("click",e)));const t=document.querySelectorAll("[data-menu-button]");document.querySelector("[data-menu]");function n(e){const n=e.currentTarget;if("BUTTON"!=n.nodeName)return;const r="true"===n.getAttribute("aria-expanded")||!1;t.forEach((e=>e.setAttribute("aria-expanded",!r))),document.body.classList.toggle("js-is-menu-open")}t.forEach((e=>e.addEventListener("click",n)));const r={currentButton:document.querySelector('button[data-is-active="true"]'),reviewsControls:document.querySelector(".section-reviews__reviews-controls")};r.reviewsControls.addEventListener("click",(function(e){const t=e.target;if("BUTTON"!=t.nodeName||t===r.currentButton)return;r.currentButton.dataset.isActive="false",r.currentButton=t,r.currentButton.dataset.isActive="true",document.documentElement.style.setProperty("--current-review-number",r.currentButton.dataset.indx)}));const s=new IntersectionObserver((function(e){e.forEach((e=>{e.isIntersecting&&e.target.classList.add("element-show")}))}),{threshold:[.5]}),i=document.querySelector(".gallery__content");s.observe(i);const a=document.querySelectorAll(".gallery__img");let c=999;i.addEventListener("mouseover",(function(e){const t=e.target;if("IMG"!=t.nodeName)return;t.style.zIndex=c++,c>1e3&&(c=2),a.forEach((e=>e!=t?e.classList.add("gallery__img--blurred-grayscaled"):null))})),i.addEventListener("mouseout",(function(e){const t=e.target;if("IMG"!=t.nodeName)return;a.forEach((e=>e.classList.remove("gallery__img--blurred-grayscaled"))),setTimeout((()=>t.style.zIndex=1),300)}));const o={min:0,max:100,speed:100,increment:1,delay:0},u={min:"data-counter-min",max:"data-counter-max",speed:"data-counter-speed",increment:"data-counter-increment",delay:"data-counter-delay"};class d extends class{render(e){this.element.innerHTML=e}}{die(){clearTimeout(this.interval)}count(){this.current<this.max?(this.current+=this.increment,this.render(this.current)):this.current>this.max&&(this.render(this.max),this.die())}initialize(){this.delay>0?setTimeout((()=>{this.interval=setInterval(this.count.bind(this),this.speed)}),this.delay):this.interval=setInterval(this.count.bind(this),this.speed),this.render(this.min)}constructor(e,t,n,r,s,i){super(),this.selector=e,this.element=document.querySelector(this.selector),this.min=parseInt(this.element.getAttribute(u.min))||o.min,this.max=parseInt(this.element.getAttribute(u.max))||o.max,this.speed=parseInt(this.element.getAttribute(u.speed))||o.speed,this.increment=parseInt(this.element.getAttribute(u.increment))||o.increment,this.delay=parseInt(this.element.getAttribute(u.delay))||o.delay,this.current=this.min,this.interval,this.initialize()}}new d(".header__numbers-text--16"),new d(".header__numbers-text--23");
//# sourceMappingURL=index.ffb24408.js.map
