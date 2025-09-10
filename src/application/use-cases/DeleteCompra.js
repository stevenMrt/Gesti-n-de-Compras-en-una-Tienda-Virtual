import compraRepository from "../../infraestructura/repositories/CompraRepositoryMongo.js";

/**
 * Elimina una compra por su ID.
 *
 * @param {string} id - ID de la compra a eliminar.
 * @returns {Promise<Object>} La compra eliminada.
 * @throws {Error} Si no se encuentra la compra con el ID proporcionado.
 *
 * @example
 * try {
 *   const compraEliminada = await DeleteCompra("64f9e123456789abcdef0123");
 *   console.log("Compra eliminada:", compraEliminada);
 * } catch (error) {
 *   console.error(error.message);
 * }
 */
async function DeleteCompra(id) {
  const deleted = await compraRepository.deleteById(id);
  if (!deleted) {
    throw new Error("Compra no encontrada");
  }
  return deleted;
}

export default DeleteCompra;
