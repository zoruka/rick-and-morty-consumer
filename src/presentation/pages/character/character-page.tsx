import { FetchCharacterById, FetchEpisodes } from '@/domain/usecases';
import { Loading } from '@/presentation/components';
import {
	ContextActions,
	useContext,
	useContextDispatcher,
} from '@/presentation/context';
import ChevronLeft from '@mui/icons-material/ChevronLeft';
import Button from '@mui/material/Button';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { CharacterDataFragment } from './character-data-fragment';
import { EpisodesFragment } from './episodes-fragment';
import { Strings } from './strings';
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
	const history = useHistory();

	const [characterLoading, setCharacterLoading] = useState(
		!selectedCharacter
	);

	const backClickHandler = (): void => {
		history.replace('/');
	};

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

		return () => {
			dispatcher(ContextActions.clearCharacter());
		};
	}, []);

	return (
		<Styled.Container>
			{characterLoading && <Loading />}
			{!characterLoading && (
				<>
					<Styled.BackButtonContainer>
						<Button color="secondary" onClick={backClickHandler}>
							<ChevronLeft color="secondary" />
							{Strings.Button.Back}
						</Button>
					</Styled.BackButtonContainer>
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
