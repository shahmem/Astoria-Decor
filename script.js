lucide.createIcons();
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open);toggle.innerHTML=open?'<i data-lucide="x"></i>':'<i data-lucide="menu"></i>';lucide.createIcons();});
document.querySelectorAll('nav a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.innerHTML='<i data-lucide="menu"></i>';lucide.createIcons();}));
document.querySelector('#year').textContent=new Date().getFullYear();
