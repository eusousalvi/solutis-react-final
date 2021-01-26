import React from 'react'

function Card({className, children}) {
  return (
    <div className={className || "row col-md-12 mt-5 card"}>
      {children}
    </div>
  )
}

export default Card
