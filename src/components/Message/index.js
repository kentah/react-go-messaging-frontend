import React, { useState, useEffect } from 'react'
import './Message.scss'

const Message = ({ message }) => {
  const [msg, setMsg] = useState(message)

  let temp = JSON.parse(message)

  useEffect(() => setMsg(temp), [temp])


  return (
    <div className='Message'>{msg.body}</div>
  )
}

export default Message
