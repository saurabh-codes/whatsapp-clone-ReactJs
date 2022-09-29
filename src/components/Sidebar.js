import React from 'react'
import './Sidebar.css'
import ChatIcon from '@mui/icons-material/Chat';
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import { Avatar, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { SearchOutlined } from '@mui/icons-material';
import SidebarChat from './SidebarChat';

function Sidebar() {
  return (
    <div className='sidebar'>

        <div className='sidebar-header'>
          <Avatar src='https://avatars.githubusercontent.com/u/91080899?v=4'/>

          <div className='header-right'>
            <IconButton>
              <DonutLargeIcon/>
            </IconButton>

            <IconButton>
              <ChatIcon/>
            </IconButton>

            <IconButton>
              <MoreVertIcon/>
            </IconButton>
            
          </div>
        </div>

        <div className='sidebar-search'>
          <div className='search-container'>
            <SearchOutlined/>
            <input placeholder='Search or Start New Chat' type="text"/>
          </div>
        </div>

        <div className='sidebar-chats'>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
          <SidebarChat/>
        </div>

    </div>
  )
}

export default Sidebar