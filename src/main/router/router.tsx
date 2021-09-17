import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeHomePage } from '../factories/pages';

export const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" component={makeHomePage} />
			</Switch>
		</BrowserRouter>
	);
};
