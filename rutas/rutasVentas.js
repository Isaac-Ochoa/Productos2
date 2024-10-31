var rutas = require("express").Router();
var { mostrarVentas, nuevaVenta, buscarVentaPorId, cancelarVenta, editarVenta} = require("../bd/ventasBD");

rutas.get("/mostrarVentas", async (req, res) => {
    var ventas = await mostrarVentas();
    res.json(ventas);
});

rutas.get("/buscarPorId/:id", async (req, res) => {
    var venta = await buscarVentaPorId(req.params.id);
    res.json(venta);
});

rutas.post("/nuevaVenta", async (req, res) => {
   // console.log(req.body);
    var ventaGuardada = await nuevaVenta(req.body);
    res.json(ventaGuardada);
});

rutas.put("/cancelarVenta/:id", async (req, res) => {
    const ventaCancelada = await cancelarVenta(req.params.id);
    res.json(ventaCancelada);
});

rutas.put("/editarVenta/:id", async (req, res) => {
    const id = req.params.id;
    const nuevosDatos = req.body;
    var ventaEditada = await editarVenta(id, nuevosDatos);
    res.json({
        success: ventaEditada,
        message: ventaEditada ? "Venta actualizado correctamente" : "Error al actualizar el venta"
    });
 });

module.exports = rutas;