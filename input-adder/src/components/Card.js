import React from 'react';

const Card = (props) => {
  const {
    firstName,
    surname,
    phone,
    email,
    houseNo,
    street,
    suburb,
    state,
    postcode,
    country,
  } = props.inputs;
  return (
    <div className='card'>
      <h2>
        {firstName} {surname}
      </h2>
      <h3>Email: {email}</h3>
      <h3>Phone: {phone}</h3>
      <h3>Address: {houseNo} {street} {suburb} {state} {postcode}</h3>
      <h3>Country: {country}</h3>
    </div>
  );
};

export default Card;
