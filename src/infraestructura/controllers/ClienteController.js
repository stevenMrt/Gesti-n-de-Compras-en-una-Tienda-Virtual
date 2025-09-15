import CreateCliente from "../../application/use-cases/Clientes/CreateCliente.js";
import GetClienteById from "../../application/use-cases/Clientes/GetClienteById.js";
import GetClientes from "../../application/use-cases/Clientes/GetCliente.js";
import ClienteRepositoryMongo from "../repositories/ClienteRepositoryMongo.js";
import PutClienteById from "../../application/use-cases/Clientes/DeleteClienteById.js";
import DeleteClienteById from "../../application/use-cases/Clientes/DeleteClienteById.js";

const clienteRepository = new ClienteRepositoryMongo();

/** Crea un nuevo cliente */
export const createCliente = async (req, res) => {
  try {
    const createClienteUC = new CreateCliente(clienteRepository);
    const cliente = await createClienteUC.execute(req.body);
    res.status(201).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/** Obtiene todos los clientes */
export const getClientes = async (req, res) => {
  try {
    const getClientesUC = new GetClientes(clienteRepository);
    const clientes = await getClientesUC.execute();
    res.status(200).json(clientes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/** Obtiene un cliente por ID */
export const getClienteById = async (req, res) => {
  try {
    const getClienteByIdUC = new GetClienteById(clienteRepository);
    const cliente = await getClienteByIdUC.execute(req.params.id);
    res.status(200).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/** Actualiza un cliente por ID */
export const putClienteById = async (req, res) => {
  try {
    const putClienteByIdUC = new PutClienteById(clienteRepository);
    const cliente = await putClienteByIdUC.execute(req.params.id, req.body);
    res.status(200).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/** Elimina un cliente por ID */
export const deleteClienteById = async (req, res) => {
  try {
    const deleteClienteByIdUC = new DeleteClienteById(clienteRepository);
    const cliente = await deleteClienteByIdUC.execute(req.params.id);
    res.status(200).json(cliente);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
