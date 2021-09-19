import { NetworkFetchEpisodes } from '@/data/usecases';
import { makeFetchEpisodes } from '@/main/factories/usecases';

const sut = makeFetchEpisodes;

describe('makeFetchEpisodes', () => {
	test('should create an usecase', () => {
		const usecase = sut();
		expect(usecase).toBeInstanceOf(NetworkFetchEpisodes);
	});
});
