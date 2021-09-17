import { styled } from '@mui/material';

export namespace CharacterCardStyle {
	export const Container = styled('div')`
		width: 300px;
		height: 400px;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		background-color: ${({ theme }) => theme.palette.background.paper};
		border-radius: 8px;

		margin: 2rem;
		overflow: hidden;

		text-align: center;

		box-shadow: ${({ theme }) => theme.shadows[5]};

		transition: transform 0.2s cubic-bezier(0.095, 0.79, 0.88, 1.535);

		&:hover {
			cursor: pointer;
			transform: scale(1.05);
		}
	`;

	export type ImageProps = {
		imageSrc: string;
	};

	export const Image = styled('div')<ImageProps>`
		flex: 1;
		background-image: url(${({ imageSrc }) => imageSrc});
		background-size: cover;
		background-position: center;
		width: 100%;
	`;

	export const Label = styled('label')`
		font-size: 0.6em;
		color: ${({ theme }) => theme.palette.secondary.dark};
		text-transform: uppercase;

		padding: 0px 3px 3px 3px;
		width: 100%;
	`;

	export const Data = styled('div')`
		font-size: 1.1em;
		color: ${({ theme }) => theme.palette.primary.main};

		padding: 3px 3px 0px 3px;
		width: 100%;
		font-weight: bold;
	`;

	export const DataContainer = styled('div')`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		width: 100%;
		padding: 5px 5px 0 5px;

		&.__row {
			flex-direction: row;
		}

		&.__last {
			margin-top: 5px;
			padding: 10px;
			background-color: ${({ theme }) => theme.palette.primary.main};
		}
	`;

	export const Link = styled('a')`
		text-transform: uppercase;
		font-size: 0.6em;
		font-weight: bolder;

		transition: transform 0.3s cubic-bezier(0.095, 0.79, 0.88, 1.535);
		&:hover {
			cursor: pointer;
			transform: scale(1.15);
		}
	`;
}
