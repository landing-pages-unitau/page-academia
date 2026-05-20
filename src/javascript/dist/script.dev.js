"use strict";

var toggle = document.getElementById('menu-toggle');
var links = document.getElementById('nav-links');
toggle.addEventListener('click', function () {
  toggle.classList.toggle('open');
  links.classList.toggle('ativo');
}); // Fecha o menu ao clicar em um link

links.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () {
    toggle.classList.remove('open');
    links.classList.remove('ativo');
  });
});
//# sourceMappingURL=script.dev.js.map
