import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const getAllUsers = async (req: Request, res: Response) => {
	const users = await prisma.user.findMany()
	res.json(users)
}

export default { getAllUsers };
