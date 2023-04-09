import { Container } from "inversify";
import { UserRepository } from "../repositories/UserRepository";
import UserController from "../controllers/userController";
import { TYPES } from "./types";

const container = new Container();

container.bind<UserRepository>(TYPES.iUserRepository).to(UserRepository);
container.bind<UserController>(TYPES.iUserController).to(UserController);

export { container }
