/**
 * Caso de uso: Crear una nueva compra.
 */
class CreateCompra {
  constructor(compraRepository) {
    this.compraRepository = compraRepository;
  }

  async execute(compraData) {
    return await this.compraRepository.create(compraData);
  }
}

export default CreateCompra;
