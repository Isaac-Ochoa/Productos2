const { ventasBD } = require("./Conexion");
const Venta = require("../clases/Venta");

// Validar la venta (verificar que tiene los datos requeridos)
function validar(venta) {
    return venta.idUsuario != undefined && venta.idProducto != undefined && venta.fecha != undefined && venta.hora != undefined;
}

// Mostrar todas las ventas
async function mostrarVentas() {
    const ventas = await ventasBD.get();
    ventasValidas = [];
    ventas.forEach(venta => {
        const venta1 = new Venta({ id: venta.id, ...venta.data() });
        if (validar(venta1.datos)) {
            ventasValidas.push(venta1.datos);
        }
    });
    return ventasValidas;
}

// Buscar venta por ID
async function buscarVentaPorId(id) {
    var ventaValida;
    const venta = await ventasBD.doc(id).get();
    const venta1 = new Venta({ id: venta.id, ...venta.data() });
    if (validar(venta1.datos)) {
        ventaValida = venta1.datos;
    }
    return ventaValida;
}

// Crear una nueva venta
async function nuevaVenta(data) {
    const venta1 = new Venta({
        idUsuario: data.idUsuario,
        idProducto: data.idProducto,
        fecha: new Date().toLocaleDateString(),
        hora: new Date().toLocaleTimeString(),
        estatus: "vendido"
    });

    var ventaValida = {};
    var ventaGuardada = false;

    if (validar(venta1.datos)) {
        ventaValida = venta1.datos;
        await ventasBD.doc().set(ventaValida);
        ventaGuardada = true;
    }
    return ventaGuardada;
}

// Cancelar una venta (actualizar el estatus)
async function cancelarVenta(id) {
    var ventaCancelada = false;
    const venta = await ventasBD.doc(id).get();
    if (venta.exists) {
        await ventasBD.doc(id).update({ estatus: "cancelado" });
        ventaCancelada = true;
    }
    return ventaCancelada;
}

module.exports = {
    mostrarVentas,
    nuevaVenta,
    cancelarVenta,
    buscarVentaPorId
}