import React from 'react'
import Header from '../Components/header';
import Image from 'next/image'

function page() {
  return (
    <div>
      <Header />

      Booking page
      
      <div className="flex flex-col justify-center items-center">
      <Image width={100} height={100} src="/underM.gif" alt='' />
      Under maintenance
    </div>

      </div>
  )
}

export default page