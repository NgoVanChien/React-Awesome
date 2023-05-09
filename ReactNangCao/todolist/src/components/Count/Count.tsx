import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'

const heavyTask = () => {
  for (let i = 0; i < 10000; i++) {
    let obj = { name: 'Alex', age: 14 }
    let objString = JSON.stringify(obj)
    obj = JSON.parse(objString)
  }
}

export default function Count() {
  //   const [count, setCount] = useState<number>(0)
  const [width, setWidth] = useState<number>(0)
  const sectionRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    const measure = () => setWidth(sectionRef.current?.offsetWidth || 0)
    heavyTask()
    measure()
    window.addEventListener('resize', measure)
    return () => {
      window.removeEventListener('resize', measure)
    }
  }, [])

  //   const handleClick = () => {
  //     setCount((prve) => prve + 1)
  //   }

  //   useEffect(() => {
  //     if (count === 4) {
  //       setCount(0)
  //     }
  //   }, [count])

  //   useLayoutEffect(() => {
  //     if (count === 4) {
  //       setCount(0)
  //     }
  //   }, [count])

  return (
    <div>
      <section ref={sectionRef} style={{ background: 'red' }}>
        Content
      </section>
      {width > 300 && <div style={{ background: 'yellow' }}>Please resize screen smaller</div>}
      {/* <section>Count: {count}</section>
      <button onClick={handleClick}>Click me to increase</button> */}
    </div>
  )
}
