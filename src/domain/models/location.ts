export namespace Location {
	export type Short = {
		name: string;
		url: string; // URL
	};

	export type Model = {
		id: number;
		name: string;
		type: string;
		dimension: string;
		residents: string[]; // URL
		url: string; // URL
		created: string;
	};

	export type Filter = {
		name?: string;
		type?: string;
		dimension?: string;
	};
}
