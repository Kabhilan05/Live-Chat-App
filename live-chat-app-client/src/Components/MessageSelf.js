import React from 'react'

function MessageSelf() {
    var props ={name: "You",message:"This is sample message"}
  return (
    <div className='self-message-container'>
        <div className='messagebox'> 
        <p>{props.message}</p>
        <p className='self-timestamp'>12:00 Am</p>
        </div>

    </div>
  )
}

export default MessageSelf