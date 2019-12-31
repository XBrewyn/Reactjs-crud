const { users } = require('../../models/data.json');

module.exports = (req, res) => {
  const validation = users.length > 0;

  if (validation) {
    res.status(200).send(users);
  } else {
    res.status(404).send({ message: 'There are not username avalible.' });
  }
};
