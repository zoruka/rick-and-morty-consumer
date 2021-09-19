import { Character } from '@/domain/models';
import React from 'react';
import { Strings } from './strings';
import { CharacterDataFragmentStyles as Styled } from './styles';

export type CharacterDataFragmentProps = {
	character: Character.Model;
};

export const CharacterDataFragment: React.FC<CharacterDataFragmentProps> = ({
	character,
}) => {
	return (
		<Styled.Container>
			<Styled.Image imageSrc={character.image} />
			<Styled.DataContainer>
				<Styled.DataRow>
					<Styled.DataSubtitle>
						{Strings.Label.Name}
					</Styled.DataSubtitle>
					<Styled.DataText>{character.name || '-'}</Styled.DataText>
				</Styled.DataRow>

				<Styled.DataRow>
					<Styled.DataSubtitle>
						{Strings.Label.Status}
					</Styled.DataSubtitle>
					<Styled.DataText>{character.status || '-'}</Styled.DataText>
				</Styled.DataRow>

				<Styled.DataRow>
					<Styled.DataSubtitle>
						{Strings.Label.Specie}
					</Styled.DataSubtitle>
					<Styled.DataText>
						{character.species || '-'}
					</Styled.DataText>
				</Styled.DataRow>

				<Styled.DataRow>
					<Styled.DataSubtitle>
						{Strings.Label.Type}
					</Styled.DataSubtitle>
					<Styled.DataText>{character.type || '-'}</Styled.DataText>
				</Styled.DataRow>

				<Styled.DataRow>
					<Styled.DataSubtitle>
						{Strings.Label.Gender}
					</Styled.DataSubtitle>
					<Styled.DataText>{character.gender || '-'}</Styled.DataText>
				</Styled.DataRow>

				<Styled.DataRow>
					<Styled.DataSubtitle>
						{Strings.Label.Origin}
					</Styled.DataSubtitle>
					<Styled.DataText>
						{character.origin?.name || '-'}
					</Styled.DataText>
				</Styled.DataRow>

				<Styled.DataRow>
					<Styled.DataSubtitle>
						{Strings.Label.Created}
					</Styled.DataSubtitle>
					<Styled.DataText>
						{new Date(character.created).toUTCString()}
					</Styled.DataText>
				</Styled.DataRow>
			</Styled.DataContainer>
		</Styled.Container>
	);
};
