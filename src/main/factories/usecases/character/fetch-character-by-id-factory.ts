import { NetworkFetchCharacterById } from '@/data/usecases';
import { FetchCharacterById } from '@/domain/usecases';
import { endpoints } from '@/main/configs';
import { makeHttpClientAdapter, makeHttpEndpoint } from '../../infras';

export const makeFetchCharacterById = (): FetchCharacterById => {
	return new NetworkFetchCharacterById(
		makeHttpEndpoint(endpoints.character),
		makeHttpClientAdapter()
	);
};
