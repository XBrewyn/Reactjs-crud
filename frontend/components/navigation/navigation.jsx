import React, { useState, useEffect } from 'react';
import { Link } from '@reach/router';
import Container from './css';

const Navigation = () => {
  const [menus] = useState(['add', 'delete', 'update', 'all', 'select']);

  useEffect(() => {
    const elems = document.querySelectorAll('.menu');
    const path = global.location.pathname.replace('/', '');

    elems.forEach(
      elem => (elem.style.color = path === elem.innerHTML ? 'red' : 'white')
    );

    if (!path) {
      elems[0].style.color = 'red';
    }
  }, [menus]);

  const changeColor = i => {
    const elems = document.querySelectorAll('.menu');
    elems.forEach(elem => (elem.style.color = 'white'));
    elems[i].style.color = 'red';
  };

  return (
    <Container>
      {menus.map((elem, i) => (
        <li key={i}>
          <Link to={`/${elem}`} className="menu" onClick={() => changeColor(i)}>
            {elem}
          </Link>
        </li>
      ))}
    </Container>
  );
};

export default Navigation;
