import { HttpClientAdapter } from '@/infra/http';

export const makeHttpClientAdapter = (): HttpClientAdapter => {
	return new HttpClientAdapter();
};
