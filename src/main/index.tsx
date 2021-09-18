import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@/main/router';
import { ThemeProvider } from '@mui/material';
import { theme } from './configs';
import { ContextProvider } from '@/presentation/context';

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<ContextProvider>
				<Router />
			</ContextProvider>
		</ThemeProvider>
	);
};

setTimeout(() => {
	ReactDOM.render(<App />, document.getElementById('main'));
}, 300);
