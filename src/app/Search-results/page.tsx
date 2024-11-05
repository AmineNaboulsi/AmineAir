import React from 'react'
import Link from 'next/link'

function index() {
  return (
    <div>
      Navigat to 
      <ul>
        <li><Link href="/Booking">Search Results</Link></li>
      </ul>

    </div>
  )
}

export default index