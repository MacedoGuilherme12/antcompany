/* A.N.T. Company: menu, trilha e formulário que abre o WhatsApp */
(() => {
  'use strict';
  const $ = (s) => document.querySelector(s);
  const WHATSAPP = '5548996795678';
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const ano = $('#ano');
  if (ano) ano.textContent = new Date().getFullYear();

  /* Menu do celular */
  const btn = $('.menu');
  const nav = $('#nav');
  const setMenu = (open) => { btn.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); };
  btn.addEventListener('click', () => setMenu(btn.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && nav.classList.contains('is-open')) { setMenu(false); btn.focus(); } });

  /* A trilha A.N.T. aparece uma vez, quando a seção entra na tela */
  const trail = $('#trail');
  if (trail && !reduce && 'IntersectionObserver' in window) {
    trail.classList.add('will-draw');
    const io = new IntersectionObserver((ents) => {
      if (ents.some((e) => e.isIntersecting)) {
        io.disconnect();
        trail.classList.remove('will-draw');
        trail.classList.add('is-drawn');
      }
    }, { threshold: 0.3 });
    io.observe(trail);
  }

  /* Formulário: valida e abre o WhatsApp com o pedido escrito */
  const form = $('#form');
  if (!form) return;
  const rules = {
    nome: () => form.nome.value.trim().length >= 2 || 'Escreva o seu nome.',
    empresa: () => form.empresa.value.trim().length >= 2 || 'Escreva o nome da empresa.',
    email: () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value.trim()) || 'Escreva um e-mail válido, como voce@empresa.com.br.',
  };
  let tried = false;
  const validate = () => {
    const bad = [];
    Object.entries(rules).forEach(([name, test]) => {
      const r = test();
      const ok = r === true;
      const field = form[name];
      const err = $(`#e-${name}`);
      err.textContent = ok ? '' : r;
      field.setAttribute('aria-invalid', String(!ok));
      field.setAttribute('aria-describedby', `e-${name}`);
      if (!ok) bad.push(field);
    });
    return bad;
  };
  form.addEventListener('input', () => { if (tried) validate(); });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    tried = true;
    const bad = validate();
    if (bad.length) { bad[0].focus(); return; }
    const v = (n) => form[n].value.trim();
    const lines = [
      'Olá! Quero agendar o diagnóstico gratuito da A.N.T.',
      `Nome: ${v('nome')}`,
      `Empresa: ${v('empresa')}`,
      `E-mail: ${v('email')}`,
    ];
    if (v('whats')) lines.push(`WhatsApp: ${v('whats')}`);
    if (v('faturamento')) lines.push(`Faturamento mensal: ${v('faturamento')}`);
    if (v('desafio')) lines.push(`Maior desafio: ${v('desafio')}`);
    const url = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(lines.join('\n'))}`;
    const win = window.open(url, '_blank', 'noopener');
    if (!win) window.location.href = url;
    $('#formNote').innerHTML = `Abrimos o WhatsApp com o seu pedido. Se não abriu, <a href="${url}" target="_blank" rel="noopener">toque aqui</a>.`;
  });
})();
