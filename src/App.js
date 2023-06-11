import React, { useState, useEffect, useRef} from 'react';
import MessageList from './Components/MessageList.jsx';
import Input from './Components/Input.jsx';
import ChatHeader from './Components/ChatHeader.jsx';
import {RandomUsername} from './Utilities/RandomUsername.js';
import {RandomColor} from './Utilities/RandomColor.js';
import Scaledrone from 'scaledrone-node';
import './App.css';

const App = () => {
  const [messages, setMessages] = useState([]);
  const [member, setMember] = useState({
    username: RandomUsername(),
    color: RandomColor()
  });
  const [darkMode, setDarkMode] = useState(false);

  const channel_id = process.env.REACT_APP_CHANNEL_ID;
  const room = process.env.REACT_APP_ROOM_NAME;

  const droneRef = useRef (new window.Scaledrone(channel_id, {
      data: member
    })
  );

  useEffect(() => {
    const drone = droneRef.current;
    drone.on('open', (error) => {
      if (error) {
        return console.error(error);
      }
      setMember((prevMember) => ({ ...prevMember, id: drone.clientId }));
    });

    drone.on('error', error => {
    });

    drone.on('close', event => {
    });

    const room = drone.subscribe('observable-room');
    room.on('open', error => {
      if (error) {
        return console.error(error);
      } else {
        console.log('Connected to room');
      }});

    room.on('message', message => console.log('Received message:'));
    
    room.on('data', (data, member) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Math.random(), member, text: data },
      ])
    });

  }, [room]);

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  const sendMessage = (message) => {
    droneRef.current.publish({
      room: 'observable-room',
      message,
    });
  };

  return (
    <div className={`algebra-aplikacija ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <ChatHeader darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <MessageList
        messages={messages}
        currentMember={member}
      />
      <Input sendMessage={sendMessage} />
    </div>
  )
};

export default App;
