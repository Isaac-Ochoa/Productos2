class Producto{
    constructor(data){
        this.id = data.id; 
        this.cantidad = data.cantidad;
        this.nombre = data.nombre;
        this.precio = data.precio;
       
    }

    set id(id) {
        this._id = id;
    }

    set nombre(nombre) {
        this._nombre = nombre;
        
    }

    set cantidad(cantidad) {
        this._cantidad = cantidad;
        
        
    }

    set precio(precio) {
        this._precio = precio;
    }

    

    get id() {
        return this._id;
    }

    get nombre() {
        return this._nombre;
    }

    get cantidad() {
        return this._cantidad;
    }

    get precio() {
        return this._precio;
    }



    get datos() {
        if (this.id != undefined) {
            return {
                id: this.id,
                cantidad: this.cantidad,
                nombre: this.nombre,
                precio: this.precio,
                
            }
        }
        else{
            return {
                cantidad: this.cantidad,
                nombre: this.nombre,
                precio: this.precio,
                
            }
        }
    }
}

module.exports = Producto