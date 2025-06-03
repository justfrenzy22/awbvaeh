import { randomUUID } from "crypto";
import { Request, Response } from "express";
import { IItem } from "../types/IItem";
import * as view from "../views/itemView";
import { items } from "../models/item";
import { IGetItemRequest } from "../types/IGetItemRequest";
import { IUpdateItemRequest } from "../types/IUpdateItemRequest";
import { HttpError } from "../utils/HttpError";

export const createItem = (req: Request, res: Response): void => {
	const { name } = req.body;

	if (!name)
		throw new HttpError(400, `Item name is required`);

	if (items.find((item) => item.name === name))
		throw new HttpError(409, `Item with this name already exists`);

	const item: IItem = {
		name: name,
		timestamp: new Date(),
		id: randomUUID(),
	};
	items.push(item);
	view.created(res, item);
};

export const getItems = (req: Request, res: Response): void => {
	view.getItems(res, items);
};

export const getItem = (req: IGetItemRequest, res: Response): void => {
	const item = items.find((item) => item.id === req.params.id);

	if (!item)
		throw new HttpError(404, `Item not found`);

	view.getItem(res, item);
};

export const updateItem = (req: IUpdateItemRequest, res: Response): void => {
	if (!req.body.name)
		throw new HttpError(400, `Item name is required`);

	const item = items.find((item) => item.id === req.params.id);
	if (!item)
		throw new HttpError(404, `Item not found`);

	item.name = req.body.name;
	view.updated(res);
};

export const deleteItem = (req: IGetItemRequest, res: Response): void => {
	const item = items.find((item) => item.id === req.params.id);

	if (!item)
		throw new HttpError(404, `Item not found`);

	items.splice(items.indexOf(item), 1);
	view.deleted(res);
};
