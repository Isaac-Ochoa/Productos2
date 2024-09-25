var rutas=require("express").Router();

var{mostrarProducto, nuevoProducto, borrarProducto, buscarPorId}=require("../bd/ProductoBD")

rutas.get("/",async(req,res) =>{
    // res.send("Hola estas en la raiz")
    var productosValidos = await mostrarProducto(); //se usa la variable para reternerla en algun lado
    //console.log(productosValidos);
    res.json(productosValidos);
    
 });
 
 rutas.get("/buscarPorId/:id",async(req,res)=>{
     var productosValidos = await buscarPorId(req.params.id);
     res.json(productosValidos);
 });
 
 rutas.post("/nuevoProducto",async(req,res)=>{
     //console.log(req.body);
     var productoGuardado = await nuevoProducto(req.body);
     res.json(productoGuardado);
 })
 
 rutas.delete("/borrarProducto/:id",async(req,res)=>{
     var productoBorrado = await borrarProducto(req.params.id);
     res.json(productoBorrado);
 })
 
 module.exports=rutas;
