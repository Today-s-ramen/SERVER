// router index file
import { Router } from 'express';
import ReviewRouter from './ReviewRouter';
import SubScribeRouter from './SubscribeRouter';

const router: Router = Router();

router.use('/review', ReviewRouter);
router.use('/subscribe', SubScribeRouter);

export default router;
