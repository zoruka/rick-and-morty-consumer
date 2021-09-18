import { DispatchAction } from '../action';

export const openSidebar = (): DispatchAction => {
	return {
		type: 'OPEN_SIDEBAR',
		payload: { sidebar: true },
	};
};

export const closeSidebar = (): DispatchAction => {
	return {
		type: 'CLOSE_SIDEBAR',
		payload: { sidebar: false },
	};
};

export const setPage = (page: number): DispatchAction => {
	return {
		type: 'SET_PAGE',
		payload: { page },
	};
};

export const setOffset = (offset: number): DispatchAction => {
	return {
		type: 'SET_OFFSET',
		payload: { offset },
	};
};
