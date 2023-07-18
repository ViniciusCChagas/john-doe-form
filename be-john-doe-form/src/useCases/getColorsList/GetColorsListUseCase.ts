import { Color } from '../../models/Color';
import { ColorsRepository } from '../../repositories/ColorsRepository';

class GetColorsListUseCase {
	constructor(private colorsRepository: ColorsRepository) {
		this.colorsRepository = colorsRepository;
	}

	async execute(): Promise<Color[]> {
		const colors = await this.colorsRepository.getAll();

		return colors;
	}
}

export { GetColorsListUseCase };
