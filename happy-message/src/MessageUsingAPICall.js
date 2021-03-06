import React, { useState } from 'react';
import { initialMessage } from './messages';

const APIMessage = () => {
  const [message, setMessage] = useState(initialMessage);

  const getMessage = async () => {
    let raw = await fetch('https://api.quotable.io/random');
    let apiMessage = await raw.json();
    setMessage(apiMessage);
  };

  return (
    <>
      <h2>This uses an API call to generate a message</h2>
      <button className='btn' onClick={getMessage}>
        Get a Message With An API Call
      </button>
      <p>
        '{message.content}' - {message.author}
      </p>
    </>
  );
};

export default APIMessage;
