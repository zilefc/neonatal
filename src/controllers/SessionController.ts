import { Request, Response } from 'express';

class SessionController {
	constructor() {}

	async create(request: Request, response: Response): Promise<Response> {
		return response.send();
	}
}

export default () => {
	const sessionController = new SessionController();
	return sessionController;
};
