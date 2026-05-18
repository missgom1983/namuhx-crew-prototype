// prototype.jsx — Main router + Stage

const SCREENS = [
  { id: 'pdp',            label: 'PDP',           group: 'host',  Comp: ScreenPDP,           desc: '함께 선물하기 CTA 추가' },
  { id: 'onboarding',     label: '온보딩',         group: 'host',  Comp: ScreenOnboarding,    desc: '3-step 서비스 소개' },
  { id: 'crew_size',      label: '크루 1',         group: 'host',  Comp: ScreenCrewSize,      desc: '인원·분담' },
  { id: 'crew_members',   label: '크루 2',         group: 'host',  Comp: ScreenCrewMembers,   desc: '친구 추가' },
  { id: 'crew_invite',    label: '크루 3',         group: 'host',  Comp: ScreenCrewInvite,    desc: '테마·메시지' },
  { id: 'crew_sent',      label: '발송 완료',      group: 'host',  Comp: ScreenCrewSent,      desc: '컨페티 → 대시보드' },
  { id: 'dashboard',      label: '대시보드',       group: 'host',  Comp: ScreenDashboard,     desc: '진행률·크루원' },
  { id: 'dday',           label: 'D-Day',         group: 'host',  Comp: ScreenDDay,          desc: '미달성 분기' },
  { id: 'kakao',          label: '알림톡',         group: 'guest', Comp: ScreenKakao,         desc: '카카오 초대' },
  { id: 'guest_landing',  label: '초대 랜딩',      group: 'guest', Comp: ScreenGuestLanding,  desc: '참여자 진입' },
  { id: 'payment',        label: '결제',          group: 'guest', Comp: ScreenPayment,       desc: '간편결제 4종' },
  { id: 'paid',           label: '결제 완료',      group: 'guest', Comp: ScreenPaid,          desc: '역할 스티커' },
  { id: 'cert',           label: '인증카드',       group: 'guest', Comp: ScreenCert,          desc: 'SNS 공유 9:16' },
  { id: 'order_complete', label: '주문 완료',      group: 'host',  Comp: ScreenOrderComplete, desc: '최종 확정' },
];
const SCREEN_MAP = Object.fromEntries(SCREENS.map(s => [s.id, s]));

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "screen": "pdp",
  "showHint": true,
  "stageBg": "soft"
}/*EDITMODE-END*/;

function Stage() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [history, setHistory] = React.useState([t.screen || 'pdp']);
  const current = history[history.length - 1];
  const [appState, setAppState] = React.useState({ size: 4, mode: 'equal' });

  // Sync from tweaks (when user picks via dropdown)
  React.useEffect(() => {
    if (t.screen !== current) {
      setHistory(h => [...h.slice(0, -1), t.screen]);
    }
  }, [t.screen]); // eslint-disable-line

  const nav = (id) => {
    if (id === current) return;
    setHistory(h => [...h, id]);
    setTweak('screen', id);
  };
  const resetFlow = () => {
    setHistory(['pdp']);
    setAppState({ size: 4, mode: 'equal' });
    setTweak('screen', 'pdp');
  };

  const curMeta = SCREEN_MAP[current] || SCREENS[0];
  const Comp = curMeta.Comp;
  const curIdx = SCREENS.findIndex(s => s.id === current);

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, padding: '20px 0' }}>
      {/* Stage backdrop */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -1, background: t.stageBg === 'dark'
        ? `radial-gradient(circle at 30% 20%, #1e2a4a 0%, #0a1124 70%)`
        : t.stageBg === 'mint'
        ? `linear-gradient(135deg, #E4F5F1 0%, #F1F2F4 60%, #FDF6E8 100%)`
        : '#F1F2F4' }} />

      {/* Header */}
      <div style={{ textAlign: 'center', marginTop: 4, color: t.stageBg === 'dark' ? '#fff' : T.ink }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '5px 12px', borderRadius: 999, background: t.stageBg === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.04)', border: t.stageBg === 'dark' ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.06)', backdropFilter: 'blur(10px)' }}>
          <Ico.Sparkle style={{ color: T.mint, width: 12, height: 12 }} />
          <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.04em' }}>NAMUHX · WELLNESS CREW</span>
        </div>
        <H size={26} weight={800} ls="-0.03em" color={t.stageBg === 'dark' ? '#fff' : T.ink} style={{ marginTop: 10 }}>
          함께 선물하기 프로토타입
        </H>
        <Txt size={13} color={t.stageBg === 'dark' ? 'rgba(255,255,255,0.65)' : T.ink3} style={{ display: 'block', marginTop: 4, maxWidth: 580, margin: '4px auto 0' }}>
          Apple 디자인 + 게이미피케이션 · 호스트 모집 → 참여자 결제 → 인증카드까지 전 플로우
        </Txt>
      </div>

      {/* Step indicator strip */}
      <StepStrip current={current} nav={nav} dark={t.stageBg === 'dark'} />

      {/* Phone */}
      <div style={{ position: 'relative' }}>
        {/* index pill */}
        <div style={{ position: 'absolute', left: -100, top: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
          <div style={{ fontSize: 56, fontWeight: 800, letterSpacing: '-0.06em', color: t.stageBg === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.06)', lineHeight: 1, fontFamily: 'inherit' }}>
            {String(curIdx + 1).padStart(2, '0')}
          </div>
          <div style={{ width: 1, height: 40, background: t.stageBg === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.1)' }} />
        </div>

        <IOSDevice width={402} height={874}>
          <Comp nav={nav} state={appState} setState={setAppState} />
        </IOSDevice>

        {/* current screen meta */}
        <div style={{ position: 'absolute', right: -200, top: 24, width: 180 }}>
          <div style={{ display: 'inline-block', padding: '4px 10px', background: curMeta.group === 'host' ? T.mintSoft : '#EEF1F8', color: curMeta.group === 'host' ? T.mintDeep : T.navy, borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: '0.06em' }}>
            {curMeta.group === 'host' ? '👤 HOST' : '🎁 GUEST'}
          </div>
          <H size={18} weight={700} color={t.stageBg === 'dark' ? '#fff' : T.ink} style={{ marginTop: 10 }}>{curMeta.label}</H>
          <Txt size={12} color={t.stageBg === 'dark' ? 'rgba(255,255,255,0.6)' : T.ink3} style={{ display: 'block', marginTop: 6 }}>{curMeta.desc}</Txt>
          {t.showHint && (
            <div style={{ marginTop: 14, padding: 10, background: t.stageBg === 'dark' ? 'rgba(255,255,255,0.06)' : '#fff', borderRadius: 10, border: t.stageBg === 'dark' ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.06)' }}>
              <Txt size={11} color={t.stageBg === 'dark' ? 'rgba(255,255,255,0.6)' : T.ink3} style={{ display: 'block', lineHeight: 1.5 }}>
                💡 화면 내 CTA를 누르면 다음 단계로 이동합니다
              </Txt>
            </div>
          )}
        </div>
      </div>

      {/* Bottom nav bar — prev/next + screen counter */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 8 }}>
        <button className="tap" onClick={() => curIdx > 0 && nav(SCREENS[curIdx - 1].id)} style={{
          width: 44, height: 44, borderRadius: '50%', border: 'none',
          background: t.stageBg === 'dark' ? 'rgba(255,255,255,0.08)' : '#fff',
          color: t.stageBg === 'dark' ? '#fff' : T.ink,
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)', cursor: 'pointer',
          display: 'grid', placeItems: 'center', opacity: curIdx > 0 ? 1 : 0.3,
        }}>
          <Ico.Back />
        </button>
        <div style={{ padding: '8px 16px', borderRadius: 999, background: t.stageBg === 'dark' ? 'rgba(255,255,255,0.08)' : '#fff', boxShadow: '0 1px 3px rgba(0,0,0,0.08)', color: t.stageBg === 'dark' ? '#fff' : T.ink, fontSize: 13, fontWeight: 600 }}>
          {curIdx + 1} / {SCREENS.length}
        </div>
        <button className="tap" onClick={() => curIdx < SCREENS.length - 1 && nav(SCREENS[curIdx + 1].id)} style={{
          width: 44, height: 44, borderRadius: '50%', border: 'none',
          background: t.stageBg === 'dark' ? 'rgba(255,255,255,0.08)' : '#fff',
          color: t.stageBg === 'dark' ? '#fff' : T.ink,
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)', cursor: 'pointer',
          display: 'grid', placeItems: 'center', opacity: curIdx < SCREENS.length - 1 ? 1 : 0.3,
        }}>
          <div style={{ transform: 'rotate(180deg)' }}><Ico.Back /></div>
        </button>
        <button className="tap" onClick={resetFlow} style={{
          padding: '0 14px', height: 44, borderRadius: 999, border: 'none',
          background: t.stageBg === 'dark' ? 'rgba(255,255,255,0.08)' : '#fff',
          color: t.stageBg === 'dark' ? '#fff' : T.ink, fontSize: 12, fontWeight: 600,
          boxShadow: '0 1px 3px rgba(0,0,0,0.08)', cursor: 'pointer',
        }}>
          ↻ 처음부터
        </button>
      </div>

      {/* Tweaks Panel */}
      <TweaksPanel>
        <TweakSection label="Navigation" />
        <TweakSelect label="Screen" value={current}
          options={SCREENS.map(s => ({ value: s.id, label: `${(SCREENS.indexOf(s) + 1).toString().padStart(2, '0')} · ${s.label}` }))}
          onChange={(v) => nav(v)} />
        <TweakButton label="↻ 플로우 초기화" onClick={resetFlow} />
        <TweakButton label="① PDP로 이동" onClick={() => nav('pdp')} />
        <TweakButton label="대시보드로 점프" onClick={() => nav('dashboard')} />
        <TweakButton label="참여자 시점으로" onClick={() => nav('guest_landing')} />

        <TweakSection label="Stage" />
        <TweakRadio label="배경" value={t.stageBg} options={['soft', 'mint', 'dark']}
          onChange={(v) => setTweak('stageBg', v)} />
        <TweakToggle label="화면 설명 표시" value={t.showHint} onChange={(v) => setTweak('showHint', v)} />
      </TweaksPanel>
    </div>
  );
}

// ─── Step strip — horizontal flow indicator ───
function StepStrip({ current, nav, dark }) {
  const stripRef = React.useRef(null);
  React.useEffect(() => {
    const el = stripRef.current;
    if (!el) return;
    const active = el.querySelector('[data-active="1"]');
    if (active) active.scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  }, [current]);

  return (
    <div ref={stripRef} className="pscroll" style={{ width: '100%', maxWidth: 920, overflowX: 'auto', padding: '8px 80px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-start', minWidth: 'max-content' }}>
        {SCREENS.map((s, i) => {
          const isCur = s.id === current;
          const curIdx = SCREENS.findIndex(x => x.id === current);
          const isPast = i < curIdx;
          return (
            <React.Fragment key={s.id}>
              <button data-active={isCur ? '1' : '0'} className="tap" onClick={() => nav(s.id)} style={{
                display: 'flex', alignItems: 'center', gap: 6, padding: '8px 14px', borderRadius: 999,
                background: isCur ? (s.group === 'host' ? T.mint : T.navy) : (dark ? 'rgba(255,255,255,0.06)' : '#fff'),
                color: isCur ? '#fff' : (dark ? 'rgba(255,255,255,0.7)' : T.ink2),
                border: 'none', cursor: 'pointer', flexShrink: 0,
                fontSize: 12, fontWeight: isCur ? 700 : 500,
                boxShadow: isCur ? '0 4px 12px rgba(0,0,0,0.18)' : (dark ? 'none' : '0 1px 2px rgba(0,0,0,0.04)'),
                transition: 'all .2s',
                opacity: !isCur && !isPast ? 0.85 : 1,
              }}>
                <span style={{ fontSize: 10, fontWeight: 700, opacity: 0.7 }}>{String(i + 1).padStart(2, '0')}</span>
                <span>{s.label}</span>
              </button>
              {i < SCREENS.length - 1 && (
                <div style={{ width: 8, height: 1, background: dark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.12)', flexShrink: 0 }} />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<Stage />);
