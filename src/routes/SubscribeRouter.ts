import { Router } from 'express';
import { SubscribeController } from '../controllers';
import { body } from 'express-validator';

const router: Router = Router();

router.get('/', SubscribeController.getSubscribeOptions);

router.post('/', [
    body('deliveryPeriod').notEmpty(),
    body('deliveryQuantity').notEmpty()
], SubscribeController.createSubscribe);

export default router;
