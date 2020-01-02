import { users } from '../../models/data.json';
import { find } from '../../utils/helperFunction';

module.exports = ({ params: { id } }, res) => {
  const data = find(users, parseInt(id));
  const { user } = data;

  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).send({ message: 'The username does not exist' });
  }
};
