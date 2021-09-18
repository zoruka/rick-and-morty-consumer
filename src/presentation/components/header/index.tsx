import {
	ContextActions,
	useContext,
	useContextDispatcher,
} from '@/presentation/context';
import React from 'react';
import { HeaderStyles as Styled } from './styles';

export const Header: React.FC = () => {
	const { sidebar } = useContext();
	const dispatcher = useContextDispatcher();

	const chevronClickHandler = (): void => {
		if (sidebar) {
			dispatcher(ContextActions.closeSidebar());
		} else {
			dispatcher(ContextActions.openSidebar());
		}
	};

	return (
		<Styled.Container>
			<Styled.Chevron sidebar={sidebar} onClick={chevronClickHandler} />
			<Styled.Logo src="/logo.svg" alt="Avatar" />
		</Styled.Container>
	);
};
