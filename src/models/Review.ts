import mongoose from 'mongoose';
import { ReviewInfo } from '../interfaces/review/ReviewInfo';

const ReviewSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: Array,
    },
    description: {
      type: String,
      required: true,
    },
    rates: {
      type: Number,
      required: true,
    },
    packageName: {
      type: String,
      required: true,
    },
    product: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<ReviewInfo & mongoose.Document>('Review', ReviewSchema);
