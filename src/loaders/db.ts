import mongoose from 'mongoose';
import config from '../config';
import Period from '../models/Period';
import Quantity from '../models/Quantity';
import Review from '../models/Review';
import Subscribe from '../models/Subscribe';

const connectDB = async () => {
  try {
    const options = {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(config.mongoURI);

    mongoose.set('autoCreate', true);
    mongoose.set('autoIndex', true);

    console.log('Mongoose Connected ...');

    Period.createCollection().then(collection => {
      console.log('Period collection is created!!');
    });

    Quantity.createCollection().then(collection => {
      console.log('Quantity collection is created!!');
    });

    Review.createCollection().then(collection => {
      console.log('Review collection is created!!');
    });

    Subscribe.createCollection().then(collection => {
      console.log('Subscribe collection is created!!');
    });
  } catch (err: any) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;
