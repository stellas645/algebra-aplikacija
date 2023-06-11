import React from 'react';
import './ChatHeader.css';

const ChatHeader = ({ darkMode , toggleDarkMode }) => {
  return (
    <div className='algebra-aplikacija-header'>
      <h1 className='h1'>Algebra - Chat App</h1>
      <label className='change-theme-button'>
        <input type='checkbox' checked={darkMode} onChange={toggleDarkMode} />
      </label>
    </div>
  )
};

export default ChatHeader;