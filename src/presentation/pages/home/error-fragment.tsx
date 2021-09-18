import React from 'react';
import { useHistory } from 'react-router';
import { Strings } from './strings';
import { ErrorFragmentStyles as Styled } from './styles';

export type ErrorFragmentProps = {
	reload: () => void;
};

export const ErrorFragment: React.FC<ErrorFragmentProps> = ({ reload }) => {
	const history = useHistory();

	return (
		<Styled.Container>
			<h1>{Strings.ErrorMessage}</h1>
			<Styled.ButtonsContainer>
				<Styled.Button
					color="primary"
					variant="contained"
					onClick={reload}
				>
					{Strings.Buttons.TryAgain}
				</Styled.Button>
				<Styled.Button
					color="primary"
					variant="outlined"
					onClick={() => history.replace('/')}
				>
					{Strings.Buttons.Home}
				</Styled.Button>
			</Styled.ButtonsContainer>
		</Styled.Container>
	);
};
