import React from 'react'
import Sidebar from '../components/Sidebar'
import { Link } from 'react-router-dom'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="container">
      <div className="home">
        <Sidebar />
      </div>
    </div>
  )
}

export default Home