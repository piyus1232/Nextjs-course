import React from 'react'

async function page({params}) {

    const {blogid} =  await params;
  return (
  
  <>

    <div>page {blogid}</div>
</>
  )
}

export default page