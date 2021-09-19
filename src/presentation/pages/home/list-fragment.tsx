import { Character } from '@/domain/models';
import { API } from '@/domain/models/api';
import { CharacterCard, FooterPager } from '@/presentation/components';
import { ContextActions, useContextDispatcher } from '@/presentation/context';
import React from 'react';
import { useHistory } from 'react-router';
import { ListFragmentStyles as Styled } from './styles';

export type ListFragmentProps = {
	characters: Character.Model[];
	info: API.Info;
};

export const ListFragment: React.FC<ListFragmentProps> = ({
	characters,
	info,
}) => {
	const dispatcher = useContextDispatcher();
	const history = useHistory();

	const clickHandler = (character: Character.Model): void => {
		dispatcher(ContextActions.setCharacter(character));
		dispatcher(ContextActions.setOffset(window.scrollY));
		history.push(`character/${character.id}`);
	};

	return (
		<>
			<Styled.Container>
				{characters &&
					characters.map((character) => (
						<CharacterCard
							character={character}
							clickHandler={clickHandler}
						/>
					))}
			</Styled.Container>
			<FooterPager info={info} />
		</>
	);
};
