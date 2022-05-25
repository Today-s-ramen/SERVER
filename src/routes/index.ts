// router index file
import { Router } from 'express';
import ReviewRouter from './ReviewRouter';

const router: Router = Router();

router.use('/review', ReviewRouter);

export default router;
