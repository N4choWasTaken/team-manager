import { inject, injectable } from "inversify";
import { UserRepository, iUserRepository } from "../repositories/UserRepository";
import { Request, Response } from 'express';

@injectable()
class UserController implements iUserController {

	_userRepository;
	constructor (@inject(UserRepository) private userRepository: iUserRepository) {
		this._userRepository = userRepository;
	}

	getAllUsers = async (req: Request, res: Response) => {
		this._userRepository.getUsers(req, res)
	}
}

export interface iUserController{
	getAllUsers(req: Request, res: Response): void
}



export default UserController;
