import mongoose from 'mongoose';

export interface ReviewDetailResponseDto {
  _id: mongoose.Types.ObjectId;
  packageName: string;
  rates: number;
  userName: string;
  imageList?: string[];
  reviewDetail: Text;
}
