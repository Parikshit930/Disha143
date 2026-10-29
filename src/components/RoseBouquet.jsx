import { motion } from 'framer-motion'
const roses = [[150, 120, 1.1], [95, 150, .9], [205, 150, .9], [125, 205, .8], [180, 205, .8]]
const whites = [[60, 190], [240, 190], [150, 70], [110, 95], [190, 95]]
function Rose({ x, y, s, d }) {
  return (
    <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: s, opacity: 1 }} transition={{ delay: d, duration: 1.1, type: 'spring', damping: 12 }} style={{ transformOrigin: 'center', transformBox: 'fill-box' }}>
      <g transform={`translate(${x} ${y})`}>
        {[0, 72, 144, 216, 288].map(a => <ellipse key={a} cx="0" cy="-14" rx="14" ry="16" fill="#8b0a1e" transform={`rotate(${a})`} />)}
        {[36, 108, 180, 252, 324].map(a => <ellipse key={a} cx="0" cy="-9" rx="10" ry="12" fill="#b3122b" transform={`rotate(${a})`} />)}
        <circle r="8" fill="#d11a3a" /><path d="M-5 0a5 5 0 1 1 5 5" stroke="#6e0818" strokeWidth="2" fill="none" />
      </g>
    </motion.g>
  )
}
export default function RoseBouquet() {
  return (
    <svg viewBox="0 0 300 380" className="bouquet" role="img" aria-label="A bouquet of red roses with white flowers and golden accents">
      <defs><linearGradient id="wrap" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f6e7d8" /><stop offset="1" stopColor="#d9b779" /></linearGradient></defs>
      {roses.map(([x, y], i) => <motion.path key={i} d={`M${x} ${y} Q${150 + (x - 150) / 2} 280 150 330`} stroke="#2f6b3a" strokeWidth="4" fill="none" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: i * .25, duration: .9 }} />)}
      {[[70, 150, -30], [230, 150, 30], [100, 240, -50], [200, 240, 50]].map(([x, y, r], i) => <motion.ellipse key={i} cx={x} cy={y} rx="11" ry="26" fill="#3f8a4b" transform={`rotate(${r} ${x} ${y})`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 + i * .15 }} />)}
      {whites.map(([x, y], i) => (
        <motion.g key={i} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 + i * .2 }}>
          {[0, 72, 144, 216, 288].map(a => <circle key={a} cx={x + Math.cos(a * Math.PI / 180) * 7} cy={y + Math.sin(a * Math.PI / 180) * 7} r="6" fill="#fff8f0" />)}
          <circle cx={x} cy={y} r="3.5" fill="#d9b779" />
        </motion.g>
      ))}
      {roses.map(([x, y, s], i) => <Rose key={i} x={x} y={y} s={s} d={.6 + i * .45} />)}
      {[[120, 60], [185, 55], [150, 40], [80, 120], [225, 125]].map(([x, y], i) => <motion.circle key={i} cx={x} cy={y} r="3" fill="#d9b779" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3 + i * .15 }} />)}
      <motion.path d="M70 235 L230 235 L172 365 L128 365 Z" fill="url(#wrap)" stroke="#b08d4e" strokeWidth="2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 1 }} />
      <motion.path d="M138 262 Q150 280 162 262 L168 300 Q150 316 132 300 Z" fill="#b3122b" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }} />
    </svg>
  )
}
