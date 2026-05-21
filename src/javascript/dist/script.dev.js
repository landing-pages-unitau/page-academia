"use strict";

var slides = document.querySelectorAll('.slide');
var prev = document.getElementById('prev');
var next = document.getElementById('next');
var dotsContainer = document.getElementById('slider-dots');
var current = 0;
slides.forEach(function (_, index) {
  var dot = document.createElement('button');
  dot.classList.add('slider-dot');

  if (index === 0) {
    dot.classList.add('ativo');
  }

  dot.addEventListener('click', function () {
    showSlide(index);
  });
  dotsContainer.appendChild(dot);
});
var dots = document.querySelectorAll('.slider-dot');

function showSlide(index) {
  slides.forEach(function (slide) {
    slide.classList.remove('ativo');
  });
  dots.forEach(function (dot) {
    dot.classList.remove('ativo');
  });
  slides[index].classList.add('ativo');
  dots[index].classList.add('ativo');
  current = index;
}

next.addEventListener('click', function () {
  current++;

  if (current >= slides.length) {
    current = 0;
  }

  showSlide(current);
});
prev.addEventListener('click', function () {
  current--;

  if (current < 0) {
    current = slides.length - 1;
  }

  showSlide(current);
});
setInterval(function () {
  current++;

  if (current >= slides.length) {
    current = 0;
  }

  showSlide(current);
}, 5000);
var menuToggle = document.getElementById('menu-toggle');
var navLinks = document.getElementById('nav-links');
menuToggle.addEventListener('click', function () {
  navLinks.classList.toggle('ativo');
});
//# sourceMappingURL=script.dev.js.map
