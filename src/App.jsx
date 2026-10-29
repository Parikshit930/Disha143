import { useRef, useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import MusicPlayer from './components/MusicPlayer'
import { Gate, Universe, Ride, BouquetScene, LetterScene, Future, Gallery, Proposal } from './scenes/Scenes'

const names = ['Gate', 'Her universe', 'The ride', 'Bouquet', 'Letter', 'Future', 'Gallery', 'Proposal']

// 🎵 Romantic background music — beautiful piano piece stored locally
const MUSIC_SRC = '/audio/romantic-piano.mp3'

export default function App() {
  const [i, setI] = useState(0), [max, setMax] = useState(0), [on, setOn] = useState(false)
  const au = useRef(null), fade = useRef(null)
  useEffect(() => () => clearInterval(fade.current), [])

  const ramp = (to, done) => {
    clearInterval(fade.current)
    const a = au.current; if (!a) return
    fade.current = setInterval(() => {
      const d = to - a.volume
      if (Math.abs(d) < .04) { a.volume = to; clearInterval(fade.current); done && done() } else a.volume = Math.min(1, Math.max(0, a.volume + Math.sign(d) * .04))
    }, 100)
  }
  const play = () => {
    const a = au.current; if (!a) return
    try {
      a.volume = 0
      const p = a.play()
      p && p.then(() => { setOn(true); ramp(.5) }).catch(() => setOn(false))
    } catch { setOn(false) }
  }
  const toggle = () => { if (on) { setOn(false); ramp(0, () => au.current && au.current.pause()) } else play() }
  const go = n => { setI(n); setMax(m => Math.max(m, n)); window.scrollTo(0, 0) }
  const next = () => go(i + 1)

  const S = [
    <Gate onUnlock={() => { play(); go(1) }} />,
    <Universe next={next} />,
    <Ride next={next} />,
    <BouquetScene next={next} />,
    <LetterScene next={next} />,
    <Future next={next} />,
    <Gallery next={next} />,
    <Proposal restart={() => { setMax(0); go(0) }} />,
  ]

  return (
    <>
      {/* 🎵 Romantic background music */}
      <audio ref={au} src={MUSIC_SRC} loop preload="none" crossOrigin="anonymous" onError={() => setOn(false)} />
      {i > 0 && <MusicPlayer on={on} onToggle={toggle} />}
      {i > 0 && (
        <nav className="chapters" aria-label="Chapters">
          {names.slice(1).map((n, k) => (
            <button key={n} disabled={k + 1 > max} aria-label={n} aria-current={k + 1 === i} className={k + 1 === i ? 'cur' : ''} onClick={() => go(k + 1)} />
          ))}
        </nav>
      )}
      <AnimatePresence mode="wait">
        <motion.main key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: .9 }}>
          {S[i]}
        </motion.main>
      </AnimatePresence>
    </>
  )
}
