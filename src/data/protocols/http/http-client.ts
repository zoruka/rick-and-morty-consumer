import { Http } from './http';

export interface HttpClient<R = any> {
	request: (data: Http.Request) => Promise<Http.Response<R>>;
}
