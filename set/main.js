// Evalua automaticamente si existe o no
const set = new Set()
set.add(5)
set.add(1)
set.add(8)
set.add(1)
set.add(10)
console.log(set);

set.add({name: 'Miguel', lastName: 'Perez'})
console.log(set);
 

// Eliminar
set.delete(5)
console.log(set);

// existencia
const libro = {name: "EL señor de los anillos"}
set.add(libro)

if(set.has(1)){
    console.log('Existe');
}

if(set.has(libro)){
    console.log('Encontro');
}

// Array en set
const array = [1,2,3,4,6,1,2,3,4,5]
const set2 = new Set(array)
console.log(set2);

// Limpiar el set
set.clear()
console.log(set);
