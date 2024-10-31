var rutas=require("express").Router();
//var {Router}=require("express"); esta linea es la misma que la de arriba y seria Router.get para la ruta

var {mostrarUsuarios,nuevoUsuario,borrarUsuario,buscarPorId,editarUsuario}=require("../bd/usuariosBD")

rutas.get("/",async(req,res) =>{
   // res.send("Hola estas en la raiz")
   var usuariosValidos = await mostrarUsuarios(); //se usa la variable para reternerla en algun lado
   //console.log(usuariosValidos);
   res.json(usuariosValidos);
   
});

rutas.get("/buscarPorId/:id",async(req,res)=>{
    var usuariosValido = await buscarPorId(req.params.id);
    res.json(usuariosValido);
});

rutas.post("/nuevoUsuario",async(req,res)=>{
    //console.log(req.body);
    var usuarioGuardado = await nuevoUsuario(req.body);
    res.json(usuarioGuardado);
})
rutas.delete("/abc/:id",async(req,res)=>{
    console.log("--------");
    
    var usuarioBorrado = await borrarUsuario(req.params.id);
    res.json(usuarioBorrado);
})


rutas.put("/editarUsuario/:id", async (req, res) => {
    const id = req.params.id;
    const nuevosDatos = req.body;
    var usuarioEditado = await editarUsuario(id, nuevosDatos);
    res.json({
        success: usuarioEditado,
        message: usuarioEditado ? "Usuario actualizado correctamente" : "Error al actualizar el usuario"
    });
 });
/*rutas.delete("/borraUsuario/:id",async(req,res)=>{
    console.log("jASHKJashd");
    
    var usuarioBorrado = await borrarUsuario(req.params.id);
    res.json(usuarioBorrado);
})*/
module.exports=rutas;