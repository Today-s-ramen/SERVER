import { PeriodInfo } from '../period/PeriodInfo';
import { QuantityInfo } from '../quantity/QuantityInfo';

export interface SubscribeOptionDto {
  deliveryPeriodOptions: PeriodInfo[];
  deliveryQuantityOptions: QuantityInfo[];
}
