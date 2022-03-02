import { Request, Response } from 'express';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {
	private usersRepository: UsersRepository;

	constructor() {
		this.usersRepository = new UsersRepository();
	}

	async create(request: Request, response: Response): Promise<Response> {
		const { name, email, password } = request.body;
		await this.usersRepository.create({ name, email, password });
		return response.status(201).send();
	}
}

export default () => {
	const userController = new UserController();
	return userController;
};
