import styled from '@emotion/styled';

const Container = styled.ul`
  background: black;
  padding: 20px;
  position: sticky;
  text-align: right;
  text-transform: capitalize;
  margin: 0;
  font-family: monospace;
  font-size: 20px;
  top: 0;
  z-index: 10;

  li {
    display: inline;
    list-style: none;
    padding-left: 20px;
  }

  a {
    color: white;
    transition: color 0.5s ease;
    text-decoration: none;
  }
`;

export default Container;
