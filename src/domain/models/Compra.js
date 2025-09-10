import mongoose from "mongoose";

/**
 * @typedef {Object} Item
 * @property {string} producto - Nombre del producto.
 * @property {number} cantidad - Cantidad del producto.
 * @property {number} precio - Precio unitario del producto.
 */
const ItemSchema = new mongoose.Schema({
  producto: { type: String, required: true },
  cantidad: { type: Number, required: true },
  precio: { type: Number, required: true }
});

/**
 * @typedef {Object} Direccion
 * @property {string} [calle] - Calle de la dirección.
 * @property {string} [ciudad] - Ciudad de la dirección.
 */
const DireccionSchema = new mongoose.Schema({
  calle: { type: String },
  ciudad: { type: String }
});

/**
 * @typedef {Object} Compra
 * @property {string} cliente - Nombre del cliente.
 * @property {string} telefono - Teléfono del cliente.
 * @property {Date} fecha - Fecha de la compra.
 * @property {Item[]} items - Lista de productos de la compra.
 * @property {boolean} domicilio - Indica si la compra es a domicilio.
 * @property {Direccion} [direccion] - Dirección de envío (opcional).
 * @property {number} total - Total de la compra.
 */
const CompraSchema = new mongoose.Schema({
  cliente: { type: String, required: true },
  telefono: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  items: { type: [ItemSchema], required: true },
  domicilio: { type: Boolean, default: false },
  direccion: { type: DireccionSchema },
  total: { type: Number, required: true }
});

/**
 * Modelo de Mongoose para las compras.
 * @type {mongoose.Model<Compra>}
 */
const Compra = mongoose.model("Compra", CompraSchema);

export default Compra;
