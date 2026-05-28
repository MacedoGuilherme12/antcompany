/* global React */
const { useRef, useEffect, useState } = React;

/* ============ LOGO A.N.T. ============ */
// Ícone: antenas + cabeça (círculo dourado) + corpo em picos (montanhas da marca)
function LogoMark({ size = 40, glow = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 120 120" fill="none"
      style={{ display: 'block', filter: glow ? 'drop-shadow(0 0 14px rgba(212,175,55,.45))' : 'none' }}>
      {/* antenas */}
      <path d="M53 30 C46 22 42 16 37 10" stroke="#D4AF37" strokeWidth="3.4" strokeLinecap="round" />
      <path d="M67 30 C74 22 78 16 83 10" stroke="#D4AF37" strokeWidth="3.4" strokeLinecap="round" />
      <circle cx="35" cy="8" r="4.2" fill="#D4AF37" />
      <circle cx="85" cy="8" r="4.2" fill="#D4AF37" />
      {/* cabeça */}
      <circle cx="60" cy="42" r="15" fill="#D4AF37" />
      {/* corpo / picos */}
      <path d="M24 98 L47 56 L60 78 L73 56 L96 98" stroke="#D4AF37" strokeWidth="8.5"
        strokeLinejoin="round" strokeLinecap="round" fill="none" />
    </svg>
  );
}

function Logo({ size = 40, stacked = true, tagline = false }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <LogoMark size={size} />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontFamily: 'var(--f-head)', fontWeight: 800, fontSize: size * .52,
          letterSpacing: '.02em', color: 'var(--branco)' }}>A.N.T.</span>
        <span style={{ fontFamily: 'var(--f-head)', fontWeight: 600, fontSize: size * .2,
          letterSpacing: '.42em', color: 'var(--txt-dim)', marginTop: 3, marginLeft: 2 }}>COMPANY</span>
        {tagline && <span style={{ fontFamily: 'var(--f-head)', fontWeight: 600, fontSize: size * .15,
          letterSpacing: '.3em', color: 'var(--dourado)', marginTop: 6 }}>ADAPT · NETWORKING · THRIVE</span>}
      </div>
    </div>
  );
}

/* ============ FUNDO DE REDE ANIMADA (canvas) ============ */
function NetworkBG({ density = 1, opacity = 1, interactive = true }) {
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h, raf, nodes = [];
    const mouse = { x: -9999, y: -9999 };
    const DPR = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      const r = canvas.parentElement.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * DPR; canvas.height = h * DPR;
      canvas.style.width = w + 'px'; canvas.style.height = h + 'px';
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      const count = Math.round((w * h) / 19000 * density);
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .28, vy: (Math.random() - .5) * .28,
        r: Math.random() * 1.6 + 1,
      }));
    }
    function step() {
      ctx.clearRect(0, 0, w, h);
      const MAX = 132;
      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        // atração suave ao mouse
        if (interactive) {
          const dx = mouse.x - n.x, dy = mouse.y - n.y;
          const d = Math.hypot(dx, dy);
          if (d < 160) { n.x += dx / d * .5; n.y += dy / d * .5; }
        }
      }
      // linhas
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i], b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < MAX) {
            const o = (1 - d / MAX) * .5 * opacity;
            ctx.strokeStyle = `rgba(212,175,55,${o})`;
            ctx.lineWidth = .7;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }
      // nós
      for (const n of nodes) {
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${.7 * opacity})`;
        ctx.fill();
      }
      raf = requestAnimationFrame(step);
    }
    function onMove(e) {
      const r = canvas.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    }
    function onLeave() { mouse.x = -9999; mouse.y = -9999; }
    resize(); step();
    window.addEventListener('resize', resize);
    if (interactive) { canvas.parentElement.addEventListener('mousemove', onMove); canvas.parentElement.addEventListener('mouseleave', onLeave); }
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      if (interactive) { canvas.parentElement.removeEventListener('mousemove', onMove); canvas.parentElement.removeEventListener('mouseleave', onLeave); }
    };
  }, [density, opacity, interactive]);
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, zIndex: 0 }} />;
}

/* ============ MOTIVO DE MONTANHAS (decorativo) ============ */
function Peaks({ style }) {
  return (
    <svg viewBox="0 0 1200 300" preserveAspectRatio="none" style={style} aria-hidden="true">
      <path d="M0 300 L300 90 L520 230 L760 60 L1000 250 L1200 120 L1200 300 Z" fill="rgba(212,175,55,.04)" />
      <path d="M0 300 L260 150 L470 260 L720 130 L980 270 L1200 180 L1200 300 Z" fill="rgba(245,245,245,.025)" />
    </svg>
  );
}

/* ============ ATOMOS ============ */
function Eyebrow({ children, center }) {
  return <span className={'eyebrow' + (center ? ' center' : '')}>{children}</span>;
}

// hook de reveal no scroll
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal:not(.in)');
    const io = new IntersectionObserver((ents) => {
      ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  });
}

Object.assign(window, { LogoMark, Logo, NetworkBG, Peaks, Eyebrow, useReveal });
