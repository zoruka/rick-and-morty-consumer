import { Character } from '@/domain/models';

export type Store = {
	sidebar: boolean;
	page: number;
	offset: number;

	filter: Character.Filter;
};

export const initialStore: Store = {
	sidebar: false,
	page: 1,
	offset: 0,
	filter: {},
};
