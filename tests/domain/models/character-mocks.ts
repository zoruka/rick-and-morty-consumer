import { Character } from '.';
import { API } from './api';

export const mockCharacter = (
	params: Partial<Character.Model> = {}
): Character.Model => {
	return {
		id: params.id || 2,
		name: params.name || 'Morty Smith',
		status: params.status || 'alive',
		species: params.species || 'Human',
		type: params.type || '',
		gender: params.gender || 'male',
		origin: params.origin || {
			name: 'Earth',
			url: 'https://rickandmortyapi.com/api/location/1',
		},
		location: params.location || {
			name: 'Earth',
			url: 'https://rickandmortyapi.com/api/location/20',
		},
		image:
			params.image ||
			'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
		episode: params.episode || [
			'https://rickandmortyapi.com/api/episode/1',
			'https://rickandmortyapi.com/api/episode/2',
		],
		url: params.url || 'https://rickandmortyapi.com/api/character/2',
		created: params.created || '2017-11-04T18:50:21.651Z',
	};
};

export const mockCharacterPagination = (
	params: Partial<API.Pagination<Character.Model>> = {}
): API.Pagination<Character.Model> => {
	const results = params.results || new Array(20).map(() => mockCharacter());
	const info = params.info || {
		count: 671,
		pages: 34,
		next: 'https://rickandmortyapi.com/api/character/?page=2',
		prev: null,
	};

	return {
		results,
		info,
	};
};
