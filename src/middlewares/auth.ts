import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from '../app/errors/AppError';
import authConfig from '../config/auth';

interface DecodedToken {
	id: number;
	iat: number;
	exp: number;
}

export default (request: Request, response: Response, next: NextFunction) => {
	const authHeaders = request.headers.authorization;
	if (!authHeaders) {
		throw new AppError('Token not provided', 401);
	}

	const [, token] = authHeaders.split(' ');

	try {
		const decoded = verify(token, authConfig.secret);
		const { id } = decoded as DecodedToken;
		Object.assign(request, { userId: id });
	} catch (err) {
		throw new AppError('Token not valid!', 401);
	}
	return next();
};
