import { Character } from '../../models';

export interface FetchCharacterById {
	fetchById(
		params: FetchCharacterById.Params
	): Promise<FetchCharacterById.Response>;
}

export namespace FetchCharacterById {
	export type Params = { id: number };
	export type Response = Character.Model;
}
