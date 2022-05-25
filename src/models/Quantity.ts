import mongoose from 'mongoose';
import { QuantityInfo } from '../interfaces/quantity/QuantityInfo';

const QuantitySchema = new mongoose.Schema({
  option: {
    type: String,
    required: true,
  },
});

export default mongoose.model<QuantityInfo & mongoose.Document>('Queantity', QuantitySchema);
