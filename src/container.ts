import { Container } from "inversify";
import { UserRepository, iUserRepository } from "./repositories/UserRepository";
import UserController, { iUserController } from "./controllers/userController";

const container = new Container();

container.bind<iUserRepository>(UserRepository).to(UserRepository);
container.bind<iUserController>(UserController).to(UserController);

export { container }
