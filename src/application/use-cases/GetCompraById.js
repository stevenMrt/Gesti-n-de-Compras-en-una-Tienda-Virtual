import compraRepository from "../../infraestructura/repositories/CompraRepositoryMongo.js";

async function GetCompraById(id) {
  const compra = await compraRepository.findById(id);
  if (!compra) {
    throw new Error("Compra no encontrada");
  }
  return compra;
}

export default GetCompraById;
