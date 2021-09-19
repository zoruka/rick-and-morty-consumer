import { Http, HttpClient, HttpError } from '@/data/protocols';
import { FetchEpisodes } from '@/domain/usecases';

export class NetworkFetchEpisodes implements FetchEpisodes {
	constructor(
		private readonly path: string,
		private readonly httpClient: HttpClient<FetchEpisodes.Response>
	) {}

	async fetch(params: FetchEpisodes.Params): Promise<FetchEpisodes.Response> {
		const url = `${this.path}/${params.ids.join(',')}`;

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
