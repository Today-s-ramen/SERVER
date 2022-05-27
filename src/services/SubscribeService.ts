import { SubscribeOptionDto } from '../interfaces/subscribe/SubscribeOptionDto';
import Period from '../models/Period';
import Quantity from '../models/Quantity';
import { SubscribeCreateDto } from '../interfaces/subscribe/SubscribeCreateDto';
import { PostBaseResponseDto } from '../interfaces/common/PostBaseResponseDto';
import Subscribe from '../models/Subscribe';

const getSubscribeOptions = async (): Promise<SubscribeOptionDto | null> => {
  try {
    const periodOptions = await Period.find();
    const quantityOptions = await Quantity.find();

    if (!periodOptions || !quantityOptions) {
      return null;
    }

    const subscribeOptionList = {
      deliveryPeriodOptions: periodOptions,
      deliveryQuantityOptions: quantityOptions,
    };

    return subscribeOptionList;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createSubscribe = async (SubscribeCreateDto: SubscribeCreateDto): Promise<PostBaseResponseDto> => {
  try {
    const subscribe = new Subscribe ({
      period: SubscribeCreateDto.deliveryPeriod,
      quantity: SubscribeCreateDto.deliveryQuantity,
    });

    await subscribe.save();

    const data = {
      _id: subscribe._id
    };

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default { getSubscribeOptions, createSubscribe };
