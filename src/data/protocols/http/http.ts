export namespace Http {
	export type Method = 'post' | 'get' | 'put' | 'delete';

	export type Request = {
		url: string;
		method: Method;
		body?: any;
		headers?: any;
		params?: any;
	};

	export enum StatusCode {
		Ok = 200,
		NoContent = 204,
		BadRequest = 400,
		Unauthorized = 401,
		Forbidden = 403,
		NotFound = 404,
		ServerError = 500,
	}

	export type Response<T = any> = {
		statusCode: StatusCode;
		body?: T;
	};
}
