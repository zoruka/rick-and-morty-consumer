import React, { useEffect, useState } from 'react';
import { FindCharacters } from '@/domain/usecases';
import { Character } from '@/domain/models';
import { CharacterCard, FooterPager } from '@/presentation/components';
import { HomePageStyle as Styled } from './styles';
import { API } from '@/domain/models/api';

type Props = {
	findCharacters: FindCharacters;
};

export const HomePage: React.FC<Props> = ({ findCharacters }) => {
	const [info, setInfo] = useState<API.Info>();
	const [characters, setCharacters] = useState<Character.Model[]>();
	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		findCharacters.find({ page: currentPage }).then((response) => {
			setInfo(response.info);
			setCharacters(response.results);
		});
	}, [currentPage]);

	return (
		<div>
			<Styled.Container>
				{characters && (
					<Styled.ListContainer>
						{characters.map((character) => (
							<CharacterCard character={character} />
						))}
					</Styled.ListContainer>
				)}
			</Styled.Container>
			<FooterPager
				currentPage={currentPage}
				totalPages={info?.pages || 1}
				requestPage={setCurrentPage}
			/>
		</div>
	);
};
