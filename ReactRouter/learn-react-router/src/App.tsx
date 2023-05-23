import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import StaffList from 'components/StaffList'
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import NotFound from 'pages/NotFound'
import Staff from 'pages/Staff'
// import StaffList from 'pages/Staff'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/About' element={<About />} />
          <Route path='/Staff' element={<Staff />}>
            <Route path=':id' element={<StaffItem />} />
            <Route path='add' element={<AddStaff />} />
            <Route path='list' element={<StaffList />} />
          </Route>

          {/* <Route path='/Staff' element={<Staff />} />
          <Route path='/Staff/:id' element={<StaffItem />} />
          <Route path='/Staff/add' element={<AddStaff />} /> */}
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </div>
  )
}

export default App
