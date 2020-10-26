import React from 'react';
import Message from './Message';
import MessageUseEffect from './MessageUsingAPICall';

const App = () => {
  return (
    <div className='container'>
      <h1>Have an inspirational quote</h1>
      <Message />
      <MessageUseEffect />
    </div>
  );
};

export default App;
