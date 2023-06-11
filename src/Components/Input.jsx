import React, { useState } from 'react';
import './Input.css';

const Input = ({ sendMessage }) => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value)
  };

  const onSubmit = (e) => {
    e.preventDefault()
    if (!text.trim()) {
      return
    }
    setText('')
    sendMessage(text.trim())
  };

  return (
    <div>
      <form id= "form" onSubmit={onSubmit}>
        <input className='this-input'
          onChange={onChange}
          value={text}
          placeholder ='Type something and send!'
          autoFocus={true}
        />
        <button className='send-button' onClick={sendMessage}>Send your message!</button>
      </form>
    </div>
  )
};

export default Input;