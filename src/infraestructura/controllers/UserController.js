import CreateUser from "../../application/use-cases/Usuarios/CreateUser.js";
import { GetUserById } from "../../application/use-cases/Usuarios/GetUserById.js";
import { GetUsers } from "../../application/use-cases/Usuarios/GetUser.js";
import PutUserById from "../../application/use-cases/Usuarios/UpadateUserById.js";
import { DeleteUserById } from "../../application/use-cases/Usuarios/DeleteUserById.js";
import UserRepositoryMongo from "../repositories/UserRepositoryMongo.js";

const userRepository = new UserRepositoryMongo();

/** Crea un nuevo usuario */
export const createUser = async (req, res) => {
  try {
    const createUserUC = new CreateUser(userRepository);
    const user = await createUserUC.execute(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/** Obtiene todos los usuarios */
export const getUsers = async (req, res) => {
  try {
    const getUsersUC = new GetUsers(userRepository);
    const users = await getUsersUC.execute();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/** Obtiene un usuario por ID */
export const getUserById = async (req, res) => {
  try {
    const getUserByIdUC = new GetUserById(userRepository);
    const user = await getUserByIdUC.execute(req.params.id);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/** Actualiza un usuario por ID */
export const putUserById = async (req, res) => {
  try {
    const putUserByIdUC = new PutUserById(userRepository);
    const user = await putUserByIdUC.execute(req.params.id, req.body);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/** Elimina un usuario por ID */
export const deleteUserById = async (req, res) => {
  try {
    const deleteUserByIdUC = new DeleteUserById(userRepository);
    const user = await deleteUserByIdUC.execute(req.params.id);
    if (!user) return res.status(404).json({ error: "Usuario no encontrado" });
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
