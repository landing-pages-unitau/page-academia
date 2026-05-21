"use strict";

/* =========================================
MENU MOBILE
========================================= */
var menuToggle = document.getElementById('menu-toggle');
var navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', function () {
  menuToggle.classList.toggle('ativo');
  navLinks.classList.toggle('ativo');
});
/* FECHAR MENU AO CLICAR */

document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    menuToggle.classList.remove('ativo');
    navLinks.classList.remove('ativo');
  });
});
//# sourceMappingURL=script.dev.js.map
