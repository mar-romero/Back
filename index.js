//let listaDatos = ['dato1','dato2'];
//
//function mostratLista(datos){
//    if(datos.length > 0){
//        for (let i = 0 ; i< datos.length; i++){
//            console.log(datos[i]);
//        }
//    }else{
//        console.log("Esta vacia");
//    }
//
//}
//
//mostratLista(listaDatos);

class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = libros;
    this.mascotas = mascotas;
  }
  getFullname(){
      return `${this.nombre} ${this.apellido}`;
  }
  addMascota(mascota){
      this.mascotas.push(mascota);
  }
  addMascota(mascota){
    this.mascotas.push(mascota);
}
  countMascotas(){
      return this.mascotas.length;
  }
  addLibro(libro){
    this.libros.push(libro);
}
  getBookNames(){
      return this.libros.map(libro => libro.nombre);
  }
}

const usuario1 = new Usuario('Marcelo', 'Romero', [{nombre:'El señor de los anillos 3', autor: 'J. R. R. Tolkien'},{nombre:'El señor de los anillos', autor: 'J. R. R. Tolkien'},{nombre:'El señor de los anillos 2 ', autor: 'J. R. R. tolkien'}],['Gato', 'Perro','Lagarto']);

console.log(usuario1.countMascotas());
usuario1.addMascota("Conejo");
usuario1.addLibro({nombre:'Harry Potter', autor:'J. K. Rowling'})
console.log(usuario1.getFullname());
console.log(usuario1.countMascotas());
console.log(usuario1.getBookNames());
