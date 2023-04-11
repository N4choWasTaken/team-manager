import { User } from '@prisma/client';
import { UUID } from 'crypto';
import { Request, Response } from 'express';

export interface iUserRepository {
	getUsers(req: Request, res: Response): Promise<void>
	getUserWithId(req: Request, res: Response, id: UUID): Promise<User | null>
}

export interface iUserController{
	getAllUsers(req: Request, res: Response): void
	getUser(req: Request, res: Response, id: UUID): void
}
