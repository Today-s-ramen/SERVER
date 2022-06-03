import dotenv from 'dotenv';
import express, { NextFunction, Request, Response } from 'express';
import connectDB from './loaders/db';
import routes from './routes';
import cors from 'cors';
import config from './config';
const app = express();
dotenv.config();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);
app.use(
  cors({
    credentials: true,
    origin: [
      'http://localhost:8000',
      config.EC2URI,
      config.FE_DEPLOY
    ],
  })
)

// error handler
interface ErrorType {
  message: string;
  status: number;
}

app.use(function (err: ErrorType, req: Request, res: Response, next: NextFunction) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'production' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app
  .listen(process.env.PORT, () => {
    console.log(`
    ################################################
          🛡️  Server listening on port 🛡️
    ################################################
  `);
  })
  .on('error', err => {
    console.error(err);
    process.exit(1);
  });
