import { NetworkFindCharacters } from '@/data/usecases';
import { FindCharacters } from '@/domain/usecases';
import { mockCharacterPagination } from '@/tests/domain/models/character-mocks';
import { HttpClientSpy } from '../../protocols/http-mocks';

type Sut = {
	sut: NetworkFindCharacters;
	httpClientSpy: HttpClientSpy;
};

const makeSut = (): Sut => {
	const httpClientSpy = new HttpClientSpy({
		statusCode: 200,
		body: mockCharacterPagination(),
	});

	const sut = new NetworkFindCharacters('characters_path', httpClientSpy);
	return {
		sut,
		httpClientSpy,
	};
};

describe('NetworkFindCharacters', () => {
	test('should throw if HttpClient throws', async () => {
		const { sut, httpClientSpy } = makeSut();
		jest.spyOn(httpClientSpy, 'request').mockRejectedValueOnce(new Error());
		const promise = sut.find();
		await expect(promise).rejects.toThrow();
	});

	test('should throw if statusCode is not 200', async () => {
		const { sut, httpClientSpy } = makeSut();
		httpClientSpy.response = {
			statusCode: 500,
		};

		const promise = sut.find();
		await expect(promise).rejects.toThrow();
	});

	test('should call HttpClient with correct values', async () => {
		const { sut, httpClientSpy } = makeSut();

		const params: FindCharacters.Params = {
			name: 'name',
			status: 'unknown',
			species: 'specie',
			type: '',
			gender: 'unknown',
			page: 10,
		};

		const spy = jest.spyOn(httpClientSpy, 'request');

		await sut.find(params);

		expect(spy).toBeCalledWith({
			method: 'get',
			url: 'characters_path',
			params,
		});
	});

	test('should return a character list', async () => {
		const { sut, httpClientSpy } = makeSut();

		const response = await sut.find();

		expect(response).toEqual(httpClientSpy.response.body);
	});
});
