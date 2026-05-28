/* global React, Eyebrow, Icon, NetworkBG, Peaks, ServicesGrid, SERVICOS, PASSOS, CTABand */
const { useState: useStateP } = React;

/* Cabeçalho padrão das páginas internas */
function PageHero({ eyebrow, title, sub }) {
  return (
    <header style={{ position: 'relative', overflow: 'hidden', paddingTop: 150, paddingBottom: 70,
      borderBottom: '1px solid var(--line-soft)', background: 'linear-gradient(180deg, var(--azul) -40%, var(--preto) 70%)' }}>
      <div style={{ position: 'absolute', inset: 0, opacity: .5 }}><NetworkBG density={.55} opacity={.7} interactive={false} /></div>
      <div className="wrap" style={{ position: 'relative', zIndex: 2, maxWidth: 820 }}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 style={{ fontSize: 'clamp(34px,5.5vw,72px)', marginTop: 18 }}>{title}</h1>
        {sub && <p style={{ color: 'var(--txt-dim)', fontSize: 18, marginTop: 22, maxWidth: 620 }}>{sub}</p>}
      </div>
    </header>
  );
}

/* ===================== SERVIÇOS ===================== */
function ServicosPage({ go }) {
  return (
    <main>
      <PageHero eyebrow="O QUE FAZEMOS" title="Serviços que constroem sistema"
        sub="Quatro frentes que trabalham juntas: estratégia, presença, automação e marca. Você não contrata peças soltas — contrata um sistema de crescimento." />
      <section className="reveal" style={{ padding: '90px 0', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="wrap"><ServicesGrid /></div>
      </section>

      {/* Detalhe de cada serviço */}
      <section style={{ padding: '20px 0 90px' }}>
        <div className="wrap">
          {SERVICOS.map((s, i) => (
            <div key={i} className="reveal" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 50,
              alignItems: 'center', padding: '54px 0', borderBottom: '1px solid var(--line-soft)' }}>
              <div style={{ order: i % 2 ? 2 : 1 }}>
                <div style={{ width: 64, height: 64, borderRadius: 8, background: 'rgba(212,175,55,.08)',
                  border: '1px solid var(--line)', display: 'grid', placeItems: 'center', marginBottom: 22 }}>
                  <Icon name={s.i} size={32} />
                </div>
                <h2 style={{ fontSize: 32, marginBottom: 14 }}>{s.t}</h2>
                <p style={{ color: 'var(--txt-dim)', fontSize: 16.5 }}>{s.d} Cada entrega é conectada ao seu funil
                  e medida por resultado — não por vaidade.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 22 }}>
                  {s.tags.map((tg, j) => (
                    <span key={j} style={{ fontSize: 12, letterSpacing: '.06em', color: 'var(--dourado)',
                      border: '1px solid var(--line)', borderRadius: 20, padding: '6px 14px',
                      fontFamily: 'var(--f-head)', fontWeight: 500 }}>{tg}</span>
                  ))}
                </div>
              </div>
              <div style={{ order: i % 2 ? 1 : 2, position: 'relative', height: 280, borderRadius: 8,
                overflow: 'hidden', border: '1px solid var(--line-soft)', background: 'var(--card)' }}>
                <NetworkBG density={1.3} opacity={.8} interactive={false} />
                <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', zIndex: 2 }}>
                  <Icon name={s.i} size={84} stroke="rgba(212,175,55,.5)" sw={1} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CTABand go={go} />
    </main>
  );
}

/* ===================== SOBRE ===================== */
const VALORES = [
  { i: 'shield', t: 'Autoritário', d: 'Falamos com clareza e segurança sobre o que realmente importa.' },
  { i: 'brain', t: 'Estratégico', d: 'Inteligência de negócio e visão de longo prazo em cada decisão.' },
  { i: 'person', t: 'Humano', d: 'Gente que entende pessoas para gerar resultados reais.' },
  { i: 'rocket', t: 'Transformador', d: 'Geramos impacto, liberdade e evolução para nossos clientes.' },
];
function SobrePage({ go }) {
  return (
    <main>
      <PageHero eyebrow="QUEM SOMOS" title="Uma central de inteligência empresarial"
        sub="A A.N.T. nasceu para resolver um problema comum nas PMEs: muito esforço, pouco sistema. Trabalhamos como formigas — organização, conexão e foco coletivo no que faz a empresa prosperar." />

      {/* Manifesto */}
      <section className="reveal" style={{ padding: '100px 0', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <h2 style={{ fontSize: 'clamp(28px,3.6vw,46px)', lineHeight: 1.15 }}>
              Estruturamos empresas para <span className="gold-text">crescer com liberdade</span>.
            </h2>
          </div>
          <div>
            <p style={{ color: 'var(--txt-dim)', fontSize: 16.5, marginBottom: 18 }}>
              Conectamos estratégia, processos comerciais e tecnologia em um único sistema. Menos achismo,
              menos operação manual, mais previsibilidade.
            </p>
            <p style={{ color: 'var(--txt-dim)', fontSize: 16.5 }}>
              O resultado é um negócio que cresce sem depender do dono apagando incêndios —
              com dados, processos claros e automação trabalhando 24/7.
            </p>
          </div>
        </div>
      </section>

      {/* Valores / tom de voz */}
      <section className="reveal" style={{ padding: '100px 0', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="wrap">
          <div style={{ marginBottom: 50 }}><Eyebrow>NOSSO JEITO</Eyebrow>
            <h2 style={{ fontSize: 'clamp(28px,3.6vw,46px)', marginTop: 16 }}>Como pensamos e agimos</h2></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 22 }}>
            {VALORES.map((v, i) => (
              <article key={i} className="pilar-card" style={{ background: 'var(--card)', border: '1px solid var(--line-soft)',
                borderRadius: 6, padding: '30px 26px', transition: 'all .4s var(--ease)' }}>
                <Icon name={v.i} size={30} />
                <h3 style={{ fontSize: 20, margin: '18px 0 10px' }}>{v.t}</h3>
                <p style={{ color: 'var(--txt-dim)', fontSize: 14.5 }}>{v.d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Processo resumido */}
      <section className="reveal" style={{ padding: '100px 0', borderBottom: '1px solid var(--line-soft)' }}>
        <div className="wrap">
          <div style={{ marginBottom: 50 }}><Eyebrow>COMO TRABALHAMOS</Eyebrow></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
            {PASSOS.map((p, i) => (
              <div key={i} style={{ padding: '0 24px', borderLeft: i ? '1px solid var(--line-soft)' : 'none' }}>
                <span className="gold-text" style={{ fontFamily: 'var(--f-head)', fontWeight: 800, fontSize: 14, letterSpacing: '.1em' }}>{p.n}</span>
                <h3 style={{ fontSize: 19, margin: '12px 0 8px' }}>{p.t}</h3>
                <p style={{ color: 'var(--txt-dim)', fontSize: 14 }}>{p.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTABand go={go} />
    </main>
  );
}

/* ===================== CONTATO / AGENDAMENTO ===================== */
function ContatoPage() {
  const [sent, setSent] = useStateP(false);
  const [form, setForm] = useStateP({ nome: '', empresa: '', email: '', whats: '', faturamento: '', desafio: '' });
  const upd = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const valid = form.nome && form.email && form.empresa;

  const inputStyle = { width: '100%', background: 'var(--card-2)', border: '1px solid var(--line-soft)',
    borderRadius: 5, padding: '13px 15px', color: 'var(--branco)', fontFamily: 'var(--f-body)', fontSize: 15, outline: 'none', transition: 'border-color .3s' };
  const Field = ({ label, k, type = 'text', ph, full }) => (
    <label style={{ display: 'block', gridColumn: full ? '1 / -1' : 'auto' }}>
      <span style={{ display: 'block', fontSize: 12.5, letterSpacing: '.08em', textTransform: 'uppercase',
        color: 'var(--txt-dim)', fontFamily: 'var(--f-head)', fontWeight: 600, marginBottom: 8 }}>{label}</span>
      <input type={type} value={form[k]} onChange={upd(k)} placeholder={ph} style={inputStyle}
        onFocus={(e) => e.target.style.borderColor = 'var(--dourado)'} onBlur={(e) => e.target.style.borderColor = 'var(--line-soft)'} />
    </label>
  );

  return (
    <main>
      <PageHero eyebrow="VAMOS CONVERSAR" title="Agende seu diagnóstico"
        sub="30 minutos, sem custo. Você sai com um mapa claro dos gargalos e das oportunidades do seu comercial." />
      <section style={{ padding: '80px 0 110px' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 60, alignItems: 'start' }}>
          {/* lado info */}
          <div className="reveal">
            <h2 style={{ fontSize: 30, marginBottom: 24 }}>O que acontece depois que você envia?</h2>
            {[['calendar', 'Retorno em até 24h', 'Nosso time entra em contato para encontrar o melhor horário.'],
              ['estrategia', 'Diagnóstico ao vivo', 'Mapeamos juntos os gargalos do seu comercial e marketing.'],
              ['growth', 'Plano de ação', 'Você recebe os próximos passos — com ou sem a A.N.T.']].map(([ic, t, d], i) => (
              <div key={i} style={{ display: 'flex', gap: 16, padding: '18px 0', borderBottom: '1px solid var(--line-soft)' }}>
                <div style={{ width: 46, height: 46, flexShrink: 0, borderRadius: 6, background: 'rgba(212,175,55,.08)',
                  border: '1px solid var(--line)', display: 'grid', placeItems: 'center' }}><Icon name={ic} size={22} /></div>
                <div><h3 style={{ fontSize: 18, marginBottom: 4 }}>{t}</h3><p style={{ color: 'var(--txt-dim)', fontSize: 14.5 }}>{d}</p></div>
              </div>
            ))}
            <div style={{ marginTop: 30 }}>
              <button className="btn btn-ghost" onClick={() => { }}><Icon name="whatsapp" size={18} /> Prefiro o WhatsApp</button>
            </div>
          </div>

          {/* formulário */}
          <div className="reveal" style={{ background: 'var(--card)', border: '1px solid var(--line-soft)', borderRadius: 8, padding: 38 }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '50px 10px' }}>
                <div style={{ width: 72, height: 72, margin: '0 auto 22px', borderRadius: '50%',
                  background: 'rgba(212,175,55,.1)', border: '1px solid var(--dourado)', display: 'grid', placeItems: 'center' }}>
                  <Icon name="check" size={36} /></div>
                <h2 style={{ fontSize: 28, marginBottom: 12 }}>Recebido!</h2>
                <p style={{ color: 'var(--txt-dim)', maxWidth: 380, margin: '0 auto' }}>
                  Obrigado, {form.nome.split(' ')[0] || 'tudo certo'}. Nosso time entra em contato em até 24h para agendar seu diagnóstico.</p>
                <button className="btn btn-ghost" style={{ marginTop: 28 }} onClick={() => { setSent(false); setForm({ nome: '', empresa: '', email: '', whats: '', faturamento: '', desafio: '' }); }}>Enviar outro</button>
              </div>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <Field label="Nome*" k="nome" ph="Seu nome" />
                  <Field label="Empresa*" k="empresa" ph="Nome da empresa" />
                  <Field label="E-mail*" k="email" type="email" ph="voce@empresa.com" />
                  <Field label="WhatsApp" k="whats" ph="(00) 00000-0000" />
                  <label style={{ gridColumn: '1 / -1' }}>
                    <span style={{ display: 'block', fontSize: 12.5, letterSpacing: '.08em', textTransform: 'uppercase',
                      color: 'var(--txt-dim)', fontFamily: 'var(--f-head)', fontWeight: 600, marginBottom: 8 }}>Faturamento mensal</span>
                    <select value={form.faturamento} onChange={upd('faturamento')} style={inputStyle}>
                      <option value="">Selecione…</option>
                      <option>Até R$ 50 mil</option><option>R$ 50–150 mil</option><option>R$ 150–500 mil</option><option>Acima de R$ 500 mil</option>
                    </select>
                  </label>
                  <label style={{ gridColumn: '1 / -1' }}>
                    <span style={{ display: 'block', fontSize: 12.5, letterSpacing: '.08em', textTransform: 'uppercase',
                      color: 'var(--txt-dim)', fontFamily: 'var(--f-head)', fontWeight: 600, marginBottom: 8 }}>Maior desafio hoje</span>
                    <textarea value={form.desafio} onChange={upd('desafio')} rows={3} placeholder="Conte rapidamente o que trava seu crescimento…"
                      style={{ ...inputStyle, resize: 'vertical' }} onFocus={(e) => e.target.style.borderColor = 'var(--dourado)'} onBlur={(e) => e.target.style.borderColor = 'var(--line-soft)'} />
                  </label>
                </div>
                <button className="btn btn-gold" disabled={!valid} onClick={() => valid && setSent(true)}
                  style={{ width: '100%', justifyContent: 'center', marginTop: 24, opacity: valid ? 1 : .5, cursor: valid ? 'pointer' : 'not-allowed' }}>
                  Solicitar diagnóstico <span className="arrow"><Icon name="arrow" size={17} stroke="#0B0B0B" /></span>
                </button>
                <p style={{ fontSize: 12.5, color: 'var(--txt-faint)', textAlign: 'center', marginTop: 14 }}>Seus dados estão seguros. Sem spam — só estratégia.</p>
              </>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { ServicosPage, SobrePage, ContatoPage, PageHero });
