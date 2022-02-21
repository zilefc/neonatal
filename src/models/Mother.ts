import { v4 as uuid } from 'uuid';

class Mother {
	id?: string;
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
	created_at?: Date;
	updated_at?: Date;

	constructor() {
		if (!this.id) {
			this.id = uuid();
			this.created_at = new Date();
		}

		this.updated_at = new Date();
	}
}

export { Mother };
