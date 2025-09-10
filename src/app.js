import "dotenv/config.js";
import express from "express";
import cors from "cors";
import compraRoutes from "./infraestructura/routers/CompraRouters.js";
import connectDB from "./config/database.js";

/**
 * @file Servidor principal de la API de Compras
 * @description Configura Express, middlewares, rutas y conexión a la base de datos.
 */

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Middlewares
 */
app.use(cors()); // Habilita CORS
app.use(express.json()); // Parseo de JSON en requests

/**
 * Rutas de la API
 * @route /compras
 */
app.use("/compras", compraRoutes);

/**
 * Conexión a la base de datos y arranque del servidor
 */
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Error al conectar a la base de datos:", err.message);
  });

export default app;
