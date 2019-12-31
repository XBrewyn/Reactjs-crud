const { users } = require('../../models/data.json');
const { find } = require('../../utils/helperFunction');

const updateUser = (data, id) => {
  Object.entries(data).forEach(([key, value]) => {
    users[id][key] = value;
  });
};

module.exports = (req, res) => {
  const data = find(users, parseInt(req.params.id));
  const { user } = data;

  if (user) {
    updateUser(req.body, data.index);

    res
      .status(200)
      .send({ ...user, message: 'The username was successfuly updated' });
  } else {
    res.status(404).send({ message: 'The username does not exist' });
  }
};
