import { Router } from 'express';
import helloController from './controllers/helloController';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const routes = Router();

routes.get('/', helloController.getHelloMessage);

routes.get('/users', async (req, res) => {
	const users = await prisma.user.findMany()
	res.json(users)
  })

export default routes;
