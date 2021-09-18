import { styled } from '@mui/material';

export namespace FooterPagerStyles {
	export const Container = styled('div')`
		width: 100%;
		position: relative;
		z-index: 999;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		box-shadow: ${({ theme }) => theme.shadows[5]};
		background-color: ${({ theme }) => theme.palette.background.paper};
	`;

	export const PagerContainer = styled('div')`
		width: 100%;
		height: 100px;
		position: relative;
		z-index: 999;

		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	`;

	export const PagerDetails = styled('div')`
		display: flex;
		justify-content: center;
		align-items: flex-start;
		height: 50px;
		color: ${({ theme }) => theme.palette.secondary.main};

		b {
			color: ${({ theme }) => theme.palette.common.white};
			margin: 0 5px;
		}
	`;

	export const Button = styled('button')`
		all: unset;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 35px;
		height: 35px;
		border-radius: 4px;

		font-weight: bold;
		box-shadow: ${({ theme }) => theme.shadows[3]};

		color: ${({ theme }) => theme.palette.secondary.main};
		background-color: ${({ theme }) => theme.palette.background.default};

		margin: 0 3px;

		&.__edge {
			margin: 0 15px;
		}

		&.__active {
			background-color: ${({ theme }) => theme.palette.secondary.main};
			color: ${({ theme }) => theme.palette.background.paper};
		}

		transition: all 0.2s ease-in-out;

		&:hover {
			cursor: pointer;
			transform: scale(1.2);
			background-color: ${({ theme }) => theme.palette.secondary.main};
			color: ${({ theme }) => theme.palette.background.paper};
		}
	`;

	export const Footer = styled('footer')`
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;

		background: ${({ theme }) => theme.palette.primary.main};
		color: ${({ theme }) => theme.palette.background.paper};

		font-weight: bolder;

		a {
			margin: 0 5px;
			color: ${({ theme }) => theme.palette.common.white};
		}
	`;
}
