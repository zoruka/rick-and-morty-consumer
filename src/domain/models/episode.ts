export namespace Episode {
	export type Model = {
		id: number;
		name: string;
		air_date: string;
		episode: string;
		characters: string[]; // URL
		url: string; // URL
		created: string;
	};
}
