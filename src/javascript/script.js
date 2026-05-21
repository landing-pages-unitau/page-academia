/* =========================================
MENU MOBILE
========================================= */

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {

  menuToggle.classList.toggle('ativo');
  navLinks.classList.toggle('ativo');

});

/* FECHAR MENU AO CLICAR */

document.querySelectorAll('.nav-links a')
.forEach(link => {

  link.addEventListener('click', () => {

    menuToggle.classList.remove('ativo');
    navLinks.classList.remove('ativo');

  });

});