import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './css';

const Navigation = () => {
  const [menu] = useState(['add', 'delete', 'update', 'all', 'select']);

  return (
    <Container>
      {menu.map((element, index) => (
        <li key={index}>
          <Link to={`/${element}`} className="menu">
            {element}
          </Link>
        </li>
      ))}
    </Container>
  );
};

export default Navigation;
