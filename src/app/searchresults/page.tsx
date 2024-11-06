import React from 'react'
import Link from 'next/link'
import Header from '../Components/header';
import Image from 'next/image'

function index() {
  return (
    <div>
     <Header />
      Navigat to 
      <ul>
        <li><Link href="/booking">Search booking</Link></li>
      </ul>
      <div className="flex flex-col justify-center items-center">
      <Image width={100} height={100} src="/underM.gif" alt='' />
      Under maintenance
    </div>
    </div>
  )
}

export default index