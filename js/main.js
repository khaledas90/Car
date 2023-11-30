
// nav
const open = document.querySelector(".fa-bars");
const nav = document.querySelector(".nav-menu");

open.addEventListener('click', () => {
    nav.classList.toggle('hide');
  });

// bg hero

let bgHero = document.querySelector(".hero");

setInterval(() => {
    bgHero.style.backgroundImage = "url(../img/bg-light.jpg)"
    
    setTimeout(() => {
        bgHero.style.backgroundImage = "url(../img/bg.jpg)"
    }, 1000);
}, 2200);