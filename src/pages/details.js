import Link from "next/link";
import { useEffect, useState } from "react";
import { get } from 'axios'


const Details = () => {

  const [details, setDetails] = useState([])

  useEffect(
    () => {
      try {
        const getResult = async() => {
          const { data } = await get ("http://localhost:1234/people")
          setDetails(data)
        }
        getResult()
      } catch (error) {
        console.log('Error', error)
      }
    },
    []
  )

  return (
    <div>
      {details.map(e => (
        <div>
          <Link as={`/${e.pet}/${e.name}`} href="/[pet]/[person]">
            <a>Navigate to {e.name}'s {e.pet}</a>
          </Link>
        </div>
      ))}
    </div>
  )
}



export default Details;
