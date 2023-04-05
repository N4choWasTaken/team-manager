import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';

@injectable()
export class UserRepository implements iUserRepository {
	prisma = new PrismaClient();

	async getUsers(req: Request, res: Response): Promise<void> {
		const users = await this.prisma.user.findMany()
		res.json(users)
	}
}

export interface iUserRepository {
	getUsers(req: Request, res: Response): Promise<void>
}
