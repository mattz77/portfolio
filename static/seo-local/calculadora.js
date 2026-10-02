(() => {
  'use strict';
  const root = document.querySelector('#calculadora');
  if (!root) return;
  const fields = root.querySelector('.calculadora-campos');
  const form = root.querySelector('.calculadora-inputs');
  const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  const profiles = {
    estetica: ['Estética', 180, 600, 8, 35, 3], restaurante: ['Restaurante / marmitaria', 48, 1200, 6, 45, 8],
    oficina: ['Oficina', 320, 450, 7, 40, 2], pet: ['Pet shop', 95, 500, 8, 40, 4],
    dentista: ['Dentista / clínica', 240, 500, 7, 35, 3], salao: ['Salão / barbearia', 85, 650, 8, 40, 6], outro: ['Outro', 120, 500, 6, 35, 3]
  };
  const inputs = name => [...root.querySelectorAll(`[name="${name}"]`)];
  const value = name => Math.max(0, Number(inputs(name).find(input => input.type === 'number').value) || 0);
  const currency = amount => money.format(Math.round(amount));

  function update() {
    const profile = profiles[root.querySelector('[aria-pressed="true"]')?.dataset.segmento || 'outro'];
    const ticket = value('ticket');
    const searches = value('busca');
    const current = value('novos');
    const visits = Math.max(1, value('voltas'));
    const potentialLow = Math.floor(searches * profile[3] / 100 * profile[4] / 100);
    const potentialHigh = Math.floor(searches * Math.min(18, profile[3] * 1.5) / 100 * Math.min(70, profile[4] * 1.3) / 100);
    const low = Math.max(0, potentialLow - current);
    const high = Math.max(low, potentialHigh - current);
    const missing = Math.max(0, potentialLow - value('fechamentos'));
    root.querySelector('.calculadora-result').innerHTML = `<article><strong>${low} a ${high}</strong><span>clientes a mais por mês, entre cenário conservador e otimista</span></article><article><strong>${currency(low * ticket)} a ${currency(high * ticket)}</strong><span>a mais por mês</span></article><article><strong>${currency(low * ticket * visits * 12)} a ${currency(high * ticket * visits * 12)}</strong><span>no ano, contando retornos</span></article><article><strong>${currency(missing * ticket)}</strong><span>valor estimado que pode escapar por mês, comparado ao cenário conservador</span></article>`;
    root.querySelector('[data-premissas]').textContent = `Para ${profile[0].toLowerCase()}, estimamos que ${profile[3]}% a ${Math.round(Math.min(18, profile[3] * 1.5))}% das buscas virem contato e ${profile[4]}% a ${Math.round(Math.min(70, profile[4] * 1.3))}% dos contatos virem atendimento. São estimativas, não promessa. Consideramos ${visits} atendimento(s) por cliente no ano.`;
    root.querySelector('[data-busca-atual]').textContent = `${searches} pessoas estimadas procuram no bairro por mês. Hoje, ${value('contatos')} viram contato e ${value('fechamentos')} fecham.`;
  }

  root.querySelectorAll('[data-segmento]').forEach(button => button.addEventListener('click', () => {
    const profile = profiles[button.dataset.segmento];
    root.querySelectorAll('[data-segmento]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    fields.hidden = false;
    form.hidden = false;
    root.querySelector('.calculadora-premissas').hidden = false;
    root.querySelector('.calculadora-footnote').hidden = false;
    ['ticket', 'busca', 'voltas'].forEach((key, index) => { inputs(key).forEach(input => { input.value = [profile[1], profile[2], profile[5]][index]; }); });
    const contacts = Math.round(profile[2] * profile[3] / 100);
    inputs('contatos').forEach(input => { input.value = contacts; });
    const currentClients = Math.floor(profile[2] * profile[3] / 100 * profile[4] / 100 / 2);
    inputs('fechamentos').forEach(input => { input.value = currentClients; });
    inputs('novos').forEach(input => { input.value = currentClients; });
    update();
  }));
  form.addEventListener('input', event => {
    const name = event.target.name;
    if (name) {
      const minimum = Number(event.target.min);
      const maximum = Number(event.target.max);
      if (event.target.value !== '') event.target.value = Math.min(maximum, Math.max(minimum, Number(event.target.value) || 0));
      inputs(name).forEach(input => { if (input !== event.target) input.value = event.target.value; });
    }
    update();
  });

})();
