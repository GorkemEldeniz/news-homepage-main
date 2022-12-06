const openBtn = document.querySelector('.icon-open > img');
const toggleMenu = document.querySelector('.toggle-menu');
const closeBtn = document.querySelector('.menu > img');

window.addEventListener('load',e => {

  document.addEventListener('click', e => {
      if(
        !e.composedPath().includes(toggleMenu) &&
        !e.target.classList.contains('icon')
      ){
        if(toggleMenu.classList.contains('open')){
          toggleMenu.classList.remove('open')
          toggleMenu.classList.add('close')
        }
      }
  })

  openBtn.addEventListener('click',e => {
    toggleMenu.classList.remove('close');
    toggleMenu.classList.add('open');
  })

  closeBtn.addEventListener('click',e => {
    toggleMenu.classList.remove('open');
    toggleMenu.classList.add('close');
  })
})