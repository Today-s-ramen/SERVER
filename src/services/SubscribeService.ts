import { SubscribeOptionDto } from '../interfaces/subscribe/SubscribeOptionDto';
import Period from '../models/Period';
import Quantity from '../models/Quantity';

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

export default { getSubscribeOptions };
