import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from './css';
import { actionUser } from '../../redux/actionCreator/user';

const Users = ({ getUsers, users }) => {
  useEffect(() => {
    fetch('api/user')
      .then(data => data.json())
      .then(data => getUsers(data));
  }, [getUsers]);

  return (
    <Container>
      <h1>All</h1>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>password</th>
          </tr>
        </thead>
        <tbody>
          {users.map((elem, index) => (
            <tr key={index}>
              <td>{elem.id}</td>
              <td>{elem.name}</td>
              <td>{elem.password}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

const mapStateToProps = ({ users }) => ({
  users,
});

const mapStateToDispatch = dispatch => ({
  getUsers(data) {
    dispatch(actionUser(data));
  },
});

Users.propTypes = {
  users: PropTypes.array.isRequired,
  getUsers: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapStateToDispatch)(Users);
