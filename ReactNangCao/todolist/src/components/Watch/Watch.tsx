import React, { useEffect, useRef, useState } from 'react'

// let interval: any = null
// Pure Component : Ko nen thay doi 1 Bien ben ngoai Component
function WatchTimer() {
  // let interval: any = null  --> moi lan WatchTimer rerender --> set lai interval = null --> Khuyet diem
  const intervalRef = useRef<any>(null)
  const [seconds, setSeconds] = useState<number>(0)
  useEffect(() => {
    // console.log('Chay 1 Lan, Ko Thay doi tham chieu')
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1)
      console.log('setInterval dang chay')
    }, 1000)
    return () => {
      clearInterval(intervalRef.current)
      console.log('WatchTimer unmount')
    }
  }, [])
  return <div>Watch: {seconds}</div>
}

export default function Watch() {
  const [visible, setVisible] = useState<boolean>(true)

  return (
    <div>
      <button onClick={() => setVisible((prev) => !prev)}>Set Visible Watch Timer</button>
      {visible && <WatchTimer />}
    </div>
  )
}
