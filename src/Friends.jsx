import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';
export default function Friends(){
    const [friends, setFriends] = useState([]);

    useEffect(() =>{
         fetch('https://jsonplaceholder.typicode.com/users')
        .then(res =>res.json())
        .then(data =>setFriends(data))

    },[])
    return (
        <div className='box'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map((friend) => <Friend key={friend.id} friend={friend}></Friend>)
            
            }
        </div>
    )
}
/***
 * 1.   declare a state (useState).
 * 2.   wirte use
 * =>{},[]) with enonumeus fucntion with dependency array
 * 3.   use fetch to load data
 * 4.   set loaded data to the state in setFriedns
 * 5. display data
 */