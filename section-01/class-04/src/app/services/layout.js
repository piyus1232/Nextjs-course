import React, { Children } from 'react'

function layout({children}) {
  return (
    <body>
        <h1>Services Layout</h1>
        {children}
    </body>
  )
}

export default layout