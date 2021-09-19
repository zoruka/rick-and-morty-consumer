import { HttpError } from '@/data/protocols';
import { NetworkFetchCharacterById } from '@/data/usecases';
import { mockCharacter } from '@/tests/domain/models/character-mocks';
import { HttpClientSpy } from '../../protocols/http-mocks';

type Sut = {
	sut: NetworkFetchCharacterById;
	httpClientSpy: HttpClientSpy;
};

const makeSut = (): Sut => {
	const httpClientSpy = new HttpClientSpy({
		statusCode: 200,
		body: mockCharacter({ id: 1 }),
	});

	const sut = new NetworkFetchCharacterById('character_path', httpClientSpy);
	return {
		sut,
		httpClientSpy,
	};
};

describe('NetworkFetchCharacterById', () => {
	const params = { id: 1 };
	test('should throw if HttpClient throws', async () => {
		const { sut, httpClientSpy } = makeSut();
		jest.spyOn(httpClientSpy, 'request').mockRejectedValueOnce(new Error());
		const promise = sut.fetchById(params);
		await expect(promise).rejects.toThrow();
	});

	test('should throw if statusCode is not 200', async () => {
		const { sut, httpClientSpy } = makeSut();
		httpClientSpy.response = {
			statusCode: 500,
		};

		const promise = sut.fetchById(params);
		await expect(promise).rejects.toThrowError(HttpError);
	});

	test('should call HttpClient with correct values', async () => {
		const { sut, httpClientSpy } = makeSut();

		const spy = jest.spyOn(httpClientSpy, 'request');

		await sut.fetchById(params);

		expect(spy).toBeCalledWith({
			method: 'get',
			url: 'character_path/1',
			params,
		});
	});

	test('should return a episode list', async () => {
		const { sut, httpClientSpy } = makeSut();

		const response = await sut.fetchById(params);

		expect(response).toEqual(httpClientSpy.response.body);
	});
});
