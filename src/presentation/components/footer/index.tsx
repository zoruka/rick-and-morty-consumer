import { useContext } from '@/presentation/context';
import React from 'react';
import { Strings } from './strings';
import { FooterStyles as Styled } from './styles';

export const Footer: React.FC = () => {
	const { sidebar } = useContext();
	return (
		<Styled.Container sidebar={sidebar}>
			{Strings.MadeWith}
			<a href="https://github.com/zoruka" target="_blank">
				zoruka
			</a>
		</Styled.Container>
	);
};
