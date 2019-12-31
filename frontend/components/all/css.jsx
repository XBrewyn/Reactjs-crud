import styled from '@emotion/styled';

const Container = styled.div`
  display: block;
  margin-top: 100px;
  font-family: Arial, Helvetica, sans-serif;
  text-align: -webkit-center;

  h1 {
    font-family: fantasy;
    color: white;
  }

  table {
    border-collapse: collapse;
    font-family: 'Trebuchet MS', Arial, Helvetica, sans-serif;
    width: 400px;
  }

  td,
  th {
    border: none;
    padding: 8px;
    text-align: center;
  }

  th {
    background-color: #3f51b5;
    color: #fff;
    padding-bottom: 12px;
    padding-top: 12px;
    text-align: center;
    text-transform: capitalize;
  }

  tr {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`;

export default Container;
