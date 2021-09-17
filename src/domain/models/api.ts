import { Character, Episode, Location } from '.';

export namespace API {
	export type Info = {
		count: number;
		pages: number;
		next: string | null;
		prev: string | null;
	};

	export type Pagination<
		T extends Character.Model | Episode.Model | Location.Model
	> = {
		info: Info;
		results: Array<T>;
	};
}
