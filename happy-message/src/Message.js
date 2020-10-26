import React, { useState } from 'react';
import { messages } from './messages';

const randomMessage = () => {
  return messages[Math.floor(Math.random() * messages.length)];
};

const Message = () => {
  const [message, setMessage] = useState(randomMessage);

  const HandleClick = () => {
    setMessage((prevState) => {
      let newMessage = randomMessage();
      return (newMessage =
        prevState === newMessage ? randomMessage() : newMessage);
    });
  };

  return (
    <>
      <h1>Have an inspirational quote</h1>
      <button className='btn' onClick={HandleClick}>
        New Message Please!
      </button>
      <p>{message}</p>
    </>
  );
};

export default Message;
