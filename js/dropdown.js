document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const btn = document.getElementById('projetoBtn');
  const content = dropdown.querySelector('.dropdown-content');
  const links = content.querySelectorAll('a');

  // abre/fecha pelo botão
  btn.addEventListener('click', (e) => {
    e.preventDefault();          // evita saltar para #projeto
    e.stopPropagation();
    dropdown.classList.toggle('open');
  });

  // fecha ao clicar num link
  links.forEach((a) => {
    a.addEventListener('click', () => {
      dropdown.classList.remove('open');
    });
  });

  // fecha ao clicar fora
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) dropdown.classList.remove('open');
  });

  // fecha com ESC (opcional)
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') dropdown.classList.remove('open');
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const dropdownSobre = document.getElementById('menuSobre');
  const btnSobre = document.getElementById('btnSobre');
  const contentSobre = dropdownSobre.querySelector('.dropdown-content-sobre');
  const linksSobre = contentSobre.querySelectorAll('a');

  // abre/fecha pelo botão
  btnSobre.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    dropdownSobre.classList.toggle('open');
  });

  // fecha ao clicar num link
  linksSobre.forEach((a) => {
    a.addEventListener('click', () => {
      dropdownSobre.classList.remove('open');
    });
  });

  // fecha ao clicar fora
  document.addEventListener('click', (e) => {
    if (!dropdownSobre.contains(e.target)) {
      dropdownSobre.classList.remove('open');
    }
  });

  // fecha com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      dropdownSobre.classList.remove('open');
    }
  });
});
