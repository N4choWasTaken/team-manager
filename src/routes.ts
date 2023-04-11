import 'reflect-metadata';
import { Request, Response, Router } from 'express';
import helloController from './controllers/helloController';
import UserController from './controllers/userController';
import { container } from './IOC/container';
import { TYPES } from './IOC/types';
import { UUID } from 'crypto';

const routes = Router();
const userController = container.get<UserController>(TYPES.iUserController);

routes.get('/', helloController.getHelloMessage);

routes.get('/users', userController.getAllUsers);

routes.get('/users/:userId', (req: Request, res: Response) => {
	userController.getUser(req, res, req.params.userId as UUID)
})

export default routes;
