import compraRepository from "../../infraestructura/repositories/CompraRepositoryMongo.js";

/**
 * Crea una nueva compra en la base de datos.
 * Calcula automáticamente el total si no se proporciona y valida la dirección si es a domicilio.
 *
 * @param {Object} data - Datos de la compra.
 * @param {Array<{producto: string, cantidad: number, precio: number}>} data.items - Lista de productos de la compra.
 * @param {number} [data.total] - Total de la compra (opcional, se calcula automáticamente si no se proporciona).
 * @param {boolean} [data.domicilio] - Indica si la compra es a domicilio.
 * @param {Object} [data.direccion] - Dirección de envío (obligatoria si domicilio = true).
 * @param {string} [data.direccion.calle] - Calle de la dirección de envío.
 * @returns {Promise<Object>} La compra creada.
 * @throws {Error} Si se indica domicilio pero no se proporciona la dirección o calle.
 *
 * @example
 * const nuevaCompra = await CreateCompra({
 *   items: [{ producto: "Laptop", cantidad: 2, precio: 1500 }],
 *   domicilio: true,
 *   direccion: { calle: "Calle 123" }
 * });
 */
async function CreateCompra(data) {
  // Calcula total si no está definido y hay items
  if (!data.total && data.items) {
    data.total = data.items.reduce((acc, it) => acc + it.cantidad * it.precio, 0);
  }

  // Valida dirección si es a domicilio
  if (data.domicilio && (!data.direccion || !data.direccion.calle)) {
    throw new Error("La dirección es obligatoria cuando domicilio = true");
  }

  return await compraRepository.create(data);
}

export default CreateCompra;
