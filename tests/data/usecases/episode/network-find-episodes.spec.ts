import { HttpError } from '@/data/protocols';
import { NetworkFetchEpisodes } from '@/data/usecases';
import { FetchEpisodes } from '@/domain/usecases';
import { mockEpisodePagination } from '@/tests/domain/models/episode-mocks';
import { HttpClientSpy } from '../../protocols/http-mocks';

type Sut = {
	sut: NetworkFetchEpisodes;
	httpClientSpy: HttpClientSpy;
};

const makeSut = (): Sut => {
	const httpClientSpy = new HttpClientSpy({
		statusCode: 200,
		body: mockEpisodePagination(),
	});

	const sut = new NetworkFetchEpisodes('episodes_path', httpClientSpy);
	return {
		sut,
		httpClientSpy,
	};
};

describe('NetworkFetchEpisodes', () => {
	const params = { ids: [1, 2, 3] };
	test('should throw if HttpClient throws', async () => {
		const { sut, httpClientSpy } = makeSut();
		jest.spyOn(httpClientSpy, 'request').mockRejectedValueOnce(new Error());
		const promise = sut.fetch(params);
		await expect(promise).rejects.toThrow();
	});

	test('should throw if statusCode is not 200', async () => {
		const { sut, httpClientSpy } = makeSut();
		httpClientSpy.response = {
			statusCode: 500,
		};

		const promise = sut.fetch(params);
		await expect(promise).rejects.toThrowError(HttpError);
	});

	test('should call HttpClient with correct values', async () => {
		const { sut, httpClientSpy } = makeSut();

		const spy = jest.spyOn(httpClientSpy, 'request');

		await sut.fetch(params);

		expect(spy).toBeCalledWith({
			method: 'get',
			url: 'episodes_path/1,2,3',
		});
	});

	test('should return a episode list', async () => {
		const { sut, httpClientSpy } = makeSut();

		const response = await sut.fetch(params);

		expect(response).toEqual(httpClientSpy.response.body);
	});
});
