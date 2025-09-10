import Compra from "../../domain/models/Compra.js";

class CompraRepositoryMongo {
  async create(compra) {
    const nueva = new Compra(compra);
    return await nueva.save();
  }

  async findAll() {
    return await Compra.find().sort({ fecha: -1 });
  }

  async findById(id) {
    return await Compra.findById(id);
  }

  async updateById(id, data) {
    return await Compra.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteById(id) {
    return await Compra.findByIdAndDelete(id);
  }
}

export default new CompraRepositoryMongo();
