import { Router } from 'express';
import { MothersRepository } from '../repositories/MothersRepository';

const routes = Router();

const mothersRepository = new MothersRepository();

routes.post('/', (request, response) => {
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

	mothersRepository.create({
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

	return response.status(201).send();
});

export { routes as mothersRoutes };
