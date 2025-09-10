import CreateCompra from "../../application/use-cases/CreateCompra.js";
import GetCompras from "../../application/use-cases/GetCompras.js";
import GetCompraById from "../../application/use-cases/GetCompraById.js";
import UpdateCompra from "../../application/use-cases/UpdateCompra.js";
import DeleteCompra from "../../application/use-cases/DeleteCompra.js";

class CompraController {
  async create(req, res) {
    try {
      const compra = await CreateCompra(req.body);
      res.status(201).json(compra);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const compras = await GetCompras();
      res.json(compras);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  async getById(req, res) {
    try {
      const compra = await GetCompraById(req.params.id);
      res.json(compra);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const updated = await UpdateCompra(req.params.id, req.body);
      res.json(updated);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

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
