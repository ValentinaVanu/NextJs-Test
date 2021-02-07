import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { get } from 'axios'



const Person = () => {

  const router = useRouter()
  console.log(router.query)


  return (
    <div>
      <h2>{router.query.person}'s {router.query.pet}</h2>
    </div>
  )
}

export default Person
