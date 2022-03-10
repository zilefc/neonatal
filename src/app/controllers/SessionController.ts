import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UsersRepository } from '../repositories/UsersRepository';
import authConfig from '../../config/auth';

class SessionController {
	private repository: UsersRepository;
	constructor() {
		this.repository = new UsersRepository();
	}

	async create(request: Request, response: Response): Promise<Response> {
		const { email, password } = request.body;

		const user = await this.repository.findByEmail(email);

		if (!user) {
			throw new Error('User not found');
		}

		if (!(await bcrypt.compare(password, user.password))) {
			throw new Error('Password does not match!');
		}

		const { id, name } = user;

		const exp = new Date();

		exp.setDate(exp.getDate() + 6);

		return response.status(201).json({
			user: {
				id,
				name,
				email
			},
			token: jwt.sign({ id }, authConfig.secret, {
				expiresIn: authConfig.expiresIn
			}),
			exp
		});
	}
}

export default () => {
	const sessionController = new SessionController();
	return sessionController;
};
