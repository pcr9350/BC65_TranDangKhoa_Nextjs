import Link from 'next/link'
import React from 'react'

const PageNotFound = () => {
  return (
    <div className='container'>
        404 page not found ! <Link href={'/'}>Back to Home</Link>
    </div>
  )
}

export default PageNotFound