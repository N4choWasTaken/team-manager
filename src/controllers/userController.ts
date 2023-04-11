import { inject, injectable } from "inversify";
import { Request, Response, response } from 'express';
import { iUserController, iUserRepository } from "../IOC/interfaces";
import { TYPES } from "../IOC/types";
import { UUID } from "crypto";
import { User } from "@prisma/client";

@injectable()
class UserController implements iUserController {

	_userRepository;
	constructor (@inject(TYPES.iUserRepository) private userRepository: iUserRepository) {
		this._userRepository = userRepository;
	}

	getAllUsers = async (req: Request, res: Response) => {
		const response: User[] = await this._userRepository.getUsers(req, res)

		if(response === null) {
			res.sendStatus(404)
		} else {
			res.send(response)
		}
	}

	getUser = async (req: Request, res: Response, id: UUID) => {
		const response: User | null = await this._userRepository.getUserWithId(req, res, id)

		if (response === null) {
			res.sendStatus(404)
		} else {
			res.send(response)
		}
	}
}

export default UserController;
