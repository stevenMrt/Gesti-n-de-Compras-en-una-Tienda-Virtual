import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema({
  producto: { type: String, required: true },
  cantidad: { type: Number, required: true },
  precio: { type: Number, required: true }
});

const DireccionSchema = new mongoose.Schema({
  calle: { type: String },
  ciudad: { type: String }
});

const CompraSchema = new mongoose.Schema({
  cliente: { type: String, required: true },
  telefono: { type: String, required: true },
  fecha: { type: Date, default: Date.now },
  items: { type: [ItemSchema], required: true },
  domicilio: { type: Boolean, default: false },
  direccion: { type: DireccionSchema },
  total: { type: Number, required: true }
});

const Compra = mongoose.model("Compra", CompraSchema);

export default Compra;
