const ESTADOS = new Set(['busca', 'resultados', 'destaque', 'diagnostico', 'contato']);

export async function montarMapaB(elemento, { svgUrl = '/assets/v2/mapa/map.svg?v=20261001' } = {}) {
  if (!(elemento instanceof HTMLElement)) throw new TypeError('elemento precisa ser HTMLElement.');
  const resposta = await fetch(svgUrl);
  if (!resposta.ok) throw new Error(`Falha ao carregar mapa SVG: HTTP ${resposta.status}`);
  const texto = await resposta.text();
  const documento = new DOMParser().parseFromString(texto, 'image/svg+xml');
  const svg = documento.documentElement;
  if (svg.localName !== 'svg' || documento.querySelector('parsererror')) throw new Error('SVG inválido.');
  if (svg.querySelector('script, foreignObject')) throw new Error('SVG contém conteúdo não permitido.');
  const mapa = svg.cloneNode(true);
  mapa.classList.add('mapa-b-ruas');
  elemento.replaceChildren(mapa);
  elemento.classList.add('mapa-b');
  elemento.dataset.estado = 'busca';

  return {
    estado(nome) {
      if (!ESTADOS.has(nome)) throw new RangeError(`Estado inválido: ${nome}`);
      elemento.dataset.estado = nome;
      const rota = mapa.querySelector('.mapa-b-route');
      if (rota) rota.style.strokeDashoffset = nome === 'contato' ? '0' : rota.getAttribute('pathLength');
    },
    progresso(valor) {
      if (!Number.isFinite(valor)) throw new TypeError('progresso precisa ser número finito.');
      const progresso = Math.min(1, Math.max(0, valor));
      elemento.style.setProperty('--mapa-b-progresso', progresso);
      for (const rua of mapa.querySelectorAll('.road')) {
        if (!rua.dataset.comprimento) rua.dataset.comprimento = String(rua.getTotalLength());
        const comprimento = Number(rua.dataset.comprimento);
        rua.style.strokeDasharray = String(comprimento);
        rua.style.strokeDashoffset = String(comprimento * (1 - progresso));
      }
    },
  };
}
