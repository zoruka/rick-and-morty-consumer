import { NetworkFindCharacters } from '@/data/usecases';
import { makeFindCharacters } from '@/main/factories/usecases';

const sut = makeFindCharacters;

describe('makeFindCharacters', () => {
	test('should create an usecase', () => {
		const usecase = sut();
		expect(usecase).toBeInstanceOf(NetworkFindCharacters);
	});
});
