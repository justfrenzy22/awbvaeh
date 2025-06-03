import { IItem } from "../types/IItem";
import { Response } from "express";

export const created = (res: Response, item: IItem) =>
	res
		.status(201)
		.json({ status: 201, message: "Item created successfully", item: item });
export const getItems = (res: Response, item: IItem[]) =>
	res.status(200).json({
		status: 200,
		message: "Items retrieved successfully",
		items: item,
	});
export const getItem = (res: Response, item: IItem) =>
	res
		.status(200)
		.json({ status: 200, message: "Item retrieved successfully", item: item });
export const deleted = (res: Response) =>
	res.status(200).json({ status: 200, message: "Item deleted successfully" });

export const updated = (res: Response) =>
	res
		.status(200)
		.json({ status: 200, message: "Item updated successfully" });