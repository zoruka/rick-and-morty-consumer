import { MainSection, Sidebar } from '@/presentation/components';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeHomePage } from '../factories/pages';

export const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Sidebar />
			<MainSection>
				<Switch>
					<Route path="/" component={makeHomePage} />
				</Switch>
			</MainSection>
		</BrowserRouter>
	);
};
