class Color {
	id: number;
	name: string;
	hex: string;

	constructor(params: { id: number; name: string; hex: string }) {
		this.id = params.id;
		this.name = params.name;
		this.hex = params.hex;
	}
}

export { Color };
