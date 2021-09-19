import { FetchCharacterById, FetchEpisodes } from '@/domain/usecases';
import React from 'react';
import { useParams } from 'react-router';
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
	return <Styled.Container>{urlParams.id}</Styled.Container>;
};
