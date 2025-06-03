import { IGetItemRequest } from "./IGetItemRequest";
import { IItem } from "./IItem";

export interface IUpdateItemRequest extends IGetItemRequest {
	body: { name: IItem[`name`] };
}
