const projetoBtn = document.getElementById('projetoBtn');
const projetoModal = document.getElementById('projetoModal');
const closeBtn = projetoModal.querySelector('.close');

// Abrir modal no clique
projetoBtn.addEventListener('click', (e) => {
  e.preventDefault();
  projetoModal.style.display = 'flex';
});

// Abrir modal no hover (apenas desktop)
projetoBtn.addEventListener('mouseenter', () => {
  if(window.innerWidth > 768){
    projetoModal.style.display = 'flex';
  }
});

// Fechar modal
closeBtn.addEventListener('click', () => {
  projetoModal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if(e.target === projetoModal){
    projetoModal.style.display = 'none';
  }
});
