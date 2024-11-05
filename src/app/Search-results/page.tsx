import React from 'react'
import Link from 'next/link'
import Header from '../Components/Header';

function index() {
  return (
    <div>
     <Header />

      Navigat to 
      <ul>
        <li><Link href="/Booking">Search Results</Link></li>
      </ul>

    </div>
  )
}

export default index