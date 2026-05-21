const slides = document.querySelectorAll('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const dotsContainer = document.getElementById('slider-dots');

let current = 0;

slides.forEach((_, index) => {
  const dot = document.createElement('button');
  dot.classList.add('slider-dot');

  if(index === 0) {
    dot.classList.add('ativo');
  }

  dot.addEventListener('click', () => {
    showSlide(index);
  });

  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.slider-dot');

function showSlide(index) {

  slides.forEach(slide => {
    slide.classList.remove('ativo');
  });

  dots.forEach(dot => {
    dot.classList.remove('ativo');
  });

  slides[index].classList.add('ativo');
  dots[index].classList.add('ativo');

  current = index;
}

next.addEventListener('click', () => {

  current++;

  if(current >= slides.length) {
    current = 0;
  }

  showSlide(current);

});

prev.addEventListener('click', () => {

  current--;

  if(current < 0) {
    current = slides.length - 1;
  }

  showSlide(current);

});

setInterval(() => {

  current++;

  if(current >= slides.length) {
    current = 0;
  }

  showSlide(current);

}, 5000);

const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('ativo');
});