import React from 'react';
import { Provider } from 'react-redux';
import { rootStore } from './core';

export const ContextProvider: React.FC = ({ children }) => {
	return <Provider store={rootStore}>{children}</Provider>;
};
