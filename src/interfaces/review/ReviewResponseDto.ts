import mongoose from 'mongoose';

export interface ReviewResponseDto {
  _id: mongoose.Types.ObjectId;
  userName: string;
  description: Text;
  productList: string[];
  reviewDate: string;
  thumbnail: string;
}
