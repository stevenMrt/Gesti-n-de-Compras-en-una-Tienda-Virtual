/**
 * Caso de uso: Obtener una compra por su ID.
 */
class GetCompraById {
  constructor(compraRepository) {
    this.compraRepository = compraRepository;
  }

  async execute(id) {
    return await this.compraRepository.findById(id);
  }
}

export default GetCompraById;
