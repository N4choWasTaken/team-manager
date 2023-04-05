import 'reflect-metadata';
import { Router } from 'express';
import helloController from './controllers/helloController';
import UserController from './controllers/userController';
import { UserRepository } from './repositories/UserRepository';
import { container } from './container';

const routes = Router();
const userController = new UserController(container.get<UserRepository>(UserRepository));

routes.get('/', helloController.getHelloMessage);

routes.get('/users', userController.getAllUsers);

export default routes;
