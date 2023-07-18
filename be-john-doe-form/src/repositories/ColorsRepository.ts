import { Color } from '../models/Color';
import { postgresClient } from '../services/PostgresService';
import { IColorsRepository } from './interfaces/IColorsRepository';

class ColorsRepository implements IColorsRepository {
	async getAll(): Promise<Color[]> {
		const { rows: colors } = await postgresClient.query(
			`SELECT id, name, hex FROM colors`
		);

		const response = colors.map((row) => {
			return new Color(row);
		});

		return response;
	}
}

export { ColorsRepository };
