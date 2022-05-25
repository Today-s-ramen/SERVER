import { PeriodInfo } from '../period/PeriodInfo';
import { QuantityInfo } from '../quantity/QuantityInfo';

export interface SubscribeInfo {
  period: PeriodInfo;
  quantity: QuantityInfo;
}
