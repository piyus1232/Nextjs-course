import React from 'react'
import Link from 'next/link'

function services() {
  return (
<>
    <div  > <h1>services</h1></div>
        <p><Link href="/services/web-dev">Web development</Link></p>
       <p>  <Link href="/services/mobiledev">Mobile development</Link></p>
        </>
  )
}

export default services