import { createServer } from 'http';
import { join } from 'path';

import express, { Application, NextFunction, Request, Response } from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import environment from './config/environment';
import cors from 'cors';
import morgan from 'morgan';

import router from './routes';
import CustomError from './helpers/errorHandler/CustomError';

class App {
  public app: Application;
  public nodeEnv: string;

  constructor() {
    this.app = express();
    this.nodeEnv = environment.nodeEnv;
    this.initializeMiddlwares();
  }

  private initializeMiddlwares(): void {
    this.app.use(morgan('dev'));
    this.app.use(cors());
    this.app.use(compression());
    this.app.use(express.json());
    this.app.use(cookieParser());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use('/api/v1', router);
    if (environment.nodeEnv === 'production') {
      this.app.use(express.static(join(__dirname, '..', 'client', 'build')));

      this.app.get('*', (req: Request, res: Response) => {
        res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
      });
    }

    this.app.use(
      // eslint-disable-next-line @typescript-eslint/no-unused-vars, promise/prefer-await-to-callbacks
      (err: CustomError, req: Request, res: Response, _: NextFunction) => {
        res.status(err.status ?? 500).json({ msg: err.message });
      },
    );
  }
}

const { app } = new App();
const httpServer = createServer(app);

export default httpServer;
