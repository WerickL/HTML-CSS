function onScroll(){
  if(scrollY > 0){
    navi.classList.add('scroll')
  }
  else{
    navi.classList.remove('scroll')
  }
}
function openMenu(){
  document.body.classList.add('menu-expanded')
}
function closeMenu(){
  document.body.classList.remove('menu-expanded')
   
}
ScrollReveal({
  origin: 'left',
  duration: 700,
  distance: '50px',
}).reveal(`#main,.cont-statistics,img, #services header, .card, #about header, #about .content, #contato header, #contato .content`);