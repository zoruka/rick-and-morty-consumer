import { createStore, Reducer } from 'redux';
import { DispatchAction } from './action';
import { initialStore, Store } from './store';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mergeState = (before: any, after: any): any => {
	if (typeof after !== 'object' || typeof before !== 'object') return after;
	if (Array.isArray(after)) return [...after];

	for (const obj in after) before[obj] = mergeState(before[obj], after[obj]);

	return Array.isArray(before) ? before : { ...before };
};

const rootReducer: Reducer<Store, DispatchAction> = (
	state = initialStore,
	action: DispatchAction
) => {
	if (!action.payload) {
		return state;
	} else {
		return mergeState(state, action.payload);
	}
};

export const rootStore = createStore<Store, DispatchAction, null, null>(
	rootReducer
);
