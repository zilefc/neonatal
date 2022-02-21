import { Mother } from '../models/Mother';

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
}

class MothersRepository {
	private mothers: Mother[];

	constructor() {
		this.mothers = [];
	}

	create({
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
	}: IMotherDTO) {
		const newMother = new Mother();

		Object.assign(newMother, {
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
		});
		
		this.mothers.push(newMother);
	}
}

export { MothersRepository };
