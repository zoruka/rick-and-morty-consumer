import { env } from '@/main/configs';

export const makeHttpEndpoint = (path: string): string => {
	return `${env.apiUrl}${path}`;
};
