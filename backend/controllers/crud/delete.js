import { users } from '../../models/data.json';
import { find } from '../../../utils/helperFunction';

const del = (req, res) => {
  const data = find(users, parseInt(req.params.id));
  const { user } = data;

  if (user) {
    users.splice(data.index, 1);

    res
      .status(200)
      .send({ ...user, message: 'The username was successfuly deleted' });
  } else {
    res.status(404).send({ message: 'The username do not exist' });
  }
};

export default del;
