// scenes.jsx — Illustrated invitation scenes (cute character + product, fully SVG)
// Style: flat, rounded, hand-drawn feel, pastel colors, no real photo

// ─── Reusable illustrated robot (matches NAMUHX A1 silhouette) ───
function SVGRobot({ x = 0, y = 0, scale = 1, tilt = 0, accent = '#4FC9B5', wearing = null }) {
  // wearing: 'hat-red' (santa), 'hat-flower', 'bowtie-pink', 'tie-black', null
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* shadow */}
      <ellipse cx="0" cy="118" rx="48" ry="6" fill="#000" opacity="0.12" />

      {/* base/wheels */}
      <rect x="-44" y="92" width="88" height="22" rx="10" fill="#1f1f22" />
      <circle cx="-26" cy="113" r="5" fill="#0c0c0e" />
      <circle cx="26" cy="113" r="5" fill="#0c0c0e" />

      {/* main body — barrel shape */}
      <path d="M -50 -10 Q -56 50, -44 96 L 44 96 Q 56 50, 50 -10 Q 0 -36, -50 -10 Z" fill="#2a2a2e" />
      <path d="M -48 -8 Q -54 48, -42 90 L -38 88 Q -50 48, -44 -6 Z" fill="#3a3a3e" opacity="0.6" />

      {/* sensor strip */}
      <rect x="-30" y="0" width="60" height="14" rx="3" fill="#1a1a1c" />
      <rect x="-22" y="3" width="3" height="8" fill="#fff" opacity="0.85" />
      <rect x="-18" y="3" width="3" height="8" fill="#fff" opacity="0.85" />
      <circle cx="0" cy="7" r="2.4" fill="#222" />
      <rect x="15" y="3" width="3" height="8" fill="#fff" opacity="0.85" />
      <rect x="19" y="3" width="3" height="8" fill="#fff" opacity="0.85" />

      {/* head/puck (tilted up) */}
      <g transform={`translate(0 -42) rotate(${tilt})`}>
        <ellipse cx="0" cy="0" rx="32" ry="14" fill="#3a3a3e" />
        <ellipse cx="0" cy="-2" rx="30" ry="12" fill="#1c1c1f" />
        {/* eye/screen */}
        <circle cx="0" cy="-2" r="7" fill={accent} />
        <circle cx="-2" cy="-4" r="2.4" fill="#fff" opacity="0.9" />
      </g>

      {/* wearing accessories */}
      {wearing === 'hat-red' && (
        <g transform="translate(0 -62)">
          <path d="M -20 -2 Q -24 -32, 4 -34 L 26 -2 Z" fill="#C72028" />
          <circle cx="4" cy="-34" r="6" fill="#fff" />
          <ellipse cx="0" cy="0" rx="22" ry="4" fill="#fff" />
        </g>
      )}
      {wearing === 'hat-flower' && (
        <g transform="translate(0 -58)">
          <circle cx="-10" cy="-4" r="6" fill="#FFB7C5" />
          <circle cx="-2" cy="-9" r="7" fill="#FFC4D1" />
          <circle cx="8" cy="-4" r="6" fill="#FFB7C5" />
          <circle cx="0" cy="-2" r="4" fill="#FFE066" />
        </g>
      )}
      {wearing === 'bowtie-pink' && (
        <g transform="translate(0 -28)">
          <path d="M -14 0 L -4 -6 L -4 6 Z" fill="#EC4899" />
          <path d="M 14 0 L 4 -6 L 4 6 Z" fill="#EC4899" />
          <rect x="-4" y="-4" width="8" height="8" rx="1.5" fill="#BE185D" />
        </g>
      )}
      {wearing === 'tie-black' && (
        <g transform="translate(0 -18)">
          <path d="M -4 0 L 4 0 L 6 6 L 0 24 L -6 6 Z" fill="#1a1a1a" />
        </g>
      )}
      {wearing === 'antlers' && (
        <g transform="translate(0 -56)">
          <path d="M -16 0 Q -22 -16, -14 -22 M -16 0 Q -26 -8, -28 -16 M -10 -16 Q -16 -22, -8 -28" stroke="#8B4513" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M 16 0 Q 22 -16, 14 -22 M 16 0 Q 26 -8, 28 -16 M 10 -16 Q 16 -22, 8 -28" stroke="#8B4513" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        </g>
      )}
    </g>
  );
}

// ─── Reusable cute character ───
// type: 'bride' | 'groom' | 'casual' | 'casual2' | 'grandma' | 'grandpa' | 'kid' | 'friend' | 'santa'
function SVGPerson({ x = 0, y = 0, scale = 1, type = 'casual', skin = '#FFD9B5', pose = 'stand' }) {
  // pose: 'stand' | 'hug-right' | 'hug-left' | 'wave'
  const looks = {
    bride:   { hair: '#3a2618', hairShape: 'long', shirt: '#fff', accent: '#FFB7C5' },
    groom:   { hair: '#1a1a1a', hairShape: 'short', shirt: '#1a1f3a', accent: '#fff' },
    casual:  { hair: '#5a3a28', hairShape: 'short', shirt: '#4FC9B5', accent: '#2EA993' },
    casual2: { hair: '#1a1a1a', hairShape: 'mid', shirt: '#F472B6', accent: '#EC4899' },
    grandma: { hair: '#C0C0C0', hairShape: 'bun', shirt: '#8B6F47', accent: '#fff' },
    grandpa: { hair: '#A8A8A8', hairShape: 'bald', shirt: '#4A6FA5', accent: '#fff' },
    kid:     { hair: '#3a2618', hairShape: 'short', shirt: '#FCD34D', accent: '#F59E0B' },
    friend:  { hair: '#2a1a0a', hairShape: 'pony', shirt: '#A78BFA', accent: '#7C3AED' },
    santa:   { hair: '#fff', hairShape: 'beard', shirt: '#C72028', accent: '#fff' },
  };
  const L = looks[type] || looks.casual;

  // arms based on pose
  const armL = pose === 'hug-right' ? { d: 'M -22 6 Q -10 18, 4 14', w: 7 } : pose === 'wave' ? { d: 'M -22 6 Q -34 -4, -28 -22', w: 7 } : { d: 'M -22 6 Q -26 24, -22 38', w: 7 };
  const armR = pose === 'hug-left' ? { d: 'M 22 6 Q 10 18, -4 14', w: 7 } : { d: 'M 22 6 Q 26 24, 22 38', w: 7 };

  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`}>
      {/* shadow */}
      <ellipse cx="0" cy="58" rx="22" ry="3" fill="#000" opacity="0.1" />

      {/* legs */}
      <rect x="-10" y="36" width="8" height="22" rx="3" fill="#3a3a44" />
      <rect x="2" y="36" width="8" height="22" rx="3" fill="#3a3a44" />

      {/* body / shirt */}
      <path d="M -20 -4 Q -22 24, -16 40 L 16 40 Q 22 24, 20 -4 Q 0 -8, -20 -4 Z" fill={L.shirt} />

      {/* arms */}
      <path d={armL.d} stroke={L.shirt} strokeWidth={armL.w} fill="none" strokeLinecap="round" />
      <path d={armR.d} stroke={L.shirt} strokeWidth={armR.w} fill="none" strokeLinecap="round" />
      {/* hands */}
      {pose === 'hug-right' && <circle cx="6" cy="14" r="4" fill={skin} />}
      {pose === 'hug-left' && <circle cx="-6" cy="14" r="4" fill={skin} />}
      {pose === 'wave' && <circle cx="-28" cy="-22" r="5" fill={skin} />}

      {/* neck */}
      <rect x="-4" y="-12" width="8" height="10" rx="2" fill={skin} />

      {/* head */}
      <circle cx="0" cy="-22" r="16" fill={skin} />

      {/* hair */}
      {L.hairShape === 'long' && <path d="M -16 -22 Q -18 -38, 0 -38 Q 18 -38, 16 -22 L 14 0 L 10 -8 Q 0 -12, -10 -8 L -14 0 Z" fill={L.hair} />}
      {L.hairShape === 'short' && <path d="M -16 -22 Q -18 -38, 0 -38 Q 18 -38, 16 -22 L 14 -16 Q 0 -22, -14 -16 Z" fill={L.hair} />}
      {L.hairShape === 'mid' && <path d="M -16 -22 Q -18 -36, 0 -38 Q 18 -36, 16 -22 L 14 -10 Q 0 -16, -14 -10 Z" fill={L.hair} />}
      {L.hairShape === 'bun' && <>
        <path d="M -14 -24 Q -18 -36, 0 -36 Q 18 -36, 14 -24 L 12 -16 Q 0 -20, -12 -16 Z" fill={L.hair} />
        <circle cx="0" cy="-42" r="8" fill={L.hair} />
      </>}
      {L.hairShape === 'bald' && <path d="M -14 -28 Q -12 -38, 0 -38 Q 12 -38, 14 -28 L 13 -22 Q 0 -24, -13 -22 Z" fill={L.hair} />}
      {L.hairShape === 'pony' && <>
        <path d="M -16 -22 Q -18 -38, 0 -38 Q 18 -38, 16 -22 L 14 -10 Q 0 -16, -14 -10 Z" fill={L.hair} />
        <ellipse cx="14" cy="-20" rx="6" ry="12" fill={L.hair} />
      </>}
      {L.hairShape === 'beard' && <>
        <path d="M -14 -28 Q -12 -36, 0 -36 Q 12 -36, 14 -28 Z" fill={L.hair} />
        <path d="M -14 -18 Q -18 -6, -10 -4 Q 0 0, 10 -4 Q 18 -6, 14 -18 Z" fill={L.hair} />
      </>}

      {/* eyes */}
      <circle cx="-5" cy="-22" r="1.6" fill="#1a1a1a" />
      <circle cx="5" cy="-22" r="1.6" fill="#1a1a1a" />
      {/* smile */}
      <path d="M -4 -14 Q 0 -10, 4 -14" stroke="#1a1a1a" strokeWidth="1.4" fill="none" strokeLinecap="round" />
      {/* cheeks */}
      <circle cx="-10" cy="-16" r="2.5" fill="#FFB7C5" opacity="0.6" />
      <circle cx="10" cy="-16" r="2.5" fill="#FFB7C5" opacity="0.6" />

      {/* bride veil/accent */}
      {type === 'bride' && (
        <ellipse cx="0" cy="-38" rx="14" ry="4" fill="#fff" opacity="0.85" />
      )}
      {/* groom bowtie */}
      {type === 'groom' && (
        <g transform="translate(0 -4)">
          <path d="M -6 0 L -2 -3 L -2 3 Z" fill={L.accent} />
          <path d="M 6 0 L 2 -3 L 2 3 Z" fill={L.accent} />
        </g>
      )}
      {/* kid bangs */}
      {type === 'kid' && (
        <path d="M -10 -28 L -2 -36 L 4 -32 L 10 -28" stroke="#1a1a1a" strokeWidth="2" fill="none" />
      )}
      {/* santa hat */}
      {type === 'santa' && (
        <g transform="translate(-2 -38)">
          <path d="M -16 0 Q -18 -22, 8 -24 L 18 0 Z" fill="#C72028" />
          <circle cx="8" cy="-24" r="5" fill="#fff" />
          <ellipse cx="2" cy="2" rx="16" ry="3" fill="#fff" />
        </g>
      )}
    </g>
  );
}

// ─── Scene definitions ───
// Each scene is a function returning JSX inside a centered SVG canvas (viewBox 0 0 320 360)
const SCENE_RENDERERS = {
  // ── WEDDING ──
  'wedding-couple': () => (
    <>
      {/* bg flora */}
      <g opacity="0.7">
        <circle cx="40" cy="50" r="14" fill="#FFB7C5" />
        <circle cx="56" cy="38" r="10" fill="#FFD1DC" />
        <circle cx="50" cy="68" r="8" fill="#FFC4D1" />
        <circle cx="280" cy="46" r="12" fill="#FFB7C5" />
        <circle cx="296" cy="62" r="8" fill="#FFD1DC" />
        <path d="M 30 80 Q 50 60, 76 86 Q 50 96, 30 80" fill="#7DAA80" opacity="0.5" />
        <path d="M 240 90 Q 270 70, 296 90" fill="#7DAA80" opacity="0.5" stroke="#5A8A4A" strokeWidth="1.5" />
      </g>
      {/* floating hearts */}
      <g fill="#EC4899" opacity="0.5">
        <path d="M 100 70 c -8 -8 -12 4 0 12 c 12 -8 8 -20 0 -12 z" />
        <path d="M 220 60 c -6 -6 -9 3 0 9 c 9 -6 6 -15 0 -9 z" />
        <path d="M 160 40 c -5 -5 -8 2 0 7 c 8 -5 5 -12 0 -7 z" opacity="0.7" />
      </g>
      {/* characters + robot */}
      <SVGPerson x="80" y="240" scale="1.6" type="bride" pose="hug-right" />
      <SVGRobot x="160" y="230" scale="1.0" />
      <SVGPerson x="240" y="240" scale="1.6" type="groom" pose="hug-left" />
    </>
  ),
  'wedding-bouquet': () => (
    <>
      <g opacity="0.6">
        <circle cx="40" cy="40" r="12" fill="#FFB7C5" />
        <circle cx="290" cy="50" r="14" fill="#FFD1DC" />
        <circle cx="50" cy="320" r="10" fill="#FFB7C5" />
        <circle cx="280" cy="320" r="12" fill="#FFC4D1" />
      </g>
      {/* big bouquet */}
      <g transform="translate(80 220)">
        <ellipse cx="0" cy="10" rx="34" ry="22" fill="#7DAA80" opacity="0.7" />
        <circle cx="-12" cy="0" r="9" fill="#FF7BAB" />
        <circle cx="6" cy="-6" r="10" fill="#FFB7C5" />
        <circle cx="14" cy="6" r="8" fill="#FF7BAB" />
        <circle cx="-4" cy="10" r="8" fill="#FFD1DC" />
        <rect x="-3" y="22" width="6" height="40" fill="#5A8A4A" />
      </g>
      <SVGPerson x="160" y="246" scale="1.7" type="bride" pose="hug-right" />
      <SVGRobot x="232" y="236" scale="0.95" wearing="bowtie-pink" />
    </>
  ),
  'wedding-rings': () => (
    <>
      {/* big interlocking rings */}
      <g transform="translate(160 90)" fill="none" stroke="#D4AF37" strokeWidth="5" opacity="0.6">
        <circle cx="-16" cy="0" r="22" />
        <circle cx="16" cy="0" r="22" />
        <circle cx="-16" cy="0" r="18" stroke="#FFE066" strokeWidth="1.5" />
        <circle cx="16" cy="0" r="18" stroke="#FFE066" strokeWidth="1.5" />
      </g>
      {/* sparkles */}
      <g fill="#FFE066">
        <path d="M 60 130 l 3 0 l 0 -8 l 2 0 l 0 8 l 8 0 l 0 2 l -8 0 l 0 8 l -2 0 l 0 -8 l -3 0 z" />
        <path d="M 260 140 l 2 0 l 0 -6 l 1.5 0 l 0 6 l 6 0 l 0 1.5 l -6 0 l 0 6 l -1.5 0 l 0 -6 l -2 0 z" />
      </g>
      <SVGRobot x="160" y="280" scale="1.4" wearing="bowtie-pink" />
    </>
  ),
  'wedding-confetti': () => (
    <>
      {/* confetti rain */}
      <g>
        {[[40,40,'#FF7BAB',18],[290,30,'#FFD166',12],[80,80,'#4FC9B5',-8],[260,90,'#A78BFA',22],[50,140,'#FFD166',-12],[290,160,'#FF7BAB',8],[110,30,'#A78BFA',16],[230,40,'#4FC9B5',-22]].map(([cx,cy,fill,rot],i)=>(
          <rect key={i} x={cx-3} y={cy-7} width="6" height="14" fill={fill} transform={`rotate(${rot} ${cx} ${cy})`} rx="1" />
        ))}
      </g>
      {/* 3 friends celebrating */}
      <SVGPerson x="70" y="250" scale="1.45" type="casual" pose="wave" />
      <SVGRobot x="160" y="250" scale="1.05" wearing="bowtie-pink" />
      <SVGPerson x="250" y="250" scale="1.45" type="casual2" pose="wave" />
      {/* 'champagne' */}
      <g transform="translate(50 200)">
        <path d="M 0 0 L 12 0 L 10 16 L 2 16 Z" fill="#FFE066" />
        <rect x="5" y="-6" width="2" height="6" fill="#FFE066" />
      </g>
      <g transform="translate(270 200)">
        <path d="M 0 0 L 12 0 L 10 16 L 2 16 Z" fill="#FFE066" />
        <rect x="5" y="-6" width="2" height="6" fill="#FFE066" />
      </g>
    </>
  ),

  // ── HOUSEWARMING ──
  'house-cozy': () => (
    <>
      {/* couch */}
      <rect x="40" y="240" width="240" height="60" rx="14" fill="#D4A574" />
      <rect x="40" y="230" width="240" height="22" rx="10" fill="#E2B886" />
      <rect x="44" y="290" width="14" height="20" fill="#8B6F47" />
      <rect x="262" y="290" width="14" height="20" fill="#8B6F47" />
      {/* plant left */}
      <g transform="translate(40 200)">
        <rect x="-12" y="30" width="24" height="22" rx="2" fill="#C97B5C" />
        <path d="M 0 30 Q -16 0, -8 -10 M 0 30 Q 16 0, 8 -10 M 0 30 Q 0 -8, 0 -16" stroke="#5A8A4A" strokeWidth="3" fill="none" />
      </g>
      {/* lamp right */}
      <g transform="translate(286 180)">
        <rect x="-2" y="40" width="4" height="40" fill="#8B6F47" />
        <path d="M -16 40 L 16 40 L 12 20 L -12 20 Z" fill="#FFE066" />
      </g>
      {/* window */}
      <g transform="translate(160 50)">
        <rect x="-50" y="0" width="100" height="60" rx="6" fill="#BFE6F5" />
        <line x1="0" y1="0" x2="0" y2="60" stroke="#fff" strokeWidth="2" />
        <line x1="-50" y1="30" x2="50" y2="30" stroke="#fff" strokeWidth="2" />
      </g>
      {/* person on couch */}
      <SVGPerson x="220" y="220" scale="1.3" type="casual" pose="stand" />
      <SVGRobot x="140" y="222" scale="1.0" />
    </>
  ),

  // ── FILIAL ──
  'parent-hug': () => (
    <>
      <g opacity="0.6">
        <circle cx="40" cy="50" r="12" fill="#FFC4D1" />
        <circle cx="60" cy="38" r="9" fill="#FFD1DC" />
        <circle cx="280" cy="50" r="13" fill="#FFB7C5" />
        <circle cx="40" cy="320" r="11" fill="#FFD1DC" />
        <circle cx="290" cy="318" r="13" fill="#FFC4D1" />
      </g>
      {/* hearts */}
      <g fill="#FF7BAB" opacity="0.65">
        <path d="M 120 50 c -7 -7 -10 3 0 10 c 10 -7 7 -17 0 -10 z" />
        <path d="M 220 60 c -6 -6 -9 3 0 8 c 9 -5 6 -14 0 -8 z" />
      </g>
      <SVGPerson x="100" y="240" scale="1.7" type="grandma" pose="hug-right" />
      <SVGRobot x="190" y="232" scale="1.05" />
    </>
  ),

  // ── CHRISTMAS ──
  'xmas-tree': () => (
    <>
      {/* tree */}
      <g transform="translate(80 200)">
        <path d="M 0 -80 L -28 -40 L -16 -40 L -36 -10 L -20 -10 L -40 24 L 40 24 L 20 -10 L 36 -10 L 16 -40 L 28 -40 Z" fill="#2E7D5C" />
        <rect x="-6" y="24" width="12" height="14" fill="#8B4513" />
        <circle cx="-12" cy="-30" r="4" fill="#FFE066" />
        <circle cx="8" cy="-10" r="4" fill="#FF6B6B" />
        <circle cx="-20" cy="6" r="4" fill="#FF6B6B" />
        <circle cx="16" cy="14" r="4" fill="#FFE066" />
        <path d="M 0 -84 l 4 0 l 0 -10 l 4 0 l -6 -8 l -6 8 l 4 0 l 0 10 z" fill="#FFE066" />
      </g>
      {/* snow */}
      <g fill="#fff" opacity="0.85">
        {[[180,40],[230,80],[280,60],[160,140],[300,180],[170,80]].map(([cx,cy],i)=>(
          <circle key={i} cx={cx} cy={cy} r="3" />
        ))}
      </g>
      <SVGRobot x="220" y="262" scale="1.15" wearing="hat-red" />
    </>
  ),

  // ── NEW YEAR / DEFAULT ──
  'newyear-fireworks': () => (
    <>
      {/* fireworks */}
      <g stroke="#FFE066" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.85">
        <g transform="translate(80 80)">
          {[0,45,90,135,180,225,270,315].map(a=>(
            <line key={a} x1="0" y1="0" x2={Math.cos(a*Math.PI/180)*20} y2={Math.sin(a*Math.PI/180)*20} />
          ))}
        </g>
        <g transform="translate(240 70)" stroke="#FF7BAB">
          {[0,60,120,180,240,300].map(a=>(
            <line key={a} x1="0" y1="0" x2={Math.cos(a*Math.PI/180)*16} y2={Math.sin(a*Math.PI/180)*16} />
          ))}
        </g>
        <g transform="translate(160 50)" stroke="#A78BFA">
          {[0,45,90,135,180,225,270,315].map(a=>(
            <line key={a} x1="0" y1="0" x2={Math.cos(a*Math.PI/180)*14} y2={Math.sin(a*Math.PI/180)*14} />
          ))}
        </g>
      </g>
      <SVGPerson x="90" y="248" scale="1.4" type="friend" pose="wave" />
      <SVGRobot x="160" y="248" scale="1.05" />
      <SVGPerson x="230" y="248" scale="1.4" type="casual" pose="wave" />
    </>
  ),

  'default-friends': () => (
    <>
      {/* gift box pile */}
      <g transform="translate(60 280)">
        <rect x="-14" y="-22" width="28" height="22" rx="2" fill="#FF7BAB" />
        <rect x="-2" y="-22" width="4" height="22" fill="#FFE066" />
        <rect x="-14" y="-12" width="28" height="3" fill="#FFE066" />
      </g>
      <g transform="translate(280 280)">
        <rect x="-16" y="-26" width="32" height="26" rx="2" fill="#4FC9B5" />
        <rect x="-2" y="-26" width="4" height="26" fill="#fff" />
        <rect x="-16" y="-15" width="32" height="3" fill="#fff" />
      </g>
      {/* sparkles */}
      <g fill="#FFE066">
        <path d="M 100 80 l 2 0 l 0 -6 l 1.5 0 l 0 6 l 6 0 l 0 1.5 l -6 0 l 0 6 l -1.5 0 l 0 -6 l -2 0 z" />
        <path d="M 240 70 l 2 0 l 0 -6 l 1.5 0 l 0 6 l 6 0 l 0 1.5 l -6 0 l 0 6 l -1.5 0 l 0 -6 l -2 0 z" />
      </g>
      <SVGPerson x="90" y="248" scale="1.4" type="casual" pose="wave" />
      <SVGRobot x="160" y="252" scale="1.05" />
      <SVGPerson x="230" y="248" scale="1.4" type="friend" pose="wave" />
    </>
  ),
};

// ─── SVG scene wrapper ───
function SVGScene({ rendererKey, viewBox = '0 0 320 360' }) {
  const r = SCENE_RENDERERS[rendererKey] || SCENE_RENDERERS['default-friends'];
  return (
    <svg viewBox={viewBox} width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ display: 'block' }}>
      {r()}
    </svg>
  );
}

Object.assign(window, { SVGRobot, SVGPerson, SVGScene, SCENE_RENDERERS });

// ─── Cute mascot — hedgehog with witty pose (Tesla-style) ───
function CuteHedgehog({ size = 200, holding = 'heart' }) {
  // holding: 'heart' | 'coin' | 'gift' | null
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 200 180" style={{ display: 'block' }}>
      {/* shadow */}
      <ellipse cx="100" cy="166" rx="58" ry="6" fill="#000" opacity="0.12" />

      {/* feet */}
      <ellipse cx="76" cy="158" rx="9" ry="6" fill="#7A4A2A" />
      <ellipse cx="124" cy="158" rx="9" ry="6" fill="#7A4A2A" />

      {/* body — spiky back */}
      <g>
        <ellipse cx="100" cy="110" rx="58" ry="50" fill="#A87850" />
        {/* spikes */}
        <g fill="#5C3A24">
          {Array.from({ length: 11 }).map((_, i) => {
            const angle = -150 + i * 18; // top arc
            const r = 50;
            const x = 100 + Math.cos(angle * Math.PI / 180) * r;
            const y = 110 + Math.sin(angle * Math.PI / 180) * r;
            const tx = 100 + Math.cos(angle * Math.PI / 180) * (r + 10);
            const ty = 110 + Math.sin(angle * Math.PI / 180) * (r + 10);
            return <path key={i} d={`M ${x - 3} ${y} L ${tx} ${ty} L ${x + 3} ${y} Z`} />;
          })}
        </g>
        {/* additional spike layer */}
        <g fill="#7A4A2A" opacity="0.85">
          {Array.from({ length: 10 }).map((_, i) => {
            const angle = -148 + i * 20;
            const r = 38;
            const x = 100 + Math.cos(angle * Math.PI / 180) * r;
            const y = 110 + Math.sin(angle * Math.PI / 180) * r;
            const tx = 100 + Math.cos(angle * Math.PI / 180) * (r + 8);
            const ty = 110 + Math.sin(angle * Math.PI / 180) * (r + 8);
            return <path key={i} d={`M ${x - 2.5} ${y} L ${tx} ${ty} L ${x + 2.5} ${y} Z`} />;
          })}
        </g>
      </g>

      {/* face — lighter belly area */}
      <ellipse cx="100" cy="118" rx="44" ry="36" fill="#F4DDB8" />

      {/* nose tip (pointed) */}
      <path d="M 60 102 Q 50 100, 48 108 Q 50 116, 64 116" fill="#F4DDB8" />
      <ellipse cx="50" cy="110" rx="5" ry="4" fill="#1a1a1a" />
      <circle cx="48" cy="108" r="1.2" fill="#fff" />

      {/* eyes — closed happy crescents */}
      <path d="M 78 100 Q 84 92, 90 100" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M 116 100 Q 122 92, 128 100" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />

      {/* cheeks */}
      <circle cx="78" cy="118" r="6" fill="#FF7BAB" opacity="0.55" />
      <circle cx="124" cy="118" r="6" fill="#FF7BAB" opacity="0.55" />

      {/* mouth — open laugh */}
      <path d="M 92 124 Q 100 134, 110 124 Q 108 138, 100 138 Q 92 138, 92 124 Z" fill="#C72028" />
      <path d="M 96 132 Q 100 136, 104 132" stroke="#fff" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {/* tiny ear */}
      <ellipse cx="86" cy="76" rx="6" ry="8" fill="#7A4A2A" transform="rotate(-20 86 76)" />

      {/* hand/arm holding something */}
      {holding === 'heart' && (
        <g>
          <path d="M 158 130 Q 152 124, 144 130 Q 150 140, 158 144 Q 166 140, 172 130 Q 164 124, 158 130 Z" fill="#EC4899" />
          <ellipse cx="142" cy="130" rx="6" ry="5" fill="#A87850" />
        </g>
      )}
      {holding === 'coin' && (
        <g>
          <circle cx="156" cy="132" r="14" fill="#FFE066" />
          <circle cx="156" cy="132" r="14" fill="none" stroke="#D4AF37" strokeWidth="2" />
          <text x="156" y="138" textAnchor="middle" fontSize="14" fontWeight="800" fill="#8B6914">₩</text>
          <ellipse cx="142" cy="132" rx="6" ry="5" fill="#A87850" />
        </g>
      )}
      {holding === 'gift' && (
        <g transform="translate(150 124)">
          <rect x="-12" y="-2" width="24" height="20" rx="2" fill="#4FC9B5" />
          <rect x="-2" y="-2" width="4" height="20" fill="#FFE066" />
          <rect x="-12" y="6" width="24" height="3" fill="#FFE066" />
          <ellipse cx="-14" cy="6" rx="5" ry="4" fill="#A87850" />
        </g>
      )}

      {/* sparkle near head */}
      <g fill="#FFE066">
        <path d="M 30 60 l 2 0 l 0 -8 l 2 0 l 0 8 l 8 0 l 0 2 l -8 0 l 0 8 l -2 0 l 0 -8 l -2 0 z" />
        <path d="M 170 60 l 1.5 0 l 0 -6 l 1.5 0 l 0 6 l 6 0 l 0 1.5 l -6 0 l 0 6 l -1.5 0 l 0 -6 l -1.5 0 z" opacity="0.7" />
      </g>
    </svg>
  );
}

window.CuteHedgehog = CuteHedgehog;
