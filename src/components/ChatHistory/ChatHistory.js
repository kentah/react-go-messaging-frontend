import React from 'react'
import './ChatHistory.scss'
import Message from '../Message'


const ChatHistory = ({ chatHistory }) => {

  const messages = chatHistory.map(msg => <Message message={msg.data} />)

  return (
    <div>
        <h2>Chat History</h2>
        { messages }
    </div>
  )
}

export default ChatHistory
