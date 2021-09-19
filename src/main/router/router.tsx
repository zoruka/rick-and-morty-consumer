import { MainSection, Sidebar } from '@/presentation/components';
import { Footer } from '@/presentation/components/footer';
import { Header } from '@/presentation/components/header';
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { makeCharacterPage, makeHomePage } from '../factories/pages';

export const Router: React.FC = () => {
	return (
		<HashRouter>
			<Header />
			<Sidebar />
			<MainSection>
				<Switch>
					<Route
						path="/character/:id"
						component={makeCharacterPage}
					/>
					<Route path="/" component={makeHomePage} />
				</Switch>
			</MainSection>
			<Footer />
		</HashRouter>
	);
};
