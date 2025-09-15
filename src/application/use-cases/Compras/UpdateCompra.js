/**
 * Caso de uso: Actualizar una compra por su ID.
 */
class UpdateComprasById{
  constructor(compraRepository) {
    this.compraRepository = compraRepository;
  }

  async execute(id, data) {
    return await this.compraRepository.updateById(id, data);
  }
}

export default UpdateComprasById;
