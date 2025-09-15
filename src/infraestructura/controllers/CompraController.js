// src/controllers/CompraController.js
import mongoose from "mongoose";

// Modelo de ejemplo en memoria (sin archivo externo)
const CompraSchema = new mongoose.Schema({
  producto: { type: String, required: true },
  cantidad: { type: Number, required: true },
  precio: { type: Number, required: true },
});

const Compra = mongoose.models.Compra || mongoose.model("Compra", CompraSchema);

// GET /compras - listar todas las compras
export const getCompras = async (req, res) => {
  console.log(">>> Entrando a getCompras");
  try {
    const compras = await Compra.find();
    res.json(compras);
  } catch (error) {
    console.error("Error en getCompras:", error.message);
    res.status(500).json({ error: "Error obteniendo compras" });
  }
};

// POST /compras - crear nueva compra
export const createCompra = async (req, res) => {
  console.log(">>> Entrando a createCompra con body:", req.body);
  try {
    const nuevaCompra = new Compra(req.body);
    const compraGuardada = await nuevaCompra.save();
    res.status(201).json(compraGuardada);
  } catch (error) {
    console.error("Error en createCompra:", error.message);
    res.status(500).json({ error: "Error creando compra" });
  }
};

// GET /compras/:id - obtener compra por id
export const getComprasById = async (req, res) => {
  const { id } = req.params;
  console.log(">>> Entrando a getComprasById con id:", id);
  try {
    const compra = await Compra.findById(id);
    if (!compra) return res.status(404).json({ error: "Compra no encontrada" });
    res.json(compra);
  } catch (error) {
    console.error("Error en getComprasById:", error.message);
    res.status(500).json({ error: "Error obteniendo compra" });
  }
};

// PUT /compras/:id - actualizar compra por id
export const updateComprasById = async (req, res) => {
  const { id } = req.params;
  console.log(">>> Entrando a updateComprasById con id:", id, "y body:", req.body);
  try {
    const compraActualizada = await Compra.findByIdAndUpdate(id, req.body, { new: true });
    if (!compraActualizada) return res.status(404).json({ error: "Compra no encontrada" });
    res.json(compraActualizada);
  } catch (error) {
    console.error("Error en updateComprasById:", error.message);
    res.status(500).json({ error: "Error actualizando compra" });
  }
};

// DELETE /compras/:id - eliminar compra por id
export const deleteComprasById = async (req, res) => {
  const { id } = req.params;
  console.log(">>> Entrando a deleteComprasById con id:", id);
  try {
    const compraEliminada = await Compra.findByIdAndDelete(id);
    if (!compraEliminada) return res.status(404).json({ error: "Compra no encontrada" });
    res.json({ message: "Compra eliminada correctamente" });
  } catch (error) {
    console.error("Error en deleteComprasById:", error.message);
    res.status(500).json({ error: "Error eliminando compra" });
  }
};
