import { styled, Button as MuiButton, Fab as MuiFab } from '@mui/material';

export namespace HomePageStyles {
	export const Container = styled('div')`
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	`;

	export const LoadingContainer = styled('div')`
		flex: 1;
		flex-direction: column;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: calc(100vh - 200px);
	`;

	export type FabProps = {
		show: boolean;
	};

	export const Fab = styled(MuiFab)`
		position: fixed;
		bottom: 20px;
		right: 20px;

		transition: opacity 0.3s ease-in-out;
		opacity: ${(props: FabProps) => (props.show ? 1 : 0)};
	`;
}

export namespace ErrorFragmentStyles {
	export const Container = styled('div')`
		flex: 1;
		flex-direction: column;
		display: flex;
		justify-content: center;
		align-items: center;
		min-height: calc(100vh - 200px);
		text-align: center;
	`;

	export const Button = styled(MuiButton)`
		margin: 10px 30px;
		width: 200px;
		padding: 15px 0;
	`;

	export const ButtonsContainer = styled('div')`
		margin: 20px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
	`;
}

export namespace ListFragmentStyles {
	export const Container = styled('div')`
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
		min-height: calc(100vh - 200px); ;
	`;
}
