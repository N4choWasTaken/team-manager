import { Request, Response } from 'express';
import { PrismaClient, User } from '@prisma/client';
import { injectable } from 'inversify';
import { iUserRepository } from '../IOC/interfaces';

@injectable()
export class UserRepository implements iUserRepository {
	prisma = new PrismaClient();

	async getUsers(req: Request, res: Response): Promise<void> {
		const users = await this.prisma.user.findMany()
		res.json(users)
	}

	async createUser(user: User): Promise<User> {
		const res = await this.prisma.user.create({
			data: {
				id: user.id,
				name: user.name,
				email: user.email,
				password: user.password
			}
		});

		return res;
	}
}
