import React from 'react'
import Header from './Header'

type Props = {
  children: any
}

const Layout = (props: Props) => {
  const { children } = props
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Layout