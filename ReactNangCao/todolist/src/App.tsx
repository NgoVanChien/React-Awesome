import React from 'react'
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

function App() {
  return (
    <div>
      {/* <Watch /> */}
      {/* <TodoList /> */}
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
      {/* <MouseTracker render={(value) => <Ads {...value} />} /> */}
      <Ads visible />
    </div>
  )
}

export default App
