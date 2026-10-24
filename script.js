document.documentElement.classList.add('js');
try{
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
document.querySelectorAll('.rv').forEach(function(el){io.observe(el)});
}catch(e){document.querySelectorAll('.rv').forEach(function(el){el.classList.add('in')})}

/* ===== ADD YOUR INTRO VIDEO HERE =====
   INTRO_VIDEO: direct .mp4 link (plays inside the page)
   INTRO_LINK: YouTube / Instagram / Drive link (opens in a new tab) */
var INTRO_VIDEO="", INTRO_LINK="";
(function(){
var slot=document.getElementById('vSlot'),pP=document.getElementById('pPhoto'),pV=document.getElementById('pVideo'),tP=document.getElementById('tPhoto'),tV=document.getElementById('tVideo');
function build(){
if(INTRO_VIDEO){var v=document.createElement('video');v.src=INTRO_VIDEO;v.controls=true;v.playsInline=true;v.preload='metadata';slot.appendChild(v);return}
slot.innerHTML=INTRO_LINK?'<a class="play" href="'+INTRO_LINK+'" target="_blank" rel="noopener">▶</a><b>Watch my intro video</b><small>Opens in a new tab</small>':'<div class="play">▶</div><b>My intro video</b><small>Coming soon</small>';
}
build();
function show(v){pP.classList.toggle('on',!v);pV.classList.toggle('on',v);tP.classList.toggle('on',!v);tV.classList.toggle('on',v);var el=slot.querySelector('video');if(el&&!v)el.pause()}
tP.onclick=function(){show(false)};tV.onclick=function(){show(true)};
})();
