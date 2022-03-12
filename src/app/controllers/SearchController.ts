import { Request, Response } from 'express';
import { MothersRepository } from '../repositories/MothersRepository';

class SearchController {
	private mothersRepository: MothersRepository;
	constructor() {
		this.mothersRepository = new MothersRepository();
	}
	async searchMothers(request: Request, response: Response): Promise<Response> {
		const { name } = request.query;
		const mothers = await this.mothersRepository.findByName(String(name));
		return response.send();
	}
}

export default () => {
	const searchController = new SearchController();
	return searchController;
};
