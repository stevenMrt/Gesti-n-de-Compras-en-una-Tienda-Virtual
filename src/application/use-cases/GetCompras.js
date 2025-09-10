import compraRepository from "../../infraestructura/repositories/CompraRepositoryMongo.js";

/**
 * Obtiene todas las compras registradas en la base de datos, ordenadas por fecha descendente.
 *
 * @returns {Promise<Object[]>} Lista de compras.
 *
 * @example
 * try {
 *   const compras = await GetCompras();
 *   console.log("Todas las compras:", compras);
 * } catch (error) {
 *   console.error(error.message);
 * }
 */
async function GetCompras() {
  return await compraRepository.findAll();
}

export default GetCompras;
