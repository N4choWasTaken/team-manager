import { UserRepository } from "../repositories/UserRepository";
import { Request, Response } from 'express';

const getAllUsers = async (req: Request, res: Response) => {
	const userRepository = new UserRepository()

	userRepository.getUsers(req, res)
}

export default { getAllUsers };
