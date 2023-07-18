import { Color } from './Color';

class Client {
	id: number;
	name: string;
	cpf: string;
	email: string;
	favoriteColor: Color;
	comments: string;

	constructor(params: {
		id: number;
		name: string;
		cpf: string;
		email: string;
		favoriteColor: Color;
		comments: string;
	}) {
		this.id = params.id;
		this.name = params.name;
		this.cpf = params.cpf;
		this.email = params.email;
		this.favoriteColor = params.favoriteColor;
		this.comments = params.comments;
	}
}

export { Client };
