import compraRepository from "../../infraestructura/repositories/CompraRepositoryMongo.js";

/**
 * Actualiza una compra por su ID.
 * Si se actualizan los items, recalcula automáticamente el total.
 *
 * @param {string} id - ID de la compra a actualizar.
 * @param {Object} data - Datos a actualizar de la compra.
 * @param {Array<{producto: string, cantidad: number, precio: number}>} [data.items] - Lista de productos actualizada (opcional).
 * @param {number} [data.total] - Total de la compra (se recalcula automáticamente si se actualizan items).
 * @param {boolean} [data.domicilio] - Indica si la compra es a domicilio (opcional).
 * @param {Object} [data.direccion] - Dirección de envío (opcional).
 * @param {string} [data.direccion.calle] - Calle de la dirección de envío (opcional).
 * @returns {Promise<Object>} La compra actualizada.
 * @throws {Error} Si no se encuentra la compra con el ID proporcionado.
 *
 * @example
 * try {
 *   const compraActualizada = await UpdateCompra("64f9e123456789abcdef0123", {
 *     items: [{ producto: "Laptop", cantidad: 1, precio: 1500 }]
 *   });
 *   console.log("Compra actualizada:", compraActualizada);
 * } catch (error) {
 *   console.error(error.message);
 * }
 */
async function UpdateCompra(id, data) {
  if (data.items) {
    data.total = data.items.reduce((acc, it) => acc + it.cantidad * it.precio, 0);
  }

  const updated = await compraRepository.updateById(id, data);
  if (!updated) {
    throw new Error("Compra no encontrada");
  }

  return updated;
}

export default UpdateCompra;
