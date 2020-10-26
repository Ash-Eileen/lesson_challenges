import React from 'react';
import Message from './Message';
import MessageUseEffect from './MessageUsingAPICall';
import BuzzingButton from './BuzzingButton';

const App = () => {
  return (
    <div className='container'>
      <Message />
      <MessageUseEffect />
      <BuzzingButton />
    </div>
  );
};

export default App;
