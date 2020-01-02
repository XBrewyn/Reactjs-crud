import { users } from '../../models/data.json';

const add = (req, res) => {
  const id = users.length;
  const addUser = { id, ...req.body };
  const validation = req.body.name && req.body.password;

  if (validation) {
    users.push(addUser);

    res
      .status(200)
      .send({ ...addUser, message: 'The username was successfuly added.' });
  } else {
    res.status(404).send({ message: 'The username was not added.' });
  }
};

export default add;
