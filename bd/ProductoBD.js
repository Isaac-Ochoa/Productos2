const { productosBD } = require("./Conexion");
const Producto = require("../clases/producto");


function validar(producto) {
    var valido = false;
    if (producto.cantidad != undefined && producto.nombre != undefined && producto.precio != undefined) {

        valido = true;
    }
    return valido;
}

async function mostrarProducto() {
    const producto = await productosBD.get();
    productoValidos = [];
    producto.forEach(producto => {
        // console.log(usuario.id);  //.id para mostrar el id y el data() sirve para mostrar los demas datos     
        const producto1 = new Producto({ id: producto.id, ...producto.data() });

        if (validar(producto1.datos)) {
            productoValidos.push(producto1.datos);
        }
    });


    return productoValidos;
}

async function buscarPorId(id) {
    var productoValido;
    const producto = await productosBD.doc(id).get();
    const producto1 = new Producto({ id: producto.id, ...producto.data() });
    if (validar(producto1.datos)) {
        productoValido = producto1.datos;
    }
    //console.log(usuario.data());
    return productoValido;
}

async function nuevoProducto(data) {
    const producto1 = new Producto(data)
    var productoValido = {};
    var productoGuardado = false;
    if (validar(producto1.datos)) {
        productoValido = producto1.datos;
        await productosBD.doc().set(productoValido);
        productoGuardado=true;
    }
    return productoGuardado;
}

async function borrarProducto(id) {
    //console.log(await buscarPorId(id));
    var productoBorrado = false;
    if (await buscarPorId(id) != undefined) {
        //console.log("Se borrora al usuario");
        await productosBD.doc(id).delete();
        productoBorrado = true;
    }
    return productoBorrado;
}

/*var data = {
    nombre: "Isaac",
    producto: "Coca",
    password: "123"
}*/


module.exports = {
    mostrarProducto,
    nuevoProducto,
    borrarProducto,
    buscarPorId
}