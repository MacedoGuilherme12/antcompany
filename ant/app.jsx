/* global React, ReactDOM, Logo, LogoMark, Icon, useReveal,
   HomePage, ServicosPage, SobrePage, ContatoPage,
   useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle */
const { useState, useEffect } = React;

const NAV = [
  { id: 'home', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'contato', label: 'Contato' },
];

const SOCIAL_LINKS = {
  instagram: 'https://www.instagram.com/a.n.t.company/',
  whatsapp: 'https://wa.me/5548996795678',
};

function Navbar({ page, go, solid }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const filled = solid || scrolled || page === 'contato';
  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      transition: 'all .4s var(--ease)',
      background: filled ? 'rgba(11,11,11,.82)' : 'transparent',
      backdropFilter: filled ? 'blur(14px)' : 'none',
      borderBottom: filled ? '1px solid var(--line-soft)' : '1px solid transparent' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 76 }}>
        <a onClick={() => go('home')} style={{ cursor: 'pointer' }}><Logo size={34} /></a>
        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          {NAV.map((n) => (
            <button key={n.id} onClick={() => go(n.id)} style={{ background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--f-head)', fontWeight: 600, fontSize: 14, letterSpacing: '.02em',
              color: page === n.id ? 'var(--dourado)' : 'var(--txt)', padding: '8px 14px', transition: 'color .3s',
              position: 'relative' }}
              onMouseEnter={(e) => { if (page !== n.id) e.currentTarget.style.color = 'var(--dourado)'; }}
              onMouseLeave={(e) => { if (page !== n.id) e.currentTarget.style.color = 'var(--txt)'; }}>{n.label}</button>
          ))}
          <button className="btn btn-gold" style={{ marginLeft: 12, padding: '11px 20px', fontSize: 13 }} onClick={() => go('contato')}>
            Agendar <Icon name="arrow" size={15} stroke="#0B0B0B" />
          </button>
        </div>
        <button className="nav-burger" onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none',
          border: '1px solid var(--line)', borderRadius: 5, padding: 9, cursor: 'pointer' }}>
          <Icon name={open ? 'plus' : 'integracao'} size={20} />
        </button>
      </div>
      {open && (
        <div className="nav-mobile" style={{ display: 'none', flexDirection: 'column', padding: '8px 32px 20px', background: 'rgba(11,11,11,.96)' }}>
          {NAV.map((n) => (
            <button key={n.id} onClick={() => { go(n.id); setOpen(false); }} style={{ background: 'none', border: 'none',
              textAlign: 'left', padding: '13px 0', borderBottom: '1px solid var(--line-soft)', cursor: 'pointer',
              fontFamily: 'var(--f-head)', fontWeight: 600, fontSize: 16, color: page === n.id ? 'var(--dourado)' : 'var(--txt)' }}>{n.label}</button>
          ))}
        </div>
      )}
    </nav>
  );
}

function Footer({ go }) {
  return (
    <footer style={{ borderTop: '1px solid var(--line-soft)', background: 'var(--grafite2)', paddingTop: 70 }}>
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr', gap: 40, paddingBottom: 56 }}>
          <div>
            <Logo size={38} />
            <p style={{ color: 'var(--txt-dim)', fontSize: 15, marginTop: 22, maxWidth: 320 }}>
              Transformamos crescimento em sistema. Estratégia, comercial e tecnologia conectados em um só lugar.
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              {['instagram', 'whatsapp'].map((ic) => (
                <a key={ic} href={SOCIAL_LINKS[ic]} target="_blank" rel="noopener noreferrer"
                  aria-label={ic === 'instagram' ? 'Instagram da A.N.T. Company' : 'Enviar mensagem no WhatsApp'}
                  style={{ width: 42, height: 42, borderRadius: 6, border: '1px solid var(--line-soft)',
                  display: 'grid', placeItems: 'center', cursor: 'pointer', transition: 'all .3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--dourado)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--line-soft)'}><Icon name={ic} size={20} /></a>
              ))}
            </div>
          </div>
          <div>
            <h4 style={{ fontSize: 13, letterSpacing: '.16em', color: 'var(--txt-dim)', textTransform: 'uppercase', marginBottom: 18 }}>Navegação</h4>
            {NAV.map((n) => (
              <a key={n.id} onClick={() => go(n.id)} style={{ display: 'block', color: 'var(--txt)', cursor: 'pointer',
                padding: '7px 0', fontSize: 15, transition: 'color .3s' }}
                onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dourado)'}
                onMouseLeave={(e) => e.currentTarget.style.color = 'var(--txt)'}>{n.label}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 13, letterSpacing: '.16em', color: 'var(--txt-dim)', textTransform: 'uppercase', marginBottom: 18 }}>Contato</h4>
            <p style={{ color: 'var(--txt-dim)', fontSize: 15, padding: '7px 0' }}>jonas.business0142@gmail.comcontato@ant.company</p>
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer"
              style={{ display: 'block', color: 'var(--txt-dim)', fontSize: 15, padding: '7px 0', textDecoration: 'none' }}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--dourado)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--txt-dim)'}>@a.n.t.company</a>
            <button className="btn btn-gold" style={{ marginTop: 16, padding: '11px 20px', fontSize: 13 }} onClick={() => go('contato')}>Agendar diagnóstico</button>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--line-soft)', padding: '26px 0', display: 'flex',
          justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 14 }}>
          <span style={{ fontSize: 13, color: 'var(--txt-faint)' }}>© 2026 A.N.T. Company. Todos os direitos reservados.</span>
          <span style={{ fontFamily: 'var(--f-head)', fontWeight: 600, fontSize: 12.5, letterSpacing: '.22em', color: 'var(--txt-dim)' }}>
            ESTRATÉGIA · <span className="gold-text">COMERCIAL</span> · TECNOLOGIA
          </span>
        </div>
      </div>
    </footer>
  );
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "hero": "Rede",
  "accent": "#D4AF37",
  "navSolid": false,
  "stats": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = useState('home');
  useReveal();

  useEffect(() => {
    document.documentElement.style.setProperty('--dourado', t.accent);
  }, [t.accent]);

  function go(target) {
    if (target === 'metodo' || target === 'pilares' || target === 'servicos-anchor') {
      const id = target === 'servicos-anchor' ? 'servicos' : target;
      if (page !== 'home') setPage('home');
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
      }, page !== 'home' ? 120 : 0);
      return;
    }
    setPage(target);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }

  return (
    <>
      <Navbar page={page} go={go} solid={t.navSolid} />
      {page === 'home' && <HomePage t={t} go={go} />}
      {page === 'servicos' && <ServicosPage go={go} />}
      {page === 'sobre' && <SobrePage go={go} />}
      {page === 'contato' && <ContatoPage />}
      <Footer go={go} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero" />
        <TweakRadio label="Variação" value={t.hero} options={['Rede', 'Split', 'Tipográfico']}
          onChange={(v) => setTweak('hero', v)} />
        <TweakToggle label="Mostrar números" value={t.stats} onChange={(v) => setTweak('stats', v)} />
        <TweakSection label="Marca" />
        <TweakColor label="Cor de destaque" value={t.accent}
          options={['#D4AF37', '#E9C95C', '#C9A227', '#CBA14B']} onChange={(v) => setTweak('accent', v)} />
        <TweakSection label="Navegação" />
        <TweakToggle label="Navbar sempre sólida" value={t.navSolid} onChange={(v) => setTweak('navSolid', v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
