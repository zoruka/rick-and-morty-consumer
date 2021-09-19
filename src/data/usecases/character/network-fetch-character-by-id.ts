import { Http, HttpClient, HttpError } from '@/data/protocols';
import { FetchCharacterById } from '@/domain/usecases';

export class NetworkFetchCharacterById implements FetchCharacterById {
	constructor(
		private readonly path: string,
		private readonly httpClient: HttpClient<FetchCharacterById.Response>
	) {}

	async fetchById(
		params: FetchCharacterById.Params
	): Promise<FetchCharacterById.Response> {
		const url = `${this.path}/${params.id}`;

		const requestResponse = await this.httpClient.request({
			method: 'get',
			url,
			params,
		});

		if (requestResponse.statusCode !== Http.StatusCode.Ok)
			throw new HttpError(this.path, requestResponse);

		return requestResponse.body;
	}
}
