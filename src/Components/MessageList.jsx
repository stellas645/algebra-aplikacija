import React from 'react';
import './MessageList.css'

const MessageList = ({ messages, currentMember}) => {
  const renderMessage = (message) => {
    const { id, member, text } = message
    const messageFromMe = member && member.id === currentMember.id
    const className = messageFromMe
      ? 'chat-message current-user'
      : 'chat-message'
    
      return (
        <li key={id} className={className}>
          <span
            className='color'
            style={{ backgroundColor: member.clientData.color }}
          />
          <div className='chat-content'>
            <div className='username'>{member.clientData.username}</div>
            <div className='chat-text'>{text}</div>
          </div>
        </li>
      )
    }
  
    return <ul className='chat-list'>{messages.map((m) => renderMessage(m))}</ul>
  }
     

export default MessageList;