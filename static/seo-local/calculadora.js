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
  const field = name => inputs(name).find(input => input.type !== 'range');
  const value = name => Number(lastValid[name]);
  const currency = amount => money.format(Math.round(amount));
  const number = amount => new Intl.NumberFormat('pt-BR').format(amount);
  const parseBrazilianNumber = raw => {
    const value = raw.trim().replace(/\s/g, '');
    if (!/^(?:\d{1,3}(?:\.\d{3})+|\d+)?(?:,\d+)?$/.test(value) || !/\d/.test(value)) return NaN;
    return Number(value.replace(/\./g, '').replace(',', '.'));
  };
  const invalid = (target, message) => {
    target.setAttribute('aria-invalid', 'true');
    target.setCustomValidity(message);
    let feedback = target.parentElement.querySelector('[data-invalid-for="' + target.name + '"]');
    if (!feedback) {
      feedback = document.createElement('small');
      feedback.dataset.invalidFor = target.name;
      feedback.setAttribute('role', 'status');
      target.parentElement.append(feedback);
    }
    feedback.textContent = message;
    feedback.hidden = false;
  };
  const valid = target => {
    target.removeAttribute('aria-invalid');
    target.setCustomValidity('');
    const feedback = target.parentElement.querySelector('[data-invalid-for="' + target.name + '"]');
    if (feedback) { feedback.textContent = ''; feedback.hidden = true; }
  };

  function update() {
    const profile = profiles[root.querySelector('[aria-pressed="true"]')?.dataset.segmento || 'outro'];
    const ticket = value('ticket');
    const searches = profile[2];
    const currentContacts = value('contatos');
    const visits = Math.max(1, value('voltas'));
    const estimatedContacts = Math.floor(searches * profile[3] / 100);
    const extraClients = Math.floor(Math.max(0, estimatedContacts - currentContacts) * profile[4] / 100);
    const result = root.querySelector('.calculadora-result');
    if (currentContacts > estimatedContacts) {
      result.innerHTML = '<p>Você já recebe mais contatos do que a média do seu segmento. A página ajuda a converter melhor quem já chega.</p>';
    } else if (currentContacts === estimatedContacts) {
      result.innerHTML = '<p>Você já recebe contatos na média do seu segmento. A página ajuda a converter melhor quem já chega.</p>';
    } else if (extraClients === 0) {
      result.innerHTML = '<p>A diferença para a média representa menos de 1 cliente novo por mês na conta.</p>';
    } else {
      const monthly = Math.round(extraClients * ticket * visits);
      const yearly = monthly * 12;
      const visitsLabel = visits === 1 ? 'compra' : 'compras';
      result.innerHTML = `<article><strong>${number(extraClients)}</strong><span>clientes novos por mês na conta mais pé no chão</span></article><article><strong>${currency(monthly)}</strong><span>${number(extraClients)} clientes × ${currency(ticket)} × ${number(visits)} ${visitsLabel} por mês = receita mensal</span></article><article><strong>${currency(yearly)}</strong><span>${currency(monthly)} por mês × 12 = estimativa, se os clientes novos continuarem voltando no ano</span></article>`;
    }
    root.querySelector('[data-premissas]').textContent = `Na conta mais pé no chão para ${profile[0].toLowerCase()}, usamos ${number(searches)} buscas no bairro por mês. Estimamos que ${number(profile[3])}% virem contato e ${number(profile[4])}% desses contatos virem clientes. A diferença entre os contatos estimados e os atuais representa a oportunidade usada nesta conta. São estimativas, não promessa. Ninguém pode garantir o primeiro lugar no Google.`;
    root.querySelector('[data-busca-atual]').textContent = `Das ${number(searches)} buscas estimadas por mês, consideramos ${number(estimatedContacts)} contatos. Hoje, você recebe ${number(currentContacts)} contatos por mês.`;
  }

  root.querySelectorAll('[data-segmento]').forEach(button => button.addEventListener('click', () => {
    const profile = profiles[button.dataset.segmento];
    root.querySelectorAll('[data-segmento]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    fields.hidden = false;
    form.hidden = false;
    root.querySelector('.calculadora-premissas').hidden = false;
    root.querySelector('.calculadora-footnote').hidden = false;
    ['ticket', 'voltas'].forEach((key, index) => { inputs(key).forEach(input => { input.value = [profile[1], profile[5]][index]; valid(input); }); lastValid[key] = String([profile[1], profile[5]][index]); });
    const contacts = Math.floor(profile[2] * profile[3] / 100 / 2);
    inputs('contatos').forEach(input => { input.value = contacts; });
    lastValid.contatos = String(contacts);
    update();
  }));
  const lastValid = Object.fromEntries(['ticket', 'contatos', 'voltas'].map(name => [name, field(name).value]));
  function sync(event, finish = false) {
    const target = event.target;
    const name = target.name;
    if (!name) return;
    const amount = target.type === 'range' ? Number(target.value) : parseBrazilianNumber(target.value);
    const minimum = Number(target.type === 'range' ? target.min : inputs(name)[0].min);
    const maximum = Number(target.type === 'range' ? target.max : inputs(name)[0].max);
    const integerOnly = name === 'voltas';
    if (!Number.isFinite(amount) || (name === 'ticket' && amount === 0) || (integerOnly && !Number.isInteger(amount))) {
      invalid(target, integerOnly ? 'Use um número inteiro de compras por mês.' : 'Digite um valor válido, como 1.500 ou 89,90.');
      if (finish) target.value = lastValid[name];
      return;
    }
    if (!finish && (amount < minimum || amount > maximum)) return;
    const bounded = Math.min(maximum, Math.max(minimum, amount));
    const normalized = String(bounded);
    valid(target);
    if (amount > maximum) invalid(target, `Valor máximo R$ ${number(maximum)}.`);
    if (finish || target.type === 'range') target.value = normalized;
    lastValid[name] = normalized;
    inputs(name).forEach(input => { if (input !== target) input.value = normalized; });
    update();
  }
  form.addEventListener('input', event => sync(event));
  form.addEventListener('change', event => sync(event, true));

})();
