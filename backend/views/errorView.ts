import { Response } from "express";

export const exception = (res: Response, status: number, message: string) =>
	res.status(status).json({ status: status, message: message });

export const diffException = (res: Response) =>
	res.status(500).json({ status: 500, message: "Internal server error" });
