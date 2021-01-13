import React from 'react'

function CardHeader({className, children}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default CardHeader
