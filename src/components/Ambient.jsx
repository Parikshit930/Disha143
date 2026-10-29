import { useMemo } from 'react'
const rnd = (a, b) => a + Math.random() * (b - a)
const small = () => typeof window !== 'undefined' && window.innerWidth < 640
export function Petals({ count = 18, fast = false }) {
  const items = useMemo(() => Array.from({ length: small() ? Math.ceil(count / 2) : count }, (_, i) => ({
    i, left: rnd(0, 100), size: rnd(10, 20), dur: rnd(fast ? 6 : 11, fast ? 10 : 20), delay: rnd(-20, 0), hue: Math.random() > 0.4 ? '#b3122b' : '#e8869a',
  })), [count, fast])
  return <div className="ambient" aria-hidden="true">{items.map(p => (
    <i key={p.i} className="petal" style={{ left: p.left + '%', width: p.size, height: p.size * 1.3, background: p.hue, animationDuration: p.dur + 's', animationDelay: p.delay + 's' }} />
  ))}</div>
}
export function Stars({ count = 45 }) {
  const items = useMemo(() => Array.from({ length: small() ? count / 2 : count }, (_, i) => ({ i, l: rnd(0, 100), t: rnd(0, 85), s: rnd(1, 2.6), d: rnd(0, 5) })), [count])
  return <div className="ambient" aria-hidden="true">{items.map(s => (
    <i key={s.i} className="star" style={{ left: s.l + '%', top: s.t + '%', width: s.s, height: s.s, animationDelay: s.d + 's' }} />
  ))}</div>
}
