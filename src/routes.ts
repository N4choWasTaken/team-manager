import { Router } from 'express';
import helloController from './controllers/helloController';

const routes = Router();

routes.get('/', helloController.getHelloMessage);

export default routes;
