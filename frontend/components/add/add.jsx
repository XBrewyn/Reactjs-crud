import React, { useState, useEffect } from 'react';
import { validation } from '../../utils/helperFunction';
import { input } from './data';
import Container from './css';

const Add = () => {
  const [inputValue, setInputValue] = useState({ name: '', password: '' });

  useEffect(() => {
    document.title = 'Add';
  }, []);

  const handlerOnChange = ({ target: { value, name } }) => {
    setInputValue({ ...inputValue, [name]: validation(name, value) });
  };

  const clearInput = () => {
    setInputValue({ name: '', password: '' });
  };

  const handlerClick = () => {
    fetch('/api/user/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputValue),
    })
      .then(data => data.json())
      .then(({ message }) => {
        clearInput();
        alert(message);
      });
  };

  return (
    <Container>
      <h1>Add</h1>
      <form>
        {input.map(({ type, placeholder }, index) => (
          <input
            name={placeholder}
            type={type}
            placeholder={placeholder}
            onChange={handlerOnChange}
            key={index}
            value={inputValue[placeholder]}
          />
        ))}
        <input type="button" value="add" onClick={handlerClick} />
      </form>
    </Container>
  );
};

export default Add;
