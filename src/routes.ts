import { Application } from 'express';

import healthcheckRouter from './api/healthcheck';
import addressRouter from './api/address';
import userRouter from './api/user';

const routes = (app: Application) => {
  app.use('/api/healthcheck', healthcheckRouter)
  app.use('/api/address', addressRouter)
  app.use('/api/users', userRouter)
}

export default routes