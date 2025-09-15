import { Router } from "express";
import {
  createCompra,
  getCompras,
  getComprasById,
  updateComprasById,
  deleteComprasById
} from "../controllers/CompraController.js";

const router = Router();

router.post("/", createCompra);
router.get("/", getCompras);
router.get("/:id", getComprasById);
router.put("/:id", updateComprasById);
router.delete("/:id", deleteComprasById);

export default router;
