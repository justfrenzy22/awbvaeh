// middleware to check if the required ID param (or any other) is present in the request
import { NextFunction, Response } from "express";
import { IGetItemRequest } from "../types/IGetItemRequest";
import { HttpError } from "../utils/HttpError";

export const requireID =
	() =>
	(req: IGetItemRequest, res: Response, next: NextFunction) => {
		const value = req.params.id;
		console.log(`value`, value);

		if (!value || value.length === 0 || value === `:id`) {
			throw new HttpError(400, `Item ID is required`);
		}
		next();
	};
