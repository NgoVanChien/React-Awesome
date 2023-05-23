import React from 'react'
import { Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
interface Props {
  children?: React.ReactNode
}

const ExtraContent = () => {
  const location = useLocation()
  console.log(location)
  return <div className='text-red-600'>URL is About </div>
}

export default function MainLayout({ children }: Props) {
  return (
    <div className='grid min-h-screen grid-cols-4'>
      <aside className='col-span-1' aria-label='Sidebar'>
        <div className='h-full overflow-y-auto bg-gray-100 px-3 py-4 shadow-lg'>
          <ul className='space-y-2'>
            <li>
              <NavLink
                to='/'
                // style={({ isActive }) => ({
                //   fontWeight: isActive ? 800 : undefined
                // })}
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg ${activeClass} p-2 text-base font-normal text-gray-900 hover:bg-gray-300`
                }}
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''} `}>Dashboard</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/staff'
                end
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg ${activeClass} p-2 text-base font-normal text-gray-900 hover:bg-gray-300`
                }}
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''} `}>Staff</span>}
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) => {
                  const activeClass = isActive ? 'bg-gray-300' : ''
                  return `flex items-center rounded-lg ${activeClass} p-2 text-base font-normal text-gray-900 hover:bg-gray-300`
                }}
              >
                {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''} `}>About</span>}
              </NavLink>
            </li>
          </ul>
          <Routes location='/about'>
            <Route path='/about' element={<ExtraContent />} />
          </Routes>
        </div>
      </aside>
      <main className='col-span-3 h-full px-3 py-4'>{children}</main>
    </div>
  )
}
