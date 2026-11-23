(function(){
  'use strict';
  var d=document, w=window;
  d.documentElement.classList.add('js');
  var reduce=w.matchMedia&&w.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function store(k,v){try{if(v===undefined)return localStorage.getItem(k);localStorage.setItem(k,v)}catch(e){return null}}
  function sstore(k,v){try{if(v===undefined)return sessionStorage.getItem(k);sessionStorage.setItem(k,v)}catch(e){return null}}

  /* mobile nav */
  var burger=d.querySelector('.burger'), menu=d.getElementById('menu');
  if(burger&&menu){
    burger.addEventListener('click',function(){var o=menu.classList.toggle('open');burger.setAttribute('aria-expanded',o?'true':'false')});
    d.addEventListener('keydown',function(e){if(e.key==='Escape'&&menu.classList.contains('open')){menu.classList.remove('open');burger.setAttribute('aria-expanded','false');burger.focus()}});
  }

  /* reveal on scroll */
  var els=d.querySelectorAll('.reveal');
  if('IntersectionObserver' in w&&!reduce){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{rootMargin:'0px 0px -8% 0px'});
    els.forEach(function(el){io.observe(el)});
  }else{els.forEach(function(el){el.classList.add('in')})}

  /* 3D pointer tilt on hero bottle */
  var stage=d.querySelector('.stage'), bottle=stage&&stage.querySelector('.bottle-wrap');
  if(stage&&bottle&&!reduce&&w.matchMedia('(pointer:fine)').matches){
    stage.addEventListener('pointermove',function(e){var r=stage.getBoundingClientRect();var x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;bottle.style.transform='translate(-50%,-50%) rotateY('+(x*18)+'deg) rotateX('+(-y*12)+'deg)'});
    stage.addEventListener('pointerleave',function(){bottle.style.transform='translate(-50%,-50%)'});
  }

  /* sticky buy bar */
  var bar=d.querySelector('.buybar');
  if(bar&&sstore('nc_bar')!=='0'){
    var onS=function(){bar.classList.toggle('show',w.scrollY>650)};
    w.addEventListener('scroll',onS,{passive:true});onS();
    var bx=bar.querySelector('.x');
    if(bx)bx.addEventListener('click',function(){bar.classList.remove('show');w.removeEventListener('scroll',onS);sstore('nc_bar','0')});
  }else if(bar){bar.remove()}

  /* centered promo modal: once per 24h */
  var modal=d.getElementById('promo'), lastFocus=null, modalOpen=false;
  function focusables(){return modal.querySelectorAll('a[href],button:not([disabled])')}
  function openModal(){
    if(!modal||modalOpen)return;modalOpen=true;lastFocus=d.activeElement;
    hideToast();modal.classList.add('open');modal.setAttribute('aria-hidden','false');d.body.classList.add('lock');
    var f=focusables();if(f.length)f[0].focus();
  }
  function closeModal(){
    if(!modalOpen)return;modalOpen=false;modal.classList.remove('open');modal.setAttribute('aria-hidden','true');d.body.classList.remove('lock');
    store('nc_promo_ts',String(Date.now()));if(lastFocus&&lastFocus.focus)lastFocus.focus();
  }
  if(modal){
    modal.querySelectorAll('[data-close]').forEach(function(b){b.addEventListener('click',closeModal)});
    modal.addEventListener('click',function(e){if(e.target===modal)closeModal()});
    modal.querySelectorAll('a[href]').forEach(function(a){a.addEventListener('click',function(){store('nc_promo_ts',String(Date.now()))})});
    d.addEventListener('keydown',function(e){
      if(!modalOpen)return;
      if(e.key==='Escape'){e.preventDefault();closeModal()}
      if(e.key==='Tab'){var f=focusables(),first=f[0],last=f[f.length-1];if(e.shiftKey&&d.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&d.activeElement===last){e.preventDefault();first.focus()}}
    });
    var ts=parseInt(store('nc_promo_ts')||'0',10);
    if(!ts||Date.now()-ts>864e5){
      var start=function(){setTimeout(openModal,6500)};
      if(d.readyState==='complete')start();else w.addEventListener('load',start);
    }
  }

  /* bottom-left informational notification */
  var toast=d.getElementById('toast'), msgs=[
    ['Compare the NerveCalm packages','1, 3 and 6 bottle options are listed by the seller.'],
    ['6-bottle package: $49 per bottle','Shown on the seller’s order page with free US shipping.'],
    ['90-day money-back guarantee','Offered by the seller — see its refund terms at checkout.'],
    ['3-bottle package: $59 per bottle','A 90-day supply with free shipping, per the seller.'],
    ['Two capsules a day','Each 60-capsule bottle is a 30-day supply.']
  ], mi=0, tTimer=null, closedToast=false;
  function hideToast(){if(toast)toast.classList.remove('show')}
  function showToast(){
    if(!toast||closedToast||modalOpen||d.hidden){schedule();return}
    var m=msgs[mi++%msgs.length];toast.querySelector('b').textContent=m[0];toast.querySelector('small').textContent=m[1];
    toast.classList.add('show');setTimeout(function(){hideToast();schedule()},6000);
  }
  function schedule(){clearTimeout(tTimer);tTimer=setTimeout(showToast,18000+Math.random()*8000)}
  if(toast&&sstore('nc_toast')!=='0'){
    setTimeout(showToast,5000);
    toast.querySelector('button').addEventListener('click',function(){closedToast=true;hideToast();sstore('nc_toast','0')});
  }

  /* footer year */
  var y=d.getElementById('yr');if(y)y.textContent=new Date().getFullYear();
})();
