import { makeHttpClientAdapter } from '@/main/factories/infras';
import { HttpClientAdapter } from '@/infra/http';

const sut = makeHttpClientAdapter;

describe('makeHttpEndpoint', () => {
	test('should create and endpoint', () => {
		const adapter = sut();
		expect(adapter).toBeInstanceOf(HttpClientAdapter);
	});
});
