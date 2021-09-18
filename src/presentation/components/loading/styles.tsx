import { styled } from '@mui/system';

export namespace LoadingStyles {
	export const DefaultSize = 200;
	export type ContainerProps = {
		size?: number;
	};
	export const Container = styled('div')<ContainerProps>`
		width: ${({ size }) => size || DefaultSize}px;
		height: ${({ size }) => size || DefaultSize}px;

		path {
			fill: ${({ theme }) => theme.palette.primary.main};
		}
	`;
}
