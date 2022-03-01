import User from '../models/User';

interface IUserDTO {
	name: string;
	email: string;
	password: string;
}
class UsersRepository {
	private users: User[];
	constructor() {
		this.users = [];
	}

	create({ name, email, password }: IUserDTO) {
		const user = new User();
		Object.assign(user, { name, email, password });
		this.users.push(user);
	}
}

export { UsersRepository };
