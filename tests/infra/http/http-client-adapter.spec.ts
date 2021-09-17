import { HttpClientAdapter } from '@/infra/http';
import nock from 'nock';

type Sut = HttpClientAdapter;

const makeSut = (): Sut => new HttpClientAdapter();

describe('HttpClientAdapter', () => {
	const hostMock = 'https://host-mock.com';

	test('should get from hostMock', async () => {
		const sut = makeSut();

		nock(hostMock).get('/').reply(200, { data: 'any_data' });

		const result = await sut.request({
			url: hostMock,
			method: 'get',
		});

		expect(result.statusCode).toEqual(200);
		expect(result.body).toEqual({ data: 'any_data' });
	});

	test('should get error from hostMock', async () => {
		const sut = makeSut();

		nock(hostMock).get('/').reply(500, { error: 'error' });

		const result = await sut.request({
			url: hostMock,
			method: 'get',
		});

		expect(result.statusCode).toEqual(500);
		expect(result.body).toEqual({ error: 'error' });
	});
});
