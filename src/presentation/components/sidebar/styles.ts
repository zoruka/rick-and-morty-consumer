import {
	styled,
	Select as MuiSelect,
	Button as MuiButton,
	FormControl as MuiFormControl,
} from '@mui/material';

export namespace SidebarStyles {
	export const Width = 300;

	export const Container = styled('div')`
		display: flex;
		flex-direction: column;
		justify-content: flex-start;
		align-items: center;
		padding: 15% 0;
		height: 100%;
		h2 {
			text-transform: uppercase;
			font-weight: bolder;
		}
		overflow: auto;
	`;

	export const Select = styled(MuiSelect)``;

	export const Button = styled(MuiButton)`
		padding: 15px;
		margin: 15px;
		width: calc(100% - 90px);
	`;

	export const FormControl = styled(MuiFormControl)`
		margin: 5px;
		width: calc(100% - 30px);

		label {
			font-weight: bolder;
		}
	`;

	export const Quote = styled('div')`
		flex: 1;
		display: flex;
		justify-content: flex-end;
		align-items: flex-end;
		text-align: center;
		flex-direction: column;

		width: calc(100% - 30px);

		color: ${(props) => props.theme.palette.primary.main};
	`;
}
