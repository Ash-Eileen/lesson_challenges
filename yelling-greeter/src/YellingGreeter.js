import React from 'react';

const YellingGreeter = (props) => {
  return (
    <>
      <h1>{props.message.toUpperCase()}</h1>
    </>
  );
};

export default YellingGreeter;
