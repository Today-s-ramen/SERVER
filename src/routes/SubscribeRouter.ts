import { Router } from 'express';
import { body } from 'express-validator';
import { SubscribeController } from '../controllers';

const router: Router = Router();

router.get('/', SubscribeController.getSubscribeOptions);
router.post('/', [body('deliveryPeriod').notEmpty(), body('deliveryQuantity').notEmpty()], SubscribeController.createSubscribe);

export default router;
