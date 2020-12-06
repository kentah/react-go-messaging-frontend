import React from 'react'
import './ChatInput.scss'

const ChatInput = ({ send }) => {
  return (
    <div className='ChatInput'>
      <input placeholder='Type a message... Hit Enter to Send'
      onKeyDown={send} 
      />
    </div>
  )
}

export default ChatInput
