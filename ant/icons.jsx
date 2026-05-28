/* global React */
// Ícones em linha, estilo do guia A.N.T. (stroke dourado fino)
function Icon({ name, size = 28, stroke = '#D4AF37', sw = 1.6 }) {
  const p = { fill: 'none', stroke, strokeWidth: sw, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const paths = {
    // Conceituais
    estrategia: <g {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" fill={stroke} /><path d="M12 1v3M12 20v3M1 12h3M20 12h3" /></g>,
    conversao: <g {...p}><path d="M3 4h18l-7 8v6l-4 2v-8z" /></g>,
    comercial: <g {...p}><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17.5" cy="9" r="2.4" /><path d="M16 14.6c2.4.5 4 2.5 4 5.4" /></g>,
    tecnologia: <g {...p}><rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M10 7V4M14 7V4M10 20v-3M14 20v-3M7 10H4M7 14H4M20 10h-3M20 14h-3" /></g>,
    integracao: <g {...p}><circle cx="6" cy="12" r="2.4" /><circle cx="18" cy="6" r="2.4" /><circle cx="18" cy="18" r="2.4" /><path d="M8.2 11l7.6-4M8.2 13l7.6 4" /></g>,
    // Serviços
    instagram: <g {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.3" cy="6.7" r="1" fill={stroke} stroke="none" /></g>,
    automacao: <g {...p}><rect x="5" y="8" width="14" height="11" rx="2.5" /><path d="M12 8V5M9 4h6" /><circle cx="9.5" cy="13" r="1.1" fill={stroke} stroke="none" /><circle cx="14.5" cy="13" r="1.1" fill={stroke} stroke="none" /><path d="M9.5 16.5h5M3 12v3M21 12v3" /></g>,
    branding: <g {...p}><path d="M3 21l9-18 9 18" /><path d="M7 13h10" /><circle cx="12" cy="3" r="0" /></g>,
    consultoria: <g {...p}><path d="M3 19V8l5-4 5 4M13 19V11l4-3 4 3v8" /><path d="M2 19h20" /><rect x="6" y="12" width="3" height="3" /></g>,
    // Pilares / tom
    rocket: <g {...p}><path d="M12 3c3 1.5 5 5 5 9l-3 3h-4l-3-3c0-4 2-7.5 5-9z" /><circle cx="12" cy="9" r="1.6" /><path d="M9 18c-1 .8-1.5 2.4-1.4 3.6 1.2.1 2.8-.4 3.6-1.4M15 18c1 .8 1.5 2.4 1.4 3.6-1.2.1-2.8-.4-3.6-1.4" /></g>,
    shield: <g {...p}><path d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z" /><path d="M9 12l2 2 4-4" /></g>,
    brain: <g {...p}><path d="M9.5 4a3 3 0 00-3 3 3 3 0 00-1 5.5A3 3 0 008 18a2.5 2.5 0 004.5-1.5V5.5A2.5 2.5 0 009.5 4z" /><path d="M12.5 5.5A2.5 2.5 0 0117 4a3 3 0 013 3 3 3 0 011 5.5A3 3 0 0116 18a2.5 2.5 0 01-3.5-1.5" /></g>,
    person: <g {...p}><circle cx="12" cy="8" r="3.5" /><path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" /></g>,
    growth: <g {...p}><path d="M3 17l5-5 4 3 6-8" /><path d="M16 7h4v4" /></g>,
    check: <g {...p}><path d="M5 12l5 5 9-11" /></g>,
    arrow: <g {...p}><path d="M5 12h13M13 6l6 6-6 6" /></g>,
    plus: <g {...p}><path d="M12 5v14M5 12h14" /></g>,
    play: <g {...p}><circle cx="12" cy="12" r="9" /><path d="M10 8.5l6 3.5-6 3.5z" fill={stroke} stroke="none" /></g>,
    whatsapp: <g {...p}><path d="M4 20l1.4-4.2A8 8 0 1112 20a8 8 0 01-4.2-1.2z" /><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5.6 0 1-.5 1-1l-1.5-1-1 .8c-1.2-.5-2.1-1.4-2.6-2.6l.8-1-1-1.5c-.5 0-1 .4-1 1z" fill={stroke} stroke="none" /></g>,
    calendar: <g {...p}><rect x="3.5" y="5" width="17" height="16" rx="2" /><path d="M3.5 9.5h17M8 3v4M16 3v4" /><circle cx="12" cy="14" r="1.2" fill={stroke} stroke="none" /></g>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24">{paths[name] || null}</svg>;
}
window.Icon = Icon;
