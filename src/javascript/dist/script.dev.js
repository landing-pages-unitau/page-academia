"use strict";

/* ===== MENU MOBILE ===== */
var toggle = document.getElementById('menu-toggle');
var links = document.getElementById('nav-links');
toggle.addEventListener('click', function () {
  toggle.classList.toggle('open');
  links.classList.toggle('ativo');
});
links.querySelectorAll('a').forEach(function (a) {
  a.addEventListener('click', function () {
    toggle.classList.remove('open');
    links.classList.remove('ativo');
  });
});
/* ===== SLIDER ===== */

var slides = document.querySelectorAll('.slide');
var dotsWrap = document.getElementById('slider-dots');
var btnPrev = document.getElementById('prev');
var btnNext = document.getElementById('next');
var atual = 0;
var timer; // Cria os dots dinamicamente

slides.forEach(function (_, i) {
  var dot = document.createElement('button');
  dot.classList.add('slider-dot');
  if (i === 0) dot.classList.add('ativo');
  dot.addEventListener('click', function () {
    return irPara(i);
  });
  dotsWrap.appendChild(dot);
});

function irPara(index) {
  slides[atual].classList.remove('ativo');
  dotsWrap.children[atual].classList.remove('ativo');
  atual = (index + slides.length) % slides.length;
  slides[atual].classList.add('ativo');
  dotsWrap.children[atual].classList.add('ativo');
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timer = setInterval(function () {
    return irPara(atual + 1);
  }, 5000);
}

btnPrev.addEventListener('click', function () {
  return irPara(atual - 1);
});
btnNext.addEventListener('click', function () {
  return irPara(atual + 1);
}); // Troca automática a cada 5 segundos

resetTimer(); // Suporte a swipe no mobile

var touchStartX = 0;
document.getElementById('hero-slider').addEventListener('touchstart', function (e) {
  touchStartX = e.touches[0].clientX;
});
document.getElementById('hero-slider').addEventListener('touchend', function (e) {
  var diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) irPara(diff > 0 ? atual + 1 : atual - 1);
});
//# sourceMappingURL=script.dev.js.map
