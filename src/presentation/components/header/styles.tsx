import { styled } from '@mui/system';
import ChevronIcon from '@mui/icons-material/ChevronRight';

export namespace HeaderStyles {
	export const Height = 65;

	export const Container = styled('header')`
		position: fixed;
		z-index: 9999;
		left: 0;
		right: 0;
		top: 0;
		height: ${Height}px;

		display: flex;
		justify-content: center;
		align-items: center;

		background-color: ${({ theme }) => theme.palette.background.paper};
		border-bottom: 1px solid rgba(255, 255, 255, 0.12);
	`;

	export const Logo = styled('img')`
		height: calc(${Height}px * 0.7);
		flex: 1;
		margin-left: -60px;
	`;

	export type ChevronProps = {
		sidebar: boolean;
	};

	export const Chevron = styled(ChevronIcon)<ChevronProps>`
		transition: transform 0.3s ease-in-out;
		transform: ${({ sidebar: open }) =>
			open ? 'rotate(180deg)' : 'rotate(0deg)'};

		height: calc(${Height}px * 0.7);
		width: calc(${Height}px * 0.7);
		margin: 0 15px;

		&:hover {
			cursor: pointer;
		}
	`;
}
