const { users } = require('../../models/data.json');
const { find } = require('../../utils/helperFunction');

module.exports = ({ params: { id } }, res) => {
  const data = find(users, parseInt(id));
  const { user } = data;

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({ message: 'The username does not exist' });
  }
};
