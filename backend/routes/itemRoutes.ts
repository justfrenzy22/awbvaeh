import { Router } from "express";

const router = Router();

import {
	createItem,
	deleteItem,
	getItem,
	getItems,
	updateItem,
} from "../controllers/itemController";
import { requireID } from "../middleware/requireID";

router.post(`/`, createItem);
router.get(`/`, getItems);
router.get(`/:id`, requireID(), getItem);
router.delete(`/:id`, requireID(), deleteItem);
router.put(`/:id`, requireID(), updateItem);

export default router;
