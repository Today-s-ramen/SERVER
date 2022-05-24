import { PeriodInfo } from "../period/PeriodInfo";
import { QuantityInfo } from "../quantity/QuantityInfo";

export interface SubscribeInfo {
    packageName: String;
    period: PeriodInfo;
    quantity: QuantityInfo;
};