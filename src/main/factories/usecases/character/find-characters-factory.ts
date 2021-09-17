import { NetworkFindCharacters } from '@/data/usecases';
import { FindCharacters } from '@/domain/usecases';
import { endpoints } from '@/main/configs';
import { makeHttpClientAdapter, makeHttpEndpoint } from '../../infras';

export const makeFindCharacters = (): FindCharacters => {
	return new NetworkFindCharacters(
		makeHttpEndpoint(endpoints.character),
		makeHttpClientAdapter()
	);
};
