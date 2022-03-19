import React from 'react'
import UsersResult from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'

function Home() {
  return (
    <div >
        {/* // search component goes here */}
        <UserSearch/>
      <UsersResult/>
     
    </div>
  )
}

export default Home