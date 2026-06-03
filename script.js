document.addEventListener('DOMContentLoaded',function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(toggle){toggle.addEventListener('click',()=>{if(nav.style.display==='flex'){nav.style.display='none'}else{nav.style.display='flex'}})}
  const form = document.getElementById('contact-form');
  if(form){form.addEventListener('submit',e=>{e.preventDefault();alert('Thanks — form submission would go here.')} )}
});
