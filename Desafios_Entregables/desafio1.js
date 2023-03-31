class ProductManager {
    #products
    
    constructor() {
        this.#products = [];
    }
   
    newId() { // busca y valida un nuevo ID para asignar
        let idExists
        if (this.#products.length == 0) { // si el array está vacío
            return 1
        } else {
            let i = (this.#products.length) + 1 // siguiente id posible, en base al tamaño del array
            do {
                let findId = this.#products.some( prod => prod.id === i )
                findId && i++ // si el posible id ya existe, incrementar a la busqueda
            } while (idExists == false) // cuando no coincida
            return i
        }
    }
    
// getters

    getIndexOfId (idnum) {
        let indexOfId = this.#products.findIndex( prod => prod.id === idnum )
        if (indexOfId < 0 ) return 'Producto no encontrado!' // si no existe el id, devolvió -1
        return indexOfId
    }
    
    getProducts() {
        return this.#products;
    }
    
    getProductById(idnum) {
        let product = this.#products.find(objeto => objeto.id === idnum)     
        return product ?  product : 'Producto no encontrado!' // (condicional ternario)
    }

// setters

    addProduct = (title, description, price, stock, thumbnail) => {
        if( !title || !description || !price || !stock || !thumbnail ) { // validacion de campos obligatorios
            console.error('Error: faltan campos obligatorios')
            return;
        }
        let id = this.newId() // buscar ID disponible para el nuevo producto
        let newProduct = { id, title, description, price, stock, thumbnail }
        this.#products.push(newProduct)
    }
    
    delPdoductByID = (id) => { // eliminar producto segun su id
        return this.#products.splice ( this.getIndexOfId(id), 1 )
    }

}; //end of Class: ProductManager


// *********************
// * TESTEO DEL SCRIPT *
// *********************

//console.clear();
console.log( "----------------------------------------------------------------" )
console.log( "----------------------------------------------------------------" )

// crear nuevos producto
const productManager = new ProductManager()
productManager.addProduct('Producto1', 'Descripcion Producto1', 10000, 5, 'https://prod1.jpg')
productManager.addProduct('Producto2', 'Descripcion Producto2', 10000, 5, 'https://prod2.jpg')
productManager.addProduct('Producto3', 'Descripcion Producto3', 10000, 5, 'https://prod3.jpg')
// Mostrar inventario
console.log( 'Detalle de productos en inventario: ', productManager.getProducts() );
console.log( "----------------------------------------------------------------" )
// Indice de producto dentro del array segun su id
console.log('Indice del ID 3: ', productManager.getIndexOfId(3))
console.log('Indice del ID 77: ', productManager.getIndexOfId(77))
console.log( "----------------------------------------------------------------" )
// Detalle del producto segun su id
console.log('Detalle del ID 1: ', productManager.getProductById(1))
console.log('Detalle del ID 77: ', productManager.getProductById(77))
console.log( "----------------------------------------------------------------" )
// Eliminar un producto segun su id
console.log('Eliminar Producto con ID 2: ', productManager.delPdoductByID(2))
console.log( "----------------------------------------------------------------" )
// Mostrar inventario
console.log( 'Detalle de productos en inventario: ', productManager.getProducts() );