import { Router } from "express";
import {
  createCliente,
  getClientes,
  getClienteById,
  putClienteById,
  deleteClienteById
} from "../controllers/ClienteController.js";

const router = Router();

router.post("/", createCliente);
router.get("/", getClientes);
router.get("/:id", getClienteById);
router.put("/:id", putClienteById);
router.delete("/:id", deleteClienteById);

export default router;
