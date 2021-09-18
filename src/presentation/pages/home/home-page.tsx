import React, { useEffect, useState } from 'react';
import { FindCharacters } from '@/domain/usecases';
import { Character } from '@/domain/models';
import { CharacterCard, FooterPager } from '@/presentation/components';
import { HomePageStyle as Styled } from './styles';
import { API } from '@/domain/models/api';
import { useContext } from '@/presentation/context';

type Props = {
	findCharacters: FindCharacters;
};

export const HomePage: React.FC<Props> = ({ findCharacters }) => {
	const { page } = useContext();

	const [info, setInfo] = useState<API.Info>();
	const [characters, setCharacters] = useState<Character.Model[]>();

	useEffect(() => {
		window.scrollTo(0, 0);
		findCharacters.find({ page }).then((response) => {
			setInfo(response.info);
			setCharacters(response.results);
		});
	}, [page]);

	return (
		<Styled.Container>
			<Styled.ListContainer>
				{characters &&
					characters.map((character) => (
						<CharacterCard character={character} />
					))}
			</Styled.ListContainer>
			<FooterPager totalPages={info?.pages || 1} />
		</Styled.Container>
	);
};
