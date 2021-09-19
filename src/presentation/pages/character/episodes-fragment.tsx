import { Character, Episode } from '@/domain/models';
import { FetchEpisodes } from '@/domain/usecases';
import { Loading } from '@/presentation/components';
import React, { useEffect, useState } from 'react';

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

	useEffect(() => {
		const ids = character.episode.map((episode) =>
			Number(episode.split('/').pop())
		);
		fetchEpisodes
			.fetch({ ids })
			.then((res) => setEpisodes(res as any))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div>
			{loading && <Loading />}
			{!loading && (
				<div>
					{episodes.map((episode) => (
						<span>{episode.name}</span>
					))}
				</div>
			)}
		</div>
	);
};
