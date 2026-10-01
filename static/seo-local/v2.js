import { montarMapaB } from '/assets/v2/mapa/mapa-b.js?v=20261001';

(() => {
  'use strict';
  const stage = document.querySelector('#map-stage');
  const mapaEl = document.querySelector('#mapa-b');
  const stack = document.querySelector('#scene-stack');
  const scenes = [...document.querySelectorAll('[data-cena]')];
  if (!stage || !mapaEl || !stack || scenes.length !== 8) throw new Error('Estrutura P1 incompleta: elemento do mapa, pilha ou oito cenas ausentes.');
  const estados = ['busca', 'resultados', 'destaque', 'diagnostico', 'diagnostico', 'destaque', 'contato', 'contato'];
  const ids = scenes.map(scene => scene.dataset.cena);
  if (ids.join(',') !== 'busca,vizinhos,diagnostico,entregaveis,processo,perfil,limites,comecar') throw new Error(`Ordem inválida de cenas: ${ids.join(',')}`);

  const mapaPromise = new Promise((resolve, reject) => {
    const montar = () => montarMapaB(mapaEl, { svgUrl: '/assets/v2/mapa/map.svg?v=20261001' })
      .then(mapa => {
        mapaEl.querySelector('.map-fallback')?.remove();
        mapaEl.insertAdjacentHTML('beforeend', `<div class="mapa-b-busca"><div class="mapa-b-search" role="group" aria-label="Busca demonstrativa"><span data-busca>clínica de estética perto de mim</span></div><div class="mapa-b-chips"><span class="mapa-b-chip">Aberto agora</span><span class="mapa-b-chip">Mais bem avaliados</span></div></div><div class="mapa-b-nota"><span>Horário a confirmar</span><span>Fotos ilustrativas</span><span>Contato demonstrativo</span></div><div class="mapa-b-walk"><strong>11 min a pé · 850 m</strong><small>Exemplo ilustrativo</small></div><div class="mapa-b-sheet"><div class="mapa-b-foto" aria-hidden="true"></div><div><h2>Casa Serena</h2><p>Estética · 4,9 · Vila Mariana</p></div></div><div class="mapa-b-estado" aria-live="polite">Busca</div><div class="mapa-b-credit">Geometrias: © OpenStreetMap contributors</div>`);
        resolve(mapa);
      })
      .catch(reject);
    if (!('IntersectionObserver' in window)) {
      montar();
      return;
    }
    const observer = new IntersectionObserver(entries => {
      if (!entries.some(entry => entry.isIntersecting)) return;
      observer.disconnect();
      montar();
    }, { rootMargin: '600px 0px' });
    observer.observe(stage);
  });

  const show = (scene, index) => {
    scenes.forEach(item => {
      if (item === scene) item.setAttribute('aria-current', 'step');
      else item.removeAttribute('aria-current');
    });
    mapaPromise.then(mapa => {
      mapa.estado(estados[index]);
      const status = mapaEl.querySelector('.mapa-b-estado');
      if (status) status.textContent = { busca: 'Busca', resultados: 'Resultados', destaque: 'Destaque', diagnostico: 'Diagnóstico', contato: 'Contato' }[estados[index]];
    }).catch(error => console.error('Falha ao atualizar mapa B.', error));
  };

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !window.gsap || !window.ScrollTrigger) {
    document.documentElement.classList.add('static-motion');
    show(scenes[scenes.length - 1], 7);
    return;
  }

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);
  mapaPromise.then(() => {
    const termoBusca = mapaEl.querySelector('[data-busca]');
    if (!termoBusca) throw new Error('Busca demonstrativa ausente no mapa.');
    const textoBusca = termoBusca.textContent;
    if (!textoBusca) throw new Error('Texto de busca demonstrativa ausente.');
    termoBusca.textContent = '';
    const progressoBusca = { valor: 0 };
    gsap.to(progressoBusca, {
      valor: 1,
      ease: 'none',
      onUpdate: () => {
        termoBusca.textContent = textoBusca.slice(0, Math.round(progressoBusca.valor * textoBusca.length));
      },
      scrollTrigger: { trigger: scenes[0], start: 'top 85%', end: 'top 35%', scrub: true }
    });
    ScrollTrigger.refresh();
  }).catch(error => console.error('Falha ao animar busca demonstrativa.', error));

  scenes.forEach((scene, index) => {
    ScrollTrigger.create({ trigger: scene, start: 'top 58%', end: 'bottom 42%', onEnter: () => show(scene, index), onEnterBack: () => show(scene, index) });
  });
  ScrollTrigger.matchMedia({
    '(min-width: 701px)': () => ScrollTrigger.create({ trigger: stack, start: 'top top+=12', end: () => `bottom top+=${12 + (parseFloat(getComputedStyle(stage).top) || 0) + stage.offsetHeight}`, pin: stage, pinSpacing: false, anticipatePin: 1, invalidateOnRefresh: true })
  });
  document.fonts.ready.then(() => ScrollTrigger.refresh());
  mapaPromise.catch(error => console.error('Falha ao montar mapa B.', error));
})();
