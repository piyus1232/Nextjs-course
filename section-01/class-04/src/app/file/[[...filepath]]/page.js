import React from 'react'

async function page({params}) {
const {filepath} =  await params;
  return   <h1>page /{filepath?.join('/')}</h1>
  
}

export default page