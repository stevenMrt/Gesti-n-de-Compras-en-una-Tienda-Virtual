import "dotenv/config.js";
import express from "express";
import mongoose from "mongoose";

// Routers
import compraRoutes from "./infraestructura/routers/CompraRouters.js";
import clienteRoutes from "./infraestructura/routers/ClienteRouters.js";
import userRoutes from "./infraestructura/routers/UserRouters.js";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware JSON
app.use(express.json());

// Rutas
app.use("/compras", compraRoutes);
app.use("/cliente", clienteRoutes);
app.use("/api/users", userRoutes);

// Ruta raíz
app.get("/", (req, res) => {
});

// Conexión Mongo y levantar servidor
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Conectado a MongoDB");

    app.listen(PORT, () => {
console.log(`🚀 Servidor corriendo en: http://localhost:${PORT}`);    });
  } catch (err) {
    console.error("❌ Error al conectar MongoDB:", err.message);
  }
};

startServer();

export default app;
