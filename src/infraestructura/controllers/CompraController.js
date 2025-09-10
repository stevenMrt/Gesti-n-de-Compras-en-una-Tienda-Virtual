import CreateCompra from "../../application/use-cases/CreateCompra.js";
import GetCompras from "../../application/use-cases/GetCompras.js";
import GetCompraById from "../../application/use-cases/GetCompraById.js";
import UpdateCompra from "../../application/use-cases/UpdateCompra.js";
import DeleteCompra from "../../application/use-cases/DeleteCompra.js";

/**
 * @typedef {Object} Item
 * @property {string} producto - Nombre del producto.
 * @property {number} cantidad - Cantidad del producto.
 * @property {number} precio - Precio unitario del producto.
 *
 * @typedef {Object} Direccion
 * @property {string} [calle] - Calle de la dirección.
 * @property {string} [ciudad] - Ciudad de la dirección.
 *
 * @typedef {Object} Compra
 * @property {string} cliente - Nombre del cliente.
 * @property {string} telefono - Teléfono del cliente.
 * @property {Date} fecha - Fecha de la compra.
 * @property {Item[]} items - Lista de productos de la compra.
 * @property {boolean} domicilio - Indica si la compra es a domicilio.
 * @property {Direccion} [direccion] - Dirección de envío (opcional).
 * @property {number} total - Total de la compra.
 */

class CompraController {
  /**
   * Crea una nueva compra.
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async create(req, res) {
    try {
      const compra = await CreateCompra(req.body);
      res.status(201).json(compra);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  /**
   * Obtiene todas las compras.
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async getAll(req, res) {
    try {
      const compras = await GetCompras();
      res.json(compras);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  /**
   * Obtiene una compra por su ID.
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async getById(req, res) {
    try {
      const compra = await GetCompraById(req.params.id);
      res.json(compra);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  /**
   * Actualiza una compra por su ID.
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async update(req, res) {
    try {
      const updated = await UpdateCompra(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  /**
   * Elimina una compra por su ID.
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   */
  async delete(req, res) {
    try {
      const deleted = await DeleteCompra(req.params.id);
      res.json({ message: "Compra eliminada", deleted });
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }
}

export default new CompraController();
