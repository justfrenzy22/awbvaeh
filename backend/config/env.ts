import { IEnv } from "../types/IEnv";

export const env: IEnv = {
	port: process.env.PORT ? Number(process.env.PORT) : 8000,
	url: process.env.URL ?? "http://localhost",
};
