import { Router } from "express";
import CompraController from "../controllers/CompraController.js";

const router = Router();

router.post("/", (req, res) => CompraController.create(req, res));
router.get("/", (req, res) => CompraController.getAll(req, res));
router.get("/:id", (req, res) => CompraController.getById(req, res));
router.put("/:id", (req, res) => CompraController.update(req, res));
router.delete("/:id", (req, res) => CompraController.delete(req, res));

export default router;
