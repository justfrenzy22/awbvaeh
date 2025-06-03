import { randomUUID } from "crypto";
import { Request, Response, NextFunction } from "express";
import { IItem } from "../types/IItem";

import * as view from "../views/itemView";
import { items } from "../models/item";
import { IGetItemRequest } from "../types/IGetItemRequest";
import { IUpdateItemRequest } from "../types/IUpdateItemRequest";
import { HttpError } from "../utils/HttpError";

export const createItem = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	try {
		const { name } = req.body;

		if (!name) {
			throw new HttpError(400, `Item name is required`);
		}
		if (items.find((item) => item.name === name)) {
			// view.exists(res);
			throw new HttpError(409, `Item with this name already exists`);
		}
		const item: IItem = {
			name: name,
			timestamp: new Date(),
			id: randomUUID(),
		};
		items.push(item);
		view.created(res, item);
		return;
	} catch (err) {
		next(err);
	}
};

export const getItems = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	try {
		view.getItems(res, items);
		return;
	} catch (err) {
		next(err);
	}
};

export const getItem = (
	req: IGetItemRequest,
	res: Response,
	next: NextFunction
): void => {
	if (!req.params.id) {
		throw new HttpError(400, `Item ID is required`);
	}

	try {
		const item = items.find((item) => item.id === req.params.id);
		if (!item) {
			throw new HttpError(404, `Item not found`);
		}
		view.getItem(res, item);
		return;
	} catch (err) {
		next(err);
	}
};

export const updateItem = (
	req: IUpdateItemRequest,
	res: Response,
	next: NextFunction
): void => {
	if (!req.params.id) {
		throw new HttpError(400, `Item ID is required`);
	}

	if (!req.body.name) {
		throw new HttpError(400, `Item name is required`);
	}

	try {
		const item = items.find((item) => item.id === req.params.id);
		if (!item) {
			throw new HttpError(404, `Item not found`);
		}
		item.name = req.body.name;
		view.updated(res);
		return;
	} catch (err) {
		next(err);
	}
};

export const deleteItem = (
	req: IGetItemRequest,
	res: Response,
	next: NextFunction
): void => {
	if (!req.params.id) {
		throw new HttpError(400, `Item ID is required`);
	}

	try {
		const item = items.find((item) => item.id === req.params.id);
		if (!item) {
			throw new HttpError(404, `Item not found`);
		}
		items.splice(items.indexOf(item), 1);
		view.deleted(res);
		return;
	} catch (err) {
		next(err);
	}
};
