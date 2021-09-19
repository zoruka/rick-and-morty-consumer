import { styled } from '@mui/system';
import { MainSectionStyles } from '../main-section/styles';
import { SidebarStyles } from '../sidebar/styles';

export namespace FooterStyles {
	export const Height = 50;
	export type ContainerProps = {
		sidebar: boolean;
	};
	export const Container = styled('footer')<ContainerProps>`
		width: calc(
			100% -
				${({ sidebar }) =>
					sidebar && window.innerWidth > MainSectionStyles.MinWidth
						? SidebarStyles.Width
						: 0}px
		);
		margin-left: ${({ sidebar }) =>
			sidebar && window.innerWidth > MainSectionStyles.MinWidth
				? SidebarStyles.Width
				: 0}px;

		height: ${Height}px;
		display: flex;
		justify-content: center;
		align-items: center;

		background: ${({ theme }) => theme.palette.primary.main};
		color: ${({ theme }) => theme.palette.background.paper};

		font-weight: bolder;

		transition: all 0.4s cubic-bezier(0.095, 0.79, 0.88, 1.535);

		a {
			margin: 0 5px;
			color: ${({ theme }) => theme.palette.common.white};
		}
	`;
}
