import { Request, Response } from 'express';
import Router from 'express-promise-router';
import { createNewClientController } from '../useCases/createNewClient';
import { getColorsListController } from '../useCases/getColorsList';

const mainRouter = Router();

mainRouter.post('/client', (request: Request, response: Response) => {
	return createNewClientController.handle(request, response);
});

mainRouter.get('/colors', (request: Request, response: Response) => {
	return getColorsListController.handle(request, response);
});

export { mainRouter };
