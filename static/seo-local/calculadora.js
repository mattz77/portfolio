(() => {
  'use strict';
  const root = document.querySelector('#calculadora');
  if (!root) return;
  const fields = root.querySelector('.calculadora-campos');
  const form = root.querySelector('.calculadora-inputs');
  const money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
  const profiles = {
    estetica: ['Estética', 180, 600, 8, 35, 1], restaurante: ['Restaurante / marmitaria', 24, 1200, 6, 45, 8],
    oficina: ['Oficina', 320, 450, 7, 40, 2], pet: ['Pet shop', 95, 500, 8, 40, 4],
    dentista: ['Dentista / clínica', 240, 500, 7, 35, 3], salao: ['Salão / barbearia', 85, 650, 8, 40, 6], outro: ['Outro', 120, 500, 6, 35, 3]
  };
  const inputs = name => [...root.querySelectorAll(`[name="${name}"]`)];
  const value = name => Math.max(0, Number(inputs(name).find(input => input.type === 'number').value) || 0);
  const currency = amount => money.format(Math.round(amount));

  function update() {
    const profile = profiles[root.querySelector('[aria-pressed="true"]')?.dataset.segmento || 'outro'];
    const ticket = value('ticket');
    const searches = profile[2];
    const currentContacts = value('contatos');
    const visits = Math.max(1, value('voltas'));
    const estimatedContacts = Math.floor(searches * profile[3] / 100);
    const extraClients = Math.floor(Math.max(0, estimatedContacts - currentContacts) * profile[4] / 100);
    const monthly = extraClients * ticket * visits;
    const yearly = monthly * 12;
    root.querySelector('.calculadora-result').innerHTML = `<article><strong>${extraClients}</strong><span>clientes novos por mês na conta mais pé no chão</span></article><article><strong>${currency(monthly)}</strong><span>${extraClients} clientes × ${currency(ticket)} × ${visits} compras por mês = receita mensal</span></article><article><strong>${currency(yearly)}</strong><span>${currency(monthly)} por mês × 12 = estimativa no ano</span></article>`;
    root.querySelector('[data-premissas]').textContent = `Na conta mais pé no chão para ${profile[0].toLowerCase()}, usamos ${searches} buscas no bairro por mês. Estimamos que ${profile[3]}% virem contato e ${profile[4]}% desses contatos virem clientes. São estimativas, não promessa. Ninguém pode garantir o primeiro lugar no Google.`;
    root.querySelector('[data-busca-atual]').textContent = `Das ${searches} buscas estimadas por mês, consideramos ${estimatedContacts} contatos. Hoje, você recebe ${currentContacts} contatos por mês.`;
  }

  root.querySelectorAll('[data-segmento]').forEach(button => button.addEventListener('click', () => {
    const profile = profiles[button.dataset.segmento];
    root.querySelectorAll('[data-segmento]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    fields.hidden = false;
    form.hidden = false;
    root.querySelector('.calculadora-premissas').hidden = false;
    root.querySelector('.calculadora-footnote').hidden = false;
    ['ticket', 'voltas'].forEach((key, index) => { inputs(key).forEach(input => { input.value = [profile[1], profile[5]][index]; }); });
    const contacts = Math.floor(profile[2] * profile[3] / 100 / 2);
    inputs('contatos').forEach(input => { input.value = contacts; });
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
