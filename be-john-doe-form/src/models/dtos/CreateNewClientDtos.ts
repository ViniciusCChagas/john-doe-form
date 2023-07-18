import { Color } from '../Color';

interface IParamsCreateNewClientDto {
	name: string;
	cpf: string;
	email: string;
	color: Color;
	comments: string;
}

interface IErrorResponseCreateNewClientDto {
	message: string;
	errors: string[];
}

export { IErrorResponseCreateNewClientDto, IParamsCreateNewClientDto };
