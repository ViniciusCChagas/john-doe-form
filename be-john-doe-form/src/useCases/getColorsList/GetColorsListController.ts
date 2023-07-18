import { Request, Response } from 'express';
import { GetColorsListUseCase } from './GetColorsListUseCase';

class GetColorsListController {
	constructor(private getColorsListUseCase: GetColorsListUseCase) {
		this.getColorsListUseCase = getColorsListUseCase;
	}

	async handle(request: Request, response: Response): Promise<Response> {
		try {
			const colors = await this.getColorsListUseCase.execute();

			return response.status(200).json(colors);
		} catch (error) {
			return response.status(400).json({
				message: error.message || 'Unexpected error.',
			});
		}
	}
}

export { GetColorsListController };
