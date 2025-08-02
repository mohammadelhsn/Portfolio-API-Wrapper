# Portfolio API Wrapper

A TypeScript API wrapper I made for accessing my portfolio data easily and efficiently.

## Stack

| Technologies |                                                                 |
| ------------ | --------------------------------------------------------------- |
| Yarn         | ![Yarn](https://go-skill-icons.vercel.app/api/icons?i=yarn)     |
| NPM          | ![NPM](https://go-skill-icons.vercel.app/api/icons?i=npm)       |
| Node         | ![Node](https://go-skill-icons.vercel.app/api/icons?i=nodejs)   |
| TypeScript   | ![TypeScript](https://go-skill-icons.vercel.app/api/icons?i=ts) |
| Axios        | ![Axios](https://go-skill-icons.vercel.app/api/icons?i=axios)   |

## View on NPM

<a href="https://www.npmjs.com/package/@mohammadelhsn/portfolio-api-wrapper"><img src="https://go-skill-icons.vercel.app/api/icons?i=npm" /></a>

## Installation

<details>
<summary>Click to show / hide</summary>

### NPM

```bash
npm i @mohammadelhsn/portfolio-api-wrapper
```

### Yarn

```bash
yarn add @mohammadelhsn/portfolio-api-wrapper
```

</details>

## Types

<details>
<summary>Click to show / hide</summary>

### Opts<T>

```ts
interface Opts<T> {
	/** @description Whether the request was successful */
	success: boolean;
	/** @description The status of the request */
	status: number | null;
	/** @description The message of the status */
	statusMessage: string | null;
	/** @description The data */
	data?: T;
}
```

</details>

## API Methods

<details>
<summary>Click to show / hide</summary>

### `getAssignment(assignmentId?: string, taskId?: string): Promise<Opts<TaskData> | Opts<AssessmentDataType> | Opts<AssessmentDataType[]> | undefined>`

Fetch assignment data.

- **Without parameters:** returns all assignments.
- **With `assignmentId`:** returns the specific assignment data.
- **With `assignmentId` and `taskId`:** returns the specific task within that assignment.

---

### `getLab(labId?: string, taskId?: string): Promise<any>`

Fetch lab data.

- **Without parameters:** returns all labs.
- **With `labId`:** returns the specific lab data.
- **With `labId` and `taskId`:** returns the specific task within that lab.

---

### `getExamples(): Promise<any>`

Fetch example data for the course or project.

---

### `getPageData(): Promise<any>`

Fetch page-related metadata or content.

---

### `getTechData(): any`

Get technology stack data. This method is synchronous.

---

### `getTopicsData(): any`

Get course or project topics data. This method is synchronous.

</details>

## Usage

<details>
<summary>Click to show / hide</summary>

```ts
import API from '@mohammadelhsn/portfolio-api-wrapper'; // adjust path

// Define which project you want to get data for
const api = new API('COURSE');

async function Test() {
	// Fetches all the assignments data for the course
	const allAssignments = await api.getAssignment();
	console.log(allAssignments);

	// Fetch a specific assignments data
	const assignment01 = await api.getAssignment('01');
	console.log(assignment01);

	// Fetch a specific task of an assignment
	const task04Assignment01 = await api.getAssignment('01', '04');
	console.log(task04Assignment01);

	// Fetches all the lab data for the course
	const allLabs = await api.getLab();
	console.log(allLabs);

	// Fetch a specific lab for a course
	const lab01 = await api.getLab('01');
	console.log(lab01);

	// Fetch a specific task for a course
	const task01lab01 = await api.getLab('01', '01');
	console.log(task01lab01);

	// Fetch the examples data for the course
	const exampleData = await api.getExamples();
	console.log(exampleData);

	// Get the page data for the course
	const pageData = await api.getPageData();
	console.log(pageData);

	// Get the tech data for the course
	const techData = api.getTechData();
	console.log(techData);

	// Get the topics data for the course
	const topicsData = api.getTopicsData();
	console.log(topicsData);
}

// Call the function to test the code

Test();
```

</details>

## Status

> 🔧 **Status: Actively Maintained** — this project is considered feature-complete but continues to receive updates & improvements.
