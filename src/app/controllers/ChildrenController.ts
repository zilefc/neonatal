import { Request, Response } from 'express';
import { ChildrenRepository } from '../repositories/ChildrenRepository';
import { MothersRepository } from '../repositories/MothersRepository';
import { UsersRepository } from '../repositories/UsersRepository';

class ChildrenController {
	usersRepository: UsersRepository;
	mothersRepository: MothersRepository;
	childrenRepository: ChildrenRepository;
	constructor() {
		this.usersRepository = new UsersRepository();
		this.mothersRepository = new MothersRepository();
		this.childrenRepository = new ChildrenRepository();
	}
	async create(request: Request, response: Response): Promise<Response> {
		const {
			name,
			hospitalName,
			hospitalNumber,
			sex,
			fatherName,
			home,
			phone,
			motherId
		} = request.body;

		const register = await this.usersRepository.findById(request.userId);
		const mother = await this.mothersRepository.findById(motherId);

		await this.childrenRepository.create({
			name,
			hospitalName,
			hospitalNumber,
			sex,
			fatherName,
			home,
			phone,
			mother,
			register
		});

		return response.status(201).send();
	}

	async list(request: Request, response: Response): Promise<Response> {
		const children = await this.childrenRepository.findAll();
		return response.json(children);
	}

	async showById(request: Request, response: Response): Promise<Response> {
		const { id } = request.params;

		const child = await this.childrenRepository.findById(Number(id));
		return response.json(child);
	}
}

export default () => {
	const childrenController = new ChildrenController();

	return childrenController;
};
