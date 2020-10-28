import React, { useState } from 'react';

const AddInput = () => {
  const [fieldAdded, setFieldAdded] = useState(false);
  const [value, setValue] = useState('');

  const addInputField = (e) => {
    e.preventDefault();
    fieldAdded ? setFieldAdded(false) : setFieldAdded(true);
    console.log(fieldAdded);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={addInputField}>
        <h1>Adding an Input Field</h1>
        <button type='submit' className='btn'>
          {!fieldAdded ? 'Add Input Field' : 'Remove Input Field'}
        </button>
        <br />
        {fieldAdded && (
          <>
            <input value={value} onChange={handleChange}></input>
            <p>{value}</p>
          </>
        )}
      </form>
    </>
  );
};

export default AddInput;
