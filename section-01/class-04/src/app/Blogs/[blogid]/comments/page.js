import React from 'react'

async function page({params}) {
const {blogid} =  await params;
  return (
    <>
    <h1>comments {blogid}</h1></>
  )
}

export default page