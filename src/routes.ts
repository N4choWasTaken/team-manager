import { Router } from 'express';
import helloController from './controllers/helloController';
import userController from './controllers/userController'

const routes = Router();

routes.get('/', helloController.getHelloMessage);

routes.get('/users', userController.getAllUsers)

export default routes;
