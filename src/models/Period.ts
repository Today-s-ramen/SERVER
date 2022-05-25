import mongoose from 'mongoose';
import { PeriodInfo } from '../interfaces/period/PeriodInfo';

const PeriodSchema = new mongoose.Schema({
  option: {
    type: String,
    required: true,
  },
});

export default mongoose.model<PeriodInfo & mongoose.Document>('Period', PeriodSchema);
