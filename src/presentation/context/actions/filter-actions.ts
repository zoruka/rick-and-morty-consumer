import { Character } from '@/domain/models';
import { DispatchAction } from '../action';

export const filterByName = (name: string): DispatchAction => {
	return {
		type: 'FILTER_BY_NAME',
		payload: { page: 1, offset: 0, filter: { name } },
	};
};

export const filterByStatus = (status: Character.Status): DispatchAction => {
	return {
		type: 'FILTER_BY_STATUS',
		payload: { page: 1, offset: 0, filter: { status } },
	};
};

export const filterByGender = (gender: Character.Gender): DispatchAction => {
	return {
		type: 'FILTER_BY_GENDER',
		payload: { page: 1, offset: 0, filter: { gender } },
	};
};
