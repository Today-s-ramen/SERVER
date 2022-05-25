import { Router } from 'express';
import { SubscribeController } from '../controllers';

const router: Router = Router();

router.get('/', SubscribeController.getSubscribeOptions);

export default router;
