import { useContext } from '@/presentation/context';
import React from 'react';
import { MainSectionStyles as Styled } from './styles';

export const MainSection: React.FC = ({ children }) => {
	const { sidebar } = useContext();
	return <Styled.Container sidebar={sidebar}>{children}</Styled.Container>;
};
