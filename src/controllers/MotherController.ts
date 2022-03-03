import { Request, Response } from 'express';
import { MothersRepository } from '../repositories/MothersRepository';

class MotherController {
	private mothersRepository: MothersRepository;

	constructor() {
		this.mothersRepository = new MothersRepository();
	}

	async create(request: Request, response: Response): Promise<Response> {
		const {
			bi,
			name,
			father,
			mother,
			birthday,
			maritalStatus,
			work,
			workplace,
			home,
			district,
			neighborhood,
			avenue,
			phone,
			referencePlace,
			referencePerson,
			referenceRelation,
			referencePhone
		} = request.body;
		const register = request.userId;

		const parsedBirthday = new Date(Date.parse(birthday));
		const today = new Date();

		const age = today.getFullYear() - parsedBirthday.getFullYear();
		if (age < 14) {
			throw new Error('Invalid birthday');
		}

		await this.mothersRepository.create({
			register,
			bi,
			name,
			father,
			mother,
			birthday: parsedBirthday,
			maritalStatus,
			work,
			workplace,
			home,
			district,
			neighborhood,
			avenue,
			phone,
			referencePlace,
			referencePerson,
			referenceRelation,
			referencePhone
		});

		return response.status(201).send();
	}
}

export default () => {
	const motherController = new MotherController();
	return motherController;
};
