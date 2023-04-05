import 'reflect-metadata';
import { Router } from 'express';
import helloController from './controllers/helloController';
import UserController from './controllers/userController';
import { container } from './container';

const routes = Router();
const userController = container.get<UserController>(UserController);

routes.get('/', helloController.getHelloMessage);

routes.get('/users', userController.getAllUsers);

export default routes;
