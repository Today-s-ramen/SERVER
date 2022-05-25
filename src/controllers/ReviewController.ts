import { Request, Response } from 'express';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import util from '../modules/util';
import { ReviewService } from '../services';

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

export default {
  getReviewList,
};
