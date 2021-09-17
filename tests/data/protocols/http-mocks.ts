import { Http, HttpClient } from '@/data/protocols';

export class HttpClientSpy implements HttpClient {
	async request(params: Http.Request): Promise<Http.Response> {
		return {
			statusCode: 200,
			body: 'any_response',
		};
	}
}
