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