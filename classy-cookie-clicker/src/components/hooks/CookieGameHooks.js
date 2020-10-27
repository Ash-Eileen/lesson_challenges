import React from 'react';
import { useState, useEffect } from 'react';
import Score from './Score';
import AutoIncrementNumber from './AutoIncrementNumber';

const CookieGameHooks = () => {
  const [score, setScore] = useState(0);
  const [incremented, setIncrement] = useState(0);
  const [decremented, setDecrement] = useState(0);
  const [autoIncrement, setAutoIncrement] = useState(1);

  const increase = () => {
    setScore((prevState) => prevState + 1);
    setIncrement((prevState) => prevState + 1);
  };
  const decrease = () => {
    setScore((prevState) => prevState - 1);
    setDecrement((prevState) => prevState + 1);
  };
  const reset = () => {
    setScore(0);
  };
  const increaseIncrement = () => {
    if (score >= 10) {
      setScore((prevState) => prevState - 10);
      setAutoIncrement((prevState) => prevState + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setScore((prevState) => prevState + autoIncrement);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <>
      <Score score={score} />
      <button className='btn' onClick={increase}>
        Increase
      </button>
      <button className='btn' onClick={reset}>
        Reset
      </button>
      <button className='btn' onClick={decrease}>
        Decrease
      </button>
      <p>
        Incremented: {incremented} Decremented: {decremented}
      </p>
      <button className='btn' onClick={increaseIncrement}>
        Pay 10 points to increase increment by 1
      </button>
      <AutoIncrementNumber autoIncrement={autoIncrement} />
    </>
  );
};

export default CookieGameHooks;
