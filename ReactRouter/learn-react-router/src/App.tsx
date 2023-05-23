import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Staff from 'pages/Staff'
// import StaffList from 'pages/Staff'
import { Routes, Route, useRoutes } from 'react-router-dom'

function App() {
  const elements = useRoutes([
    {
      path: '/',
      element: <Dashboard />
    },
    {
      path: '/about',
      element: <About />
      //   children: [
      //     {
      //       path: ,
      //       element:
      //     }
      // ]
    },
    {
      path: '/staff',
      element: <Staff />
    },
    {
      path: '/staff/*',
      element: <Staff />
    },
    {
      path: '/*',
      element: <NotFound />
    }
  ])
  return (
    <div className='App'>
      <MainLayout>
        {/* cách 1 */}
        {elements}
        {/* cách 2 */}
        <Routes>
          {/* <Route path='/' element={<Dashboard />} />
          <Route path='/about' element={<About />} />
          <Route path='/staff/*' element={<Staff />}></Route>

          <Route path='/*' element={<NotFound />} /> */}
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
