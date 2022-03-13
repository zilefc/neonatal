import { Request, Response } from 'express';
import { ChildrenRepository } from '../repositories/ChildrenRepository';
import { MothersRepository } from '../repositories/MothersRepository';

class MotherChildrenController {
	private mothersRepository: MothersRepository;
	private childrenRepository: ChildrenRepository;
	constructor() {
		this.mothersRepository = new MothersRepository();
		this.childrenRepository = new ChildrenRepository();
	}

	async list(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;
		const children = await this.mothersRepository.findChildren(Number(id));
		return response.json(children);
	}

	async count(request: Request, response: Response) {
		const countChildren = await this.childrenRepository.count();
		const countMothers = await this.mothersRepository.count();
		return response.render('pages/home', {
			title: 'Home',
			countChildren,
			countMothers
		});
	}
}

export default () => {
	const motherChildrenController = new MotherChildrenController();
	return motherChildrenController;
};
