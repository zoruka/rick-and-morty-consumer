import { IdentifiedError } from '@/domain/errors';
import { Http } from '.';

export class HttpError extends IdentifiedError {
	constructor(path: string, response: Http.Response) {
		super(
			'HttpError',
			`${response.statusCode}`,
			`An error ocurred while requesting from "${path}"`,
			response.body
		);
	}
}
