import { styled } from '@mui/material';

export namespace HomePageStyle {
	export const Container = styled('div')`
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	`;

	export const ListContainer = styled('div')`
		flex: 1;
		margin: auto;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: flex-start;
		flex-wrap: wrap;
		width: 100%;
		max-width: 1600px;
		margin-bottom: 100px;
	`;
}
