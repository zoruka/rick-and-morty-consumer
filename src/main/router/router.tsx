import { MainSection, Sidebar } from '@/presentation/components';
import { Header } from '@/presentation/components/header';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { makeHomePage } from '../factories/pages';

export const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Header />
			<Sidebar />
			<MainSection>
				<Switch>
					<Route path="/" component={makeHomePage} />
				</Switch>
			</MainSection>
		</BrowserRouter>
	);
};
