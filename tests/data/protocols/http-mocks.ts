import { Http, HttpClient } from '@/data/protocols';

export class HttpClientSpy implements HttpClient {
	constructor(public response: Http.Response) {}

	async request(params: Http.Request): Promise<Http.Response> {
		return this.response;
	}
}
