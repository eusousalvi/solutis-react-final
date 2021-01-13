import React from 'react'

function CardBody({className, children}) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export default CardBody
