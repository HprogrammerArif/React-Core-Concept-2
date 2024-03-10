import { useEffect, useState } from 'react'
import Friend from './Friend'
import './friend.css'
export default function Friends() {

  const [friends, setFriend] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setFriend(data))
  }, [])

  return(
    <div>
      <h1 className='box'>Friends: {friends.length}</h1>
      {friends.map(friend => <Friend arif ={friend} ></Friend>)
      }
    </div>
  )
}