const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const form = document.getElementById('leadForm');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const nome = data.get('nome') || '';
  const telefone = data.get('telefone') || '';
  const tipo = data.get('tipo') || '';
  const mensagem = data.get('mensagem') || '';
  const texto = `Olá! Meu nome é ${nome}. Quero solicitar um orçamento para ${tipo}. Meu telefone é ${telefone}. ${mensagem}`;
  window.open(`https://wa.me/554896159264?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
});

document.getElementById('year').textContent = new Date().getFullYear();
