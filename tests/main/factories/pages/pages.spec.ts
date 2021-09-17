import * as pages from '@/main/factories/pages';

describe('PagesFactories', () => {
	test.each(Object.entries(pages))('%s should make a page', (key, sut) => {
		const page = sut();
		expect(page).toBeTruthy();
	});
});
