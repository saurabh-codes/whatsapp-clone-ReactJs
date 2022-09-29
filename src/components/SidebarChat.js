import { Avatar } from '@mui/material'
import React from 'react'
import "./SidebarChat.css"

function SidebarChat() {
  return (
    <div className='sidebar-chat'>
        <Avatar/>
        <div className='chat-info'>
            <h2>Chat Name</h2>
            <p>This is the Recent Message...</p>
        </div>
    </div>
  )
}

export default SidebarChat