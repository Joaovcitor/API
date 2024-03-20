// eslint-disable-next-line import/no-extraneous-dependencies
import Router from 'express';
import loginRequired from '../middlewares/loginRequired';
import AlunoController from '../controllers/AlunoController';

const router = new Router();

router.get('/', AlunoController.index);
router.post('/', AlunoController.store);
router.put('/:id', AlunoController.update);
router.get('/:id', AlunoController.show);
router.delete('/:id', loginRequired, AlunoController.delete);

export default router;
