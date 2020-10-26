import React, { useState } from 'react';

const APIMessage = () => {
  const getMessage = async () => {
    let raw = await fetch('http://api.quotable.io/random');
    let apiMessage = await raw.json();
    setMessage(apiMessage);
  };

  const [message, setMessage] = useState(getMessage);
  return (
    <>
      <h2>This uses an API call to generate a message</h2>
      <button className='btn' onClick={getMessage}>
        Get a Message with an API call
      </button>
      <p>
        '{message.content}' - {message.author}
      </p>
    </>
  );
};

export default APIMessage;
