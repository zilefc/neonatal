import { Request, Response } from 'express';
import { MothersRepository } from '../repositories/MothersRepository';

class MotherChildrenController {
	private mothersRepository: MothersRepository;
	constructor() {
		this.mothersRepository = new MothersRepository();
	}
	
	async list(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;
		const children = await this.mothersRepository.findChildren(Number(id));
		return response.json(children);
	}
}

export default () => {
	const motherChildrenController = new MotherChildrenController();
	return motherChildrenController;
};
