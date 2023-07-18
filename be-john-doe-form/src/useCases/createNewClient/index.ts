import { ClientRepository } from '../../repositories/ClientRepository';
import { CreateNewClientController } from './CreateNewClientController';
import { CreateNewClientUseCase } from './CreateNewClientUseCase';

const clientRepository = new ClientRepository();

const createNewClientUseCase = new CreateNewClientUseCase(clientRepository);

const createNewClientController = new CreateNewClientController(
	createNewClientUseCase
);

export { createNewClientController };
