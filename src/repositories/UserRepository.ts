import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

export class UserRepository {
	prisma = new PrismaClient();

	async getUsers(req: Request, res: Response) {
		const users = await this.prisma.user.findMany()
		res.json(users)
	}
}
