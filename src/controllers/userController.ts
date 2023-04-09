import { inject, injectable } from "inversify";
import { UserRepository } from "../repositories/UserRepository";
import { Request, Response } from 'express';
import { iUserController, iUserRepository } from "../IOC/interfaces";
import { TYPES } from "../IOC/types";

@injectable()
class UserController implements iUserController {

	_userRepository;
	constructor (@inject(TYPES.iUserRepository) private userRepository: iUserRepository) {
		this._userRepository = userRepository;
	}

	getAllUsers = async (req: Request, res: Response) => {
		this._userRepository.getUsers(req, res)
	}
}

export default UserController;
