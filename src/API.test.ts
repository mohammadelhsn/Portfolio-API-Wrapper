import { describe, it, expect } from 'vitest';
import { API } from './API';
import * as t from './interfaces/Interfaces';

describe('API wrapper integration tests', () => {
	const api = new API('CP104');

	it('fetches all assignments', async () => {
		const result = await api.getAssignment();
		expect(result).toBeDefined();
		expect(Array.isArray(result.data)).toBe(true);
		if (result.data?.length) {
			expect(result.data[0]).toHaveProperty('name');
			expect(result.data[0]).toHaveProperty('tasks');
		}
	});

	it('fetches a single assignment', async () => {
		const result = await api.getAssignment('02');
		expect(result).toBeDefined();
		expect(typeof result.data).toBe('object');
		expect(result.data).toHaveProperty('name');
		expect(result.data).toHaveProperty('tasks');
	});

	it('fetches a single task in a single assignment', async () => {
		const result = await api.getAssignment('02', '01');
		expect(result).toBeDefined();
		expect(result.data).toHaveProperty('name');
		expect(result.data).toHaveProperty('id');
		expect(result.data).toHaveProperty('objectives');
	});

	it('fetches all labs', async () => {
		const result = await api.getLab();
		expect(result).toBeDefined();
		expect(Array.isArray(result.data)).toBe(true);
		if (result.data?.length) {
			expect(result.data[0]).toHaveProperty('name');
		}
	});

	it('fetches a single lab', async () => {
		const result = await api.getLab('02');
		expect(result).toBeDefined();
		expect(typeof result.data).toBe('object');
		expect(result.data).toHaveProperty('name');
		expect(result.data).toHaveProperty('tasks');
	});

	it('fetches a single task in a single lab', async () => {
		const result = await api.getLab('02', '01');
		expect(result).toBeDefined();
		expect(typeof result.data).toBe('object');
		expect(result.data).toHaveProperty('name');
		expect(result.data).toHaveProperty('id');
	});

	it('fetches examples (array)', async () => {
		const result = await api.getExamples();
		expect(result).toBeDefined();
		expect(Array.isArray(result.data)).toBe(true);
		if (result.data?.length) {
			expect(result.data[0]).toHaveProperty('title');
			expect(result.data[0]).toHaveProperty('url');
		}
	});

	it('fetches page data', async () => {
		const result = await api.getPageData();
		expect(result).toBeDefined();
		expect(Array.isArray(result.data)).toBe(true);
		if (result.data?.length) {
			expect(result.data[0]).toHaveProperty('title');
			expect(result.data[0]).toHaveProperty('description');
			expect(result.data[0]).toHaveProperty('numberOfEntries');
		}
	});

	it('fetches tech data', async () => {
		const result = await api.getTechData();
		expect(result).toBeDefined();
		expect(Array.isArray(result.data)).toBe(true);
		if (result.data?.length) {
			expect(result.data[0]).toHaveProperty('bolded');
			expect(result.data[0]).toHaveProperty('nonBolded');
		}
	});

	it('fetches topics data', async () => {
		const result = await api.getTopicsData();
		expect(result).toBeDefined();
		expect(Array.isArray(result.data)).toBe(true);
		if (result.data?.length) {
			expect(result.data[0]).toHaveProperty('eventKey');
			expect(result.data[0]).toHaveProperty('title');
			expect(Array.isArray(result.data[0].items)).toBe(true);
		}
	});
});
