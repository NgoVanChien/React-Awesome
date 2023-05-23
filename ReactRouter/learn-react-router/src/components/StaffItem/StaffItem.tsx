import { useParams, useOutletContext } from 'react-router-dom'

export default function StaffItem() {
  // const parmams = useParams()
  // console.log(parmams)
  const context = useOutletContext()
  console.log(context)
  const { id } = useParams()
  return <div>StaffItem {id}</div>
}
