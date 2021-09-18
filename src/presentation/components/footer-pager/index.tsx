import {
	ContextActions,
	useContext,
	useContextDispatcher,
} from '@/presentation/context';
import React, { useEffect, useState } from 'react';
import { FooterPagerStyles as Styled } from './styles';

export type FooterPagerProps = {
	totalPages: number;
};

export const FooterPager: React.FC<FooterPagerProps> = ({ totalPages }) => {
	const [pages, setPages] = useState<number[]>([]);
	const { page: currentPage } = useContext();
	const dispatcher = useContextDispatcher();

	const changePage = (delta: number): void => {
		let newPage = currentPage + delta;
		if (newPage > totalPages) newPage = totalPages;
		else if (newPage < 1) newPage = 1;
		dispatcher(ContextActions.setPage(newPage));
	};

	useEffect(() => {
		const resize = (): void => {
			const buttonSize = 45;

			const width =
				window.innerWidth < 600 ? window.innerWidth - 90 : 600;

			const total = Math.floor(width / buttonSize);

			let from = currentPage - Math.floor(total / 2);
			let to = currentPage + Math.floor(total / 2);
			if (from < 1) {
				from = 1;
				to = total;
			} else if (to > totalPages) {
				from = totalPages - total + 1;
				to = totalPages;
			}

			const newPages: number[] = [];
			for (let i = from; i <= to; i++) {
				newPages.push(i);
			}

			setPages(newPages);
		};
		resize();

		window.addEventListener('resize', resize);
		return (): void => {
			window.removeEventListener('resize', resize);
		};
	}, [currentPage, totalPages]);

	return (
		<Styled.Container>
			<Styled.Button
				className="__edge"
				onClick={() => changePage(-1)}
				style={{ opacity: currentPage === 1 ? 0 : 1 }}
			>{`<`}</Styled.Button>
			{pages.map((page) => (
				<Styled.Button
					key={page}
					className={page === currentPage ? '__active' : ''}
					onClick={() => changePage(page - currentPage)}
				>
					{page}
				</Styled.Button>
			))}
			<Styled.Button
				className="__edge"
				onClick={() => changePage(1)}
				style={{ opacity: currentPage === totalPages ? 0 : 1 }}
			>{`>`}</Styled.Button>
		</Styled.Container>
	);
};
