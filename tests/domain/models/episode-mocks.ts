import { Episode } from '@/domain/models';
import { API } from './api';

export const mockEpisode = (
	params: Partial<Episode.Model> = {}
): Episode.Model => {
	return {
		id: params.id || 1,
		name: params.name || 'Pilot',
		air_date: params.air_date || 'December 2, 2013',
		episode: params.episode || 'S01E01',
		characters: params.characters || [
			'https://rickandmortyapi.com/api/character/1',
			'https://rickandmortyapi.com/api/character/2',
		],
		url: params.url || 'https://rickandmortyapi.com/api/episode/1',
		created: params.created || '2017-11-10T12:56:33.798Z',
	};
};

export const mockEpisodePagination = (
	params: Partial<API.Pagination<Episode.Model>> = {}
): API.Pagination<Episode.Model> => {
	const results = params.results || new Array(20).map(() => mockEpisode());
	const info = params.info || {
		count: 41,
		pages: 3,
		next: 'https://rickandmortyapi.com/api/episode?page=2',
		prev: null,
	};

	return {
		results,
		info,
	};
};
