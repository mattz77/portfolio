const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

function calculator() {
  const elements = new Map();
  const mk = (props = {}) => ({
    value: '', name: '', type: 'text', min: '0', max: '1000', hidden: false, parentElement: { querySelector: () => null },
    textContent: '', innerHTML: '', dataset: {}, attrs: {}, listeners: {},
    setAttribute(key, value) { this.attrs[key] = value; },
    removeAttribute(key) { delete this.attrs[key]; },
    setCustomValidity(value) { this.validationMessage = value; },
    addEventListener(type, fn) { this.listeners[type] = fn; },
    querySelector() { return null; },
    append() {}, ...props
  });
  const buttons = ['estetica', 'restaurante', 'outro'].map(segmento => mk({ dataset: { segmento }, attrs: { 'aria-pressed': 'false' } }));
  const inputSets = {
    ticket: [mk({name:'ticket',type:'range',value:'180',min:'10',max:'2000'}), mk({name:'ticket',value:'180',min:'10',max:'2000'})],
    contatos: [mk({name:'contatos',type:'range',value:'33',min:'0',max:'1000'}), mk({name:'contatos',type:'number',value:'33',min:'0',max:'1000'})],
    voltas: [mk({name:'voltas',type:'range',value:'3',min:'1',max:'24'}), mk({name:'voltas',type:'number',value:'3',min:'1',max:'24'})]
  };
  const form = mk();
  const feedbacks = new Map();
  for (const inputs of Object.values(inputSets)) for (const input of inputs) input.parentElement = {
    querySelector(selector) { return feedbacks.get(selector) || null; },
    append(node) { feedbacks.set('[data-invalid-for="' + node.dataset.invalidFor + '"]', node); }
  };
  const root = {
    querySelector(selector) {
      if (selector === '.calculadora-campos') return mk();
      if (selector === '.calculadora-inputs') return form;
      if (selector === '[aria-pressed="true"]') return buttons.find(b => b.attrs['aria-pressed'] === 'true');
      if (selector === '.calculadora-premissas') return mk();
      if (selector === '.calculadora-footnote') return mk();
      if (selector === '.calculadora-result') return elements.get('result');
      if (selector === '[data-premissas]') return elements.get('premissas');
      if (selector === '[data-busca-atual]') return elements.get('busca');
      return elements.get(selector);
    },
    querySelectorAll(selector) {
      const name = selector.match(/name="(.+)"/)?.[1];
      if (name) return inputSets[name];
      return selector === '[data-segmento]' ? buttons : [];
    }
  };
  elements.set('result', mk()); elements.set('premissas', mk()); elements.set('busca', mk());
  const document = { querySelector: selector => selector === '#calculadora' ? root : null, createElement: () => mk() };
  vm.runInNewContext(fs.readFileSync(__dirname + '/calculadora.js', 'utf8'), {document, Intl, Number, Math, String, Object});
  function select(segmento) {
    const btn = buttons.find(b => b.dataset.segmento === segmento);
    btn.listeners.click();
  }
  function input(name, value, finish = false) {
    const target = inputSets[name][1]; target.value = value;
    form.listeners[finish ? 'change' : 'input']({target});
    return target;
  }
  return {select, input, result: elements.get('result'), premissas: elements.get('premissas'), busca: elements.get('busca'), inputs: inputSets};
}

const c = calculator();
c.select('estetica');
c.input('contatos', '46', true);
assert.match(c.result.innerHTML, /menos de 1 cliente novo por mês/);
assert.match(c.busca.textContent, /Das 600 buscas/);
assert.equal(c.input('ticket', '1.500', true).value, '1500');
assert.equal(c.input('ticket', '89,90', true).value, '89.9');
assert.equal(c.input('ticket', '1.500,50', true).value, '1500.5');
assert.equal(c.input('ticket', 'abc').attrs['aria-invalid'], 'true');
assert.match(c.input('ticket', '5000', true).validationMessage, /máximo R\$ 2\.000/);
assert.equal(c.input('voltas', '2,5').attrs['aria-invalid'], 'true');
c.input('contatos', '30', true);
c.input('voltas', '1', true);
assert.match(c.result.innerHTML, /1 compra por mês/);
c.input('voltas', '2', true);
assert.match(c.result.innerHTML, /2 compras por mês/);
c.select('restaurante');
assert.match(c.premissas.textContent, /1\.200 buscas/);
c.select('outro');
assert.match(c.premissas.textContent, /500 buscas/);
console.log('OK: estetica, restaurante e outro; ticket pt-BR e limites; visitas inteiras; mensagens por comparação; milhares localizados.');
