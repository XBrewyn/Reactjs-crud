import express from 'express';
import all from '../controllers/crud/all';
import select from '../controllers/crud/select';
import del from '../controllers/crud/delete';
import add from '../controllers/crud/add';
import update from '../controllers/crud/update';

const router = express.Router();

router.get('/user', all);
router.get('/user/:id', select);
router.post('/user/add', add);
router.delete('/user/delete/:id', del);
router.put('/user/update/:id', update);

export default router;
