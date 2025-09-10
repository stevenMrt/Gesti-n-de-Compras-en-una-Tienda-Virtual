import compraRepository from "../../infraestructura/repositories/CompraRepositoryMongo.js";

/**
 * Obtiene una compra por su ID.
 *
 * @param {string} id - ID de la compra a buscar.
 * @returns {Promise<Object>} La compra encontrada.
 * @throws {Error} Si no se encuentra la compra con el ID proporcionado.
 *
 * @example
 * try {
 *   const compra = await GetCompraById("64f9e123456789abcdef0123");
 *   console.log("Compra encontrada:", compra);
 * } catch (error) {
 *   console.error(error.message);
 * }
 */
async function GetCompraById(id) {
  const compra = await compraRepository.findById(id);
  if (!compra) {
    throw new Error("Compra no encontrada");
  }
  return compra;
}

export default GetCompraById;
