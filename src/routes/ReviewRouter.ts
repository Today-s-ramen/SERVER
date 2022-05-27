import { Router } from 'express';
import { body } from 'express-validator';
import { ReviewController } from '../controllers';

const router: Router = Router();

router.get('/', ReviewController.getReviewList);
router.get('/:reviewId', ReviewController.findReviewById);
router.post('/', [body('userName').notEmpty(), body('description').notEmpty(), body('rates').notEmpty(), body('packageName').notEmpty(), body('product').notEmpty()], ReviewController.createReview);

export default router;
