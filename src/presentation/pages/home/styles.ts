import { styled } from '@mui/material';

export namespace HomePageStyle {
	export const Container = styled('div')`
		width: 100%;
	`;

	export const ListContainer = styled('div')`
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		width: 100%;
		max-width: 1600px;
	`;
}
