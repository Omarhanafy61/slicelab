const cursor=document.querySelector('.cursor');
if(cursor){
  window.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px'});
  document.querySelectorAll('a,.btn,.product-card,.mini-card').forEach(el=>{
    el.addEventListener('mouseenter',()=>{cursor.style.width='38px';cursor.style.height='38px';cursor.style.background='rgba(239,71,112,.12)'});
    el.addEventListener('mouseleave',()=>{cursor.style.width='16px';cursor.style.height='16px';cursor.style.background='transparent'});
  });
}
const menuBtn=document.querySelector('.menu-btn'), mobile=document.querySelector('.mobile-menu');
menuBtn?.addEventListener('click',()=>mobile.classList.toggle('open'));
mobile?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));

const revealEls=document.querySelectorAll('.product-card,.story-copy,.pink-panel,.custom-copy,.mini-card,.insta-box,.contact h2');
const io=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){entry.target.classList.add('show');io.unobserve(entry.target)}
  })
},{threshold:.12});
revealEls.forEach(el=>{el.classList.add('reveal');io.observe(el)});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const target=document.querySelector(a.getAttribute('href'));
    if(target){e.preventDefault();target.scrollIntoView({behavior:'smooth'})}
  });
});
