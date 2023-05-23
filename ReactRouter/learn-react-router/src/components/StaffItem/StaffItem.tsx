import { useParams } from 'react-router-dom'

export default function StaffItem() {
  // const parmams = useParams()
  // console.log(parmams)
  const { id } = useParams()
  return <div>StaffItem {id}</div>
}
