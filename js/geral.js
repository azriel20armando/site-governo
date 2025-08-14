    // Ano dinâmico
    document.getElementById('year').textContent = new Date().getFullYear();

    // Menu mobile (abre navegação simples)
    const menuBtn = document.getElementById('menuBtn');
    menuBtn?.addEventListener('click', () => {
      const nav = document.querySelector('nav ul');
      if(!nav) return;
      const isOpen = getComputedStyle(nav).display !== 'none';
      nav.style.display = isOpen ? 'none' : 'flex';
      nav.style.flexDirection = 'column';
      nav.style.gap = '.6rem';
      nav.style.background = '#0b1118';
      nav.style.border = '1px solid var(--border)';
      nav.style.padding = '.8rem';
      nav.style.position = 'absolute';
      nav.style.top = '64px';
      nav.style.right = '4%';
      nav.style.borderRadius = '12px';
    });

    // Smooth active link highlight on scroll
    const sections = [...document.querySelectorAll('section, main.hero')];
    const links = [...document.querySelectorAll('nav a')];
    const setActive = () => {
      let idx = 0;
      sections.forEach((s, i) => {
        const rect = s.getBoundingClientRect();
        if(rect.top <= 120 && rect.bottom > 120) idx = i;
      });
      links.forEach(l => l.classList.remove('active'));
      const id = sections[idx].id || 'home';
      const current = links.find(l => l.getAttribute('href') === `#${id}`);
      current?.classList.add('active');
    };
    window.addEventListener('scroll', setActive);
    window.addEventListener('load', setActive);

    // Reveal animations
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('show');
          io.unobserve(e.target);
        }
      })
    },{threshold:.12});
    document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

    // Animated progress bars
    const animateBars = () => {
      document.querySelectorAll('.bar').forEach(bar => {
        const val = Number(bar.dataset.progress || 0);
        bar.style.transition = 'width 1.2s cubic-bezier(.2,.8,.2,1)';
        requestAnimationFrame(()=> bar.style.width = val + '%');
      });
    };
    window.addEventListener('load', animateBars);

    // Idioma (placeholder)
    document.getElementById('langBtn').addEventListener('click', ()=>{
      alert('Alternância PT/EN: esta é uma simulação. No WordPress, use plugin multilíngue (ex.: WPML/Polylang).');
    });