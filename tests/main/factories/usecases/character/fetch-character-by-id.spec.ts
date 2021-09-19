import { NetworkFetchCharacterById } from '@/data/usecases';
import { makeFetchCharacterById } from '@/main/factories/usecases';

const sut = makeFetchCharacterById;

describe('makeFetchCharacterById', () => {
	test('should create an usecase', () => {
		const usecase = sut();
		expect(usecase).toBeInstanceOf(NetworkFetchCharacterById);
	});
});
