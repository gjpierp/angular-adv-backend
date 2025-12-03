require("dotenv").config();

const express = require("express");
const cors = require("cors");

const { dbConnection } = require("./database/config");

// Crear el servidor Express
const app = express();
const PORT = process.env.PORT || 3000;

// Configurar CORS
app.use(cors());

// Conectar a la base de datos
dbConnection();

// Rutas
app.get("/", (req, res) => {
  res.json({
    ok: true,
    msg: "Hola mundo",
  });
});

app.listen(PORT, () => {
  console.log("Servidor iniciado en el puerto " + PORT);
});

// Middleware para parsear JSON
// app.use(express.json());

// // Ruta de ejemplo
// app.get('/', (req, res) => {
//   res.send('¡Hola, mundo!');
// });

// // Iniciar el servidor
// app.listen(PORT, () => {
//   console.log(`Servidor escuchando en http://localhost:${PORT}`);
// });
