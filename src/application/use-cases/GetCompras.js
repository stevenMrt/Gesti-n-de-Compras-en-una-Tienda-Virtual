import compraRepository from "../../infraestructura/repositories/CompraRepositoryMongo.js";

async function GetCompras() {
  return await compraRepository.findAll();
}

export default GetCompras;
