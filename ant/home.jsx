/* global React, NetworkBG, Peaks, Eyebrow, Icon, LogoMark */
const { useState: useStateH } = React;

/* ===================== HERO (3 variações) ===================== */
function Hero({ t, go }) {
  const variant = t.hero || 'Rede';
  const showStats = t.stats !== false;
  const eyebrow = 'ESTRATÉGIA · COMERCIAL · TECNOLOGIA';
  const sub = 'Conectamos estratégia, processos comerciais e tecnologia para construir crescimento previsível e escalável — para pequenas e médias empresas que querem estruturar melhor, não só fazer mais.';

  const CTAs = (
    <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 36 }}>
      <button className="btn btn-gold" onClick={() => go('contato')}>
        Agendar diagnóstico <span className="arrow"><Icon name="arrow" size={17} stroke="#0B0B0B" /></span>
      </button>
      <button className="btn btn-ghost" onClick={() => go('metodo')}>
        <Icon name="play" size={17} /> Ver o método
      </button>
    </div>
  );

  /* --- V1: Rede animada, centralizado --- */
  if (variant === 'Rede') {
    return (
      <header style={{ position: 'relative', minHeight: '92vh', display: 'flex', alignItems: 'center',
        overflow: 'hidden', borderBottom: '1px solid var(--line-soft)' }}>
        <NetworkBG density={1} opacity={1} />
        <div style={{ position: 'absolute', inset: 0, background:
          'radial-gradient(120% 90% at 50% 0%, rgba(13,27,42,.55) 0%, rgba(11,11,11,.2) 45%, var(--preto) 80%)', zIndex: 1 }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center', paddingTop: 90, paddingBottom: 70 }}>
          <div className="reveal in" style={{ display: 'flex', justifyContent: 'center', marginBottom: 26 }}>
            <Eyebrow center>{eyebrow}</Eyebrow>
          </div>
          <h1 style={{ fontSize: 'clamp(40px, 7vw, 92px)', maxWidth: 980, margin: '0 auto' }}>
            Transformamos crescimento <span className="gold-text">em sistema</span>.
          </h1>
          <p style={{ maxWidth: 660, margin: '28px auto 0', fontSize: 18, color: 'var(--txt-dim)' }}>{sub}</p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>{CTAs}</div>
          {showStats && <StatStrip style={{ marginTop: 64, justifyContent: 'center' }} />}
        </div>
      </header>
    );
  }

  /* --- V2: Split — texto + visual de rede com cards flutuantes --- */
  if (variant === 'Split') {
    return (
      <header style={{ position: 'relative', overflow: 'hidden', borderBottom: '1px solid var(--line-soft)',
        background: 'linear-gradient(180deg, var(--azul) -10%, var(--preto) 60%)' }}>
        <Peaks style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 300, zIndex: 0 }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '1.05fr .95fr',
          gap: 50, alignItems: 'center', minHeight: '88vh', paddingTop: 110, paddingBottom: 80 }}>
          <div>
            <div className="reveal in" style={{ marginBottom: 24 }}><Eyebrow>{eyebrow}</Eyebrow></div>
            <h1 style={{ fontSize: 'clamp(38px, 5.4vw, 76px)' }}>
              Estruturamos<br />empresas para<br /><span className="gold-text">crescer de verdade</span>.
            </h1>
            <p style={{ maxWidth: 500, marginTop: 26, fontSize: 17.5, color: 'var(--txt-dim)' }}>{sub}</p>
            {CTAs}
          </div>
          <div style={{ position: 'relative', height: 460 }}>
            <NetworkBG density={1.5} opacity={.9} interactive={false} />
            <FloatCard icon="conversao" label="Funil comercial" value="+38% conversão" top="6%" left="2%" delay="0s" />
            <FloatCard icon="instagram" label="Social & conteúdo" value="2.350 leads" top="40%" left="46%" delay=".8s" />
            <FloatCard icon="automacao" label="Automação" value="276 fluxos ativos" top="72%" left="4%" delay="1.6s" />
          </div>
        </div>
      </header>
    );
  }

  /* --- V3: Tipográfico ousado --- */
  return (
    <header style={{ position: 'relative', overflow: 'hidden', minHeight: '90vh', display: 'flex',
      alignItems: 'center', borderBottom: '1px solid var(--line-soft)' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: .5 }}><NetworkBG density={.55} opacity={.7} /></div>
      <Peaks style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: 340, zIndex: 0 }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 2, paddingTop: 120, paddingBottom: 80 }}>
        <div className="reveal in" style={{ marginBottom: 30 }}><Eyebrow>{eyebrow}</Eyebrow></div>
        <h1 style={{ fontSize: 'clamp(44px, 9vw, 140px)', lineHeight: .92, letterSpacing: '-.02em' }}>
          ADAPTAR.<br /><span className="gold-text">CONECTAR.</span><br />PROSPERAR.
        </h1>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'end', marginTop: 44 }}>
          <p style={{ maxWidth: 560, fontSize: 18, color: 'var(--txt-dim)' }}>{sub}</p>
          <div>{CTAs}</div>
        </div>
      </div>
    </header>
  );
}

function FloatCard({ icon, label, value, top, left, delay }) {
  return (
    <div className="floatcard" style={{ position: 'absolute', top, left, animationDelay: delay,
      background: 'rgba(18,18,18,.78)', backdropFilter: 'blur(8px)', border: '1px solid var(--line)',
      borderRadius: 8, padding: '14px 18px', minWidth: 190, zIndex: 3,
      boxShadow: '0 20px 50px -20px rgba(0,0,0,.8)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
        <Icon name={icon} size={20} />
        <span style={{ fontSize: 11.5, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--txt-dim)',
          fontFamily: 'var(--f-head)', fontWeight: 600 }}>{label}</span>
      </div>
      <div style={{ fontFamily: 'var(--f-head)', fontWeight: 800, fontSize: 22 }} className="gold-text">{value}</div>
    </div>
  );
}

function StatStrip({ style }) {
  const stats = [['+2.350', 'leads gerados'], ['276', 'fluxos automatizados'], ['+38%', 'conversão média'], ['28', 'empresas estruturadas']];
  return (
    <div style={{ display: 'flex', gap: 0, flexWrap: 'wrap', ...style }}>
      {stats.map(([n, l], i) => (
        <div key={i} style={{ padding: '0 30px', borderLeft: i ? '1px solid var(--line-soft)' : 'none', textAlign: 'left' }}>
          <div className="gold-text" style={{ fontFamily: 'var(--f-head)', fontWeight: 800, fontSize: 30 }}>{n}</div>
          <div style={{ fontSize: 13, color: 'var(--txt-dim)', letterSpacing: '.02em' }}>{l}</div>
        </div>
      ))}
    </div>
  );
}

window.Hero = Hero;
window.StatStrip = StatStrip;
