import { API } from '@/domain/models/api';
import {
	ContextActions,
	useContext,
	useContextDispatcher,
} from '@/presentation/context';
import React, { useEffect, useState } from 'react';
import { MainSectionStyles } from '../main-section/styles';
import { Strings } from './strings';
import { FooterPagerStyles as Styled } from './styles';

export type FooterPagerProps = {
	info?: API.Info;
};

const calculateFrom = (page: number): number => {
	const from = (page - 1) * 20 + 1;
	return from < 0 ? 0 : from;
};

const calculateTo = (page: number, count: number): number => {
	const to = page * 20 + 1;
	return to > count ? count : to;
};

export const FooterPager: React.FC<FooterPagerProps> = ({ info }) => {
	if (!info) return null;
	const [pages, setPages] = useState<number[]>([]);
	const { page: currentPage } = useContext();
	const dispatcher = useContextDispatcher();

	const changePage = (delta: number): void => {
		let newPage = currentPage + delta;
		if (newPage > info.pages) newPage = info.pages;
		else if (newPage < 1) newPage = 1;
		dispatcher(ContextActions.setPage(newPage));
		dispatcher(ContextActions.setOffset(0));
	};

	useEffect(() => {
		const resize = (): void => {
			const buttonSize = 45;

			const width =
				window.innerWidth < MainSectionStyles.MinWidth
					? window.innerWidth - 2 * buttonSize
					: MainSectionStyles.MinWidth;

			const total = Math.min(Math.floor(width / buttonSize), info.pages);

			let from = currentPage - Math.floor(total / 2);
			let to = currentPage + Math.floor(total / 2);
			if (from < 1) {
				from = 1;
				to = total;
			} else if (to > info.pages) {
				from = info.pages - total + 1;
				to = info.pages;
			}

			const newPages: number[] = [];
			for (let i = from; i <= to; i++) {
				newPages.push(i);
			}

			if (from > 1) newPages[0] = 1;
			if (to < info.pages) newPages[newPages.length - 1] = info.pages;

			setPages(newPages);
		};
		resize();

		window.addEventListener('resize', resize);
		return (): void => {
			window.removeEventListener('resize', resize);
		};
	}, [currentPage, info.pages]);

	return (
		<Styled.Container>
			<Styled.PagerContainer>
				<Styled.Button
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
					onClick={() => changePage(1)}
					style={{ opacity: currentPage === info.pages ? 0 : 1 }}
				>{`>`}</Styled.Button>
			</Styled.PagerContainer>
			<Styled.PagerDetails>
				{Strings.From}
				<b>{calculateFrom(currentPage)}</b>
				{Strings.To}
				<b>{calculateTo(currentPage, info.count)}</b>
				{Strings.Of}
				<b>{info.count}</b>
				{Strings.Results}
			</Styled.PagerDetails>
		</Styled.Container>
	);
};
