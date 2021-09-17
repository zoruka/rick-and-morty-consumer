import { Http } from './http';

export interface HttpClient<R> {
	request: (data: Http.Request) => Promise<Http.Response<R>>;
}
