import { styled } from '@mui/system';

export namespace CharacterPageStyles {
	export const Container = styled('div')`
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	`;
}

export namespace CharacterDataFragmentStyles {
	export const Container = styled('div')`
		width: 100%;
		max-width: 1200px;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;
	`;

	export type ImageProps = {
		imageSrc: string;
	};

	export const Image = styled('div')<ImageProps>`
		flex: 1;
		min-height: 50vh;
		height: 100%;
		min-width: 300px;
		background-image: url(${(props) => props.imageSrc});
		background-size: cover;
		background-position: center;
	`;

	export const DataContainer = styled('div')`
		flex: 1;
		min-width: 300px;

		padding: 30px 0;
	`;

	export const DataRow = styled('div')`
		display: flex;
		flex-direction: column;
		padding: 5px 30px;
	`;

	export const DataText = styled('span')`
		font-size: 2rem;
	`;

	export const DataSubtitle = styled('label')`
		font-size: 1rem;
		text-transform: uppercase;
		color: ${({ theme }) => theme.palette.secondary.main};
	`;
}

export namespace EpisodesFragmentStyles {
	export const Container = styled('div')`
		width: 100%;
		max-width: 1200px;
		background-color: ${({ theme }) => theme.palette.background.paper};
		box-shadow: ${({ theme }) => theme.shadows[5]};
		margin: 30px 0;
	`;

	export const TabContainer = styled('div')`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 30px;

		border-top: 1px solid ${({ theme }) => theme.palette.divider};
	`;

	export const DataRow = styled('div')`
		display: flex;
		justify-content: flex-start;
		align-items: flex-start;
		flex-direction: column;
		padding: 5px;
		text-align: left;
		width: 100%;
	`;

	export const DataText = styled('span')`
		font-size: 2rem;
	`;

	export const DataSubtitle = styled('label')`
		font-size: 1rem;
		text-transform: uppercase;
		color: ${({ theme }) => theme.palette.primary.main};
	`;
}
