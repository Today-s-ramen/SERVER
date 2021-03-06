import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { ReviewCreateDto } from '../interfaces/review/ReviewCreateDto';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import util from '../modules/util';
import { ReviewService } from '../services';

/**
 * @route GET /review
 * @desc 리뷰 전체 데이터 조회
 * @access Public
 */
const getReviewList = async (req: Request, res: Response): Promise<Response | void> => {
  try {
    const data = await ReviewService.getReviewList();
    if (!data) {
      res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    }
    res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_MAINPAGE_REVIEW_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

/**
 * @route POST /review
 * @param reviewId
 * @desc 리뷰 등록
 * @access Public
 */
const createReview = async (req: Request, res: Response): Promise<Response | void> => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.BAD_REQUEST));
  }

  const reviewCreateDto: ReviewCreateDto = req.body;
  try {
    const data = await ReviewService.createReview(reviewCreateDto);
    if (!data) {
      res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    }
    res.status(statusCode.CREATED).send(util.success(statusCode.CREATED, message.CREATE_REVIEW_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

/**
 * @route GET /review/:reviewId
 * @param reviewId
 * @desc 리뷰 상세페이지 조회
 * @access Public
 */
const findReviewById = async (req: Request, res: Response) => {
  const { reviewId } = req.params;

  try {
    const data = await ReviewService.findReviewById(reviewId);

    res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_REVIEW_DETAIL_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default {
  getReviewList,
  createReview,
  findReviewById,
};
