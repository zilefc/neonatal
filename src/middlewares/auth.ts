import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import authConfig from '../config/auth';

interface DecodedToken {
	id: number;
	iat: number;
	exp: number;
}

export default (request: Request, response: Response, next: NextFunction) => {
	const authHeaders = request.headers.authorization;
	if (!authHeaders) {
		throw new Error('Token not provided');
	}

	const [, token] = authHeaders.split(' ');

	try {
		const decoded = verify(token, authConfig.secret);
		const { id } = decoded as DecodedToken;
		Object.assign(request, { userId: id });
	} catch (err) {
		throw new Error('Token not valid!');
	}
	return next();
};
