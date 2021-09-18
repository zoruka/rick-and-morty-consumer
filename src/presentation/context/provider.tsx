import React from 'react';
import { Provider, useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { DispatchAction } from './action';
import { rootStore } from './core';
import { Store } from './store';

export const ContextProvider: React.FC = ({ children }) => {
	return <Provider store={rootStore}>{children}</Provider>;
};

export const useContext = (): Store => {
	const store = useSelector((state: Store) => state);
	return store;
};

export const useContextDispatcher = (): Dispatch<DispatchAction> => {
	const dispatcher = useDispatch<Dispatch<DispatchAction>>();
	return dispatcher;
};
