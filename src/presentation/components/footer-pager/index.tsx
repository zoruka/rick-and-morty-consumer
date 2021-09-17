import React from 'react';
import { FooterPagerStyles as Styled } from './styles';

export type FooterPagerProps = {
	currentPage: number;
	totalPages: number;
	requestPage: (page: number) => void;
};

export const FooterPager: React.FC<FooterPagerProps> = ({
	totalPages,
	currentPage,
	requestPage,
}) => {
	const pages: number[] = [];

	for (let i = 1; i <= totalPages; i++) {
		pages.push(i);
	}

	return (
		<Styled.Container>
			<Styled.Button className="__edge">{`<`}</Styled.Button>
			{pages.map((page) => (
				<Styled.Button
					key={page}
					className={page === currentPage ? '__active' : ''}
					onClick={() => requestPage(page)}
				>
					{page}
				</Styled.Button>
			))}
			<Styled.Button className="__edge">{`>`}</Styled.Button>
		</Styled.Container>
	);
};
