import React, { useState } from 'react';

const Form = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>Live Input</h1>
      <input value={value} onChange={handleChange}></input>
      <p>{value}</p>
    </>
  );
};

export default Form;
