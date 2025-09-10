import compraRepository from "../../infraestructura/repositories/CompraRepositoryMongo.js";

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
