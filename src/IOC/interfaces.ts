import { Request, Response } from 'express';

export interface iUserRepository {
	getUsers(req: Request, res: Response): Promise<void>
}

export interface iUserController{
	getAllUsers(req: Request, res: Response): void
}
