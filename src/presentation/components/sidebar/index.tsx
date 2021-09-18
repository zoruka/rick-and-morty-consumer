import { Character } from '@/domain/models';
import {
	ContextActions,
	useContext,
	useContextDispatcher,
} from '@/presentation/context';
import SearchIcon from '@mui/icons-material/Search';
import {
	Drawer,
	InputAdornment,
	InputLabel,
	MenuItem,
	TextField,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { HeaderStyles } from '../header/styles';
import { MainSectionStyles } from '../main-section/styles';
import { Strings } from './strings';
import { SidebarStyles as Styled } from './styles';

type StringSelectType<V = string> = {
	label: string;
	value: V;
};

const StatusItems: StringSelectType<Character.Status | undefined>[] = [
	{ label: Strings.Label.Alive, value: 'alive' },
	{ label: Strings.Label.Dead, value: 'dead' },
	{ label: Strings.Label.Unknown, value: 'unknown' },
];

const GenderItems: StringSelectType<Character.Gender | undefined>[] = [
	{ label: Strings.Label.Female, value: 'female' },
	{ label: Strings.Label.Genderless, value: 'genderless' },
	{ label: Strings.Label.Male, value: 'male' },
	{ label: Strings.Label.Unknown, value: 'unknown' },
];

const randomQuote = (): string => {
	const i = Math.floor(Math.random() * Strings.Quotes.length);
	return Strings.Quotes[i];
};

export const Sidebar: React.FC = () => {
	const { sidebar } = useContext();
	const dispatcher = useContextDispatcher();

	const [nameFilter, setNameFilter] = useState<string>('');
	const [statusFilter, setStatusFilter] = useState<Character.Status>();
	const [genderFilter, setGenderFilter] = useState<Character.Gender>();
	const [quote] = useState(randomQuote());

	useEffect(() => {
		const resize = (): void => {
			if (window.innerWidth < MainSectionStyles.MinWidth) {
				dispatcher(ContextActions.closeSidebar());
			} else {
				dispatcher(ContextActions.openSidebar());
			}
		};
		resize();

		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);

	const filterChangeHandler = (): void => {
		dispatcher(
			ContextActions.filterAll({
				name: nameFilter,
				status: statusFilter,
				gender: genderFilter,
			})
		);
		if (window.innerWidth < MainSectionStyles.MinWidth) {
			dispatcher(ContextActions.closeSidebar());
		}
	};

	return (
		<Drawer
			sx={{
				width: Styled.Width,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: Styled.Width,
					boxSizing: 'border-box',
					top: HeaderStyles.Height,
					height: `calc(100% - ${HeaderStyles.Height}px)`,
				},
			}}
			variant="persistent"
			anchor="left"
			open={sidebar}
		>
			<Styled.Container>
				<h2>{Strings.Heading.Filter}</h2>

				{/* Name Filter */}
				<Styled.FormControl fullWidth>
					<TextField
						value={nameFilter}
						label={Strings.Label.NameFilter.toUpperCase()}
						onChange={(event) =>
							setNameFilter(event.currentTarget.value)
						}
						InputProps={{
							endAdornment: (
								<InputAdornment position="end">
									<SearchIcon color="primary" />
								</InputAdornment>
							),
						}}
					/>
				</Styled.FormControl>

				{/* Status Filter */}
				<Styled.FormControl fullWidth>
					<InputLabel>
						{Strings.Label.StatusFilter.toUpperCase()}
					</InputLabel>
					<Styled.Select
						label={Strings.Label.StatusFilter.toUpperCase()}
						value={statusFilter || ''}
						onChange={(event) =>
							setStatusFilter(
								event.target.value as Character.Status
							)
						}
					>
						<MenuItem value={undefined}>
							<em>{Strings.Label.All}</em>
						</MenuItem>
						{StatusItems.map(({ label, value }) => (
							<MenuItem key={value} value={value}>
								{label}
							</MenuItem>
						))}
					</Styled.Select>
				</Styled.FormControl>

				{/* Gender Filter */}
				<Styled.FormControl fullWidth>
					<InputLabel>
						{Strings.Label.GenderFilter.toUpperCase()}
					</InputLabel>
					<Styled.Select
						label={Strings.Label.GenderFilter.toUpperCase()}
						value={genderFilter || ''}
						onChange={(event) =>
							setGenderFilter(
								event.target.value as Character.Gender
							)
						}
					>
						<MenuItem value={undefined}>
							<em>{Strings.Label.All}</em>
						</MenuItem>
						{GenderItems.map(({ label, value }) => (
							<MenuItem key={value} value={value}>
								{label}
							</MenuItem>
						))}
					</Styled.Select>
				</Styled.FormControl>

				<Styled.Button
					variant="contained"
					onClick={filterChangeHandler}
				>
					{Strings.Button.Search}
				</Styled.Button>

				<Styled.Quote>
					<span>"{quote}"</span>{' '}
					<em>
						<b>- Rick</b>
					</em>
				</Styled.Quote>
			</Styled.Container>
		</Drawer>
	);
};
