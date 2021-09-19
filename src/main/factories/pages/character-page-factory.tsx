import React from 'react';
import { CharacterPage } from '@/presentation/pages';
import { makeFetchEpisodes, makeFetchCharacterById } from '../usecases';

export const makeCharacterPage = (): JSX.Element => {
	return (
		<CharacterPage
			fetchCharacterById={makeFetchCharacterById()}
			fetchEpisodes={makeFetchEpisodes()}
		/>
	);
};
