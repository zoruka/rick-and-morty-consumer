import React from 'react';
import { HomePage } from '@/presentation/pages';
import { makeFindCharacters } from '../usecases';

export const makeHomePage = (): JSX.Element => {
	return <HomePage findCharacters={makeFindCharacters()} />;
};
