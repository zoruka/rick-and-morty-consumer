import { Character, Episode } from '@/domain/models';
import { FetchEpisodes } from '@/domain/usecases';
import { Loading } from '@/presentation/components';
import React, { useEffect, useState } from 'react';
import { EpisodesFragmentStyles as Styled } from './styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Strings } from './strings';

export type EpisodesFragmentProps = {
	character: Character.Model;
	fetchEpisodes: FetchEpisodes;
};

export const EpisodesFragment: React.FC<EpisodesFragmentProps> = ({
	character,
	fetchEpisodes,
}) => {
	const [loading, setLoading] = useState(true);
	const [episodes, setEpisodes] = useState<Episode.Model[]>();
	const [index, setIndex] = useState(0);

	useEffect(() => {
		const ids = character.episode.map((episode) =>
			Number(episode.split('/').pop())
		);
		fetchEpisodes
			.fetch({ ids })
			.then((res) => setEpisodes(Array.isArray(res) ? res : [res]))
			.catch(() => setEpisodes([]))
			.finally(() => setLoading(false));
	}, []);

	if (episodes && episodes.length === 0) return null;
	return (
		<Styled.Container>
			{loading && (
				<Styled.TabContainer>
					<Loading />
				</Styled.TabContainer>
			)}
			{!loading && (
				<>
					<Tabs
						value={index}
						onChange={(e, value) => setIndex(value)}
						variant="scrollable"
						scrollButtons="auto"
					>
						{episodes.map((episode) => (
							<Tab label={episode.episode} />
						))}
					</Tabs>
					<Styled.TabContainer>
						<Styled.DataRow>
							<Styled.DataSubtitle>
								{Strings.Label.Id}
							</Styled.DataSubtitle>
							<Styled.DataText>
								{episodes[index].id}
							</Styled.DataText>
						</Styled.DataRow>

						<Styled.DataRow>
							<Styled.DataSubtitle>
								{Strings.Label.Name}
							</Styled.DataSubtitle>
							<Styled.DataText>
								{episodes[index].name}
							</Styled.DataText>
						</Styled.DataRow>

						<Styled.DataRow>
							<Styled.DataSubtitle>
								{Strings.Label.AirDate}
							</Styled.DataSubtitle>
							<Styled.DataText>
								{episodes[index].air_date}
							</Styled.DataText>
						</Styled.DataRow>

						<Styled.DataRow>
							<Styled.DataSubtitle>
								{Strings.Label.Episode}
							</Styled.DataSubtitle>
							<Styled.DataText>
								{episodes[index].episode}
							</Styled.DataText>
						</Styled.DataRow>
					</Styled.TabContainer>
				</>
			)}
		</Styled.Container>
	);
};
