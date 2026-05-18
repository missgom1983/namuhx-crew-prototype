// ui.jsx — shared building blocks for the 함께 선물하기 prototype

// ─── Icons (inline SVG, stroke-based, Apple-style) ───
const Ico = {
  Back: (p) => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}><path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  Close: (p) => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>),
  More: (p) => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}><circle cx="5" cy="12" r="1.6" fill="currentColor"/><circle cx="12" cy="12" r="1.6" fill="currentColor"/><circle cx="19" cy="12" r="1.6" fill="currentColor"/></svg>),
  Heart: (p) => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 20s-7-4.5-9-9c-1.3-3 .8-6 4-6 1.7 0 3.3.9 4 2 0.7-1.1 2.3-2 4-2 3.2 0 5.3 3 4 6-2 4.5-7 9-7 9z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg>),
  Share: (p) => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 4v12M12 4l-4 4M12 4l4 4M6 14v4a2 2 0 002 2h8a2 2 0 002-2v-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  Star: (p) => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z"/></svg>),
  Check: (p) => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  Plus: (p) => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>),
  Minus: (p) => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>),
  Arrow: (p) => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  Info: (p) => (<svg width="14" height="14" viewBox="0 0 24 24" fill="none" {...p}><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/><path d="M12 8.5v.01M12 11v5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>),
  Sparkle: (p) => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 2l1.5 5.5L19 9l-5.5 1.5L12 16l-1.5-5.5L5 9l5.5-1.5z"/></svg>),
  Gift: (p) => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" {...p}><path d="M3 9h18v4H3zM5 13v8h14v-8M12 9v12M9 9a3 3 0 11-3-3c2 0 3 1.5 6 3-1.5-3-1-4.5 0-4.5 1 0 1.5 1.5 0 4.5 3-1.5 4-3 6-3a3 3 0 11-3 3" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg>),
  Users: (p) => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><circle cx="9" cy="9" r="3.2" stroke="currentColor" strokeWidth="1.6"/><path d="M3 20c0-3 2.7-5.4 6-5.4S15 17 15 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><path d="M15 11.2c1.6 0 3-1.4 3-3.1S16.6 5 15 5M16 14.4c2.7.4 5 2.6 5 5.4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>),
  Bell: (p) => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><path d="M6 9a6 6 0 1112 0c0 5 2 7 2 7H4s2-2 2-7zM10 19a2 2 0 004 0" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" strokeLinecap="round"/></svg>),
  Link: (p) => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><path d="M10 14a4 4 0 015.7 0l3-3a4 4 0 00-5.7-5.7l-1.5 1.5M14 10a4 4 0 00-5.7 0l-3 3a4 4 0 005.7 5.7l1.5-1.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>),
  Lock: (p) => (<svg width="13" height="13" viewBox="0 0 24 24" fill="none" {...p}><rect x="4" y="11" width="16" height="10" rx="2" stroke="currentColor" strokeWidth="1.6"/><path d="M8 11V8a4 4 0 018 0v3" stroke="currentColor" strokeWidth="1.6"/></svg>),
  Insta: (p) => (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" {...p}><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.7"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.7"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>),
  Kakao: (p) => (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M12 4C7 4 3 7 3 11c0 2.5 1.7 4.7 4.2 5.9L6 21l4.5-3c.5 0 1 .1 1.5.1 5 0 9-3 9-7s-4-7-9-7z"/></svg>),
};

// ─── Tokens ───
const T = {
  ink: '#1d1d1f', ink2: '#424245', ink3: '#6e6e73', ink4: '#a1a1a6',
  bg: '#f5f5f7', card: '#ffffff', line: '#e8e8ed', line2: '#f0f0f3',
  mint: '#4FC9B5', mintDeep: '#2EA993', mintSoft: '#e8f8f4', mintTint: '#d5f1ea',
  navy: '#0a1f44', navySoft: '#1a2f54',
  success: '#10b981', warning: '#f59e0b', error: '#ef4444',
  coin: '#fbbf24', party: '#ec4899', sky: '#38bdf8',
};

// ─── Typography ───
function H({ size = 22, weight = 700, color = T.ink, ls = '-0.03em', children, style = {}, ...rest }) {
  return <div style={{ fontSize: size, fontWeight: weight, color, letterSpacing: ls, lineHeight: 1.25, ...style }} {...rest}>{children}</div>;
}
function Txt({ size = 14, weight = 400, color = T.ink2, ls = '-0.012em', children, style = {}, ...rest }) {
  return <span style={{ fontSize: size, fontWeight: weight, color, letterSpacing: ls, lineHeight: 1.45, ...style }} {...rest}>{children}</span>;
}

// ─── Buttons ───
function Btn({ variant = 'primary', children, onClick, full = true, height = 56, style = {}, disabled = false, leading, trailing }) {
  const base = {
    height, borderRadius: 16, width: full ? '100%' : 'auto',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
    fontSize: 17, fontWeight: 600, letterSpacing: '-0.02em',
    border: 'none', cursor: 'pointer', padding: '0 22px',
    transition: 'transform .12s, background .15s, box-shadow .15s',
    fontFamily: 'inherit',
  };
  const variants = {
    primary: { background: T.mint, color: '#fff', boxShadow: '0 6px 18px rgba(79,201,181,0.35), inset 0 1px 0 rgba(255,255,255,0.3)' },
    primaryDark: { background: T.ink, color: '#fff', boxShadow: '0 6px 18px rgba(0,0,0,0.18)' },
    outline: { background: '#fff', color: T.ink, border: `1px solid ${T.line}` },
    ghost: { background: 'rgba(255,255,255,0.08)', color: '#fff', border: '1px solid rgba(255,255,255,0.18)' },
    danger: { background: '#fff', color: T.error, border: `1px solid #FECACA` },
    soft: { background: T.mintSoft, color: T.mintDeep, fontWeight: 600 },
  };
  return (
    <button className="tap" disabled={disabled} onClick={onClick}
      style={{ ...base, ...variants[variant], opacity: disabled ? 0.4 : 1, ...style }}>
      {leading}{children}{trailing}
    </button>
  );
}

// ─── Pill / Badge ───
function Pill({ children, tone = 'mint', size = 'sm', style = {} }) {
  const tones = {
    mint: { bg: T.mintSoft, fg: T.mintDeep },
    navy: { bg: '#EEF1F8', fg: T.navy },
    warn: { bg: '#FEF3C7', fg: '#92400E' },
    success: { bg: '#D1FAE5', fg: '#065F46' },
    error: { bg: '#FEE2E2', fg: '#991B1B' },
    gray: { bg: '#F2F2F5', fg: T.ink3 },
    coin: { bg: '#FEF3C7', fg: '#B45309' },
  }[tone];
  const sizes = {
    xs: { fs: 10, p: '3px 7px', r: 6 },
    sm: { fs: 11, p: '4px 9px', r: 8 },
    md: { fs: 12, p: '6px 11px', r: 10 },
    lg: { fs: 13, p: '8px 14px', r: 12 },
  }[size];
  return <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 4,
    background: tones.bg, color: tones.fg,
    fontSize: sizes.fs, fontWeight: 600, padding: sizes.p, borderRadius: sizes.r,
    letterSpacing: '-0.01em', ...style,
  }}>{children}</span>;
}

// ─── Avatar — initial-based with deterministic pastel color ───
const AVATAR_PALETTES = [
  ['#FFE4E6', '#BE185D'], // pink
  ['#DBEAFE', '#1E40AF'], // blue
  ['#FEF3C7', '#92400E'], // amber
  ['#D1FAE5', '#065F46'], // green
  ['#EDE9FE', '#5B21B6'], // violet
  ['#FCE7F3', '#9D174D'], // rose
  ['#CFFAFE', '#155E75'], // cyan
];
function avatarColor(name) {
  let h = 0; for (const c of name || '?') h = (h * 31 + c.charCodeAt(0)) >>> 0;
  return AVATAR_PALETTES[h % AVATAR_PALETTES.length];
}
function Avatar({ name = '?', size = 36, ring, dim = false, style = {} }) {
  const [bg, fg] = avatarColor(name);
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: bg, color: fg, fontWeight: 700, fontSize: size * 0.42,
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      letterSpacing: '-0.02em', flexShrink: 0,
      boxShadow: ring ? `0 0 0 2px #fff, 0 0 0 ${2 + (ring === true ? 2 : ring)}px ${T.mint}` : 'inset 0 0 0 0.5px rgba(0,0,0,0.04)',
      filter: dim ? 'grayscale(0.7)' : 'none',
      opacity: dim ? 0.55 : 1,
      ...style,
    }}>{name[0] || '?'}</div>
  );
}

// ─── Sticky CTA bar ───
function StickyCTA({ children, style = {} }) {
  return (
    <div style={{
      position: 'absolute', left: 0, right: 0, bottom: 0,
      padding: '12px 20px 30px',
      background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.92) 30%, rgba(255,255,255,0.98) 100%)',
      backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
      zIndex: 30, ...style,
    }}>{children}</div>
  );
}

// ─── Card surface ───
function Card({ children, style = {}, pad = 20, ...rest }) {
  return (
    <div style={{
      background: '#fff', borderRadius: 20, padding: pad,
      boxShadow: '0 1px 2px rgba(0,0,0,0.04), 0 1px 0 rgba(0,0,0,0.02)',
      ...style,
    }} {...rest}>{children}</div>
  );
}

// ─── Animated number ───
function useCountUp(target, dur = 900, deps = []) {
  const [v, setV] = React.useState(target);
  React.useEffect(() => {
    let raf, start;
    const from = v;
    const animate = (ts) => {
      if (!start) start = ts;
      const t = Math.min(1, (ts - start) / dur);
      const e = 1 - Math.pow(1 - t, 3);
      setV(Math.round(from + (target - from) * e));
      if (t < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, deps); // eslint-disable-line
  return v;
}
const won = (n) => n.toLocaleString('ko-KR');

// ─── Progress Ring ───
function Ring({ size = 144, stroke = 12, pct = 0, color = T.mint, track = '#EAF1EE', children }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c * (1 - pct);
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle cx={size/2} cy={size/2} r={r} stroke={track} strokeWidth={stroke} fill="none" />
        <circle cx={size/2} cy={size/2} r={r} stroke={color} strokeWidth={stroke} fill="none"
          strokeLinecap="round" strokeDasharray={c}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 1.4s cubic-bezier(.22,1,.36,1)' }} />
      </svg>
      <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
}

// ─── Confetti ───
function Confetti({ count = 36, duration = 1800 }) {
  const [pieces] = React.useState(() => Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    cx: (Math.random() - 0.5) * 200,
    color: [T.mint, T.coin, T.party, T.sky, T.navy][i % 5],
    shape: i % 3,
    delay: Math.random() * 400,
    size: 6 + Math.random() * 8,
    dur: duration + Math.random() * 400,
  })));
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 100 }}>
      {pieces.map(p => (
        <div key={p.id} style={{
          position: 'absolute', top: 0, left: `${p.x}%`,
          width: p.size, height: p.shape === 1 ? p.size * 0.6 : p.size,
          background: p.color, borderRadius: p.shape === 2 ? '50%' : 2,
          ['--cx']: `${p.cx}px`,
          animation: `confetti-fall ${p.dur}ms ${p.delay}ms cubic-bezier(.4,.6,.6,1) forwards`,
        }} />
      ))}
    </div>
  );
}

// ─── Product render — uses real product photo with transparent bg ───
function NamuhA1({ size = 200, color = 'night', view = 'angle', float = true, style = {} }) {
  // view: 'front' | 'angle' — both are dark (Night Gray); for Dawn White we tint via CSS filter
  const src = view === 'front' ? 'assets/a1-front.png' : 'assets/a1-angle.png';
  const isWhite = color === 'dawn' || color === 'white';
  return (
    <div style={{
      width: size, height: size, position: 'relative',
      ...(float ? { animation: 'float 4s ease-in-out infinite' } : {}),
      ...style,
    }}>
      <img src={src} alt="NAMUHX A1" draggable={false}
        style={{
          width: '100%', height: '100%', objectFit: 'contain',
          // Dawn White: invert brightness (rough preview)
          filter: isWhite ? 'invert(0.86) hue-rotate(180deg) brightness(1.08) contrast(0.92)' : 'none',
          userSelect: 'none', pointerEvents: 'none',
        }} />
    </div>
  );
}

// ─── Bottom sheet ───
function Sheet({ open, onClose, children, height = '78%', dark = false, withDim = true, style = {} }) {
  const [mounted, setMounted] = React.useState(open);
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      setMounted(true);
      requestAnimationFrame(() => requestAnimationFrame(() => setShow(true)));
    } else {
      setShow(false);
      const t = setTimeout(() => setMounted(false), 350);
      return () => clearTimeout(t);
    }
  }, [open]);
  if (!mounted) return null;
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 80 }}>
      {withDim && (
        <div onClick={onClose} style={{
          position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.45)',
          opacity: show ? 1 : 0, transition: 'opacity .3s ease',
        }} />
      )}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
        height, background: dark ? '#0a0a0c' : '#fff',
        borderTopLeftRadius: 28, borderTopRightRadius: 28,
        boxShadow: '0 -10px 40px rgba(0,0,0,0.16)',
        transform: show ? 'translateY(0)' : 'translateY(100%)',
        transition: 'transform .42s cubic-bezier(.22,1,.36,1)',
        overflow: 'hidden',
        ...style,
      }}>
        <div style={{ width: 40, height: 5, background: dark ? 'rgba(255,255,255,0.22)' : '#E4E4E8', borderRadius: 999, margin: '10px auto 0' }} />
        {children}
      </div>
    </div>
  );
}

Object.assign(window, { Ico, T, H, Txt, Btn, Pill, Avatar, StickyCTA, Card, useCountUp, won, Ring, Confetti, NamuhA1, Sheet });
