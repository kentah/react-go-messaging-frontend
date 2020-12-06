import './App.css';
import React, { useEffect, useState } from 'react'
import { connect, sendMsg } from './api'
import Header from './components/Header/Header'
import ChatHistory from './components/ChatHistory'
import ChatInput from './components/ChatInput'

const App = () => {
  
  const [chatHistory, setChatHistory] = useState([])

  useEffect(() => {
    connect(msg => {
      console.log('New message')
      setChatHistory([...chatHistory, msg])
      
      console.log(chatHistory)
    })
  }, [chatHistory])

  const send = e => {
    if(e.keyCode === 13) {
      sendMsg(e.target.value)
      e.target.value = ''
    }
  }

  return (
    <div>
      <Header />
      <ChatHistory chatHistory={chatHistory}/>
      <ChatInput send={send} />
    </div>
  )
}

export default App;
