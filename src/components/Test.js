import React from 'react'
import {Link} from 'react-router-dom'

export default function Test() {
  return (
    <Link href='/browse'>
      {isActive => (
        <span style={{ color: isActive ? 'red' : 'black' }}>
          Browse
        </span>
      )}
    </Link>
  )
}
