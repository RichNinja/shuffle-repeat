const menuButton=document.querySelector('.menu-button');const scrim=document.querySelector('.scrim');const drawer=document.querySelector('.drawer');drawer.inert=true;let lastFocus=null;function setMenu(open){document.body.classList.toggle('menu-open',open);menuButton.setAttribute('aria-expanded',String(open));drawer.setAttribute('aria-hidden',String(!open));drawer.inert=!open;scrim.setAttribute('aria-hidden',String(!open));if(open){lastFocus=document.activeElement;drawer.querySelector('a').focus()}else if(lastFocus){lastFocus.focus()}}menuButton.addEventListener('click',()=>setMenu(!document.body.classList.contains('menu-open')));scrim.addEventListener('click',()=>setMenu(false));drawer.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false)));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&document.body.classList.contains('menu-open'))setMenu(false);if(e.key==='Tab'&&document.body.classList.contains('menu-open')){const items=[menuButton,...drawer.querySelectorAll('a')];const first=items[0],last=items[items.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}});
const slides=[...document.querySelectorAll('.slide')];let position=0;
function showSlide(next){if(!slides.length)return;slides[position].classList.remove('active');position=(next+slides.length)%slides.length;slides[position].classList.add('active')}
if(slides.length>1&&!matchMedia('(prefers-reduced-motion: reduce)').matches)setInterval(()=>{if(!document.hidden&&!document.body.classList.contains('menu-open'))showSlide(position+1)},6500);

const siteBasePath=new URL('./',document.currentScript.src).pathname;
const homePaths=[siteBasePath,siteBasePath+'index.html'];
const navigationKey='shuffle-internal-home:'+siteBasePath;let internalNavigation=false;
try{internalNavigation=sessionStorage.getItem(navigationKey)==='1';sessionStorage.removeItem(navigationKey)}catch{}
document.addEventListener('click',event=>{
 if(event.defaultPrevented||event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
 const link=event.target.closest('a[href]');if(!link||link.target==='_blank'||link.hasAttribute('download'))return;
 const target=new URL(link.href,location.href);
 if(target.origin!==location.origin||!homePaths.includes(target.pathname))return;
 if(target.pathname===location.pathname&&target.hash)return;
 try{sessionStorage.setItem(navigationKey,'1')}catch{}
});
function shouldPlayIntro({hash,internalNavigation,referrer,origin,navigationType,basePath}){
 if(hash||navigationType==='back_forward')return false;
 if(navigationType==='reload')return true;
 if(internalNavigation)return false;
 try{if(referrer){const source=new URL(referrer);if(source.origin===origin&&source.pathname.startsWith(basePath))return false}}catch{}
 return true;
}
const playIntro=shouldPlayIntro({hash:location.hash,internalNavigation,referrer:document.referrer,origin:location.origin,basePath:siteBasePath,navigationType:performance.getEntriesByType('navigation')[0]?.type});
const intro=document.querySelector('.intro-overlay');
if(intro){
 if(!playIntro||matchMedia('(prefers-reduced-motion: reduce)').matches)intro.remove();
 else{
  const logo=document.querySelector('#intro-logo'),hole=document.querySelector('#intro-hole'),curtain=document.querySelector('.intro-curtain'),ribbon=document.querySelector('#intro-ribbon'),head=document.querySelector('#intro-arrow-head'),tail=document.querySelector('#intro-arrow-tail');
  const started=performance.now(),ease=x=>x*x*(3-2*x);
  function positionTip(element,point){element.setAttribute('transform',`translate(${point.x} ${point.y}) rotate(${point.angle})`)}
  function frame(now){
   const elapsed=now-started,width=innerWidth,height=innerHeight,base=Math.min(width*.62,340)/270;
   const zoom=Math.max(0,Math.min(1,(elapsed-1500)/1000));
   const scale=base*Math.exp(ease(zoom)*Math.log(Math.max(width,height)/(base*12)));
   const transform=`translate(${width/2} ${height/2}) scale(${scale}) translate(-135 -66)`;
   logo.setAttribute('transform',transform);hole.setAttribute('transform',transform);logo.style.visibility='visible';
   const state=ShuffleIntroMotion.state(Math.min(elapsed,1500)/1500);
   ribbon.setAttribute('stroke-dasharray',state.dasharray);ribbon.setAttribute('stroke-dashoffset',state.dashoffset);ribbon.setAttribute('stroke',state.color);head.setAttribute('fill',state.color);tail.setAttribute('fill',state.color);positionTip(head,state.head);positionTip(tail,state.tail);
   if(zoom>0){hole.setAttribute('opacity',1);logo.setAttribute('opacity',Math.max(0,1-zoom*4));curtain.setAttribute('opacity',Math.max(0,1-Math.max(0,(zoom-.75)/.25)))}
   if(elapsed<2500)requestAnimationFrame(frame);else intro.remove();
  }
  requestAnimationFrame(frame);
 }
}
