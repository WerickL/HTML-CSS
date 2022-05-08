window.addEventListener('scroll', onScroll)
onScroll()
function onScroll(){
  showNav()
  showToTop()   
  activateMenuSection(main) 
  activateMenuSection(services) 
  activateMenuSection(about) 
  activateMenuSection(contato) 
  
 
}

function activateMenuSection(section){
  const targetLine = scrollY + innerHeight / 2
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  //section alcançou a linha
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop
  //fim da section
  const sectionEndAt = sectionTop + sectionHeight
  //passou da linha
  const sectionEndPassedTargetLine = sectionEndAt <= targetLine
  //dentro dos limites
  const sectionsBoundaries = sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine
  //id da variável section
  const sectionId = section.getAttribute('id')
  //
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)
  //condicionais
  menuElement.classList.remove('active')
  if(sectionsBoundaries){
    menuElement.classList.add('active')
  }

}

function showNav(){
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
function showToTop(){
  if(scrollY > 550){
    toTop.classList.add('show')
  }
  else{
    toTop.classList.remove('show')
  }
}