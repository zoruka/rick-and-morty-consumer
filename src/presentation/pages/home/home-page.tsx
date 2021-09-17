import React, { useEffect } from 'react';
import { FindCharacters } from '@/domain/usecases';

type Props = {
	findCharacters: FindCharacters;
};

export const HomePage: React.FC<Props> = ({ findCharacters }) => {
	useEffect(() => {
		findCharacters.find({}).then((res) => {
			console.log(res);
		});
	}, []);

	return <div>Hello World</div>;
};
