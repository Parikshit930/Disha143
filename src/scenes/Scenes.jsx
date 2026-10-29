import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Lock, Eye, EyeOff, Heart, Sparkles, Sprout, Home, Camera, RotateCcw } from 'lucide-react'
import { Petals, Stars } from '../components/Ambient'
import RoseBouquet from '../components/RoseBouquet'
import RingReveal from '../components/RingReveal'
import { PASSWORD, HINT, letter, promises, answers } from '../data/proposalContent'
import { memories } from '../data/memories'

const F = ({ d = 0, y = 16, as: Tag = 'div', children, ...p }) => {
  const M = motion[Tag] || motion.div
  return <M initial={{ opacity: 0, y }} animate={{ opacity: 1, y: 0 }} transition={{ delay: d, duration: 1.1 }} {...p}>{children}</M>
}
const Next = ({ onClick, children }) => <button className="btn" onClick={onClick}>{children}</button>

export function Gate({ onUnlock }) {
  const [v, setV] = useState(''), [show, setShow] = useState(false), [err, setErr] = useState(0), [ok, setOk] = useState(false)
  const t = useRef()
  useEffect(() => () => clearTimeout(t.current), [])
  const submit = e => {
    e.preventDefault()
    if (v.trim() === PASSWORD) { setOk(true); t.current = setTimeout(onUnlock, 2400) } else setErr(n => n + 1)
  }
  return (
    <section className="scene gate"><Petals count={12} />
      <div className="glow" aria-hidden="true" />
      <F className="card glass">
        <Lock className="lock" size={28} aria-hidden="true" />
        <h1>A little world, made just for you</h1>
        <p>Some surprises are too special to reveal all at once. ❤️</p>
        <p className="soft">Before you enter, there's one little secret only you can solve...</p>
        {ok ? <motion.p className="script" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>You found the key, Disha. Now let me show you what's in my heart. ❤️</motion.p> : (
          <form onSubmit={submit}>
            <motion.div className="field" key={err} animate={err ? { x: [0, -10, 10, -8, 8, 0] } : {}} transition={{ duration: .5 }}>
              <input aria-label="Password" type={show ? 'text' : 'password'} inputMode="numeric" autoComplete="off" value={v} onChange={e => setV(e.target.value)} placeholder="• • • •" />
              <button type="button" className="icon" aria-label={show ? 'Hide password' : 'Show password'} onClick={() => setShow(s => !s)}>{show ? <EyeOff size={18} /> : <Eye size={18} />}</button>
            </motion.div>
            {err > 0 && <p role="alert" className="err">That's not quite the key — try again, gently. 🤍</p>}
            <button className="btn" type="submit">Unlock</button>
          </form>)}
        {!ok && <p className="hint">{HINT}</p>}
      </F>
    </section>
  )
}
export function Universe({ next }) {
  return (
    <section className="scene universe"><Stars /><Petals /><div className="moon" aria-hidden="true" /><div className="garden" aria-hidden="true" />
      <div className="content">
        <F as="h2" d={.5} className="big">Somehow, in this enormous world, my heart found its way to you.</F>
        <F d={2} className="name script">Disha ❤️</F>
        <F as="p" d={3.5} className="lead">Out of all the people we could have met, life brought us together through a mutual friend. And somewhere along the way, you became someone I wanted to create this little world for.</F>
        <F d={5}><Next onClick={next}>Continue, my favourite person →</Next></F>
      </div>
    </section>
  )
}
export function Ride({ next }) {
  return (
    <section className="scene ride"><Petals count={8} /><div className="sun" aria-hidden="true" />
      <div className="road" aria-hidden="true" />
      <motion.svg className="bike" viewBox="0 0 160 80" aria-hidden="true" initial={{ x: -120 }} animate={{ x: 0 }} transition={{ duration: 3, ease: 'easeOut' }}>
        <g fill="none" stroke="#12040a" strokeWidth="5"><circle cx="30" cy="55" r="18" /><circle cx="130" cy="55" r="18" /><path d="M30 55 L60 30 L95 30 L130 55 M60 30 L75 55 L30 55 M95 30 L105 15 L120 15" /></g>
        <path d="M60 28 L100 28 L108 40 L70 42 Z" fill="#12040a" />
      </motion.svg>
      <div className="content">
        <F as="h2" className="big">One Unexpected Ride. One Memory I Never Wanted to Forget. ❤️</F>
        <F d={1.2} className="card glass memory">
          <p className="tag script">One of our little beginnings</p>
          <p>Sometimes, the most beautiful memories aren't the ones we plan. They're the ones that happen unexpectedly, without warning, and somehow find a special place in our hearts.</p>
          <p>Our first bike ride was one of those moments for me. It wasn't something I had planned as a big romantic memory, but looking back, it became a little piece of our story that I wanted to hold on to.</p>
          <p>Maybe that's what makes certain moments so special. We don't always know when something ordinary is going to become a memory we smile about later. 🥹❤️</p>
          <p className="soft cap">Some memories arrive without a plan and stay with us for a long time. 🌙</p>
        </F>
        <F d={2}><Next onClick={next}>Continue →</Next></F>
      </div>
    </section>
  )
}
export function BouquetScene({ next }) {
  const [open, setOpen] = useState(false), [k, setK] = useState(0)
  return (
    <section className={'scene bq' + (open ? ' open' : '')}><Petals count={open ? 22 : 6} />
      <div className="content">
        {!open ? (
          <F className="center"><div className="spark" aria-hidden="true" />
            <p className="lead">There's something I want to give you...</p>
            <Next onClick={() => setOpen(true)}>Open your bouquet, Disha 🌹</Next></F>
        ) : (
          <>
            <div className="halo-wrap"><motion.div className="halo" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 2 }} aria-hidden="true" /><div key={k} className="float"><RoseBouquet /></div></div>
            <F d={4.5} className="msg">
              <p>If I could give you one little reminder of how special you are, I'd want it to bloom like these roses — beautiful, warm, and impossible to overlook. 🌹</p>
              <p>And if I could give you something more meaningful than flowers, I'd give you the chance to see yourself through my eyes, even for a moment. Maybe then you'd understand why you mean so much to me. ❤️</p>
              <div className="row"><button className="btn ghost" onClick={() => setK(n => n + 1)}><RotateCcw size={16} /> Watch it bloom again</button><Next onClick={next}>Continue →</Next></div>
            </F>
          </>)}
      </div>
    </section>
  )
}
export function LetterScene({ next }) {
  const [opened, setOpened] = useState(false), [all, setAll] = useState(false)
  const h = 'A Letter I Wanted You to Read, Disha ❤️'
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!opened) return
    if (n >= h.length) return
    const t = setTimeout(() => setN(x => x + 1), all ? 0 : 45)
    return () => clearTimeout(t)
  }, [opened, n, all])
  return (
    <section className="scene letter"><Petals count={8} />
      {!opened ? (
        <F className="content center"><button className="envelope" onClick={() => setOpened(true)} aria-label="Break the wax seal and open the letter"><span className="seal">❤</span></button><p className="soft">Break the seal to open the letter</p></F>
      ) : (
        <div className="content">
          <motion.article className="paper" initial={{ scaleY: .1, opacity: 0 }} animate={{ scaleY: 1, opacity: 1 }} transition={{ duration: 1 }} style={{ originY: 0 }}>
            <span className="corner" aria-hidden="true">🌹</span>
            <h2 aria-label={h}>{h.slice(0, n)}</h2>
            {letter.map((p, i) => <motion.p key={i} className={i === 0 || i >= letter.length - 3 ? 'script-l' : ''} initial={{ opacity: 0 }} animate={n >= h.length || all ? { opacity: 1 } : {}} transition={{ delay: all ? 0 : i * .9, duration: 1 }}>{p}</motion.p>)}
            <p className="sig">Made with love, for Disha. — Parikshit <Heart className="beat" size={16} fill="#b3122b" stroke="none" aria-hidden="true" /></p>
          </motion.article>
          <div className="row">{!all && <button className="btn ghost" onClick={() => setAll(true)}>Show the whole letter</button>}<Next onClick={next}>Continue →</Next></div>
        </div>)}
    </section>
  )
}
const icons = { Heart, Sparkles, Sprout, Home }
export function Future({ next }) {
  return (
    <section className="scene future"><Stars count={30} />
      <div className="content">
        <F as="h2" className="big">A Future I Would Love to Build With You 🌙</F>
        <div className="grid4">{promises.map((p, i) => { const I = icons[p.icon]; return (
          <F key={p.title} d={.8 + i * .8} className="pcard"><I size={28} aria-hidden="true" /><h3>{p.title}</h3><p>{p.text}</p></F>) })}</div>
        <F d={4.5}><Next onClick={next}>Continue →</Next></F>
      </div>
    </section>
  )
}
function Frame({ m }) {
  const [bad, setBad] = useState(false), [loaded, setLoaded] = useState(false)
  const has = m.image && !bad
  return (
    <figure className="frame">
      <div className="shot">
        {has && <img src={m.image} alt={m.title} loading="lazy" onError={() => setBad(true)} onLoad={() => setLoaded(true)} className={loaded ? 'in' : ''} />}
        {!has && <div className="empty"><Camera size={30} aria-hidden="true" /><span>Your photo will bloom here</span></div>}
      </div>
      <figcaption><strong>{m.title}</strong><span>{m.caption}{m.date ? ' · ' + m.date : ''}</span></figcaption>
    </figure>
  )
}
export function Gallery({ next }) {
  return (
    <section className="scene gallery"><Petals count={8} />
      <div className="content wide">
        <F as="h2" className="big">Our Memory Gallery 📸</F>
        <div className="gal">{memories.map((m, i) => <F key={m.title} d={.4 + i * .25}><Frame m={m} /></F>)}</div>
        <F d={2.2}><Next onClick={next}>One last thing →</Next></F>
      </div>
    </section>
  )
}

// ─── WhatsApp notification ────────────────────────────────────────────────────
const WA_NUMBER = '919897762440'
const waMessages = {
  yes: '💍❤️ YES! I said YES to Parikshit! My heart is so full right now. I clicked "Yes, let\'s see where our story takes us" on the beautiful little world he made just for me. 🌹✨',
  time: '🤍 Parikshit made me the most beautiful proposal website and I need a little time to think... 💭 I pressed "I need a little time to think" — but know that I\'m feeling so loved right now.',
  talk: '🫶 Parikshit made me the most beautiful proposal website! I clicked "Can we talk about this together?" — I want to talk with you about everything, Parikshit. ❤️💬',
}
function sendWhatsApp(key) {
  const msg = encodeURIComponent(waMessages[key] || '')
  window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, '_blank', 'noopener,noreferrer')
}
// ─────────────────────────────────────────────────────────────────────────────

export function Proposal({ restart }) {
  const [s, setS] = useState(0), [ans, setAns] = useState(null)
  useEffect(() => {
    const times = [1200, 2600, 4800, 8000, 11500]
    const ts = times.map((t, i) => setTimeout(() => setS(i + 1), t))
    return () => ts.forEach(clearTimeout)
  }, [])

  const pick = key => {
    setAns(key)
    sendWhatsApp(key)
  }

  const a = ans && answers[ans]
  return (
    <section className={'scene final' + (ans === 'time' ? ' calm' : '') + (ans === 'talk' ? ' warm' : '')}>
      <Stars count={60} /><Petals count={ans === 'yes' ? 40 : 14} fast={ans === 'yes'} />
      {ans === 'yes' && <div className="ambient" aria-hidden="true">{[...Array(8)].map((_, i) => <Heart key={i} className="fheart" size={22} fill="#e8869a" stroke="none" style={{ left: 8 + i * 12 + '%', animationDelay: i * .7 + 's' }} />)}</div>}

      <div className="content">
        {/* 💍 Ring — ALWAYS visible, beautifully animated, never hidden */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          <RingReveal open={s >= 1 || !!ans} glow />
        </motion.div>

        {/* 🌷 Extra flower for "need time" response */}
        {ans === 'time' && (
          <motion.div className="flower" initial={{ scale: .2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 2 }} aria-hidden="true">🌷</motion.div>
        )}

        {!ans && (<>
          {s >= 2 && <F as="p" className="lead">Disha, there's one thing I've wanted to ask you... ❤️</F>}
          {s >= 3 && <F as="p" className="lead">Out of all the beautiful possibilities life holds, you're someone I would love to build a future with.</F>}
          {s >= 4 && <F as="h2" className="big q">Will you let me choose you, grow with you, and build a beautiful future together — with the hope of making you my life partner someday? 💍❤️</F>}
          {s >= 5 && <F className="center">
            <p className="soft">I don't expect a perfect answer or a perfect future. I simply wanted to be honest about what my heart hopes for. Whatever you feel, I want you to feel comfortable being honest with me.</p>
            <div className="answers">
              {Object.entries(answers).map(([k, v]) => (
                <button key={k} className={'btn' + (k === 'yes' ? '' : ' ghost')} onClick={() => pick(k)}>{v.label}</button>
              ))}
            </div>
          </F>}
        </>)}

        {a && <F className="center">
          <h2 className="big">{a.title}</h2>
          {a.lines.map(l => <p key={l} className="lead">{l}</p>)}
          <div className="row">
            <button className="btn ghost" onClick={() => setAns(null)}>Change my answer</button>
            <button className="btn ghost" onClick={restart}>Begin again</button>
          </div>
        </F>}
      </div>
    </section>
  )
}
