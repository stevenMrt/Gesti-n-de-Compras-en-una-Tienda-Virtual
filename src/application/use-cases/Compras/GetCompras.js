/**
 * Caso de uso: Obtener todas las compras.
 */
class GetCompras {
  constructor(compraRepository) {
    this.compraRepository = compraRepository;
  }

  async execute() {
    return await this.compraRepository.findAll();
  }
}

export default GetCompras;
