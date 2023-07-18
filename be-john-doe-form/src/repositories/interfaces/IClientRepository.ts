import { Client } from '../../models/Client';
import { IParamsCreateNewClientDto } from '../../models/dtos/CreateNewClientDtos';

interface IClientRepository {
	createNewClient(newClient: IParamsCreateNewClientDto): Promise<Client>;
	findClientByCpf(cpf: string): Promise<Client | undefined>;
}

export { IClientRepository };
