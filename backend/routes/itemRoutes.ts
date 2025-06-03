import { Router } from "express";

const router = Router();

import {
	createItem,
	deleteItem,
	getItem,
	getItems,
	updateItem,
} from "../controllers/itemController";

router.post(`/`, createItem);
router.get(`/`, getItems);
router.get(`/:id`, getItem);
router.delete(`/:id`, deleteItem);
router.put(`/:id`, updateItem);

export default router;
