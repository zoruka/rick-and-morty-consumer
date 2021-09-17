import { makeHttpEndpoint } from '@/main/factories/infras';
import { env } from '@/main/configs';
const sut = makeHttpEndpoint;

describe('makeHttpEndpoint', () => {
	test('should create and endpoint', () => {
		env.apiUrl = 'https://mock.com';

		const endpoint = sut('/endpoint');
		expect(endpoint).toEqual('https://mock.com/endpoint');
	});
});
