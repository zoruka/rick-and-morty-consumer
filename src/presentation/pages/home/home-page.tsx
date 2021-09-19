import { Character } from '@/domain/models';
import { API } from '@/domain/models/api';
import { FindCharacters } from '@/domain/usecases';
import { Loading } from '@/presentation/components';
import { MainSectionStyles } from '@/presentation/components/main-section/styles';
import {
	ContextActions,
	useContext,
	useContextDispatcher,
} from '@/presentation/context';
import React, { useEffect, useState } from 'react';
import { ErrorFragment } from './error-fragment';
import { ListFragment } from './list-fragment';
import { HomePageStyles as Styled } from './styles';
import NavigationIcon from '@mui/icons-material/Navigation';

type Props = {
	findCharacters: FindCharacters;
};

export const HomePage: React.FC<Props> = ({ findCharacters }) => {
	const { page, filter, offset } = useContext();
	const dispatcher = useContextDispatcher();

	const [hasError, setError] = useState(true);
	const [loading, setLoading] = useState(false);
	const [info, setInfo] = useState<API.Info>();
	const [characters, setCharacters] = useState<Character.Model[]>();
	const [showFab, setShowFab] = useState(false);

	const fetchData = (): void => {
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

	const scrollToTopClickHandler = (): void => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	useEffect(() => {
		if (characters) {
			setTimeout(() => {
				window.scrollTo({ top: offset, behavior: 'smooth' });
			}, 10);
		}
	}, [characters]);

	useEffect(() => {
		if (window.innerWidth > MainSectionStyles.MinWidth) {
			dispatcher(ContextActions.openSidebar());
		}
	}, []);

	useEffect(() => {
		const fabListener = (): void => {
			if (window.scrollY > window.innerHeight && !showFab) {
				setShowFab(true);
			} else if (window.scrollY < window.innerHeight && showFab) {
				setShowFab(false);
			}
		};

		window.addEventListener('scroll', fabListener);
		return () => window.removeEventListener('scroll', fabListener);
	}, [showFab]);

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
			<Styled.Fab
				show={showFab}
				color="primary"
				onClick={scrollToTopClickHandler}
			>
				<NavigationIcon />
			</Styled.Fab>
		</Styled.Container>
	);
};
