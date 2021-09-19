import { NetworkFetchEpisodes } from '@/data/usecases';
import { FetchEpisodes } from '@/domain/usecases';
import { endpoints } from '@/main/configs';
import { makeHttpClientAdapter, makeHttpEndpoint } from '../../infras';

export const makeFetchEpisodes = (): FetchEpisodes => {
	return new NetworkFetchEpisodes(
		makeHttpEndpoint(endpoints.episode),
		makeHttpClientAdapter()
	);
};
