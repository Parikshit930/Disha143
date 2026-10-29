import { Volume2, VolumeX } from 'lucide-react'
export default function MusicPlayer({ on, onToggle }) {
  return (
    <button className="music" onClick={onToggle} aria-label={on ? 'Pause music' : 'Play music'} aria-pressed={on}>
      {on ? <Volume2 size={18} /> : <VolumeX size={18} />}
      <span className={'eq' + (on ? ' on' : '')} aria-hidden="true"><b /><b /><b /></span>
    </button>
  )
}
