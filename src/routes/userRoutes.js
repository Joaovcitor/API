// eslint-disable-next-line import/no-extraneous-dependencies
import Router from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
// NÃO DEVERIA EXISTIR
router.get('/', userController.index);
// router.get('/:id', userController.show);

router.post('/', userController.store);
router.put('/', userController.update);
router.delete('/', userController.delete);

export default router;
