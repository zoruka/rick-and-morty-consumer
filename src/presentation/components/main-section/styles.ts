import { styled } from '@mui/material';
import { HeaderStyles } from '../header/styles';
import { SidebarStyles } from '../sidebar/styles';

export namespace MainSectionStyles {
	export const MinWidth = 600;

	export type ContainerProps = {
		sidebar: boolean;
	};

	export const Container = styled('main')<ContainerProps>`
		margin-top: ${HeaderStyles.Height}px;
		width: calc(
			100% -
				${({ sidebar }) =>
					sidebar && window.innerWidth > MinWidth
						? SidebarStyles.Width
						: 0}px
		);
		margin-left: ${({ sidebar }) =>
			sidebar && window.innerWidth > MinWidth
				? SidebarStyles.Width
				: 0}px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;

		transition: all 0.4s cubic-bezier(0.095, 0.79, 0.88, 1.535);
	`;
}
