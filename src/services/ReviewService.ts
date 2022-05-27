import { PostBaseResponseDto } from '../interfaces/common/PostBaseResponseDto';
import { ReviewCreateDto } from '../interfaces/review/ReviewCreateDto';
import { ReviewResponseDto } from '../interfaces/review/ReviewResponseDto';
import Review from '../models/Review';

const getReviewList = async (): Promise<ReviewResponseDto[] | null> => {
  try {
    const reviews = await Review.find();
    if (!reviews) {
      return null;
    }
    const mainPageReviews: ReviewResponseDto[] = await Promise.all(
      reviews.map((review: any) => {
        const result = {
          _id: review._id,
          userName: review.userName,
          thumbnail: review.thumbnail,
          description: review.description,
          packageName: review.packageName,
          productList: review.product,
          reviewDate: review.createdAt,
        };
        return result;
      }),
    );
    return mainPageReviews;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createReview = async (reviewCreateDto: ReviewCreateDto): Promise<PostBaseResponseDto> => {
  try {
    const review = new Review(reviewCreateDto);
    await review.save();

    const data = {
      _id: review._id,
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default {
  getReviewList,
  createReview,
};
