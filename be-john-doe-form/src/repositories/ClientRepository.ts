import { Client } from '../models/Client';
import { IParamsCreateNewClientDto } from '../models/dtos/CreateNewClientDtos';
import { postgresClient } from '../services/PostgresService';
import { IClientRepository } from './interfaces/IClientRepository';

class ClientRepository implements IClientRepository {
	async createNewClient(newClient: IParamsCreateNewClientDto): Promise<Client> {
		const { name, cpf, email, color, comments } = newClient;
		const { rows } = await postgresClient.query(
			`insert into client (name, cpf, email, "favoriteColorId", comments) values ($1, $2, $3, $4, $5) RETURNING id`,
			[name, cpf, email, color.id, comments]
		);

		return new Client({
			id: rows[0].id,
			name: newClient.name,
			email: newClient.email,
			comments: newClient.comments,
			cpf: newClient.cpf,
			favoriteColor: newClient.color,
		});
	}

	async findClientByCpf(cpf: string): Promise<Client | undefined> {
		const { rows } = await postgresClient.query(
			`select name, cpf, email, "favoriteColorId", comments from client where cpf = $1`,
			[cpf]
		);

		return rows[0];
	}
}

export { ClientRepository };
