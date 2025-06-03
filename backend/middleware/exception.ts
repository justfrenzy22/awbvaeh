// exception middleware or error middleware
import { HttpError } from "../utils/HttpError";
import * as view from "../views/errorView";

export const exception = (err: Error, req: any, res: any, next: any): void => {
	console.error(err);

	if (err instanceof HttpError) {
		view.exception(res, err.status, err.message);
	} else {
		view.diffException(res);
	}
};
