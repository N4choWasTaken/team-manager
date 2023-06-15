import { User } from '@prisma/client';
import { Request, Response } from 'express';

export interface iUserRepository {
	createUser(user: User): Promise<User>
	getUsers(req: Request, res: Response): Promise<void>
}

export interface iUserController {
	getAllUsers(req: Request, res: Response): void
}
