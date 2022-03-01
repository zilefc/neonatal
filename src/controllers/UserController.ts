import { Request, Response } from 'express';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {
	private usersRepository: UsersRepository;
	
	constructor() {
		this.usersRepository = new UsersRepository();
	}

	create(request: Request, response: Response): Response {
		const { name, email, password } = request.body;
		this.usersRepository.create({ name, email, password });
		return response.status(201).send();
	}
}

export { UserController };
