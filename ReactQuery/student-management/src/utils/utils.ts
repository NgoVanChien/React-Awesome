import { useSearchParams } from 'react-router-dom'

export const useQueryString = () => {
  const [searchParams] = useSearchParams()
  const searchParmasObject = Object.fromEntries([...searchParams])
  // console.log(searchParmasObject)

  return searchParmasObject
}
