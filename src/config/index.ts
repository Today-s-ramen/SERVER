import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
  // This error should crash whole process

  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}

export default {
  /**
   * Your favorite port
   */
  port: parseInt(process.env.PORT as string, 10) as number,

  /**
   * MongoDB URI
   */
  mongoURI: process.env.MONGODB_URI as string,

  /**
   * EC2 Pulbic URI
   */
  EC2URI: process.env.EC2_PUBLIC_URI as string,

  /**
   * 클라이언트 배포 URI
   */
  FE_DEPLOY: process.env.FE_DEPLOY as string,
};
