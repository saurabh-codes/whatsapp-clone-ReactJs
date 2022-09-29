import { AttachFile, InsertEmoticon, MoreVert, SearchOutlined } from '@mui/icons-material'
import MicIcon from '@mui/icons-material/Mic';
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Chat.css'

function Chat() {

  const sendMessage = (e)=>{
    e.preventDefault();
  };

  return (
    <div className='chatbar'>        
        <div className='chatbar-header'>
          <Avatar/>
          <div className='header-info'>
            <h3>Chat Name</h3>
            <p>last seen at...</p>
          </div>

          <div className='header-right'>
            <IconButton>
              <SearchOutlined/>
            </IconButton>
            <IconButton>
              <AttachFile/>
            </IconButton>
            <IconButton>
              <MoreVert/>
            </IconButton>
          </div>
        </div>

        <div className='chat-body'>
          <p className='chat-message'>
            <span className='chat-name'>Saurabh</span>
            This is a new Message...
            <span className='chat-timestamp'>
              {new Date().toUTCString()}             
            </span>
          </p>

          <p className='chat-message chat-receiver'>
            <span className='chat-name'>Saurabh</span>
            This is a new Message...
            <span className='chat-timestamp'>
              {new Date().toUTCString()}             
            </span>
          </p>                   
        </div>

        <div className='chat-footer'>
          <InsertEmoticon/>
          <form>
            <input 
             placeholder='Type a Message...' type="text"/>
            <button onClick={sendMessage} type='submit'>Send a Message</button>
          </form>
          <MicIcon/>
          
        </div>

    </div>
  )
}

export default Chat