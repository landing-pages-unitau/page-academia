const toggle = document.getElementById('menu-toggle');
const links  = document.getElementById('nav-links');

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  links.classList.toggle('ativo');
});

// Fecha o menu ao clicar em um link
links.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    toggle.classList.remove('open');
    links.classList.remove('ativo');
  });
});