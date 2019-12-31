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
    margin: 2px;
    text-transform: capitalize;
  }

  input[type='text'],
  input[type='password'] {
    box-sizing: border-box;
    display: inline-block;
    outline: none;
    padding: 12px 20px;
    width: 100%;
  }

  input[type='button'] {
    background-color: #3f51b5;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    outline: none;
    padding: 14px 20px;
    width: 100%;
  }
`;

export default Container;
