// screens-guest.jsx — Participant/guest-side screens

// ─── 09 · Kakao alimtalk preview ───
function ScreenKakao({ nav, state }) {
  const TOTAL = 3122000;
  const size = state.size || 4;
  const per = Math.round(TOTAL / size);
  const tpl = (window.INVITE_TEMPLATES || []).find(t => t.id === state.templateId)
    || (window.INVITE_TEMPLATES || []).find(t => t.themeId === (state.theme || 'wedding'))
    || (window.INVITE_TEMPLATES || [])[0];
  const themeMeta = (window.INVITE_THEMES || []).find(t => t.id === (state.theme || 'wedding')) || { label: '결혼축하' };

  return (
    <div style={{ height: '100%', background: '#B0C4D9', display: 'flex', flexDirection: 'column' }}>
      {/* Kakao-style nav */}
      <div style={{ padding: '60px 16px 12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(176,196,217,0.95)' }}>
        <button className="tap" onClick={() => nav('dashboard')} style={{ background: 'none', border: 'none', display: 'grid', placeItems: 'center', cursor: 'pointer', color: T.ink2 }}>
          <Ico.Back />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{ width: 26, height: 26, borderRadius: '50%', background: '#FEE500', display: 'grid', placeItems: 'center', color: '#3C1E1E' }}>
            <Ico.Kakao style={{ width: 14, height: 14 }} />
          </div>
          <Txt size={15} weight={700}>NAMUHX 공식</Txt>
        </div>
        <Ico.More />
      </div>

      {/* date divider */}
      <div style={{ textAlign: 'center', margin: '12px 0' }}>
        <span style={{ background: 'rgba(0,0,0,0.18)', color: '#fff', fontSize: 11, padding: '4px 12px', borderRadius: 999 }}>2026년 5월 15일 목요일</span>
      </div>

      {/* chat */}
      <div style={{ flex: 1, padding: '0 12px', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* sender info row */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
          <div style={{ width: 40, height: 40, borderRadius: 12, background: '#FEE500', display: 'grid', placeItems: 'center', color: '#3C1E1E', flexShrink: 0 }}>
            <Ico.Kakao />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
              <Txt size={12} weight={700} color={T.ink}>NAMUHX 공식 채널</Txt>
              <Pill tone="navy" size="xs">알림톡 · 인증</Pill>
            </div>

            {/* alimtalk bubble */}
            <div className="anim-fadeUp" style={{
              background: '#fff', borderRadius: 16, borderTopLeftRadius: 4, overflow: 'hidden',
              maxWidth: 280, boxShadow: '0 1px 2px rgba(0,0,0,0.05)',
            }}>
              {/* illustration image (sent with alimtalk) */}
              {tpl && window.InviteIllustration && (
                <div>
                  <window.InviteIllustration template={tpl} size="md" style={{ borderRadius: 0, boxShadow: 'none' }} />
                </div>
              )}
              <div style={{ padding: '14px 16px 12px', borderBottom: `1px solid ${T.line2}` }}>
                <Txt size={13} weight={700} color={T.navy}>📨 Wellness Crew 초대장</Txt>
              </div>
              <div style={{ padding: '14px 16px' }}>
                <Txt size={13} color={T.ink} style={{ display: 'block' }}>
                  장원영님,<br />
                  <b style={{ color: T.ink }}>김태희</b>님이 함께 선물하기에<br/>
                  초대했어요.
                </Txt>
                <div style={{ marginTop: 12, padding: '10px 12px', background: T.line2, borderRadius: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                    <Txt size={12} color={T.ink3}>▸ 선물</Txt>
                    <Txt size={12} weight={600}>나무엑스 A1</Txt>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, marginBottom: 4 }}>
                    <Txt size={12} color={T.ink3}>▸ 분담 금액</Txt>
                    <Txt size={12} weight={700} color={T.mintDeep} className="num">{won(per)}원</Txt>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12 }}>
                    <Txt size={12} color={T.ink3}>▸ 마감</Txt>
                    <Txt size={12} weight={600}>2026.05.18 18:00</Txt>
                  </div>
                </div>
              </div>
              <button className="tap" onClick={() => nav('guest_landing')} style={{
                width: '100%', padding: 14, border: 'none', borderTop: `1px solid ${T.line2}`,
                background: '#fff', color: T.mintDeep, fontSize: 14, fontWeight: 700, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}>
                결제하고 합류하기 <Ico.Arrow style={{ width: 14, height: 14 }} />
              </button>
            </div>
            <div style={{ fontSize: 10, color: 'rgba(0,0,0,0.45)', marginTop: 4 }}>오후 2:31</div>
          </div>
        </div>
      </div>

      {/* fake input bar */}
      <div style={{ padding: '10px 12px 30px', background: '#F5F5F5', borderTop: `1px solid ${T.line}`, display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ flex: 1, background: '#fff', height: 38, borderRadius: 19, padding: '0 14px', display: 'flex', alignItems: 'center', fontSize: 13, color: T.ink4 }}>
          메시지를 입력하세요
        </div>
        <div style={{ width: 38, height: 38, borderRadius: '50%', background: T.mint, display: 'grid', placeItems: 'center', color: '#fff' }}>
          <Ico.Arrow />
        </div>
      </div>
    </div>
  );
}

// ─── 10 · Guest invite landing — emotional + decisive ───
function ScreenGuestLanding({ nav, state }) {
  const TOTAL = 3122000;
  const size = state.size || 4;
  const per = Math.round(TOTAL / size);
  const paid = 2; // current state: 2 of 4 paid

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', background: '#fff', overflow: 'hidden' }}>
      {/* top hero - emotional gradient */}
      <div style={{
        position: 'relative', padding: '60px 24px 36px',
        background: `linear-gradient(160deg, #4FC9B5 0%, #2EA993 60%, #0a1f44 110%)`,
        color: '#fff', overflow: 'hidden',
      }}>
        {/* close */}
        <button className="tap" onClick={() => nav('kakao')} style={{ position: 'absolute', top: 60, right: 16, width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.15)', border: 'none', display: 'grid', placeItems: 'center', cursor: 'pointer', color: '#fff' }}>
          <Ico.Close />
        </button>

        {/* sparkles */}
        <div style={{ position: 'absolute', top: 90, right: 60, color: 'rgba(255,255,255,0.4)' }}><Ico.Sparkle style={{ width: 22, height: 22 }} /></div>
        <div style={{ position: 'absolute', top: 130, left: 30, color: 'rgba(255,255,255,0.3)' }}><Ico.Sparkle style={{ width: 14, height: 14 }} /></div>

        <Txt size={11} weight={700} color="rgba(255,255,255,0.78)" style={{ letterSpacing: '0.18em' }}>WELLNESS CREW</Txt>
        <H size={32} weight={800} color="#fff" ls="-0.04em" style={{ marginTop: 14, lineHeight: 1.1 }}>
          🎉<br />결혼 축하 선물에<br />초대되었어요
        </H>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 18 }}>
          <Avatar name="김태희" size={32} />
          <Txt size={13} color="rgba(255,255,255,0.88)"><b style={{ color: '#fff' }}>김태희</b>님이 보낸 초대장</Txt>
        </div>
      </div>

      <div className="pscroll" style={{ flex: 1, overflowY: 'auto', padding: '0 0 130px', marginTop: -16, borderTopLeftRadius: 28, borderTopRightRadius: 28, background: '#fff', position: 'relative' }}>
        {/* product card */}
        <div style={{ padding: '28px 20px 0' }}>
          <Card style={{ padding: 18, display: 'flex', alignItems: 'center', gap: 14, background: '#FAFAFC' }}>
            <NamuhA1 size={70} float={false} />
            <div style={{ flex: 1 }}>
              <Txt size={11} color={T.ink3}>나무엑스 A1 · Night Gray</Txt>
              <H size={16} weight={700}>우리집 첫 웰니스 로봇</H>
              <div className="num" style={{ fontSize: 13, color: T.ink3, marginTop: 2 }}>{won(TOTAL)}원</div>
            </div>
          </Card>
        </div>

        {/* MASSIVE: my share amount */}
        <div style={{ padding: '32px 20px 0', textAlign: 'center' }}>
          <Txt size={12} weight={700} color={T.ink3} style={{ letterSpacing: '0.16em' }}>내가 낼 금액</Txt>
          <div style={{ marginTop: 8 }}>
            <span className="num" style={{ fontSize: 52, fontWeight: 800, letterSpacing: '-0.04em' }}>{won(per)}</span>
            <span style={{ fontSize: 24, fontWeight: 600, color: T.ink3, marginLeft: 4 }}>원</span>
          </div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 12, padding: '6px 12px', background: T.mintSoft, borderRadius: 999 }}>
            <Pill tone="mint" size="xs" style={{ background: 'transparent', padding: 0 }}>
              <Ico.Users style={{ width: 12, height: 12 }} /> {size}명 중 {paid}명 결제 완료
            </Pill>
          </div>
        </div>

        {/* crew avatars status */}
        <div style={{ padding: '20px 20px 0' }}>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
            {[
              { n: '김태희', paid: true },
              { n: '전지현', paid: true },
              { n: '나', paid: 'me' },
              { n: '차은우', paid: false },
            ].map((p, i) => (
              <div key={i} style={{ textAlign: 'center', opacity: p.paid === false ? 0.45 : 1 }}>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <Avatar name={p.n} size={44} ring={p.paid === 'me' ? 3 : false} />
                  {p.paid === true && (
                    <div style={{ position: 'absolute', bottom: -2, right: -2, width: 18, height: 18, borderRadius: '50%', background: T.success, color: '#fff', display: 'grid', placeItems: 'center', border: '2px solid #fff' }}>
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                  )}
                </div>
                <Txt size={10} color={p.paid === 'me' ? T.mintDeep : T.ink3} weight={p.paid === 'me' ? 700 : 500} style={{ display: 'block', marginTop: 4 }}>{p.n}</Txt>
              </div>
            ))}
          </div>
        </div>

        {/* host message */}
        <div style={{ padding: '24px 20px 0' }}>
          <Card style={{ background: T.mintSoft, borderRadius: 18, position: 'relative' }} pad={16}>
            <div style={{ position: 'absolute', top: -12, left: 20, padding: '4px 10px', background: T.mintDeep, color: '#fff', borderRadius: 999, fontSize: 10, fontWeight: 700 }}>
              💬 호스트 한마디
            </div>
            <Txt size={13} color={T.ink2} style={{ display: 'block', marginTop: 6, lineHeight: 1.6 }}>
              얘들아~ 우석이 결혼 선물,<br />
              각자 고민하지 말고 이걸로 종결하자!<br />
              링크 누르고 분담금만 결제하면 끝 :)
            </Txt>
          </Card>
        </div>

        {/* welcome reward */}
        <div style={{ padding: '20px 20px 0' }}>
          <div style={{ padding: '14px 16px', borderRadius: 16, background: 'linear-gradient(135deg, #FEF3C7, #FED7AA)', display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ fontSize: 28 }}>🎁</div>
            <div style={{ flex: 1 }}>
              <Txt size={13} weight={700} color="#92400E">결제 완료 시 10% 웰컴 쿠폰</Txt>
              <Txt size={11} color="#9A6711" style={{ display: 'block' }}>다음 구매에 바로 사용 가능</Txt>
            </div>
          </div>
        </div>

        {/* safety footer */}
        <div style={{ padding: '20px 20px 24px', textAlign: 'center' }}>
          <Txt size={11} color={T.ink4}>
            <Ico.Lock style={{ verticalAlign: -2, marginRight: 4 }} />
            미달성 시 자동 환불 · 안전 결제 시스템
          </Txt>
        </div>
      </div>

      <StickyCTA>
        <Btn variant="primary" onClick={() => nav('payment')} trailing={<Ico.Arrow />}>
          {won(per)}원 결제하고 합류하기
        </Btn>
      </StickyCTA>
    </div>
  );
}

// ─── 11 · Payment ───
function ScreenPayment({ nav, state }) {
  const TOTAL = 3122000;
  const size = state.size || 4;
  const per = Math.round(TOTAL / size);
  const [method, setMethod] = React.useState('kakao');
  const methods = [
    { id: 'kakao', label: '카카오페이', bg: '#FEE500', fg: '#3C1E1E' },
    { id: 'toss', label: '토스페이', bg: '#0064FF', fg: '#fff' },
    { id: 'naver', label: '네이버페이', bg: '#00C73C', fg: '#fff' },
    { id: 'card', label: '신용·체크카드', bg: '#fff', fg: T.ink, border: true },
  ];

  return (
    <div style={{ height: '100%', background: '#fff', display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '60px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button className="tap" onClick={() => nav('guest_landing')} style={{ width: 36, height: 36, borderRadius: '50%', background: 'transparent', border: 'none', display: 'grid', placeItems: 'center', cursor: 'pointer', color: T.ink2 }}>
          <Ico.Back />
        </button>
        <div style={{ fontSize: 14, fontWeight: 600 }}>결제하기</div>
        <button className="tap" style={{ width: 36, height: 36, borderRadius: '50%', background: 'transparent', border: 'none', display: 'grid', placeItems: 'center', cursor: 'pointer', color: T.ink2 }}>
          <Ico.Info />
        </button>
      </div>

      <div className="pscroll" style={{ flex: 1, overflowY: 'auto', padding: '8px 20px 130px' }}>
        {/* order summary */}
        <Card style={{ padding: 18, background: '#FAFAFC', display: 'flex', alignItems: 'center', gap: 14 }}>
          <NamuhA1 size={58} float={false} />
          <div style={{ flex: 1 }}>
            <Txt size={11} color={T.ink3}>나무엑스 A1 · 결혼축하 크루</Txt>
            <H size={15} weight={700}>내 분담 금액</H>
          </div>
          <div className="num" style={{ fontSize: 20, fontWeight: 800 }}>{won(per)}원</div>
        </Card>

        {/* methods */}
        <H size={14} weight={700} style={{ marginTop: 28, marginBottom: 12 }}>결제 수단</H>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {methods.map(m => (
            <button key={m.id} className="tap" onClick={() => setMethod(m.id)} style={{
              display: 'flex', alignItems: 'center', gap: 12,
              padding: '14px 16px', borderRadius: 14,
              background: method === m.id ? '#fff' : '#fff',
              border: `2px solid ${method === m.id ? T.mint : T.line}`,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: m.bg, color: m.fg, border: m.border ? `1px solid ${T.line}` : 'none', display: 'grid', placeItems: 'center', fontWeight: 700, fontSize: 14, flexShrink: 0 }}>
                {m.id === 'kakao' && <Ico.Kakao />}
                {m.id === 'toss' && <span style={{ fontSize: 11 }}>toss</span>}
                {m.id === 'naver' && <span>N</span>}
                {m.id === 'card' && <span style={{ fontSize: 12 }}>💳</span>}
              </div>
              <Txt size={14} weight={600} style={{ flex: 1, textAlign: 'left' }}>{m.label}</Txt>
              {method === m.id && (
                <div style={{ width: 22, height: 22, borderRadius: '50%', background: T.mint, color: '#fff', display: 'grid', placeItems: 'center' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
              )}
            </button>
          ))}
        </div>

        {/* consent */}
        <div style={{ marginTop: 28, padding: 16, background: T.line2, borderRadius: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: T.ink, color: '#fff', display: 'grid', placeItems: 'center' }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M5 12l4 4 10-10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <Txt size={12} color={T.ink2}>개인정보 수집·이용 (필수) · 결제대행 약관 (필수)</Txt>
          <Txt size={12} color={T.ink3}>›</Txt>
        </div>

        {/* safety blurb */}
        <div style={{ marginTop: 16, textAlign: 'center' }}>
          <Txt size={11} color={T.ink4}>
            <Ico.Lock style={{ verticalAlign: -2, marginRight: 4 }} />
            미달성 시 자동 환불 · 7일 내 분쟁 시 100% 보호
          </Txt>
        </div>
      </div>

      <StickyCTA>
        <Btn variant="primary" onClick={() => nav('paid')}>{won(per)}원 결제하기</Btn>
      </StickyCTA>
    </div>
  );
}

// ─── 12 · Payment complete + Role sticker selection ───
const ROLES = [
  { id: 'big', label: '통큰친구', emoji: '💪', color: '#FB923C' },
  { id: 'cheer', label: '응원단장', emoji: '📣', color: '#EC4899' },
  { id: 'filial', label: '효자효녀', emoji: '🌸', color: '#F472B6' },
  { id: 'surprise', label: '깜짝선물러', emoji: '🎁', color: '#A78BFA' },
  { id: 'secret', label: '비밀친구', emoji: '🤫', color: '#38BDF8' },
  { id: 'luck', label: '행운빌어', emoji: '🍀', color: '#10B981' },
];
function ScreenPaid({ nav, state, setState }) {
  const [picked, setPicked] = React.useState(state.role || null);
  const [phase, setPhase] = React.useState('checking'); // checking → done → roles
  React.useEffect(() => {
    const t1 = setTimeout(() => setPhase('done'), 900);
    const t2 = setTimeout(() => setPhase('roles'), 1700);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div style={{ height: '100%', background: '#fff', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      {phase === 'done' && <Confetti count={50} />}
      <div style={{ padding: '60px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Txt size={14} weight={600} color={T.ink2}>결제 완료</Txt>
        <button className="tap" onClick={() => nav('dashboard')} style={{ width: 36, height: 36, borderRadius: '50%', background: 'transparent', border: 'none', display: 'grid', placeItems: 'center', cursor: 'pointer', color: T.ink2 }}>
          <Ico.Close />
        </button>
      </div>

      <div className="pscroll" style={{ flex: 1, overflowY: 'auto', padding: '8px 20px 120px' }}>
        {/* success */}
        <div style={{ textAlign: 'center', padding: '20px 0 0' }}>
          {phase === 'checking' && (
            <div style={{ width: 110, height: 110, borderRadius: '50%', border: `5px solid ${T.line2}`, borderTopColor: T.mint, animation: 'spin 1s linear infinite', margin: '0 auto' }} />
          )}
          {(phase === 'done' || phase === 'roles') && (
            <div style={{ margin: '0 auto', animation: 'pop .5s cubic-bezier(.2,.7,.3,1)', display: 'inline-block' }}>
              {window.CuteHedgehog && <window.CuteHedgehog size={170} holding="heart" />}
            </div>
          )}
          <H size={32} weight={800} ls="-0.04em" style={{ marginTop: 4 }}>hahaha~<br/>합류 완료 🎉</H>
          <Txt size={14} color={T.ink3} style={{ display: 'block', marginTop: 10 }}>
            우석이 결혼축하 크루에 무사히 입성!<br/>이제 우석이는 깜놀할 일만 남음 ㅋㅋ
          </Txt>
          {/* welcome coupon */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginTop: 16, padding: '8px 14px', borderRadius: 999, background: 'linear-gradient(90deg, #FEF3C7, #FED7AA)' }}>
            <span>🎁</span>
            <Txt size={12} weight={700} color="#92400E">10% 웰컴 쿠폰 자동 발급</Txt>
          </div>
        </div>

        {/* role sticker selection — gamification core */}
        {phase === 'roles' && (
          <div className="anim-fadeUp" style={{ marginTop: 40 }}>
            <div style={{ textAlign: 'center' }}>
              <H size={20} weight={700}>어떤 친구로 기억될까요?</H>
              <Txt size={13} color={T.ink3} style={{ display: 'block', marginTop: 6 }}>역할 스티커는 호스트에게 보여요</Txt>
            </div>
            <div style={{ marginTop: 24, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              {ROLES.map((r, i) => (
                <button key={r.id} className="tap" onClick={() => setPicked(r.id)} style={{
                  border: 'none', background: 'none', cursor: 'pointer', fontFamily: 'inherit',
                  animation: `sticker-bounce .5s ${i * 0.06}s cubic-bezier(.2,.7,.3,1) both`,
                }}>
                  <div style={{
                    aspectRatio: '1', borderRadius: 20,
                    background: picked === r.id ? r.color : '#FAFAFC',
                    color: picked === r.id ? '#fff' : T.ink,
                    border: picked === r.id ? `none` : `2px solid ${T.line}`,
                    boxShadow: picked === r.id ? `0 8px 20px ${r.color}55` : 'none',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 6,
                    transform: picked === r.id ? 'scale(1.04)' : 'scale(1)',
                    transition: 'all .25s cubic-bezier(.2,.7,.3,1)',
                  }}>
                    <div style={{ fontSize: 30 }}>{r.emoji}</div>
                    <Txt size={11} weight={700} color={picked === r.id ? '#fff' : T.ink}>{r.label}</Txt>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      <StickyCTA>
        <Btn variant="primary" disabled={!picked || phase !== 'roles'}
          onClick={() => { setState({ ...state, role: picked }); nav('cert'); }}
          trailing={<Ico.Arrow />}>
          인증카드 만들기
        </Btn>
      </StickyCTA>

      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

// ─── 13 · Certification card share ───
function ScreenCert({ nav, state }) {
  const role = ROLES.find(r => r.id === state.role) || ROLES[0];
  const guestName = '장원영';
  const [shared, setShared] = React.useState(false);

  return (
    <div style={{ height: '100%', background: T.bg, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '60px 16px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <button className="tap" onClick={() => nav('paid')} style={{ width: 36, height: 36, borderRadius: '50%', background: 'transparent', border: 'none', display: 'grid', placeItems: 'center', cursor: 'pointer', color: T.ink2 }}>
          <Ico.Back />
        </button>
        <div style={{ fontSize: 14, fontWeight: 600 }}>인증카드</div>
        <div style={{ width: 36 }} />
      </div>

      <div className="pscroll" style={{ flex: 1, overflowY: 'auto', padding: '12px 16px 140px' }}>
        {/* 9:16 instagram-story card preview */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{
            width: '92%', aspectRatio: '9 / 16',
            borderRadius: 24, overflow: 'hidden', position: 'relative',
            background: `linear-gradient(165deg, ${role.color} 0%, ${T.navy} 100%)`,
            boxShadow: '0 20px 50px rgba(0,0,0,0.22)',
          }}>
            {/* sparkles */}
            <div style={{ position: 'absolute', top: 30, right: 30, color: 'rgba(255,255,255,0.5)' }}><Ico.Sparkle style={{ width: 24, height: 24 }} /></div>
            <div style={{ position: 'absolute', top: 90, left: 26, color: 'rgba(255,255,255,0.3)' }}><Ico.Sparkle style={{ width: 14, height: 14 }} /></div>
            <div style={{ position: 'absolute', bottom: 120, right: 36, color: 'rgba(255,255,255,0.35)' }}><Ico.Sparkle style={{ width: 18, height: 18 }} /></div>

            <div style={{ padding: '36px 28px 28px', color: '#fff', height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Txt size={10} weight={700} color="rgba(255,255,255,0.75)" style={{ letterSpacing: '0.22em' }}>WELLNESS CREW · 2026</Txt>

              {/* sticker emoji big */}
              <div style={{ marginTop: 28, textAlign: 'center' }}>
                <div style={{ width: 96, height: 96, borderRadius: '50%', background: 'rgba(255,255,255,0.18)', border: '2px solid rgba(255,255,255,0.3)', display: 'inline-grid', placeItems: 'center', fontSize: 50, backdropFilter: 'blur(10px)' }}>
                  {role.emoji}
                </div>
                <div style={{ fontSize: 28, fontWeight: 800, marginTop: 18, letterSpacing: '-0.03em' }}>
                  「{role.label}」
                </div>
                <div style={{ fontSize: 18, fontWeight: 600, marginTop: 12, lineHeight: 1.4 }}>
                  <b style={{ fontSize: 22 }}>{guestName}</b>님이<br />
                  우석이 결혼을 축하했어요
                </div>
              </div>

              <div style={{ flex: 1 }} />

              {/* product */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderRadius: 14, background: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.18)' }}>
                <NamuhA1 size={40} float={false} />
                <div style={{ flex: 1 }}>
                  <Txt size={11} color="rgba(255,255,255,0.7)">선물 · NAMUHX</Txt>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>나무엑스 A1</div>
                </div>
              </div>

              <div style={{ marginTop: 14, textAlign: 'center' }}>
                <Txt size={10} weight={700} color="rgba(255,255,255,0.65)" style={{ letterSpacing: '0.16em' }}>NAMUHX.COM · 함께 선물하기</Txt>
              </div>
            </div>
          </div>
        </div>

        {/* share channels */}
        <H size={14} weight={700} style={{ marginTop: 28, marginBottom: 12, textAlign: 'center' }}>친구들에게 공유</H>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
          {[
            { id: 'insta-feed', label: '인스타 피드', bg: 'linear-gradient(135deg, #f09433, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888)', icon: <Ico.Insta /> },
            { id: 'insta-story', label: '스토리', bg: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', icon: <Ico.Insta /> },
            { id: 'kakao', label: '카카오톡', bg: '#FEE500', color: '#3C1E1E', icon: <Ico.Kakao /> },
            { id: 'link', label: '링크 복사', bg: '#fff', color: T.ink, border: true, icon: <Ico.Link /> },
          ].map(s => (
            <button key={s.id} className="tap" onClick={() => setShared(true)} style={{
              border: s.border ? `1px solid ${T.line}` : 'none', background: 'none', cursor: 'pointer', fontFamily: 'inherit',
            }}>
              <div style={{
                aspectRatio: '1', borderRadius: 16,
                background: s.bg, color: s.color || '#fff',
                display: 'grid', placeItems: 'center',
                boxShadow: s.border ? 'none' : '0 4px 12px rgba(0,0,0,0.12)',
                border: s.border ? `1px solid ${T.line}` : 'none',
              }}>
                {s.icon}
              </div>
              <Txt size={11} color={T.ink2} weight={600} style={{ display: 'block', marginTop: 6 }}>{s.label}</Txt>
            </button>
          ))}
        </div>

        {shared && (
          <div className="anim-fadeUp" style={{ marginTop: 16, padding: 12, background: T.mintSoft, borderRadius: 12, textAlign: 'center' }}>
            <Txt size={12} weight={600} color={T.mintDeep}>✓ 공유 완료! +20 XP 적립</Txt>
          </div>
        )}
      </div>

      <StickyCTA>
        <div style={{ display: 'flex', gap: 8 }}>
          <Btn variant="outline" height={50} style={{ flex: 1 }} onClick={() => nav('paid')}>건너뛰기</Btn>
          <Btn variant="primary" height={50} style={{ flex: 1.4 }} onClick={() => nav('dashboard')}>
            크루 보러가기
          </Btn>
        </div>
      </StickyCTA>
    </div>
  );
}

// ─── 14 · Order complete (final) ───
function ScreenOrderComplete({ nav, state }) {
  return (
    <div style={{ height: '100%', background: '#fff', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
      <Confetti count={60} duration={2400} />

      <div className="pscroll" style={{ flex: 1, overflowY: 'auto', padding: '60px 24px 130px' }}>
        <div style={{ textAlign: 'center', paddingTop: 12 }}>
          <div className="anim-pop" style={{ display: 'inline-block' }}>
            {window.CuteHedgehog && <window.CuteHedgehog size={180} holding="gift" />}
          </div>
          <H size={32} weight={800} ls="-0.04em" style={{ marginTop: 4 }}>야호 ~ 발송 완료 🚚</H>
          <Txt size={14} color={T.ink3} style={{ display: 'block', marginTop: 10 }}>
            크루 4명이 마음 모은 결과<br />
            우석이는 내일 깜놀할 예정 ㅋㅋ
          </Txt>
        </div>

        {/* order summary */}
        <Card style={{ marginTop: 32, padding: 20 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, paddingBottom: 16, borderBottom: `1px solid ${T.line2}` }}>
            <NamuhA1 size={60} float={false} />
            <div style={{ flex: 1 }}>
              <Txt size={11} color={T.ink3}>주문번호 WC-26051803</Txt>
              <H size={16} weight={700}>나무엑스 A1 · Night Gray</H>
            </div>
          </div>
          <div style={{ paddingTop: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              { l: '크루', v: '우석이 결혼축하 · 4명' },
              { l: '총 결제', v: '3,122,000원' },
              { l: '배송지', v: '서울 강남구 (변우석)' },
              { l: '예정', v: '2026.05.19 도착' },
            ].map(r => (
              <div key={r.l} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Txt size={12} color={T.ink3}>{r.l}</Txt>
                <Txt size={12} weight={600}>{r.v}</Txt>
              </div>
            ))}
          </div>
        </Card>

        {/* XP / achievement */}
        <Card style={{ marginTop: 16, padding: 18, background: `linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 100%)`, border: '1px solid #FDE68A' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ fontSize: 40 }}>🏆</div>
            <div style={{ flex: 1 }}>
              <Txt size={11} weight={700} color="#92400E" style={{ letterSpacing: '0.08em' }}>ACHIEVEMENT UNLOCKED</Txt>
              <H size={16} weight={700} color="#92400E">첫 크루 완성!</H>
              <Txt size={11} color="#9A6711" style={{ display: 'block', marginTop: 2 }}>+500 XP · 다음 크루는 5% 추가 할인</Txt>
            </div>
          </div>
        </Card>

        {/* crew thanks */}
        <div style={{ marginTop: 16, padding: 18, borderRadius: 18, background: T.mintSoft }}>
          <Txt size={12} weight={700} color={T.mintDeep} style={{ letterSpacing: '0.04em' }}>함께한 크루</Txt>
          <div style={{ display: 'flex', gap: -8, marginTop: 10 }}>
            {['김태희', '장원영', '전지현', '차은우'].map((n, i) => (
              <div key={n} style={{ marginLeft: i === 0 ? 0 : -10 }}>
                <Avatar name={n} size={36} style={{ border: '3px solid #fff' }} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <StickyCTA>
        <div style={{ display: 'flex', gap: 8 }}>
          <Btn variant="outline" height={52} style={{ flex: 1 }} onClick={() => nav('pdp')}>홈으로</Btn>
          <Btn variant="primary" height={52} style={{ flex: 1.4 }} onClick={() => nav('cert')} leading={<Ico.Share />}>인증카드 공유</Btn>
        </div>
      </StickyCTA>
    </div>
  );
}

Object.assign(window, { ScreenKakao, ScreenGuestLanding, ScreenPayment, ScreenPaid, ScreenCert, ScreenOrderComplete, ROLES });
