import React, { useState, useEffect } from 'react';
import { validation } from '../../utils/helperFunction';
import Container from './css';
import { input } from './data';

const Update = () => {
  const [inputValue, setInputValue] = useState({ name: '', password: '' });
  const [id, setId] = useState('');

  useEffect(() => {
    document.title = 'Update';
  }, []);

  const handlerOnChange = ({ target: { value, name } }) => {
    if (name === 'id') {
      setId(validation([name, 'id'], value, false));
    } else {
      setInputValue({
        ...inputValue,
        [name]: validation([name, 'name'], value),
      });
    }
  };

  const clearInput = () => {
    setInputValue({ name: '', password: '' });
    setId('');
  };

  const handlerClick = () => {
    const idUser = id || '-';

    fetch(`/api/user/update/${idUser}`, {
      method: 'PUT',
      body: JSON.stringify(inputValue),
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
      <h1>Update</h1>
      <form>
        {input.map(({ type, placeholder, name }, index) => (
          <input
            name={name}
            type={type}
            placeholder={placeholder}
            onChange={handlerOnChange}
            key={index}
            value={name === 'id' ? id : inputValue[name]}
          />
        ))}
        <input type="button" value="update" onClick={handlerClick} />
      </form>
    </Container>
  );
};

export default Update;
