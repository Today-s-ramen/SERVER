import mongoose from "mongoose";
import { ReviewInfo } from "../interfaces/review/ReviewInfo";

const ReviewSchema = new mongoose.Schema ({
    userName: {
        type: String,
        required: true
    },
    thumbnanil: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    rates: {
        type: Number,
        required: true
    },
    packageName: {
        type: String,
        required: true
    },
    product: {
        type: String,
        required: true
    }
},
{timestamps: true}
);

export default mongoose.model<ReviewInfo & mongoose.Document>("Review", ReviewSchema)