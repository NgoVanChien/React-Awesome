import { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/', {
        state: 'Redirect from  notfound'
      })
      // navigate(-1,{
      //   replace
      // })
    }, 2000)
  }, [navigate])
  return <div>Not Found</div>
}
