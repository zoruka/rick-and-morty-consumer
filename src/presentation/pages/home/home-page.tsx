import React, { useEffect, useState } from 'react';
import { FindCharacters } from '@/domain/usecases';
import { Character } from '@/domain/models';
import { CharacterCard, FooterPager, Loading } from '@/presentation/components';
import { HomePageStyle as Styled } from './styles';
import { API } from '@/domain/models/api';
import { useContext } from '@/presentation/context';

type Props = {
	findCharacters: FindCharacters;
};

export const HomePage: React.FC<Props> = ({ findCharacters }) => {
	const { page, filter } = useContext();

	const [loading, setLoading] = useState(true);
	const [info, setInfo] = useState<API.Info>();
	const [characters, setCharacters] = useState<Character.Model[]>();

	useEffect(() => {
		window.scrollTo(0, 0);
		setLoading(true);
		setInfo(undefined);
		setCharacters(undefined);

		findCharacters
			.find({ page, ...filter })
			.then((response) => {
				setInfo(response.info);
				setCharacters(response.results);
			})
			.finally(() => setLoading(false));
	}, [
		page,
		filter.gender,
		filter.name,
		filter.status,
		filter.type,
		filter.species,
	]);

	return (
		<Styled.Container>
			{loading && (
				<Styled.LoadingContainer>
					<Loading />
				</Styled.LoadingContainer>
			)}
			{!loading && (
				<>
					<Styled.ListContainer>
						{characters &&
							characters.map((character) => (
								<CharacterCard character={character} />
							))}
					</Styled.ListContainer>
					<FooterPager info={info} />
				</>
			)}
		</Styled.Container>
	);
};
