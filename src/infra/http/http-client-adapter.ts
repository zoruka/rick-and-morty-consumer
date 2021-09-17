import { HttpClient, Http } from '@/data/protocols';
import axios, { AxiosResponse } from 'axios';

export class HttpClientAdapter implements HttpClient {
	async request(params: Http.Request): Promise<Http.Response> {
		let axiosResponse: AxiosResponse;
		try {
			axiosResponse = await axios.request({
				url: params.url,
				method: params.method,
				data: params.body,
				headers: params.headers,
				params: params.params,
			});
		} catch (error) {
			axiosResponse = error.response;
		}

		return {
			statusCode: axiosResponse.status,
			body: axiosResponse.data,
		};
	}
}
