class Usuario {

    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }
    
    // getters
    getFullName() {
        return `${this.nombre} ${this.apellido}`
    }
    
    countMascotas() {
        let cantidad = this.mascotas.length
        return cantidad;
    }
    getBookNames() {
        let nombresLibros = [];
        this.libros.forEach( libro => {
            nombresLibros.push(libro.nombre);
        })
        return nombresLibros;
    }
    
    // setters
    addMascota(nuevoItem) {
        this.mascotas.push(nuevoItem);
        console.log( `+ Nueva mascota agregada: `, nuevoItem );
    }
    
    addBook(nuevoLibro, nuevoAutor) {
        this.libros.push({ nombre: nuevoLibro, autor: nuevoAutor });
        console.log(`+ Nuevo libro agregado: `, nuevoLibro, `, escrito por`, nuevoAutor );
    }

}

console.clear();
console.log( "----------------------------------------------------------------" );
// crear nuevo usuario
let user2022 = new Usuario ("Gerardo", "Solotun", [{nombre: "Libro1", autor: "Autor1"}, {nombre: "Libro2", autor: "Autor2"}], ['Gato1', 'Gato2'])

console.log( `+ Nuevo usuario creado: `, user2022 );

// NOMBRE
console.log( "----------------------------------------------------------------" );
console.log( `> Nombre completo del usuario: `, user2022.getFullName() )

// MASCOTAS
console.log( "----------------------------------------------------------------" );
console.log( `> Mascotas: `, user2022.mascotas );
console.log( `> Cantidad de mascotas: `, user2022.countMascotas() );
user2022.addMascota('Perro1');
user2022.addMascota('Perro2');
console.log( `> Mascotas: `, user2022.mascotas );
console.log( `> Cantidad de mascotas: `, user2022.countMascotas() );

// LIBROS
console.log( "----------------------------------------------------------------" );
console.log( `> Nombres de libros: `, user2022.getBookNames() );
user2022.addBook("Libro3", "Autor3")
user2022.addBook("Libro4", "Autor4")
console.log( `> Nombres de libros: `, user2022.getBookNames() );
console.log( `> Colección actual de libros:`, user2022.libros );