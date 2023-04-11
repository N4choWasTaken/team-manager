import { Request, Response } from 'express';
import { PrismaClient, User } from '@prisma/client';
import { injectable } from 'inversify';
import { iUserRepository } from '../IOC/interfaces';
import { UUID } from 'crypto';

@injectable()
export class UserRepository implements iUserRepository {
	prisma = new PrismaClient();

	async getUsers(req: Request, res: Response): Promise<void> {
		const users = await this.prisma.user.findMany()
		res.json(users)
	}

	async getUserWithId(req: Request, res: Response, _id: UUID): Promise<User | null>{
		const user = await this.prisma.user.findUnique(
			{where: {
				id: _id
			}
		})

		return user
	}
}
