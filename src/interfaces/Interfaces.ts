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
	/** The name of the task */
	name: string;
	/** The ID of the strong (e.g. t01) */
	id: string;
	/** The description for the task */
	description: string;
	/** List of goals or objectives */
	objectives: string[];
	/** Example output or result, as a string */
	sampleOutput: string;
	/** Skills or tech demonstrated, e.g. ["Python", "Multiline Strings"] */
	skills: string[];
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
	/** The name of the assessment */
	name: string;
	/** The ID of the assessment a01 / l01 */
	id: string;
	/** The task data for the assessment */
	tasks: TaskData[];
	/** The function data for the assessment  */
	functions?: FunctionsData[];
	/** The constants data for the assessment  */
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
	/** Whether the request was successful */
	success: boolean;
	/** The status of the request */
	status: number | null;
	/** The message of the status */
	statusMessage: string | null;
	/** The data */
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
