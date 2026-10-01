import { qrcode } from '/assets/v2/js/qrcode-generator.js?v=20261001';

// Número provisório até o chip novo ser registrado (decisão de 2026-10-01). Trocar só aqui.
export const WHATSAPP_NUMERO = '5511913284876';

const criarLinkWhatsApp = (referencia) => {
  const mensagem = `Olá! Vim pelo site da NiceByte e quero o diagnóstico de SEO local do meu negócio. (ref ${referencia})`;
  return `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(mensagem)}`;
};

const qr = document.querySelector('#qr-code');
const linkQr = document.querySelector('#qr-link');
const linkBotao = document.querySelector('#whatsapp-link');

if (qr && linkQr && linkBotao) {
  const urlQr = criarLinkWhatsApp('SITE-QR');
  linkQr.href = urlQr;
  linkBotao.href = criarLinkWhatsApp('SITE-BTN');

  const codigo = qrcode(0, 'M');
  codigo.addData(urlQr, 'Byte');
  codigo.make();
  qr.innerHTML = codigo.createSvgTag(6, 4, { text: 'QR Code de contato da NiceByte', id: 'qr-nicebyte-title' }, { text: 'Conversa de diagnóstico de SEO local no WhatsApp', id: 'qr-nicebyte-desc' });
}
