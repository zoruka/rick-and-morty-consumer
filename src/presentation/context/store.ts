import { Character } from '@/domain/models';

export type Store = {
	sidebar: boolean;
	page: number;
	offset: number;

	filter: Character.Filter;

	selectedCharacter?: Character.Model;
};

export const initialStore: Store = {
	sidebar: false,
	page: 1,
	offset: 0,
	filter: {},
	selectedCharacter: undefined,
};
