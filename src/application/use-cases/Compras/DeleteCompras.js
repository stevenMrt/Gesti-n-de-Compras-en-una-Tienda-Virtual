/**
 * Caso de uso: Eliminar una compra por su ID.
 */
class DeleteComprasById {
  constructor(compraRepository) {
    this.compraRepository = compraRepository;
  }

  async execute(id) {
    return await this.compraRepository.deleteById(id);
  }
}

export default DeleteComprasById;
