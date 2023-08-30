import React from 'react'
import useAuth from '../../hooks/useAuth'

const Home = () => {

  const { user } = useAuth()

  return (
    <div>
      Home
      <h4>{user.displayName}</h4>
    </div>
  )
}

export default Home