import compraRepository from "../../infraestructura/repositories/CompraRepositoryMongo.js";

async function CreateCompra(data) {
  if (!data.total && data.items) {
    data.total = data.items.reduce((acc, it) => acc + it.cantidad * it.precio, 0);
  }

  if (data.domicilio && (!data.direccion || !data.direccion.calle)) {
    throw new Error("La dirección es obligatoria cuando domicilio = true");
  }

  return await compraRepository.create(data);
}

export default CreateCompra;
