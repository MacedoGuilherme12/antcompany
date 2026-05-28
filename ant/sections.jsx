/* global React, Hero, Eyebrow, Icon, NetworkBG, Peaks */

const WHATSAPP_URL = 'https://wa.me/5548996795678';

/* ===================== Faixa de conceito ===================== */
function ConceptBand() {
  return (
    <section className="reveal" style={{ padding: '110px 0', borderBottom: '1px solid var(--line-soft)', textAlign: 'center' }}>
      <div className="wrap" style={{ maxWidth: 880 }}>
        <p style={{ fontFamily: 'var(--f-head)', fontWeight: 700, fontSize: 'clamp(26px,3.6vw,44px)', lineHeight: 1.18 }}>
          A.N.T. não é sobre fazer mais.<br />É sobre <span className="gold-text">estruturar melhor</span>.
        </p>
        <p style={{ color: 'var(--txt-dim)', fontSize: 17, marginTop: 22, maxWidth: 600, marginInline: 'auto' }}>
          Somos uma central de inteligência empresarial que conecta pessoas, processos e tecnologia
          para gerar resultados reais e liberdade para o dono operar com clareza.
        </p>
      </div>
    </section>
  );
}

/* ===================== Pilares ===================== */
const PILARES = [
  { k: 'A', t: 'Adaptar', i: 'estrategia', d: 'Entender o mercado, ler dados e adaptar a estratégia ao momento real do negócio — sem achismo.' },
  { k: 'N', t: 'Conectar', i: 'integracao', d: 'Conectar pessoas, processos e tecnologia em um só sistema, eliminando ruído e retrabalho.' },
  { k: 'T', t: 'Prosperar', i: 'growth', d: 'Gerar crescimento sustentável, previsível e escalável — com liberdade para o time e o dono.' },
];
function Pilares() {
  return (
    <section className="reveal" id="pilares" style={{ padding: '110px 0', borderBottom: '1px solid var(--line-soft)' }}>
      <div className="wrap">
        <div style={{ marginBottom: 56 }}>
          <Eyebrow>OS TRÊS PILARES</Eyebrow>
          <h2 style={{ fontSize: 'clamp(30px,4vw,52px)', marginTop: 18, maxWidth: 620 }}>
            O sistema que move cada cliente
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {PILARES.map((p, i) => (
            <article key={i} className="pilar-card" style={{ background: 'var(--card)', border: '1px solid var(--line-soft)',
              borderRadius: 6, padding: '38px 32px', position: 'relative', overflow: 'hidden', transition: 'all .4s var(--ease)' }}>
              <span style={{ position: 'absolute', top: -18, right: 8, fontFamily: 'var(--f-head)', fontWeight: 900,
                fontSize: 150, color: 'rgba(212,175,55,.06)', lineHeight: 1 }}>{p.k}</span>
              <div style={{ position: 'relative' }}>
                <Icon name={p.i} size={34} />
                <h3 style={{ fontSize: 26, margin: '22px 0 12px' }}>{p.t}</h3>
                <p style={{ color: 'var(--txt-dim)', fontSize: 15.5 }}>{p.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== Serviços ===================== */
const SERVICOS = [
  { i: 'instagram', t: 'Gestão de Instagram & Social', d: 'Conteúdo estratégico, identidade e presença que vira autoridade — não só likes.',
    tags: ['Linha editorial', 'Design de conteúdo', 'Social selling'] },
  { i: 'automacao', t: 'Automação Comercial', d: 'CRM, funis e bots que respondem, qualificam e nutrem leads enquanto você dorme.',
    tags: ['CRM & funis', 'Chatbots', 'Integrações'] },
  { i: 'consultoria', t: 'Estratégia & Consultoria', d: 'Diagnóstico do comercial, metas e o roteiro de crescimento previsível do negócio.',
    tags: ['Diagnóstico', 'Metas & KPIs', 'Processos'] },
  { i: 'branding', t: 'Branding & Conteúdo', d: 'Posicionamento, narrativa e identidade que tornam a marca difícil de ignorar.',
    tags: ['Posicionamento', 'Identidade', 'Narrativa'] },
];
function ServicesGrid({ go, compact }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 22 }}>
      {SERVICOS.map((s, i) => (
        <article key={i} className="svc-card" onClick={() => go && go('servicos')}
          style={{ background: 'var(--card)', border: '1px solid var(--line-soft)', borderRadius: 6,
            padding: '34px 32px', cursor: go ? 'pointer' : 'default', transition: 'all .4s var(--ease)', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ width: 56, height: 56, borderRadius: 6, background: 'rgba(212,175,55,.08)',
              border: '1px solid var(--line)', display: 'grid', placeItems: 'center' }}>
              <Icon name={s.i} size={28} />
            </div>
            <span className="svc-arrow" style={{ opacity: .4, transition: 'all .3s var(--ease)' }}><Icon name="arrow" size={20} /></span>
          </div>
          <h3 style={{ fontSize: 22, margin: '24px 0 10px' }}>{s.t}</h3>
          <p style={{ color: 'var(--txt-dim)', fontSize: 15 }}>{s.d}</p>
          {!compact && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 20 }}>
              {s.tags.map((tg, j) => (
                <span key={j} style={{ fontSize: 11.5, letterSpacing: '.06em', color: 'var(--txt-dim)',
                  border: '1px solid var(--line-soft)', borderRadius: 20, padding: '5px 12px', fontFamily: 'var(--f-head)', fontWeight: 500 }}>{tg}</span>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}
function ServicesSection({ go }) {
  return (
    <section className="reveal" id="servicos" style={{ padding: '110px 0', borderBottom: '1px solid var(--line-soft)' }}>
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 52, flexWrap: 'wrap', gap: 20 }}>
          <div>
            <Eyebrow>O QUE FAZEMOS</Eyebrow>
            <h2 style={{ fontSize: 'clamp(30px,4vw,52px)', marginTop: 18, maxWidth: 560 }}>Frentes que viram um só sistema</h2>
          </div>
          <button className="btn btn-ghost" onClick={() => go('servicos')}>Ver todos os serviços <Icon name="arrow" size={16} /></button>
        </div>
        <ServicesGrid go={go} compact />
      </div>
    </section>
  );
}

/* ===================== Método ===================== */
const PASSOS = [
  { n: '01', t: 'Diagnóstico', d: 'Mergulhamos no comercial, marketing e operação para mapear gargalos e oportunidades.', i: 'estrategia' },
  { n: '02', t: 'Estrutura', d: 'Desenhamos processos, metas e a arquitetura comercial que o negócio precisa.', i: 'consultoria' },
  { n: '03', t: 'Automação', d: 'Implementamos CRM, funis e integrações que tiram o operacional das suas costas.', i: 'automacao' },
  { n: '04', t: 'Escala', d: 'Otimizamos com dados e aceleramos o crescimento de forma previsível e sustentável.', i: 'growth' },
];
function MethodSection() {
  return (
    <section className="reveal" id="metodo" style={{ padding: '110px 0', borderBottom: '1px solid var(--line-soft)',
      position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, var(--preto), var(--grafite2))' }}>
      <Peaks style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: 260, transform: 'rotate(180deg)', opacity: .6 }} />
      <div className="wrap" style={{ position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}><Eyebrow center>O MÉTODO A.N.T.</Eyebrow></div>
          <h2 style={{ fontSize: 'clamp(30px,4vw,52px)', marginTop: 18 }}>Do caos à máquina de crescimento</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
          {PASSOS.map((p, i) => (
            <div key={i} className="step" style={{ padding: '0 26px', borderLeft: i ? '1px solid var(--line-soft)' : 'none', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                <span className="gold-text" style={{ fontFamily: 'var(--f-head)', fontWeight: 800, fontSize: 15, letterSpacing: '.1em' }}>{p.n}</span>
                <span style={{ flex: 1, height: 1, background: 'var(--line)' }} />
                <Icon name={p.i} size={22} />
              </div>
              <h3 style={{ fontSize: 21, marginBottom: 10 }}>{p.t}</h3>
              <p style={{ color: 'var(--txt-dim)', fontSize: 14.5 }}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===================== CTA final ===================== */
function CTABand({ go }) {
  return (
    <section className="reveal" style={{ position: 'relative', overflow: 'hidden', padding: '120px 0' }}>
      <NetworkBG density={.7} opacity={.8} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(80% 120% at 50% 50%, rgba(13,27,42,.6), var(--preto) 75%)', zIndex: 1 }} />
      <div className="wrap" style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: 760 }}>
        <h2 style={{ fontSize: 'clamp(32px,5vw,64px)' }}>Pronto para <span className="gold-text">estruturar</span> seu crescimento?</h2>
        <p style={{ color: 'var(--txt-dim)', fontSize: 18, marginTop: 20 }}>
          Agende um diagnóstico gratuito. Em 30 minutos você sai com clareza sobre os próximos passos do seu comercial.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 14, marginTop: 36, flexWrap: 'wrap' }}>
          <button className="btn btn-gold" onClick={() => go('contato')}>
            Agendar diagnóstico <span className="arrow"><Icon name="arrow" size={17} stroke="#0B0B0B" /></span>
          </button>
          <a className="btn btn-ghost" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <Icon name="whatsapp" size={17} /> Falar no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

/* ===================== HOME ===================== */
function HomePage({ t, go }) {
  return (
    <main>
      <Hero t={t} go={go} />
      <ConceptBand />
      <Pilares />
      <ServicesSection go={go} />
      <MethodSection />
      <CTABand go={go} />
    </main>
  );
}

Object.assign(window, { ConceptBand, Pilares, ServicesGrid, ServicesSection, MethodSection, CTABand, HomePage, SERVICOS, PASSOS, PILARES });
