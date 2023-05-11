import React, { useState } from 'react'
import Ads from '../Ads'

interface PositionType {
  x: number
  y: number
}

export default function MouseTracker() {
  const [position, setPosition] = useState<PositionType>({ x: 0, y: 0 })
  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    })
  }
  return (
    <div onMouseMove={handleMouseMove}>
      <p style={{ color: 'red' }}>Mouse Tracker</p>
      <Ads {...position} />
    </div>
  )
}
