import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Staff from 'pages/Staff'
import { useEffect } from 'react'
// import StaffList from 'pages/Staff'
import { Routes, Route, useRoutes, useLocation, useSearchParams } from 'react-router-dom'

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

  const location = useLocation()
  // console.log(location)

  // Xử lý query string :
  // cách 1: K cần cài thư viện

  // CÁCH 2 : Cài thư viện query-string
  const [searchParams] = useSearchParams()
  // console.log('searchParams', Object.fromEntries([...searchParams]))

  // Muốn Monitor, Tracking Location
  useEffect(() => {
    console.log('location', location)
  }, [location])

  // Muốn Monitor, Tracking Params
  useEffect(() => {
    console.log('searchParams', Object.fromEntries([...searchParams]))
  }, [searchParams])

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
