var rutas = require("express").Router();
var { mostrarVentas, nuevaVenta, buscarVentaPorId, cancelarVenta } = require("../bd/ventasBD");

rutas.get("/", async (req, res) => {
    const ventas = await mostrarVentas();
    res.json(ventas);
});

rutas.get("/buscarPorId/:id", async (req, res) => {
    const venta = await buscarVentaPorId(req.params.id);
    res.json(venta);
});

rutas.post("/nuevaVenta", async (req, res) => {
    console.log(req.body);
    const ventaGuardada = await nuevaVenta(req.body);
    res.json(ventaGuardada);
});

rutas.put("/cancelarVenta/:id", async (req, res) => {
    const ventaCancelada = await cancelarVenta(req.params.id);
    res.json(ventaCancelada);
});

module.exports = rutas;