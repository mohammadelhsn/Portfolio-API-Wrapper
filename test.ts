import { API } from './src/API'; // adjust path

async function test() {
	const api = new API('CP104');

	try {
		const assignment = await api.getAssignment('01', '01');
		console.log('Assignment:', assignment);

		const lab = await api.getLab('01', '04');
		console.log('Lab:', lab);

		const pageData = await api.getPageData();
		console.log('Page Data:', pageData);
	} catch (error) {
		console.error('Error:', error);
	}
}

test();
