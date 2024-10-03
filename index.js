const express = require("express");
const usuariosRutas = require("./rutas/rutasUsuarios");
const productoRutas = require("./rutas/rutasProductos");
const ventasRutas = require("./rutas/rutasVentas"); // Asegúrate de que esta ruta esté creada

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas
app.use("/usuarios", usuariosRutas); // Rutas para usuarios
app.use("/productos", productoRutas); // Rutas para productos
app.use("/ventas", ventasRutas); // Rutas para ventas

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log("Servidor en http://localhost:" + port);
});