import React from 'react'

const Links = ({ incomplete, children, onClick }) => {
  if (incomplete) {
    return <span>{children}</span>
  }

  return (
    <a href="/"
       onClick={e => {
         e.preventDefault()
         onClick()
       }}
    >
      {children}
    </a>
  )
}

export default Links
