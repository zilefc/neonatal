import { getRepository, Repository } from 'typeorm';
import { Mother } from '../models/Mother';
import User from '../models/User';

interface IMotherDTO {
	bi: string;
	name: string;
	father: string;
	mother: string;
	birthday: Date;
	maritalStatus: string;
	work: string;
	workplace: string;
	home: string;
	district: string;
	neighborhood: string;
	avenue: string;
	phone: number;
	referencePlace: string;
	referencePerson: string;
	referenceRelation: string;
	referencePhone: number;
	register: number;
}

class MothersRepository {
	private repository: Repository<Mother>;

	constructor() {
		this.repository = getRepository(Mother);
	}

	async create({
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
		referencePhone,
		register
	}: IMotherDTO) {
		const user = new User();
		user.id = register;

		const newMother = this.repository.create({
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
			referencePhone,
			register: user
		});

		await this.repository.save(newMother);
	}
}

export { MothersRepository };
