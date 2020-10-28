import React, { useState } from 'react';
import Card from './Card';

const capitalize = (s) => {
  if (typeof s !== 'string') return '';
  return s.charAt(0).toUpperCase() + s.slice(1);
};

const BCForm = () => {
  const [inputs, setInputs] = useState({});
  const personalFields = ['firstName', 'surname', 'phone', 'email'];
  const addressFields = [
    'houseNo',
    'street',
    'suburb',
    'state',
    'postcode',
    'country',
  ];

  const onChangeForField = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const displayFields = (fields) => {
    return fields.map((field) => {
      return (
        <div className='form-field'>
          <label htmlFor={field}>
            {capitalize(field)
              .match(/[A-Z][a-z]+/g)
              .join(' ')}
            :
          </label>
          <input onChange={onChangeForField} name={field}></input>
        </div>
      );
    });
  };

  return (
    <>
      <h4>PERSONAL DETAILS</h4>
      <div className='business-form'>{displayFields(personalFields)}</div>
      <h4>ADDRESS</h4>
      <div className='business-form'>{displayFields(addressFields)}</div>
      <Card inputs={inputs} />
    </>
  );
};

export default BCForm;

// return (
//   <>
//     <div className='business-form'>
//       <div className='form-field'>
//         <label htmlFor='name'>Given Name: </label>
//         <input onChange={onChangeForField} name='firstName'></input>
//       </div>
//       <div className='form-field'>
//         <label htmlFor='surname'>Surname: </label>
//         <input onChange={onChangeForField} name='surname'></input>
//       </div>
//       <div className='form-field'>
//         <label htmlFor='email'>Email: </label>
//         <input onChange={onChangeForField} name='email'></input>
//       </div>
//       <div className='form-field'>
//         <label htmlFor='phone'>Phone: </label>
//         <input onChange={onChangeForField} name='phone'></input>
//       </div>
//     </div>
//     <div className='business-form'>
//       <div className='form-field'>
//         <label htmlFor='houseNo'>House Name Or #: </label>
//         <input onChange={onChangeForField} name='houseNo'></input>
//       </div>
//       <div className='form-field'>
//         <label htmlFor='street'>Street: </label>
//         <input onChange={onChangeForField} name='street'></input>
//       </div>
//       <div className='form-field'>
//         <label htmlFor='suburb'>Suburb: </label>
//         <input onChange={onChangeForField} name='suburb'></input>
//       </div>
//       <div className='form-field'>
//         <label htmlFor='state'>State: </label>
//         <input onChange={onChangeForField} name='state'></input>
//       </div>
//       <div className='form-field'>
//         <label htmlFor='postcode'>Postcode: </label>
//         <input onChange={onChangeForField} name='postcode'></input>
//       </div>
//       <div className='form-field'>
//         <label htmlFor='country'>Country: </label>
//         <input onChange={onChangeForField} name='country'></input>
//       </div>
//     </div>
//   </>
// );
