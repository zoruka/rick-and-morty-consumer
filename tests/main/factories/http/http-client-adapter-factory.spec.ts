import { makeHttpClientAdapter } from '@/main/factories/infras';
import { HttpClientAdapter } from '@/infra/http';

const sut = makeHttpClientAdapter;

describe('makeHttpClientAdapter', () => {
	test('should create an adapter', () => {
		const adapter = sut();
		expect(adapter).toBeInstanceOf(HttpClientAdapter);
	});
});
