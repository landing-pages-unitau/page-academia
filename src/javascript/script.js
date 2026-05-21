/* ===== MENU MOBILE ===== */
const toggle = document.getElementById('menu-toggle');
const links  = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  links.classList.toggle('ativo');
});
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    toggle.classList.remove('open');
    links.classList.remove('ativo');
  });
});

/* ===== SLIDER ===== */
const slides    = document.querySelectorAll('.slide');
const dotsWrap  = document.getElementById('slider-dots');
const btnPrev   = document.getElementById('prev');
const btnNext   = document.getElementById('next');
let atual       = 0;
let timer;

// Cria os dots dinamicamente
slides.forEach((_, i) => {
  const dot = document.createElement('button');
  dot.classList.add('slider-dot');
  if (i === 0) dot.classList.add('ativo');
  dot.addEventListener('click', () => irPara(i));
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
  timer = setInterval(() => irPara(atual + 1), 5000);
}

btnPrev.addEventListener('click', () => irPara(atual - 1));
btnNext.addEventListener('click', () => irPara(atual + 1));

// Troca automática a cada 5 segundos
resetTimer();

// Suporte a swipe no mobile
let touchStartX = 0;
document.getElementById('hero-slider').addEventListener('touchstart', e => {
  touchStartX = e.touches[0].clientX;
});
document.getElementById('hero-slider').addEventListener('touchend', e => {
  const diff = touchStartX - e.changedTouches[0].clientX;
  if (Math.abs(diff) > 50) irPara(diff > 0 ? atual + 1 : atual - 1);
});