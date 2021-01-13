import React from 'react'

function Card({className, children}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default Card
