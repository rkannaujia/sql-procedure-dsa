import React from 'react'
import Card from './Card'
import './card.css'
import {userDataList} from './userdata';
const UserIndex = () => {
  return (
    <div className='user_Index'>
      <Card users={userDataList} />
    </div>
  )
}

export default UserIndex
