import Compra from "../../domain/models/Compra.js";

/**
 * Repositorio para gestionar compras en MongoDB usando el modelo Compra.
 * Proporciona métodos para crear, consultar, actualizar y eliminar compras.
 */
class CompraRepositoryMongo {
  /**
   * Crea una nueva compra en la base de datos.
   * @param {Object} compra - Objeto con los datos de la compra a crear.
   * @returns {Promise<Object>} La compra recién creada.
   */
  async create(compra) {
    const nueva = new Compra(compra);
    return await nueva.save();
  }

  /**
   * Obtiene todas las compras registradas, ordenadas por fecha descendente.
   * @returns {Promise<Array>} Lista de compras.
   */
  async findAll() {
    return await Compra.find().sort({ fecha: -1 });
  }

  /**
   * Obtiene una compra por su ID.
   * @param {string} id - ID de la compra a buscar.
   * @returns {Promise<Object|null>} La compra encontrada o null si no existe.
   */
  async findById(id) {
    return await Compra.findById(id);
  }

  /**
   * Actualiza una compra por su ID.
   * @param {string} id - ID de la compra a actualizar.
   * @param {Object} data - Objeto con los datos a actualizar.
   * @returns {Promise<Object|null>} La compra actualizada o null si no existe.
   */
  async updateById(id, data) {
    return await Compra.findByIdAndUpdate(id, data, { new: true });
  }

  /**
   * Elimina una compra por su ID.
   * @param {string} id - ID de la compra a eliminar.
   * @returns {Promise<Object|null>} La compra eliminada o null si no existe.
   */
  async deleteById(id) {
    return await Compra.findByIdAndDelete(id);
  }
}

export default new CompraRepositoryMongo();
