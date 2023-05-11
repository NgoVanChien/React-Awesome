import React, { useCallback, useMemo, useRef, useState } from 'react'
import TodoList from './components/TodoList'
import Watch from './components/Watch'
import Slider from './components/Slider'
import Count from './components/Count'
import Counter from './components/Counter'
import Welcome from './components/Welcome'
import AutoInput from './components/AutoInput/AutoInput'
import ProductList from './components/ProductList'
import Manager from './components/Manager'
import MainLayout from './layouts/MainLayout'
import MouseTracker from './components/MouseTracker'
import Ads from './components/Ads'
import { PositionType } from './components/MouseTracker/MouseTracker'
import Users from './components/Users'
import ErrorBoundary from './components/ErrorBoundary'

// const renderAds = (value: PositionType) => <Ads {...value} visible />

function App() {
  const [visible, setVisible] = useState(true)
  // const [, render] = useState({})
  // const renederAds = useCallback((value: PositionType) => <Ads {...value} visible />, [])
  // const renderAds = useMemo(() => {
  //   return (value: PositionType) => <Ads {...value} visible />
  // }, [])

  // const renderRef = useRef<any>((value: PositionType) => <Ads {...value} visible />)

  return (
    <div>
      {/* <Watch /> */}
      <TodoList />
      {/* <Slider /> */}
      {/* <Count /> */}
      {/* <Counter /> */}
      {/* <Welcome /> */}
      {/* <AutoInput /> */}
      {/* <ProductList /> */}
      {/* <MainLayout>
        <Manager />
      </MainLayout> */}
      {/* <MouseTracker children={(value) => <Ads x={value.x} y={value.y} />} /> */}
      {/* <MouseTracker children={(value) => <Ads {...value} />} /> */}
      {/* <MouseTracker>{(value) => <Ads {...value} />}</MouseTracker> */}
      {/* <MouseTracker render={(value) => <Ads {...value} />} />
    </div> */}
      {/* <div>
        <button onClick={() => render({})}>Force Rerender</button>
      </div> */}
      {/* <MouseTracker render={renderAds} /> */}
      {/* line use" Callback "and "useMemo" and" use funntion outside" */}
      {/* 4 cách trên dùng đễ Memory Component, Memoization của React */}
      {/* <MouseTracker render={renderRef.current} /> */}
      {/* <Ads visible/> */}
      {/* <div>
        <button onClick={() => setVisible((prev) => !prev)}>Change visible</button>
      </div>
      {visible && <Users />} */}
      {/* <ErrorBoundary /> */}
    </div>
  )
}

export default App
