import { useState, useEffect } from 'react'

function TargetCursor({ size = 24, color = '#ff0066' }) {
  const [position, setPosition] = useState({ x: -100, y: -100 })

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  const half = size / 2

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x - half,
        top: position.y - half,
        width: size,
        height: size,
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <circle
          cx={half}
          cy={half}
          r={half - 1}
          stroke={color}
          strokeWidth="2"
          fill="none"
        />
        <line x1={half} y1="0" x2={half} y2={size} stroke={color} strokeWidth="2" />
        <line x1="0" y1={half} x2={size} y2={half} stroke={color} strokeWidth="2" />
      </svg>
    </div>
  )
}

export default TargetCursor
