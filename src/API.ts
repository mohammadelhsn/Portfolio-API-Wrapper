import {
	AssessmentDataType,
	Course,
	ExampleData,
	pageData,
	TaskData,
	TechItemOpts,
	TopicOpts,
} from './interfaces/Interfaces';
import axios from 'axios';
import { Opts } from './interfaces/Interfaces';

export class API {
	baseURL = 'https://portfolio-api-fawn-two.vercel.app/api';
	course: Course;
	assignsURL: string;
	assignURL: string;
	//	assignTaskURL: string;
	labsURL: string;
	labURL: string;
	//	labTaskURL: string;
	exampleURL: string;
	pageDataURL: string;
	techDataURL: string;
	topicsDataURL: string;
	constructor(course: Course) {
		this.course = course;
		this.assignsURL = `${this.baseURL}?course=${course}&data=assignments`;
		this.assignURL = `${this.baseURL}?course=${course}&data=assignments&assessNum=`;
		this.labsURL = `${this.baseURL}?course=${course}&data=labs`;
		this.labURL = `${this.labsURL}&assessNum=`;
		this.exampleURL = `${this.baseURL}?course=${course}&data=examples`;
		this.pageDataURL = `${this.baseURL}?course=${course}&data=pageData`;
		this.techDataURL = `${this.baseURL}?course=${course}&data=techData`;
		this.topicsDataURL = `${this.baseURL}?course=${course}&data=topicsData`;
	}
	async getAssignment(assessNum?: string, taskNum?: string) {
		try {
			if (assessNum !== undefined && taskNum !== undefined) {
				const res = await axios.get<Opts<TaskData>>(
					`${this.assignURL}${assessNum}&taskNum=${taskNum}`
				);
				const data = res.data;
				return data;
			} else if (assessNum !== undefined) {
				const res = await axios.get<Opts<AssessmentDataType>>(
					`${this.assignURL}${assessNum}`
				);
				const data = res.data;
				return data;
			} else if (taskNum !== undefined) {
				throw new Error('Task Num must be provided with an assignment number');
			} else {
				const res = await axios.get<Opts<AssessmentDataType[]>>(
					this.assignsURL
				);
				const data = res.data;
				return data;
			}
		} catch (error) {
			console.error(error);
		}
	}
	async getLab(assessNum?: string, taskNum?: string) {
		try {
			if (assessNum !== undefined && taskNum !== undefined) {
				const res = await axios.get<Opts<TaskData>>(
					`${this.labURL}${assessNum}&taskNum=${taskNum}`
				);
				const data = res.data;
				return data;
			} else if (assessNum !== undefined) {
				const res = await axios.get<Opts<AssessmentDataType>>(
					`${this.labURL}${assessNum}`
				);
				const data = res.data;
				return data;
			} else if (taskNum !== undefined) {
				throw new Error('Task Num must be provided with an assignment number');
			} else {
				const res = await axios.get<Opts<AssessmentDataType[]>>(this.labsURL);
				const data = res.data;
				return data;
			}
		} catch (error) {
			console.error(error);
		}
	}
	async getExamples() {
		try {
			const res = await axios.get<Opts<ExampleData[]>>(this.exampleURL);
			const data = res.data;
			return data;
		} catch (error) {
			console.error(error);
		}
	}
	async getPageData() {
		try {
			const res = await axios.get<Opts<pageData[]>>(this.pageDataURL);
			const data = res.data;
			return data;
		} catch (error) {
			console.error(error);
		}
	}
	async getTechData() {
		try {
			const res = await axios.get<Opts<TechItemOpts[]>>(this.techDataURL);
			const data = res.data;
			return data;
		} catch (error) {
			console.error(error);
		}
	}
	async getTopicsData() {
		try {
			const res = await axios.get<Opts<TopicOpts[]>>(this.topicsDataURL);
			const data = res.data;
			return data;
		} catch (error) {
			console.error(error);
		}
	}
}
