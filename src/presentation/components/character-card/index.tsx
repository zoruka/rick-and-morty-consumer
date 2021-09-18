import { Character } from '@/domain/models';
import React from 'react';
import { Strings } from './strings';
import { CharacterCardStyle as Styled } from './style';

export type CharacterCardProps = {
	character: Character.Model;
};

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
	return (
		<Styled.Container>
			<Styled.Image imageSrc={character.image} />

			<Styled.DataContainer className=" __divisor">
				<Styled.Data>{character.name}</Styled.Data>
				<Styled.Label>{Strings.Name}</Styled.Label>
			</Styled.DataContainer>

			<Styled.DataContainer className="__row  __divisor">
				<Styled.DataContainer>
					<Styled.Data>{character.species}</Styled.Data>
					<Styled.Label>{Strings.Specie}</Styled.Label>
				</Styled.DataContainer>

				<Styled.DataContainer>
					<Styled.Data>{character.status}</Styled.Data>
					<Styled.Label>{Strings.Status}</Styled.Label>
				</Styled.DataContainer>
			</Styled.DataContainer>

			<Styled.DataContainer className="__last">
				<Styled.Link>{Strings.More}</Styled.Link>
			</Styled.DataContainer>
		</Styled.Container>
	);
};
