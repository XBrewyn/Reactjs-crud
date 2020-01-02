import React, { useState, useEffect } from 'react';
import { validation } from '../../../utils/helperFunction';
import { input } from './data';
import Container from './css';

const Delete = () => {
  const [id, setId] = useState('');

  useEffect(() => {
    document.title = 'Delete';
  }, []);

  const handlerOnChange = ({ target: { value, name } }) =>
    setId(validation([name, 'id'], value, false));

  const clearInput = () => {
    setId('');
  };

  const handlerClick = () => {
    const idUser = id || '-';

    fetch(`/api/user/delete/${idUser}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(data => data.json())
      .then(({ message }) => {
        clearInput();
        alert(message);
      });
  };

  return (
    <Container>
      <h1>Delete</h1>
      <form>
        {input.map(({ type, placeholder, name }, index) => (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={handlerOnChange}
            key={index}
            value={id}
          />
        ))}
        <input type="button" value="delete" onClick={handlerClick} />
      </form>
    </Container>
  );
};

export default Delete;
