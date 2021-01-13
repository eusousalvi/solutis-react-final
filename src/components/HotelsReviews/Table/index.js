import React from 'react'

function Table({className, children}) {
  return (
    <table className={className}>
      {children}
    </table>
  )
}

export default Table
