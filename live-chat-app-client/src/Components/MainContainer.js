import React from 'react'
import './myStyles.css'
import Sidebar from './Sidebar'
import ChatArea from './ChatArea'
import Welcome from './Welcome'


function MainContainer() {
  let conversations =  [{
    name:"Test#1",
    lastMessage:"Last Message #1",
    timeStamp: "today"
}]
  return (
    <div className='main-container'>
        <Sidebar/>
        <Welcome/>
        {/* <ChatArea props={conversations[0]}/> */}
    </div>
  )
}

export default MainContainer