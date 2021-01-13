import React from 'react'

function TableRow({className, children}) {
  return (
    <tr className={className}>
      {children}
    </tr>
  )
}

export default TableRow
