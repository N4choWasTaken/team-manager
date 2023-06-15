import 'reflect-metadata';
import { Router } from 'express';
import helloController from './controllers/helloController';
import UserController from './controllers/userController';
import { container } from './IOC/container';
import { TYPES } from './IOC/types';

const routes = Router();
const userController = container.get<UserController>(TYPES.iUserController);

routes.get('/', helloController.getHelloMessage);

routes.get('/users', userController.getAllUsers);

routes.post('/users', userController.createUser);

export default routes;
