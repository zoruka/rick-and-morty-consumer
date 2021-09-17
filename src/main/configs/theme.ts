import { createTheme } from '@mui/material';

export const theme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: '#4ace10',
			light: '#78ff39',
			dark: '#009600',
			contrastText: '#FFF',
		},
		secondary: {
			main: '#fd0fc8',
			light: '#ff80e3',
			dark: '#c30298',
			contrastText: '#FFF',
		},
		background: {
			default: '#211033',
			paper: '#3c1c53',
		},
		text: {
			primary: '#fff',
			secondary: '#78ff39',
			disabled: '#ffffffa0',
		},
	},
	typography: {
		fontFamily: '"Lato", "Roboto", "Helvetica", sans-serif',
		fontSize: 14,
		fontWeightLight: 200,
		fontWeightRegular: 400,
		fontWeightBold: 700,

		button: {
			fontWeight: 600,
		},
	},
});
