import { Request, Response } from 'express';
import { number, object, string } from 'yup';
import { IParamsCreateNewClientDto } from '../../models/dtos/CreateNewClientDtos';
import { isCPFValid } from '../../utils';
import { CreateNewClientUseCase } from './CreateNewClientUseCase';

class CreateNewClientController {
	private createNewClientUseCase: CreateNewClientUseCase;
	constructor(createNewClientUseCase: CreateNewClientUseCase) {
		this.createNewClientUseCase = createNewClientUseCase;
	}

	async handle(request: Request, response: Response) {
		const { name, cpf, email, color, comments } =
			request.body as IParamsCreateNewClientDto;

		const paramsValidationSchema = object({
			name: string().required().max(255),
			cpf: string()
				.required()
				.test('is-cpf-valid', 'CPF inválido', (cpf) => isCPFValid(cpf))
				.matches(
					/^[0-9]+$/g,
					'CPF não pode conter letras ou caracteres especiais'
				),
			email: string().email().required().max(255),
			color: object().shape({
				id: number().required().min(1),
				name: string().required(),
				hex: string().required(),
			}),
			comments: string().max(625),
		});

		try {
			await paramsValidationSchema.validate({
				name,
				cpf,
				email,
				color,
				comments,
			});

			const newClient = await this.createNewClientUseCase.execute({
				name,
				cpf,
				email,
				color,
				comments,
			});

			return response
				.status(200)
				.json({ message: 'Cliente criado com sucesso', client: newClient });
				
		} catch (error) {
			console.log(error.message);
			if (error.message === 'Client already exists') {
				return response.status(409).json({
					message: 'Cliente já existe!',
					errors: ['Cliente já cadastrado no sistema!'],
				});
			}

			return response.status(400).json({
				message: 'Parâmetro inválido',
				errors: error.errors,
			});
		}
	}
}
export { CreateNewClientController };
