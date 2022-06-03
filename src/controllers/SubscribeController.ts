import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { SubscribeCreateDto } from '../interfaces/subscribe/SubscribeCreateDto';
import message from '../modules/responseMessage';
import statusCode from '../modules/statusCode';
import util from '../modules/util';
import { SubscribeService } from '../services';

/**
 * @route GET /subscribe
 * @desc 라면 구독 옵션 정보 조회
 * @access Public
 */
const getSubscribeOptions = async (req: Request, res: Response) => {
  try {
    const data = await SubscribeService.getSubscribeOptions();
    if (!data) {
      res.status(statusCode.NOT_FOUND).send(util.fail(statusCode.NOT_FOUND, message.NOT_FOUND));
    }
    res.status(statusCode.OK).send(util.success(statusCode.OK, message.READ_SUBSCRIBE_OPTION_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

/**
 * @route POST /subscribe/
 * @desc 라면 구독 등록
 * @access Public
 */
const createSubscribe = async (req: Request, res: Response) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NULL_VALUE));
  }

  const subscribeCreateDto: SubscribeCreateDto = req.body;

  try {
    const data = await SubscribeService.createSubscribe(subscribeCreateDto);

    res.status(statusCode.OK).send(util.success(statusCode.OK, message.CREATE_SUBSCRIBE_SUCCESS, data));
  } catch (error) {
    console.log(error);
    res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR, message.INTERNAL_SERVER_ERROR));
  }
};

export default { getSubscribeOptions, createSubscribe };
