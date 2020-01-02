import React from 'react';
import Container from './css';

const Error404 = () => (
  <Container>
    <div className="sketch">
      <div className="bee-sketch red"></div>
      <div className="bee-sketch blue"></div>
    </div>

    <h1>
      404:
      <small>Players Not Found</small>
    </h1>
  </Container>
);

export default Error404;
