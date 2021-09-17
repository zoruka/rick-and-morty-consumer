import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from '@/main/router';
import { ThemeProvider } from '@mui/material';
import { theme } from './configs';

const App: React.FC = () => {
	return (
		<ThemeProvider theme={theme}>
			<Router />
		</ThemeProvider>
	);
};

ReactDOM.render(<App />, document.getElementById('main'));
