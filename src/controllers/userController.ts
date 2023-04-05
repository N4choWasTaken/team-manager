import { inject, injectable } from "inversify";
import { UserRepository, iUserRepository } from "../repositories/UserRepository";
import { Request, Response } from 'express';

@injectable()
class UserController {

	_userRepository;
	constructor (@inject(UserRepository) private userRepository: iUserRepository) {
		this._userRepository = userRepository;
	}

	getAllUsers = async (req: Request, res: Response) => {
		this._userRepository.getUsers(req, res)
	}
}



export default UserController;
