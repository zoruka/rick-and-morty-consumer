import { Http, HttpClient } from '@/data/protocols';
import { FindCharacters } from '@/domain/usecases';

export class NetworkFindCharacters implements FindCharacters {
	constructor(
		private readonly path: string,
		private readonly httpClient: HttpClient<FindCharacters.Response>
	) {}

	async find(
		params: FindCharacters.Params = {}
	): Promise<FindCharacters.Response> {
		const requestResponse = await this.httpClient.request({
			method: 'get',
			url: this.path,
			params,
		});

		if (requestResponse.statusCode !== Http.StatusCode.Ok)
			throw new Error();

		return requestResponse.body;
	}
}
