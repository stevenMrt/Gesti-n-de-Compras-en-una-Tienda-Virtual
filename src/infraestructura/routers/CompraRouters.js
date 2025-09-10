import { Router } from "express";
import CompraController from "../controllers/CompraController.js";

const router = Router();

/**
 * @route POST /compras
 * @description Crea una nueva compra.
 * @param {Object} req.body - Objeto con los datos de la compra.
 * @returns {Object} La compra creada.
 */
router.post("/", (req, res) => CompraController.create(req, res));

/**
 * @route GET /compras
 * @description Obtiene todas las compras registradas.
 * @returns {Array} Lista de compras.
 */
router.get("/", (req, res) => CompraController.getAll(req, res));

/**
 * @route GET /compras/:id
 * @description Obtiene una compra por su ID.
 * @param {string} req.params.id - ID de la compra.
 * @returns {Object|null} La compra encontrada o null si no existe.
 */
router.get("/:id", (req, res) => CompraController.getById(req, res));

/**
 * @route PUT /compras/:id
 * @description Actualiza una compra por su ID.
 * @param {string} req.params.id - ID de la compra a actualizar.
 * @param {Object} req.body - Datos para actualizar la compra.
 * @returns {Object|null} La compra actualizada o null si no existe.
 */
router.put("/:id", (req, res) => CompraController.update(req, res));

/**
 * @route DELETE /compras/:id
 * @description Elimina una compra por su ID.
 * @param {string} req.params.id - ID de la compra a eliminar.
 * @returns {Object|null} La compra eliminada o null si no existe.
 */
router.delete("/:id", (req, res) => CompraController.delete(req, res));

export default router;
