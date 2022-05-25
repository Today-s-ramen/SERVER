import mongoose from "mongoose";
import { SubscribeInfo } from "../interfaces/subscribe/SubscribeInfo";

const SubscribeSchema = new mongoose.Schema ({
    period: {
        option: {
            type: String,
            required: true
        }
    },
    quantity: {
        option: {
            type: String,
            required: true
        }
    }
});

export default mongoose.model<SubscribeInfo & mongoose.Document>("Subscribe", SubscribeSchema)