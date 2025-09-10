import compraRepository from "../../infraestructura/repositories/CompraRepositoryMongo.js";

async function DeleteCompra(id) {
  const deleted = await compraRepository.deleteById(id);
  if (!deleted) {
    throw new Error("Compra no encontrada");
  }
  return deleted;
}

export default DeleteCompra;
