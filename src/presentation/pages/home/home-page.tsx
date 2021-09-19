import React, { useEffect, useState } from 'react';
import { FindCharacters } from '@/domain/usecases';
import { Character } from '@/domain/models';
import { Loading } from '@/presentation/components';
import { HomePageStyles as Styled } from './styles';
import { API } from '@/domain/models/api';
import { useContext } from '@/presentation/context';
import { ErrorFragment } from './error-fragment';
import { ListFragment } from './list-fragment';

type Props = {
	findCharacters: FindCharacters;
};

export const HomePage: React.FC<Props> = ({ findCharacters }) => {
	const { page, filter } = useContext();

	const [hasError, setError] = useState(true);
	const [loading, setLoading] = useState(false);
	const [info, setInfo] = useState<API.Info>();
	const [characters, setCharacters] = useState<Character.Model[]>();

	const fetchData = (): void => {
		window.scrollTo(0, 0);
		setLoading(true);
		setInfo(undefined);
		setCharacters(undefined);
		setError(false);
		findCharacters
			.find({ page, ...filter })
			.then((response) => {
				setInfo(response.info);
				setCharacters(response.results);
			})
			.catch(() => setError(true))
			.finally(() => setLoading(false));
	};

	useEffect(fetchData, [
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
			{!loading && !hasError && (
				<ListFragment characters={characters} info={info} />
			)}
			{!loading && hasError && <ErrorFragment reload={fetchData} />}
		</Styled.Container>
	);
};
