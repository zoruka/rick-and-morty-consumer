import { Character, Episode } from '@/domain/models';
import { FetchCharacterById, FetchEpisodes } from '@/domain/usecases';
import { Loading } from '@/presentation/components';
import {
	ContextActions,
	useContext,
	useContextDispatcher,
} from '@/presentation/context';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { CharacterDataFragment } from './character-data-fragment';
import { EpisodesFragment } from './episodes-fragment';
import { CharacterPageStyles as Styled } from './styles';

export type CharacterPageProps = {
	fetchEpisodes: FetchEpisodes;
	fetchCharacterById: FetchCharacterById;
};

export type CharacterPageParams = {
	id: string;
};

export const CharacterPage: React.FC<CharacterPageProps> = ({
	fetchCharacterById,
	fetchEpisodes,
}) => {
	const urlParams = useParams<CharacterPageParams>();
	const { selectedCharacter } = useContext();
	const dispatcher = useContextDispatcher();

	const [characterLoading, setCharacterLoading] = useState(
		!selectedCharacter
	);

	useEffect(() => {
		window.scrollTo(0, 0);
		dispatcher(ContextActions.closeSidebar());
		const characterId = Number(urlParams.id);
		fetchCharacterById
			.fetchById({ id: characterId })
			.then((character) => {
				dispatcher(ContextActions.setCharacter(character));
			})
			.finally(() => setCharacterLoading(false));
	}, []);

	return (
		<Styled.Container>
			{characterLoading && <Loading />}
			{!characterLoading && (
				<>
					<CharacterDataFragment character={selectedCharacter} />
					<EpisodesFragment
						fetchEpisodes={fetchEpisodes}
						character={selectedCharacter}
					/>
				</>
			)}
		</Styled.Container>
	);
};
