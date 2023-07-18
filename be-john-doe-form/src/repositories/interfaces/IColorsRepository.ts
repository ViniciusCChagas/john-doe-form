import { Color } from '../../models/Color';

interface IColorsRepository {
	getAll(): Promise<Color[]>;
}

export { IColorsRepository };
