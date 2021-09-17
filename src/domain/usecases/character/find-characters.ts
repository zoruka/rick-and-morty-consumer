import { Character } from '../../models';
import { API } from '../../models/api';

export interface FindCharacters {
	find(params: FindCharacters.Params): Promise<FindCharacters.Response>;
}

export namespace FindCharacters {
	export type Params = Character.Filter & {
		page?: number;
	};
	export type Response = API.Pagination<Character.Model>;
}
