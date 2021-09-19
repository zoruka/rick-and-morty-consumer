import { Character } from '@/domain/models';
import { DispatchAction } from '../action';

export const setCharacter = (character: Character.Model): DispatchAction => {
	return {
		type: 'SET_CHARACTER',
		payload: {
			selectedCharacter: character,
		},
	};
};

export const clearCharacter = (): DispatchAction => {
	return {
		type: 'CLEAR_CHARACTER',
		payload: {
			selectedCharacter: null,
		},
	};
};
