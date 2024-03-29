import { getRepository, Repository } from 'typeorm';
import { Children } from '../models/Children';
import { Mother } from '../models/Mother';
import User from '../models/User';

interface IChildrenDTO {
	name: string;
	hospitalName: string;
	hospitalNumber: number;
	sex: string;
	fatherName: string;
	home: string;
	phone: number;
	mother: Mother;
	register: User;
}

class ChildrenRepository {
	private repository: Repository<Children>;

	constructor() {
		this.repository = getRepository(Children);
	}

	async create({
		name,
		hospitalName,
		hospitalNumber,
		sex,
		fatherName,
		home,
		phone,
		mother,
		register
	}: IChildrenDTO): Promise<void> {
		const child = this.repository.create({
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

		await this.repository.save(child);
	}

	async findAll(): Promise<Children[]> {
		const children = await this.repository.find({ relations: ['mother'] });
		return children;
	}

	async findById(id: number): Promise<Children> {
		const child = await this.repository.findOne(id, { relations: ['mother'] });
		return child;
	}

	async count(): Promise<number> {
		const count = await this.repository.count();

		return count;
	}
}

export { ChildrenRepository };
