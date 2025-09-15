import mongoose from "mongoose";

const CompraSchema = new mongoose.Schema({
  producto: String,
  cantidad: Number,
  precio: Number,
  cliente: String,
  fecha: { type: Date, default: Date.now }
});

const CompraModel = mongoose.model("Compra", CompraSchema);


class CompraRepositoryMongo {
  async create(data) {
    const compra = new CompraModel(data);
    return await compra.save();
  }

  async getAll() {
    return await CompraModel.find();
  }

  async findAll() {
    // Alias para compatibilidad con casos de uso que llaman findAll
    return await this.getAll();
  }

  async getById(id) {
    return await CompraModel.findById(id);
  }

  async updateById(id, data) {
    return await CompraModel.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id) {
    return await CompraModel.findByIdAndDelete(id);
  }
}

export default CompraRepositoryMongo;
