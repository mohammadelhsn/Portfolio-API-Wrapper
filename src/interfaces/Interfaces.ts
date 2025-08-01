export type Course = 'CP104' | 'CP164' | 'CP213' | 'CP216' | 'CP264';
export type Data =
	| 'assignments'
	| 'labs'
	| 'pageData'
	| 'examples'
	| 'techData'
	| 'topicsData';

export type ItemType = 'lab' | 'example' | 'assignment' | 'task';

export interface ItemListOpts {
	itemType: ItemType;
	count?: number;
	taskStr?: string;
	isFile?: boolean;
}

export interface AssignmentItemOpts {
	key: number;
	link: string;
	adds: string;
	type: ItemType;
}

/**
 *
 */
export interface pageData {
	title: string;
	description: string;
	numberOfEntries: number;
}

export interface ExampleData {
	title: string;
	url: string;
}

export interface TaskData {
	name: string;
	id: string; // id: t{num}
	description: string;
	objectives: string[]; // list of goals or objectives
	sampleOutput: string; // example output or result, as a string
	skills: string[]; // skills or tech demonstrated, e.g. ["Python", "Multiline Strings"]
}

export interface ConstantsData {
	name: string;
	value: string;
	description?: string;
}
export interface FunctionsData {
	functionName: string;
	signature: string;
	description: string;
}

export interface FunctionPageProps {
	constants: ConstantsData[];
	functions: FunctionsData[];
	parent: string;
}
export interface AssessmentDataType {
	name: string;
	id: string;
	tasks: TaskData[];
	functions?: FunctionsData[];
	constants?: ConstantsData[];
}

export interface FunctionsPageProps {
	data: FunctionsData;
}

export type LabsAssignmentOpt = 'assignment' | 'lab' | 'example';
export interface LabsAssignmentsOpts {
	type: LabsAssignmentOpt;
}

export interface Opts<T> {
	success: boolean;
	status: number | null;
	statusMessage: string | null;
	data?: T;
}

export interface TechItemOpts {
	bolded: string;
	nonBolded: string;
}

export interface TopicOpts {
	eventKey: string;
	title: string;
	items: string[];
}

export type Project =
	| 'CP104'
	| 'CP164'
	| 'CP213'
	| 'CP216'
	| 'CP264'
	| 'Projects';
