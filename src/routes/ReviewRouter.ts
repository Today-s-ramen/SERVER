import { Router } from 'express';
import { ReviewController } from '../controllers';

const router: Router = Router();

router.get('/', ReviewController.getReviewList);

export default router;
