const campos = document.querySelector('.calculadora-campos');
const valorInput = document.querySelector('#calc-valor');
const qtdInput = document.querySelector('#calc-qtd');
const resultado = document.querySelector('.calculadora-result');
const moeda = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

function lerNumero(texto) {
  const limpo = texto.trim();
  const partes = limpo.match(/^(\d{1,3}(?:\.\d{3})*|\d+)(?:,(\d{1,2}))?$/);
  if (!partes || partes[1].replace(/\./g, '').length > 7) return null;
  const numero = Number(`${partes[1].replace(/\./g, '')}.${partes[2] || '0'}`);
  return Number.isFinite(numero) && numero > 0 ? numero : null;
}

function atualizar() {
  const valor = lerNumero(valorInput.value);
  const qtd = lerNumero(qtdInput.value);
  resultado.textContent = valor === null || qtd === null
    ? ''
    : `${moeda.format(valor * qtd)} por mês, ou ${moeda.format(valor * qtd * 12)} em um ano.`;
}

if (campos && valorInput && qtdInput && resultado) {
  campos.hidden = false;
  valorInput.addEventListener('input', atualizar);
  qtdInput.addEventListener('input', atualizar);
}
