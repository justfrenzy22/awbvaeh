import { Request } from "express";

export interface IGetItemRequest extends Request {
	params: { id: string };
}
