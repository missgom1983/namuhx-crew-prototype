// screens-host.jsx — Host-side flow screens

// ─── 01 · PDP — Product Detail Page with 함께 선물하기 CTA ───
function ScreenPDP({ nav }) {
  const [color, setColor] = React.useState('night');
  const [tab, setTab] = React.useState('purchase'); // 'subscribe' | 'purchase'
  const [scrolled, setScrolled] = React.useState(0);

  return (
    <div className="pscroll" onScroll={(e) => setScrolled(e.target.scrollTop)}
         style={{ height: '100%', overflowY: 'auto', background: '#fff', position: 'relative' }}>
      {/* nav bar — floating glass */}
      <div style={{
        position: 'sticky', top: 0, zIndex: 30,
        padding: '60px 16px 8px',
        background: scrolled > 40 ? 'rgba(255,255,255,0.85)' : 'transparent',
        backdropFilter: scrolled > 40 ? 'blur(16px) saturate(180%)' : 'none',
        WebkitBackdropFilter: scrolled > 40 ? 'blur(16px) saturate(180%)' : 'none',
        transition: 'background .2s, backdrop-filter .2s',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.85)', display: 'grid', placeItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
          <Ico.Back />
        </div>
        {scrolled > 100 && (
          <div style={{ position: 'absolute', left: '50%', top: '60%', transform: 'translateX(-50%)', fontSize: 15, fontWeight: 600, opacity: Math.min(1, (scrolled - 100) / 60) }}>
            나무엑스 A1
          </div>
        )}
        <div style={{ display: 'flex', gap: 8 }}>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.85)', display: 'grid', placeItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
            <Ico.Heart />
          </div>
          <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.85)', display: 'grid', placeItems: 'center', boxShadow: '0 1px 3px rgba(0,0,0,0.08)' }}>
            <Ico.Share />
          </div>
        </div>
      </div>

      {/* hero: product image */}
      <div style={{
        position: 'relative',
        background: color === 'night'
          ? 'linear-gradient(180deg, #f3f4f6 0%, #e5e7eb 100%)'
          : 'linear-gradient(180deg, #f9fafb 0%, #f3f4f6 100%)',
        marginTop: -8, paddingTop: 20, paddingBottom: 24,
      }}>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '16px 0' }}>
          <NamuhA1 size={260} view="front" color={color} />
        </div>
        {/* color picker */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, padding: '8px 16px 0' }}>
          {[
            { id: 'night', name: 'Night Gray', hex: '#2a2a2e' },
            { id: 'dawn', name: 'Dawn White', hex: '#f5f5f0' },
          ].map(c => (
            <button key={c.id} className="tap" onClick={() => setColor(c.id)} style={{
              display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px',
              background: color === c.id ? '#fff' : 'transparent',
              border: color === c.id ? '1px solid #d4d4d8' : '1px solid transparent',
              borderRadius: 999, cursor: 'pointer',
              boxShadow: color === c.id ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
            }}>
              <span style={{ width: 18, height: 18, borderRadius: '50%', background: c.hex, boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.08)', outline: color === c.id ? `2px solid ${T.mint}` : 'none', outlineOffset: 2 }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: T.ink2 }}>{c.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* product title + rating */}
      <div style={{ padding: '24px 24px 16px', borderBottom: `1px solid ${T.line2}` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <Pill tone="navy" size="xs">NAMUHX</Pill>
          <Pill tone="mint" size="xs"><Ico.Sparkle style={{ width: 10, height: 10 }} /> New</Pill>
        </div>
        <H size={26} weight={700} style={{ marginBottom: 6 }}>나무엑스 A1</H>
        <Txt size={14} color={T.ink3}>우리집 첫 웰니스 로봇</Txt>
        <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginTop: 10 }}>
          <Ico.Star style={{ color: T.warning }} />
          <Txt size={13} weight={600} color={T.ink2}>4.9</Txt>
          <Txt size={13} color={T.ink3}>(9,999+) · 월 5,000+ 배송</Txt>
        </div>
      </div>

      {/* tab segmented */}
      <div style={{ padding: '20px 20px 0' }}>
        <div style={{ display: 'flex', background: T.line2, borderRadius: 14, padding: 4 }}>
          {[
            { id: 'subscribe', label: '구독하기', sub: '월 51,900원~' },
            { id: 'purchase', label: '일시불 구매하기', sub: '3,122,000원' },
          ].map(t => (
            <button key={t.id} className="tap" onClick={() => setTab(t.id)} style={{
              flex: 1, padding: '11px 12px', border: 'none', cursor: 'pointer',
              background: tab === t.id ? '#fff' : 'transparent',
              borderRadius: 10,
              boxShadow: tab === t.id ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
              transition: 'all .18s',
            }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: tab === t.id ? T.ink : T.ink3, letterSpacing: '-0.02em' }}>{t.label}</div>
              <div style={{ fontSize: 11, color: tab === t.id ? T.ink3 : T.ink4, marginTop: 2 }}>{t.sub}</div>
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT — purchase tab */}
      {tab === 'purchase' && (
        <div style={{ padding: '24px 20px 0' }} className="anim-fadeIn">
          {/* price block */}
          <div style={{ marginBottom: 20 }}>
            <Txt size={13} color={T.ink3}>일시불 구매가</Txt>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 4 }}>
              <span className="num" style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.03em' }}>3,122,000</span>
              <span style={{ fontSize: 18, fontWeight: 500, color: T.ink3 }}>원</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 8 }}>
              <Pill tone="mint" size="sm" style={{ background: T.mintTint }}>
                <Ico.Users style={{ width: 12, height: 12 }} />
                4명이 모이면 <b className="num" style={{ marginLeft: 2 }}>인당 780,500원</b>
              </Pill>
            </div>
          </div>

          {/* ★ KEY: Crew highlight card — Apple-style gradient with sparkle ★ */}
          <div className="anim-fadeUp" style={{
            position: 'relative', padding: 18, borderRadius: 22,
            background: `linear-gradient(135deg, ${T.mint} 0%, ${T.mintDeep} 65%, #1A7A6E 100%)`,
            color: '#fff', overflow: 'hidden',
            boxShadow: `0 12px 32px rgba(46,169,147,0.32), inset 0 1px 0 rgba(255,255,255,0.18)`,
          }}>
            {/* sparkles */}
            <div style={{ position: 'absolute', top: 10, right: 18, color: 'rgba(255,255,255,0.55)' }}>
              <Ico.Sparkle style={{ width: 20, height: 20 }} />
            </div>
            <div style={{ position: 'absolute', top: 36, right: 56, color: 'rgba(255,255,255,0.32)' }}>
              <Ico.Sparkle style={{ width: 11, height: 11 }} />
            </div>
            <div style={{ position: 'absolute', bottom: 14, right: 24, color: 'rgba(255,255,255,0.32)' }}>
              <Ico.Sparkle style={{ width: 14, height: 14 }} />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <Pill size="xs" style={{ background: 'rgba(255,255,255,0.22)', color: '#fff', backdropFilter: 'blur(6px)' }}>NEW</Pill>
              <Txt size={11} weight={600} color="rgba(255,255,255,0.9)" style={{ letterSpacing: '0.02em', textTransform: 'uppercase' }}>Wellness Crew</Txt>
            </div>
            <div style={{ fontSize: 22, fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.2, marginTop: 6 }}>
              친구들과 함께 선물하면<br />
              <span style={{ color: '#FFE6A0' }}>인당 약 78만원으로</span>
            </div>
            <Txt size={13} color="rgba(255,255,255,0.85)" style={{ display: 'block', marginTop: 8 }}>
              지금 시작하면 결제 의무 없이 친구만 모아도 OK
            </Txt>
            <Btn variant="ghost" onClick={() => nav('onboarding')} full
              style={{ marginTop: 16, height: 50, background: 'rgba(255,255,255,0.18)', border: '1px solid rgba(255,255,255,0.28)', backdropFilter: 'blur(10px)', fontSize: 16, fontWeight: 700 }}
              trailing={<Ico.Arrow />}>
              함께 선물하기 시작
            </Btn>
            <Txt size={11} color="rgba(255,255,255,0.7)" style={{ display: 'block', marginTop: 10, textAlign: 'center' }}>
              <Ico.Lock style={{ verticalAlign: -2, marginRight: 3 }} /> 미달성 시 전원 자동 환불 · 안전 결제
            </Txt>
          </div>

          {/* options preview */}
          <div style={{ marginTop: 24 }}>
            <H size={15} weight={600} style={{ marginBottom: 12 }}>구매 옵션</H>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {[
                { l: '색상', v: color === 'night' ? 'Night Gray' : 'Dawn White' },
                { l: '결제 방식', v: '일시불' },
                { l: '수량', v: '1개' },
              ].map(o => (
                <div key={o.l} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 14px', background: T.line2, borderRadius: 12 }}>
                  <Txt size={13} color={T.ink3}>{o.l}</Txt>
                  <Txt size={13} weight={600}>{o.v}</Txt>
                </div>
              ))}
            </div>
          </div>

          {/* trust signals */}
          <div style={{ marginTop: 24, padding: 16, background: '#FAFAFC', borderRadius: 16, display: 'flex', gap: 12 }}>
            {[
              { t: '무료 배송', d: '내일 도착' },
              { t: '7일 무료 반품', d: '간편 회수' },
              { t: '3년 보증', d: '공식 A/S' },
            ].map(b => (
              <div key={b.t} style={{ flex: 1, textAlign: 'center' }}>
                <Txt size={11} weight={700}>{b.t}</Txt><br />
                <Txt size={10} color={T.ink3}>{b.d}</Txt>
              </div>
            ))}
          </div>

          {/* photo reviews */}
          <div style={{ marginTop: 28 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <H size={15} weight={600}>포토 리뷰 <Txt size={13} color={T.ink4}>(999+)</Txt></H>
              <Txt size={12} color={T.ink3}>전체 보기 ›</Txt>
            </div>
            <div style={{ display: 'flex', gap: 8, overflowX: 'auto' }} className="pscroll">
              {[1,2,3,4].map(i => (
                <div key={i} style={{
                  flex: '0 0 96px', height: 96, borderRadius: 14,
                  background: `linear-gradient(${135 + i*15}deg, hsl(${i*40}, 30%, 88%), hsl(${i*40 + 30}, 30%, 92%))`,
                  position: 'relative',
                }}>
                  <div style={{ position: 'absolute', bottom: 6, left: 6, color: '#fff', fontSize: 9, fontWeight: 600 }}>★ 5.0</div>
                </div>
              ))}
            </div>
          </div>

          {/* SPACE for sticky bar */}
          <div style={{ height: 130 }} />
        </div>
      )}

      {/* CONTENT — subscribe tab (kept light, not the focus) */}
      {tab === 'subscribe' && (
        <div style={{ padding: '24px 20px 140px' }} className="anim-fadeIn">
          <div>
            <Txt size={13} color={T.ink3}>월 구독료</Txt>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 4 }}>
              <span className="num" style={{ fontSize: 32, fontWeight: 700, letterSpacing: '-0.03em' }}>51,900</span>
              <span style={{ fontSize: 18, fontWeight: 500, color: T.ink3 }}>원 / 월~</span>
            </div>
            <Txt size={12} color={T.ink4}>구독가입비 -100,000원 · 설치비 -150,000원 면제</Txt>
          </div>
          <div style={{ marginTop: 24, padding: 16, background: T.line2, borderRadius: 16 }}>
            <Txt size={13} color={T.ink2}>
              구독 옵션 (다이렉트 / 방문상담 / 전화상담) 은 기존 PDP 그대로 유지됩니다.
            </Txt>
          </div>
        </div>
      )}

      {/* sticky bottom CTA */}
      <StickyCTA>
        {tab === 'purchase' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <Btn variant="primary" onClick={() => nav('onboarding')} height={56}
              leading={<Ico.Gift />}>
              친구들과 함께 선물하기
              <span style={{ marginLeft: 4, fontSize: 12, opacity: 0.85, fontWeight: 500 }}>인당 78만원~</span>
            </Btn>
            <Btn variant="outline" height={48} style={{ fontSize: 15 }}>혼자 구매하기 <span style={{ fontSize: 13, color: T.ink3, fontWeight: 500, marginLeft: 4 }}>3,122,000원</span></Btn>
          </div>
        ) : (
          <div style={{ display: 'flex', gap: 8 }}>
            <Btn variant="primary" height={56}>다이렉트 구독</Btn>
          </div>
        )}
      </StickyCTA>
    </div>
  );
}

// ─── 02 · Service Onboarding — full-page, animated, gamified ───
function ScreenOnboarding({ nav }) {
  const [step, setStep] = React.useState(0);
  const slides = [
    {
      tag: 'WELLNESS CREW',
      title: <>나누면<br/>더 커지는 마음</>,
      sub: '친구들과 함께라면 부담 없이, 더 큰 선물을. 결혼 · 집들이 · 효도 · 어떤 순간에도.',
      visual: 'crew',
    },
    {
      tag: 'HOW IT WORKS',
      title: <>3단계로<br/>끝나는 N빵 선물</>,
      sub: '인원 정하고 → 친구들이 결제 → 7일 후 자동 발송',
      visual: 'steps',
    },
    {
      tag: 'PEACE OF MIND',
      title: <>안심하고<br/>시작하세요</>,
      sub: '결제는 친구들 동의 후. 미달성 시 전원 자동 환불. 호스트 부담 0.',
      visual: 'safety',
    },
  ];
  const cur = slides[step];

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#0A1F44', color: '#fff', position: 'relative', overflow: 'hidden' }}>
      {/* aurora background */}
      <div style={{ position: 'absolute', inset: 0, background: `
        radial-gradient(circle at 20% 10%, rgba(79,201,181,0.35), transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(56,189,248,0.25), transparent 50%),
        radial-gradient(circle at 50% 50%, rgba(236,72,153,0.12), transparent 50%)
      `, transition: 'opacity .5s' }} />
      <div style={{ position: 'absolute', inset: 0, backdropFilter: 'blur(40px)', WebkitBackdropFilter: 'blur(40px)' }} />

      {/* top bar */}
      <div style={{ position: 'relative', zIndex: 2, padding: '60px 20px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button className="tap" onClick={() => nav('pdp')} style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.2)', display: 'grid', placeItems: 'center', cursor: 'pointer', color: '#fff' }}>
          <Ico.Close />
        </button>
        <div style={{ display: 'flex', gap: 6 }}>
          {slides.map((_, i) => (
            <div key={i} style={{
              width: i === step ? 22 : 6, height: 6, borderRadius: 3,
              background: i === step ? T.mint : 'rgba(255,255,255,0.3)',
              transition: 'width .3s, background .3s',
            }} />
          ))}
        </div>
        <div style={{ width: 36 }} />
      </div>

      {/* content */}
      <div style={{ position: 'relative', zIndex: 2, flex: 1, padding: '20px 24px 24px', display: 'flex', flexDirection: 'column' }} key={step} className="anim-fadeUp">
        <Txt size={11} weight={700} color="rgba(255,255,255,0.6)" style={{ letterSpacing: '0.18em' }}>{cur.tag}</Txt>
        <H size={40} weight={800} color="#fff" ls="-0.04em" style={{ marginTop: 12, lineHeight: 1.05 }}>{cur.title}</H>
        <Txt size={15} color="rgba(255,255,255,0.78)" style={{ display: 'block', marginTop: 16, lineHeight: 1.55 }}>{cur.sub}</Txt>

        {/* visual area */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginTop: 8 }}>
          {cur.visual === 'crew' && <OnboardCrew />}
          {cur.visual === 'steps' && <OnboardSteps />}
          {cur.visual === 'safety' && <OnboardSafety />}
        </div>
      </div>

      {/* bottom CTA */}
      <div style={{ position: 'relative', zIndex: 2, padding: '12px 24px 40px' }}>
        {step < slides.length - 1 ? (
          <Btn variant="primary" onClick={() => setStep(step + 1)} trailing={<Ico.Arrow />}
            style={{ background: '#fff', color: T.ink, boxShadow: '0 6px 18px rgba(0,0,0,0.22)' }}>
            계속
          </Btn>
        ) : (
          <Btn variant="primary" onClick={() => nav('crew_size')} trailing={<Ico.Arrow />}
            style={{ background: T.mint, color: '#fff', boxShadow: '0 6px 20px rgba(79,201,181,0.4)' }}>
            크루 만들기 시작
          </Btn>
        )}
      </div>
    </div>
  );
}

// ─── Onboarding visuals ───
function OnboardCrew() {
  // 4 friends contributing into a gift box at center
  const friends = [
    { name: '나', x: 50, y: 8, scale: 1, delay: 0 },
    { name: '원', x: 8, y: 35, scale: 0.95, delay: 0.1 },
    { name: '지', x: 92, y: 35, scale: 0.95, delay: 0.2 },
    { name: '은', x: 50, y: 70, scale: 0.9, delay: 0.3 },
  ];
  return (
    <div style={{ width: 280, height: 280, position: 'relative' }}>
      {/* center gift box */}
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', width: 110, height: 110, borderRadius: 22, background: 'linear-gradient(135deg, #4FC9B5, #2EA993)', boxShadow: '0 16px 40px rgba(79,201,181,0.5), inset 0 1px 0 rgba(255,255,255,0.3)', display: 'grid', placeItems: 'center', animation: 'gentle-pulse 3s ease-in-out infinite' }}>
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: '50%', width: 8, background: 'rgba(255,255,255,0.5)', transform: 'translateX(-50%)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 8, background: 'rgba(255,255,255,0.5)', transform: 'translateY(-50%)' }} />
        <div style={{ position: 'absolute', top: -22, left: '50%', transform: 'translateX(-50%)', fontSize: 32 }}>🎁</div>
      </div>

      {/* dotted contribution lines */}
      <svg width="280" height="280" style={{ position: 'absolute', inset: 0 }}>
        {friends.map((f, i) => (
          <line key={i} x1={140} y1={140} x2={f.x * 2.8} y2={f.y * 2.8}
            stroke="rgba(79,201,181,0.45)" strokeWidth="2" strokeDasharray="3 4">
            <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="1.4s" repeatCount="indefinite" />
          </line>
        ))}
      </svg>

      {/* friends */}
      {friends.map((f, i) => (
        <div key={i} style={{
          position: 'absolute', left: `${f.x}%`, top: `${f.y}%`,
          transform: `translate(-50%, -50%) scale(${f.scale})`,
          animation: `pop .6s ${f.delay}s cubic-bezier(.2,.7,.3,1) both`,
        }}>
          <Avatar name={f.name} size={64} style={{ boxShadow: '0 8px 24px rgba(0,0,0,0.25)' }} />
          <div style={{ marginTop: 6, textAlign: 'center', fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.85)' }}>
            {['김태희', '장원영', '전지현', '차은우'][i]}
          </div>
        </div>
      ))}
    </div>
  );
}
function OnboardSteps() {
  const steps = [
    { n: '01', t: '인원·금액 정하기', d: '4명 · 인당 78만원', icon: '👥' },
    { n: '02', t: '친구들이 결제', d: '카카오·토스로 1초', icon: '💳' },
    { n: '03', t: '7일 후 자동 발송', d: '미달성 시 전원 환불', icon: '📦' },
  ];
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: 12, paddingTop: 24 }}>
      {steps.map((s, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'center', gap: 14, padding: '16px 18px',
          borderRadius: 18, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(10px)',
          animation: `fadeUp .5s ${i * 0.12}s cubic-bezier(.2,.7,.3,1) both`,
        }}>
          <div style={{ width: 52, height: 52, borderRadius: 16, background: 'rgba(79,201,181,0.18)', display: 'grid', placeItems: 'center', fontSize: 26, flexShrink: 0 }}>{s.icon}</div>
          <div style={{ flex: 1 }}>
            <Txt size={11} weight={700} color="rgba(79,201,181,0.9)" style={{ letterSpacing: '0.1em' }}>{s.n}</Txt>
            <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginTop: 2 }}>{s.t}</div>
            <Txt size={12} color="rgba(255,255,255,0.6)">{s.d}</Txt>
          </div>
        </div>
      ))}
    </div>
  );
}
function OnboardSafety() {
  const items = [
    { t: '결제 의무 없음', d: '버튼은 모집 시작일 뿐', icon: <Ico.Sparkle /> },
    { t: '미달성 시 자동 환불', d: '7일 내 모든 결제 취소', icon: <Ico.Lock /> },
    { t: '개인정보 최소 수집', d: '번호는 알림톡 발송용', icon: <Ico.Bell /> },
  ];
  return (
    <div style={{ width: '100%', paddingTop: 16 }}>
      {/* shield illustration */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 24 }}>
        <div style={{ width: 120, height: 130, position: 'relative', animation: 'gentle-pulse 3s ease-in-out infinite' }}>
          <svg width="120" height="130" viewBox="0 0 120 130">
            <defs>
              <linearGradient id="shield-g" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4FC9B5" />
                <stop offset="100%" stopColor="#2EA993" />
              </linearGradient>
            </defs>
            <path d="M60 5 L110 25 Q110 70 60 125 Q10 70 10 25 Z" fill="url(#shield-g)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
            <path d="M40 65 L55 80 L82 50" stroke="#fff" strokeWidth="6" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {items.map((it, i) => (
          <div key={i} style={{
            display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px',
            borderRadius: 14, background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)',
            animation: `fadeUp .4s ${i * 0.08}s cubic-bezier(.2,.7,.3,1) both`,
          }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: 'rgba(79,201,181,0.18)', color: T.mint, display: 'grid', placeItems: 'center' }}>{it.icon}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{it.t}</div>
              <Txt size={12} color="rgba(255,255,255,0.65)">{it.d}</Txt>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── 03 · Crew Step 1 — Size & split mode ───
function ScreenCrewSize({ nav, state, setState }) {
  const [size, setSize] = React.useState(state.size || 4);
  const [mode, setMode] = React.useState(state.mode || 'equal');
  const TOTAL = 3122000;
  const per = Math.round(TOTAL / size);
  const animated = useCountUp(per, 600, [per]);

  const save = () => { setState({ ...state, size, mode }); nav('crew_members'); };

  return (
    <CrewStepShell step={1} totalSteps={3} title="몇 명이 함께하나요?" sub="나를 포함한 전체 인원수예요" onClose={() => nav('pdp')} onBack={() => nav('onboarding')}
      cta={<Btn variant="primary" onClick={save}>다음</Btn>}>
      {/* stepper */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, padding: '40px 0 16px' }}>
        <button className="tap" onClick={() => size > 2 && setSize(size - 1)} style={{
          width: 56, height: 56, borderRadius: '50%', border: `1px solid ${T.line}`, background: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer',
          opacity: size > 2 ? 1 : 0.35,
        }}>
          <Ico.Minus />
        </button>
        <div className="num" style={{ fontSize: 64, fontWeight: 700, letterSpacing: '-0.04em', minWidth: 110, textAlign: 'center', lineHeight: 1 }}>
          {size}<span style={{ fontSize: 22, marginLeft: 8, color: T.ink3 }}>명</span>
        </div>
        <button className="tap" onClick={() => size < 12 && setSize(size + 1)} style={{
          width: 56, height: 56, borderRadius: '50%', border: 'none', background: T.mint, color: '#fff', display: 'grid', placeItems: 'center', cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(79,201,181,0.32)',
        }}>
          <Ico.Plus />
        </button>
      </div>

      {/* recommended chips */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginTop: 8 }}>
        <Txt size={12} color={T.ink4} style={{ marginRight: 4, alignSelf: 'center' }}>자주 쓰여요</Txt>
        {[2, 4, 6, 8].map(n => (
          <button key={n} className="tap" onClick={() => setSize(n)} style={{
            padding: '8px 14px', borderRadius: 999, cursor: 'pointer',
            background: size === n ? T.ink : '#fff',
            color: size === n ? '#fff' : T.ink2,
            border: size === n ? 'none' : `1px solid ${T.line}`,
            fontSize: 13, fontWeight: 600,
          }}>{n}명</button>
        ))}
      </div>

      {/* split mode */}
      <div style={{ marginTop: 36, padding: '0 4px' }}>
        <Txt size={13} weight={600} color={T.ink2}>분담 방식</Txt>
        <div style={{ display: 'flex', background: T.line2, borderRadius: 12, padding: 4, marginTop: 10 }}>
          {[
            { id: 'equal', label: '균등 분배', d: 'N으로 똑같이' },
            { id: 'custom', label: '맞춤 분배', d: '사람마다 다르게' },
          ].map(m => (
            <button key={m.id} className="tap" onClick={() => setMode(m.id)} style={{
              flex: 1, padding: '12px', border: 'none', cursor: 'pointer',
              background: mode === m.id ? '#fff' : 'transparent',
              borderRadius: 10,
              boxShadow: mode === m.id ? '0 1px 3px rgba(0,0,0,0.08)' : 'none',
            }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: mode === m.id ? T.ink : T.ink3 }}>{m.label}</div>
              <Txt size={11} color={T.ink4}>{m.d}</Txt>
            </button>
          ))}
        </div>
      </div>

      {/* Live per-person price */}
      <div style={{ marginTop: 32, padding: '22px 22px', borderRadius: 22, background: `linear-gradient(135deg, ${T.mintSoft} 0%, #C9F3E8 100%)`, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 12, right: 14, color: T.mint }}>
          <Ico.Sparkle style={{ width: 18, height: 18 }} />
        </div>
        <Txt size={12} weight={600} color={T.mintDeep} style={{ letterSpacing: '0.04em' }}>인당 결제 금액</Txt>
        <div className="num" style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.03em', marginTop: 6, color: T.ink }}>
          {won(animated)}<span style={{ fontSize: 18, fontWeight: 600, color: T.ink2 }}>원</span>
        </div>
        <div style={{ marginTop: 4, fontSize: 12, color: T.ink3 }}>
          나무엑스 A1 · 3,122,000원 ÷ {size}명
        </div>
      </div>
    </CrewStepShell>
  );
}

// ─── 04 · Crew Step 2 — Members ───
function ScreenCrewMembers({ nav, state, setState }) {
  const TOTAL = 3122000;
  const size = state.size || 4;
  const per = Math.round(TOTAL / size);
  const [members, setMembers] = React.useState(state.members || [
    { name: '김태희', phone: '010-1234-5678', self: true, role: '주최자' },
    { name: '장원영', phone: '010-2345-6789' },
    { name: '전지현', phone: '010-3456-7890' },
  ]);
  const need = size - members.length;

  const updateMember = (i, key, val) => {
    const copy = [...members]; copy[i] = { ...copy[i], [key]: val }; setMembers(copy);
  };
  const addMember = () => {
    if (members.length < size) setMembers([...members, { name: '', phone: '' }]);
  };

  return (
    <CrewStepShell step={2} totalSteps={3} title="친구들을 불러볼게요" sub={`나 포함 ${size}명 · 인당 ${won(per)}원`}
      onClose={() => nav('pdp')} onBack={() => nav('crew_size')}
      cta={<Btn variant="primary" onClick={() => { setState({ ...state, members }); nav('crew_invite'); }}
              disabled={members.length < size || members.some(m => !m.name)}>다음</Btn>}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 24 }}>
        {members.map((m, i) => (
          <div key={i} style={{
            background: m.self ? T.mintSoft : '#fff',
            border: m.self ? `1.5px solid ${T.mint}` : `1px solid ${T.line}`,
            borderRadius: 16, padding: 14,
            display: 'flex', alignItems: 'center', gap: 12,
          }}>
            <Avatar name={m.name || `${i + 1}`} size={44} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <input value={m.name} onChange={(e) => updateMember(i, 'name', e.target.value)} placeholder="이름"
                  disabled={m.self}
                  style={{ border: 'none', outline: 'none', background: 'transparent', fontSize: 14, fontWeight: 700, color: T.ink, padding: 0, fontFamily: 'inherit', width: '100%' }} />
                {m.self && <Pill tone="mint" size="xs">나</Pill>}
              </div>
              <div className="num" style={{ fontSize: 12, color: T.ink3, marginTop: 2 }}>{m.phone}</div>
            </div>
            <div className="num" style={{ fontSize: 13, fontWeight: 700, color: T.ink }}>{won(per)}원</div>
          </div>
        ))}
        {need > 0 && (
          <button className="tap" onClick={addMember} style={{
            border: `1.5px dashed ${T.line}`, borderRadius: 16, padding: 14, background: 'transparent',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, cursor: 'pointer',
            color: T.ink3, fontSize: 13, fontWeight: 600,
          }}>
            <Ico.Plus /> 크루원 추가 <span style={{ color: T.mintDeep }}>(1명 더 필요)</span>
          </button>
        )}
      </div>

      {/* Privacy notice */}
      <div style={{ marginTop: 16, padding: '12px 14px', background: T.line2, borderRadius: 12, display: 'flex', alignItems: 'center', gap: 8 }}>
        <Ico.Info style={{ color: T.ink4, width: 14, height: 14, flexShrink: 0 }} />
        <Txt size={11} color={T.ink3}>친구 번호는 알림톡 발송에만 쓰여요</Txt>
      </div>
    </CrewStepShell>
  );
}

// ─── 05 · Crew Step 3 — Invitation theme/template/message ───

// Illustrated templates — each carries a unique scene + background + hip copy
const INVITE_TEMPLATES = [
  // ── Wedding (4 variants) ──
  {
    id: 'wedding-couple', themeId: 'wedding', name: '커플',
    headline: '결혼축하금\nN빵 가즈아 💍', sub: 'WELLNESS CREW',
    bg: 'linear-gradient(160deg, #FFF5F2 0%, #FFE4E1 60%, #FFD6CE 100%)',
    accent: '#BE5A4F', scene: 'wedding-couple',
  },
  {
    id: 'wedding-bouquet', themeId: 'wedding', name: '부케',
    headline: '신혼선물\n진심으로 ㅊㅋ 💐', sub: 'CONGRATS BESTIE',
    bg: 'linear-gradient(160deg, #FFE4E6 0%, #FFC4C9 100%)',
    accent: '#BE185D', scene: 'wedding-bouquet',
  },
  {
    id: 'wedding-rings', themeId: 'wedding', name: '링',
    headline: '둘이 하나 됐어\n축의금 ㄱㄱ 💎', sub: 'TWO BECOME ONE',
    bg: 'linear-gradient(160deg, #FAF3E0 0%, #F0D8AC 100%)',
    accent: '#8B6914', scene: 'wedding-rings',
  },
  {
    id: 'wedding-confetti', themeId: 'wedding', name: '파티',
    headline: '파티 시작!\n한 명도 빠지지 마 🎉', sub: 'LET\'S PARTY',
    bg: 'linear-gradient(160deg, #E8F8F4 0%, #C9F0E2 100%)',
    accent: '#2EA993', scene: 'wedding-confetti',
  },
  // ── Housewarming ──
  {
    id: 'house-cozy', themeId: 'housewarm', name: '새집',
    headline: '집들이 선물\n다 같이 N빵 🏡', sub: 'NEW HOME · NEW VIBE',
    bg: 'linear-gradient(160deg, #F5EFE6 0%, #E8DCC8 100%)',
    accent: '#8B6F47', scene: 'house-cozy',
  },
  // ── Filial ──
  {
    id: 'parent-hug', themeId: 'parent', name: '효도',
    headline: '엄빠 깜놀시키자\n진짜 효도하기 🌸', sub: 'FOR OUR PARENTS',
    bg: 'linear-gradient(160deg, #FFF0F5 0%, #FFD6E5 100%)',
    accent: '#C2185B', scene: 'parent-hug',
  },
  // ── Christmas ──
  {
    id: 'xmas-tree', themeId: 'xmas', name: '트리',
    headline: '메리메리\nN빵스마스 🎄', sub: 'MERRY · CREW · MAS',
    bg: 'linear-gradient(160deg, #FEE6E6 0%, #D4E8D4 100%)',
    accent: '#C72028', scene: 'xmas-tree',
  },
  // ── New year ──
  {
    id: 'newyear-fireworks', themeId: 'newyear', name: '불꽃',
    headline: '새해엔 큰 거 한방\nN빵 ㄱㄱ ✨', sub: 'NEW YEAR · NEW US',
    bg: 'linear-gradient(160deg, #0F1B3D 0%, #1E3A8A 100%)',
    accent: '#FFE066', scene: 'newyear-fireworks', dark: true,
  },
  // ── Default ──
  {
    id: 'default-friends', themeId: 'default', name: '기본',
    headline: '같이 보내자\n혼자보단 N빵이 좋잖아 🎁', sub: 'BETTER TOGETHER',
    bg: 'linear-gradient(160deg, #F1F2F4 0%, #E5E7EB 100%)',
    accent: T.ink, scene: 'default-friends',
  },
];

const INVITE_THEMES = [
  { id: 'wedding', label: '결혼축하', emoji: '💐', msg: '얘들아~ 우석이 결혼 선물 N빵 가즈아 ㅋㅋ\n혼자 사면 312만원, 우리 4명이면 78만원\n링크 누르고 분담금만 결제하면 끝!' },
  { id: 'housewarm', label: '집들이', emoji: '🏡', msg: '드디어 내 집 마련 🥹\n축하 선물로 웰니스로봇 N빵 ㄱㄱ?\n링크 누르고 분담금만 쏘면 됨' },
  { id: 'parent', label: '효도', emoji: '🌸', msg: '엄빠한테 진짜 효도 한방 어때?\n혼자 하긴 부담스러운 거, 다 같이 모으자\n분담금만 결제하면 끝, 마음만 보태줘 🌸' },
  { id: 'xmas', label: '크리스마스', emoji: '🎄', msg: '🎄 메리메리 N빵스마스 🎄\n올해 산타는 우리! 다 같이 큰 선물 쏘자\n링크 콕 → 분담금 결제 → 끝!' },
  { id: 'newyear', label: '새해', emoji: '✨', msg: '새해엔 큰 선물로 시작 ✨\n혼자 못 사는 거, 다 같이 사면 N빵\n링크 누르고 합류해줘~' },
  { id: 'default', label: '기본', emoji: '🎁', msg: '같이 선물 N빵 어때?\n링크 누르고 분담금만 결제하면 끝!\n혼자 보단 같이 보내야 진짜지 🎁' },
];

// SVG decoration sets have been replaced by full illustrated scenes in scenes.jsx

// The illustrated invitation card itself
function InviteIllustration({ template, size = 'lg', style = {} }) {
  const tpl = template || INVITE_TEMPLATES[0];
  const isDark = tpl.dark;
  const SIZES = {
    lg: { aspect: '4/5', headline: 21, sub: 10, pad: 22, headlinePos: 28, scenePos: 88 },
    md: { aspect: '4/3', headline: 16, sub: 9, pad: 14, headlinePos: 16, scenePos: 56 },
    thumb: { aspect: '1', headline: 0, sub: 0, pad: 6, headlinePos: 0, scenePos: 0 },
  };
  const sizes = SIZES[size] || SIZES.lg;
  return (
    <div style={{
      position: 'relative', width: '100%', aspectRatio: sizes.aspect,
      background: tpl.bg, borderRadius: 18, overflow: 'hidden',
      boxShadow: '0 6px 20px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(0,0,0,0.04)',
      ...style,
    }}>
      {/* headline at top */}
      {sizes.headline > 0 && (
        <div style={{ position: 'absolute', top: sizes.headlinePos, left: sizes.pad, right: sizes.pad, textAlign: 'center', zIndex: 2 }}>
          <div style={{ fontSize: sizes.sub, fontWeight: 700, color: isDark ? 'rgba(255,255,255,0.7)' : tpl.accent, letterSpacing: '0.16em', textTransform: 'uppercase', opacity: isDark ? 1 : 0.85 }}>{tpl.sub}</div>
          <div style={{ fontSize: sizes.headline, fontWeight: 800, color: isDark ? '#fff' : tpl.accent, marginTop: 6, letterSpacing: '-0.02em', lineHeight: 1.2, whiteSpace: 'pre-line' }}>{tpl.headline}</div>
        </div>
      )}
      {/* illustrated scene */}
      <div style={{ position: 'absolute', inset: 0, paddingTop: sizes.scenePos, paddingBottom: sizes.pad / 2 }}>
        <SVGScene rendererKey={tpl.scene} />
      </div>
      {/* watermark for lg */}
      {size === 'lg' && (
        <div style={{ position: 'absolute', bottom: 10, left: 0, right: 0, textAlign: 'center', fontSize: 9, fontWeight: 700, letterSpacing: '0.18em', color: isDark ? 'rgba(255,255,255,0.55)' : tpl.accent, opacity: 0.65, zIndex: 2 }}>
          NAMUHX · WELLNESS CREW
        </div>
      )}
    </div>
  );
}

function ScreenCrewInvite({ nav, state, setState }) {
  const [theme, setTheme] = React.useState(state.theme || 'wedding');
  // Templates available for the active theme
  const themeTemplates = INVITE_TEMPLATES.filter(t => t.themeId === theme);
  const [templateId, setTemplateId] = React.useState(state.templateId || themeTemplates[0]?.id);
  const tpl = INVITE_TEMPLATES.find(t => t.id === templateId) || themeTemplates[0];
  const themeData = INVITE_THEMES.find(t => t.id === theme);
  const [msg, setMsg] = React.useState(state.msg || themeData.msg);

  // When theme changes, pick first template of new theme + reset message
  React.useEffect(() => {
    const list = INVITE_TEMPLATES.filter(t => t.themeId === theme);
    setTemplateId(list[0]?.id);
    setMsg(INVITE_THEMES.find(t => t.id === theme).msg);
  }, [theme]);

  return (
    <CrewStepShell step={3} totalSteps={3} title="어떤 분위기로 보낼까요?" sub="테마와 디자인을 선택하면 메시지가 자동으로 채워져요"
      onClose={() => nav('pdp')} onBack={() => nav('crew_members')}
      cta={<Btn variant="primary" onClick={() => { setState({ ...state, theme, templateId, msg }); nav('crew_sent'); }}>
        초대 보내기 ({Math.max(0, (state.members || []).length - 1) || 3}명)
      </Btn>}>

      {/* theme chips */}
      <div style={{ display: 'flex', gap: 8, overflowX: 'auto', margin: '20px -20px 0', padding: '0 20px' }} className="pscroll">
        {INVITE_THEMES.map(t => (
          <button key={t.id} className="tap" onClick={() => setTheme(t.id)} style={{
            flexShrink: 0, padding: '12px 16px', borderRadius: 14,
            background: theme === t.id ? T.ink : '#fff',
            color: theme === t.id ? '#fff' : T.ink,
            border: theme === t.id ? 'none' : `1px solid ${T.line}`,
            display: 'flex', alignItems: 'center', gap: 6,
            fontSize: 13, fontWeight: 600, cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}>
            <span>{t.emoji}</span> {t.label}
          </button>
        ))}
      </div>

      {/* big preview */}
      <div style={{ marginTop: 22 }}>
        <InviteIllustration template={tpl} size="lg" />
      </div>

      {/* template thumbnail strip */}
      <div style={{ marginTop: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
          <Txt size={12} weight={700} color={T.ink2}>디자인 선택</Txt>
          <Txt size={11} color={T.ink4}>{themeTemplates.length}개</Txt>
        </div>
        <div style={{ display: 'flex', gap: 8, overflowX: 'auto', margin: '0 -20px', padding: '0 20px 4px' }} className="pscroll">
          {themeTemplates.map(t => (
            <button key={t.id} className="tap" onClick={() => setTemplateId(t.id)} style={{
              flexShrink: 0, width: 76, border: 'none', background: 'none', padding: 0, cursor: 'pointer',
            }}>
              <div style={{
                borderRadius: 12, overflow: 'hidden',
                boxShadow: templateId === t.id ? `0 0 0 2.5px ${T.mint}, 0 4px 12px rgba(0,0,0,0.1)` : '0 1px 3px rgba(0,0,0,0.08)',
                transition: 'box-shadow .2s',
              }}>
                <InviteIllustration template={t} size="thumb" />
              </div>
              <Txt size={11} weight={templateId === t.id ? 700 : 500} color={templateId === t.id ? T.ink : T.ink3} style={{ display: 'block', marginTop: 6, textAlign: 'center' }}>{t.name}</Txt>
            </button>
          ))}
        </div>
      </div>

      {/* editable message */}
      <div style={{ marginTop: 24, borderRadius: 18, overflow: 'hidden', background: '#fff', boxShadow: '0 4px 16px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)' }}>
        <div style={{ padding: 14, borderBottom: `1px solid ${T.line2}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Txt size={12} weight={700} color={T.ink2}>💬 초대 메시지</Txt>
          <button className="tap" onClick={() => setMsg(themeData.msg)} style={{ border: 'none', background: 'none', fontSize: 11, color: T.mintDeep, fontWeight: 600, cursor: 'pointer' }}>↻ 기본</button>
        </div>
        <textarea value={msg} onChange={(e) => setMsg(e.target.value)} rows={4}
          style={{ width: '100%', border: 'none', outline: 'none', padding: 16, fontSize: 14, lineHeight: 1.6, color: T.ink2, fontFamily: 'inherit', resize: 'none', background: '#fff' }} />
        <div style={{ padding: '0 14px 12px' }}>
          <Txt size={11} color={T.ink4}>글자 수: {msg.length} / 200</Txt>
        </div>
      </div>
    </CrewStepShell>
  );
}

// ─── Shell for crew steps ───
function CrewStepShell({ step, totalSteps, title, sub, onClose, onBack, cta, children }) {
  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      {/* nav */}
      <div style={{ padding: '60px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button className="tap" onClick={onBack} style={{ width: 36, height: 36, borderRadius: '50%', background: 'transparent', border: 'none', display: 'grid', placeItems: 'center', cursor: 'pointer', color: T.ink2 }}>
          <Ico.Back />
        </button>
        <div style={{ fontSize: 14, fontWeight: 600 }}>크루 만들기</div>
        <button className="tap" onClick={onClose} style={{ width: 36, height: 36, borderRadius: '50%', background: 'transparent', border: 'none', display: 'grid', placeItems: 'center', cursor: 'pointer', color: T.ink2 }}>
          <Ico.Close />
        </button>
      </div>
      {/* progress */}
      <div style={{ padding: '8px 20px' }}>
        <div style={{ display: 'flex', gap: 6 }}>
          {Array.from({ length: totalSteps }).map((_, i) => (
            <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: i < step ? T.mint : T.line2, transition: 'background .3s' }} />
          ))}
        </div>
        <Txt size={11} weight={600} color={T.mintDeep} style={{ marginTop: 8, letterSpacing: '0.08em' }}>STEP {step} / {totalSteps}</Txt>
      </div>

      {/* body */}
      <div className="pscroll" style={{ flex: 1, overflowY: 'auto', padding: '4px 20px 120px' }}>
        <H size={26} weight={700} style={{ marginTop: 12 }}>{title}</H>
        <Txt size={14} color={T.ink3} style={{ display: 'block', marginTop: 6 }}>{sub}</Txt>
        {children}
      </div>

      <StickyCTA>{cta}</StickyCTA>
    </div>
  );
}

// ─── 06 · Crew Sent — animated success → dashboard ───
function ScreenCrewSent({ nav, state }) {
  React.useEffect(() => {
    const t = setTimeout(() => nav('dashboard'), 2400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', position: 'relative', overflow: 'hidden' }}>
      <Confetti count={40} />
      <div style={{ position: 'relative', zIndex: 5, textAlign: 'center', padding: 32 }}>
        <div style={{ width: 110, height: 110, borderRadius: '50%', background: T.mintSoft, display: 'grid', placeItems: 'center', margin: '0 auto 24px', animation: 'pop .6s cubic-bezier(.2,.7,.3,1)' }}>
          <div style={{ width: 78, height: 78, borderRadius: '50%', background: T.mint, display: 'grid', placeItems: 'center', color: '#fff' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
        </div>
        <H size={26} weight={700}>초대장 발송 완료!</H>
        <Txt size={14} color={T.ink3} style={{ display: 'block', marginTop: 8 }}>
          {Math.max(0, (state.members || []).length - 1) || 3}명에게 카카오톡 알림이 도착했어요
        </Txt>
        <div style={{ marginTop: 20, fontSize: 12, color: T.ink4 }}>잠시 후 대시보드로 이동합니다…</div>
      </div>
    </div>
  );
}

// ─── 07 · Host Dashboard ───
function ScreenDashboard({ nav, state }) {
  const TOTAL = 3122000;
  const size = state.size || 4;
  const per = Math.round(TOTAL / size);
  // crew progress demo (host paid, 2 of 3 friends paid)
  const crew = [
    { name: '김태희', sub: '나 · 주최자', status: 'paid', role: '통큰친구', emoji: '💪' },
    { name: '전지현', sub: '010-3456-7890', status: 'paid', role: '응원단장', emoji: '📣' },
    { name: '차은우', sub: '010-4567-8901', status: 'paid', role: '깜짝선물러', emoji: '🎁' },
    { name: '장원영', sub: '010-2345-6789', status: 'pending' },
  ].slice(0, size);
  const paid = crew.filter(c => c.status === 'paid').length;
  const collected = paid * per;
  const pct = collected / TOTAL;
  const animPct = useCountUp(Math.round(pct * 100), 1200, []);
  const animCollected = useCountUp(collected, 1200, []);

  return (
    <div style={{ height: '100%', background: '#F6F7F9', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* nav */}
      <div style={{ padding: '60px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#F6F7F9' }}>
        <button className="tap" onClick={() => nav('pdp')} style={{ width: 36, height: 36, borderRadius: '50%', background: '#fff', border: 'none', display: 'grid', placeItems: 'center', cursor: 'pointer', color: T.ink2, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
          <Ico.Back />
        </button>
        <div style={{ fontSize: 14, fontWeight: 600 }}>My 크루</div>
        <button className="tap" style={{ width: 36, height: 36, borderRadius: '50%', background: '#fff', border: 'none', display: 'grid', placeItems: 'center', cursor: 'pointer', color: T.ink2, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
          <Ico.More />
        </button>
      </div>

      <div className="pscroll" style={{ flex: 1, overflowY: 'auto', padding: '12px 16px 140px' }}>
        {/* hero progress */}
        <Card pad={24} style={{ borderRadius: 24, background: 'linear-gradient(160deg, #fff 0%, #FAFCFB 100%)' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <div>
              <Pill tone="warn" size="sm">D-3 · 마감까지 3일</Pill>
              <H size={20} weight={700} style={{ marginTop: 10 }}>우석이 결혼축하</H>
              <Txt size={12} color={T.ink3}>2026.05.18 18:00 마감</Txt>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <NamuhA1 size={56} color="dark" float={false} />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginTop: 18 }}>
            <Ring size={120} stroke={11} pct={pct} color={T.mint}>
              <div className="num" style={{ fontSize: 32, fontWeight: 800, letterSpacing: '-0.04em', color: T.ink, lineHeight: 1 }}>{animPct}<span style={{ fontSize: 14, color: T.ink3 }}>%</span></div>
              <div style={{ fontSize: 10, color: T.ink4, marginTop: 2 }}>{paid}/{size} 결제</div>
            </Ring>
            <div style={{ flex: 1 }}>
              <Txt size={11} weight={600} color={T.ink3} style={{ letterSpacing: '0.06em' }}>모인 금액</Txt>
              <div className="num" style={{ fontSize: 24, fontWeight: 800, letterSpacing: '-0.03em', marginTop: 4 }}>{won(animCollected)}원</div>
              <Txt size={11} color={T.ink4} style={{ display: 'block', marginTop: 2 }}>/ {won(TOTAL)}원</Txt>
              <div style={{ marginTop: 12, padding: '6px 10px', borderRadius: 8, background: T.mintSoft, color: T.mintDeep, fontSize: 11, fontWeight: 600, display: 'inline-block' }}>
                남은 금액 {won(TOTAL - collected)}원
              </div>
            </div>
          </div>
        </Card>

        {/* crew members */}
        <div style={{ marginTop: 20, marginBottom: 10, padding: '0 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <H size={14} weight={700} style={{ display: 'inline' }}>크루원 현황</H>
          <Txt size={12} color={T.ink3}>{paid} / {size} 결제 완료</Txt>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {crew.map((c, i) => (
            <Card key={i} pad={14} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div style={{ position: 'relative' }}>
                <Avatar name={c.name} size={42} dim={c.status === 'pending'} />
                {c.status === 'paid' && (
                  <div style={{ position: 'absolute', bottom: -2, right: -2, width: 18, height: 18, borderRadius: '50%', background: T.success, color: '#fff', display: 'grid', placeItems: 'center', border: '2px solid #fff' }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                )}
              </div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Txt size={14} weight={700}>{c.name}</Txt>
                  {c.role && <Pill tone="mint" size="xs">{c.emoji} {c.role}</Pill>}
                </div>
                <Txt size={11} color={T.ink4}>{c.sub}</Txt>
              </div>
              {c.status === 'paid' ? (
                <div className="num" style={{ fontSize: 13, fontWeight: 700, color: T.success }}>{won(per)}원</div>
              ) : (
                <button className="tap" onClick={() => nav('kakao')} style={{ padding: '7px 12px', background: T.warning, color: '#fff', fontSize: 11, fontWeight: 700, border: 'none', borderRadius: 999, cursor: 'pointer' }}>
                  리마인드
                </button>
              )}
            </Card>
          ))}
        </div>

        {/* Stats / Gamification row */}
        <div style={{ marginTop: 20, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
          <Card pad={14}>
            <Txt size={11} color={T.ink3}>크루 점수</Txt>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 4 }}>
              <span className="num" style={{ fontSize: 22, fontWeight: 800, color: T.ink }}>{paid * 100}</span>
              <span style={{ fontSize: 12, color: T.coin }}>XP ✨</span>
            </div>
            <Txt size={10} color={T.ink4} style={{ display: 'block', marginTop: 2 }}>전원 완료 시 +200 XP</Txt>
          </Card>
          <Card pad={14}>
            <Txt size={11} color={T.ink3}>이번 선물</Txt>
            <div style={{ display: 'flex', gap: -6, marginTop: 6 }}>
              {crew.slice(0, 4).map((c, i) => (
                <div key={i} style={{ marginLeft: i === 0 ? 0 : -8 }}>
                  <Avatar name={c.name} size={26} style={{ border: '2px solid #fff' }} dim={c.status === 'pending'} />
                </div>
              ))}
            </div>
            <Txt size={11} weight={600} color={T.ink} style={{ display: 'block', marginTop: 4 }}>{size}명 크루</Txt>
          </Card>
        </div>

        {/* Quick view: participant POV trigger */}
        <div style={{ marginTop: 20, padding: 16, background: '#EEF1F8', borderRadius: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
            <Ico.Insta style={{ color: T.navy, width: 16, height: 16 }} />
            <Txt size={12} weight={700} color={T.navy}>친구 시점으로 보기</Txt>
          </div>
          <Txt size={11} color={T.ink3} style={{ display: 'block', marginBottom: 10 }}>
            장원영님이 받는 초대장과 결제 과정을 미리 확인할 수 있어요
          </Txt>
          <Btn variant="outline" height={42} onClick={() => nav('kakao')} style={{ fontSize: 13 }}>
            장원영 시점 보기 →
          </Btn>
        </div>
      </div>

      {/* sticky CTA */}
      <StickyCTA>
        <div style={{ display: 'flex', gap: 8 }}>
          <Btn variant="outline" height={50} style={{ flex: 1, fontSize: 14 }} leading={<Ico.Bell />}>푸시 알림</Btn>
          <Btn variant="primary" height={50} style={{ flex: 1.4, fontSize: 14 }} leading={<Ico.Link />} onClick={() => nav('dday')}>D-Day로 이동</Btn>
        </div>
      </StickyCTA>
    </div>
  );
}

// ─── 08 · D-Day decision ───
function ScreenDDay({ nav, state }) {
  const TOTAL = 3122000;
  const size = state.size || 4;
  const per = Math.round(TOTAL / size);
  const collected = 3 * per; // 3 of 4 paid
  const remaining = TOTAL - collected;
  const pct = collected / TOTAL;
  const [decision, setDecision] = React.useState(null);

  return (
    <div style={{ height: '100%', background: '#F6F7F9', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '60px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button className="tap" onClick={() => nav('dashboard')} style={{ width: 36, height: 36, borderRadius: '50%', background: '#fff', border: 'none', display: 'grid', placeItems: 'center', cursor: 'pointer', color: T.ink2 }}>
          <Ico.Back />
        </button>
        <div style={{ fontSize: 14, fontWeight: 600 }}>D-Day · 우석이 결혼축하</div>
        <div style={{ width: 36 }} />
      </div>

      <div className="pscroll" style={{ flex: 1, overflowY: 'auto', padding: '12px 20px 140px' }}>
        {/* hero alert */}
        <div style={{
          padding: 22, borderRadius: 24,
          background: 'linear-gradient(135deg, #FEF3C7 0%, #FDE68A 100%)',
          textAlign: 'center', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: -10, right: -10, fontSize: 60, opacity: 0.3 }}>⏰</div>
          <Pill tone="warn" size="md">⏰ D-Day +0h</Pill>
          <H size={28} weight={800} style={{ marginTop: 14 }}>마감 시간이 됐어요!</H>
          <Txt size={14} color={T.ink2} style={{ display: 'block', marginTop: 6 }}>
            결제가 {Math.round(pct * 100)}% 모였어요
          </Txt>
        </div>

        {/* progress */}
        <Card pad={22} style={{ marginTop: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <Txt size={12} weight={600} color={T.ink3}>모인 금액</Txt>
            <Txt size={12} weight={600} color={T.ink3}>{Math.round(pct * 100)}%</Txt>
          </div>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginTop: 6 }}>
            <span className="num" style={{ fontSize: 28, fontWeight: 800 }}>{won(collected)}</span>
            <span style={{ fontSize: 14, color: T.ink3 }}>/ {won(TOTAL)}원</span>
          </div>
          <div style={{ marginTop: 12, height: 8, background: T.line2, borderRadius: 4, overflow: 'hidden' }}>
            <div style={{ width: `${pct * 100}%`, height: '100%', background: `linear-gradient(90deg, ${T.mint}, ${T.mintDeep})`, borderRadius: 4 }} />
          </div>
          <div style={{ marginTop: 16, padding: 12, background: '#FFFBEB', borderRadius: 12, border: '1px solid #FEF3C7' }}>
            <Txt size={11} color={T.warning} weight={700} style={{ letterSpacing: '0.04em' }}>미달성 금액</Txt>
            <div className="num" style={{ fontSize: 22, fontWeight: 800, color: '#92400E' }}>{won(remaining)}원</div>
            <Txt size={11} color={T.ink3} style={{ display: 'block', marginTop: 2 }}>장원영님이 결제하지 않았어요</Txt>
          </div>
        </Card>

        {/* decisions */}
        <H size={15} weight={700} style={{ marginTop: 28, marginBottom: 12 }}>어떻게 할까요?</H>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          <button className="tap" onClick={() => setDecision('pay')} style={{
            display: 'block', textAlign: 'left',
            border: `2px solid ${decision === 'pay' ? T.mint : T.line}`,
            background: decision === 'pay' ? T.mintSoft : '#fff',
            borderRadius: 18, padding: 18, cursor: 'pointer', fontFamily: 'inherit',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: T.mint, color: '#fff', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <Ico.Gift />
              </div>
              <div style={{ flex: 1 }}>
                <Txt size={15} weight={700} color={T.ink}>내가 결제하고 선물 보내기</Txt>
                <Txt size={12} color={T.ink3} style={{ display: 'block', marginTop: 4 }}>익일 배송 · 마음 다하기 +50 XP</Txt>
              </div>
              <div className="num" style={{ fontSize: 14, fontWeight: 700, color: T.mintDeep }}>{won(remaining)}원</div>
            </div>
          </button>
          <button className="tap" onClick={() => setDecision('cancel')} style={{
            display: 'block', textAlign: 'left',
            border: `2px solid ${decision === 'cancel' ? T.error : T.line}`,
            background: decision === 'cancel' ? '#FEF2F2' : '#fff',
            borderRadius: 18, padding: 18, cursor: 'pointer', fontFamily: 'inherit',
          }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
              <div style={{ width: 44, height: 44, borderRadius: 14, background: '#FEE2E2', color: T.error, display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                <Ico.Close />
              </div>
              <div style={{ flex: 1 }}>
                <Txt size={15} weight={700} color={T.ink}>이번 선물 취소</Txt>
                <Txt size={12} color={T.ink3} style={{ display: 'block', marginTop: 4 }}>3명 결제 즉시 환불 · 다음 기회로</Txt>
              </div>
            </div>
          </button>
        </div>
      </div>

      <StickyCTA>
        <Btn variant={decision === 'cancel' ? 'danger' : 'primary'}
          disabled={!decision}
          onClick={() => nav(decision === 'pay' ? 'order_complete' : 'pdp')}>
          {decision === 'pay' ? '결제하고 선물 보내기' : decision === 'cancel' ? '취소 확정' : '결정해 주세요'}
        </Btn>
      </StickyCTA>
    </div>
  );
}

Object.assign(window, { ScreenPDP, ScreenOnboarding, ScreenCrewSize, ScreenCrewMembers, ScreenCrewInvite, ScreenCrewSent, ScreenDashboard, ScreenDDay, INVITE_TEMPLATES, INVITE_THEMES, InviteIllustration });
