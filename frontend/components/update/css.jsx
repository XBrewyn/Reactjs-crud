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

  form {
    width: 400px;
  }

  input {
    text-transform: capitalize;
    margin: 2px;
  }

  input[type='text'],
  input[type='password'] {
    width: 100%;
    padding: 12px 20px;
    display: inline-block;

    box-sizing: border-box;
    outline: none;
  }

  input[type='button'] {
    width: 100%;
    background-color: #3f51b5;
    color: white;
    padding: 14px 20px;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }
`;

export default Container;
