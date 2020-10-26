import React from 'react';

const BuzzingButton = () => {
  const buzzBuzz = () => {
    window.navigator.vibrate(200);
  };
  return (
    <>
      <button className='btn' onClick={buzzBuzz}>
        Buzz
      </button>
    </>
  );
};

export default BuzzingButton;
