import { Container } from "inversify";
import { UserRepository, iUserRepository } from "./repositories/UserRepository";

const container = new Container();

container.bind<iUserRepository>(UserRepository).to(UserRepository);

export { container }
