import { styled } from '@mui/material';
import { SidebarStyles } from '../sidebar/styles';

export namespace MainSectionStyles {
	export type ContainerProps = {
		sidebar: boolean;
	};

	export const Container = styled('main')<ContainerProps>`
		width: calc(
			100% - ${({ sidebar }) => (sidebar ? SidebarStyles.Width : 0)}px
		);
		margin-left: ${({ sidebar }) => (sidebar ? SidebarStyles.Width : 0)}px;
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
	`;
}
