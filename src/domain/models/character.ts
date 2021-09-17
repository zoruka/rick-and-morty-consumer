import { Location } from './location';

export namespace Character {
	export type Status = 'Alive' | 'Dead' | 'unknown';

	export type Gender = 'Female' | 'Male' | 'Genderless' | 'unknown';

	export type Model = {
		id: number;
		name: string;
		status: Status;
		species: string;
		type: string;
		gender: Gender;
		origin: Location.Short;
		location: Location.Short;
		image: string; // URL
		episode: string[]; // URL
		url: string; // URL
		created: string;
	};
}
