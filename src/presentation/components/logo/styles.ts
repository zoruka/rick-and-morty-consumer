import { styled } from '@mui/system';

export namespace LogoStyles {
	export const DefaultSize = 150;
	export type ContainerProps = {
		size?: number;
	};
	export const Container = styled('div')<ContainerProps>`
		width: ${({ size }) => size || DefaultSize}px;

		path {
			fill: ${({ theme }) => theme.palette.primary.main};
		}
	`;
}
