import { getRepository, Repository } from 'typeorm';
import User from '../models/User';

interface IUserDTO {
	name: string;
	email: string;
	password: string;
}
class UsersRepository {
	private repository: Repository<User>;
	constructor() {
		this.repository = getRepository(User);
	}

	async create({ name, email, password }: IUserDTO): Promise<void> {
		const user = this.repository.create({ name, email, password });

		this.repository.save(user);
	}

	async findByEmail(email: string): Promise<User> {
		const user = await this.repository.findOne({ email });
		return user;
	}
}

export { UsersRepository };
