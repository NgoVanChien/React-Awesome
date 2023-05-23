import AddStaff from 'components/AddStaff'
import StaffItem from 'components/StaffItem'
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import StaffList from 'pages/StaffList'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <MainLayout>
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>
          <Route path='/About' element={<About />}></Route>
          <Route path='/Staff' element={<StaffList />}></Route>
          <Route path='/Staff/:id' element={<StaffItem />}></Route>
          <Route path='/Staff/add' element={<AddStaff />}></Route>
        </Routes>
        {/* <Dashboard />
        <About />
        <StaffList /> */}
      </MainLayout>
    </div>
  )
}

export default App
