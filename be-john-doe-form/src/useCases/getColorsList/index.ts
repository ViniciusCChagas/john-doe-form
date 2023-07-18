import { ColorsRepository } from '../../repositories/ColorsRepository';
import { GetColorsListController } from './GetColorsListController';
import { GetColorsListUseCase } from './GetColorsListUseCase';

const colorsRepository = new ColorsRepository();

const getColorsListUseCase = new GetColorsListUseCase(colorsRepository);

const getColorsListController = new GetColorsListController(getColorsListUseCase);

export { getColorsListController };
