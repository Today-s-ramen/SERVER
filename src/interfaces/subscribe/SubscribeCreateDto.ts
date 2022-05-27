import { PeriodInfo } from "../period/PeriodInfo";
import { QuantityInfo } from "../quantity/QuantityInfo";

export interface SubscribeCreateDto {
    deliveryPeriod: PeriodInfo;
    deliveryQuantity: QuantityInfo;  
}