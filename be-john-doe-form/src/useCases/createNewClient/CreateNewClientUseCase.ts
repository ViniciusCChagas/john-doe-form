import { IParamsCreateNewClientDto } from '../../models/dtos/CreateNewClientDtos';
import { IClientRepository } from '../../repositories/interfaces/IClientRepository';

class CreateNewClientUseCase {
	private clientRepository: IClientRepository;

	constructor(clientRepository: IClientRepository) {
		this.clientRepository = clientRepository;
	}

	async execute(params: IParamsCreateNewClientDto) {
		const { name, cpf, email, color, comments } = params;

		const clientExists = await this.clientRepository.findClientByCpf(cpf);
		if (clientExists) {
			throw new Error('Client already exists');
		}

		const newClient = await this.clientRepository.createNewClient({
			name,
			cpf,
			email,
			color,
			comments,
		});

		return newClient;
	}
}

export { CreateNewClientUseCase };
