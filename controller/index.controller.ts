import { Router } from 'express';
import IndexView from '../view/index.view';
import Message from '../view/message.view';

const router = Router();

router.get('/', IndexView.getMain);
router.post('/', IndexView.postMain);
router.post('/message', Message.send);


export default router;