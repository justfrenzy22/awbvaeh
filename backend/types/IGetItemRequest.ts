import { Request } from "express";

export interface IGetItemRequest extends Request {
	params: {
		[key: string]: string;
		id: string;
	};
}
