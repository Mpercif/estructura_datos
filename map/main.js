

const map = new Map()

// inser information
map.set(2, "Hector")
map.set(9, "Miguel")
map.set(11, "Angel")
map.set(1, "Perez")
console.log(map);
map.set(2, "Juliana") // Modificando un valor
console.log(map.get(2)); // Obteneiendo el valor

// Validar si existe
console.log(map.has(11)); // Retorna un booleano

// Eliminar valores
map.delete(11) // Retorna un booleano cuando hace el delete

// Objetos como keys
const keyObject1 = {id: 1, hash: 'das'}
const keyObject2 = {id: 1, hash: 'def'}
const keyObject3 = {id: 1, hash: '231'}

map.set(keyObject1, "karla")
map.set(keyObject2, "luisa")


// Recorrido de la coleccion
console.log('----');
for(let value of map.values()){
    console.log(value);
}
console.log('----');
for(let keys of map.keys()){
    console.log(keys);
}
console.log('----');
for(let item of map){
    console.log(item);
}

// Eliminar todo
map.clear()
console.log(map);


// EJEMPLOS
console.log('EJEMPLO DE USO -------------------');
const textCode = document.getElementById('code')
const textCustomer = document.getElementById('customer')
const divContent = document.getElementById('content')

const customers = new Map();


function add() {
    customers.set(textCode.value, textCustomer.value)
    textCode.value = ""
    textCustomer.value = ""
    textCode.focus()
    show()
}

function show() {
    divContent.innerHTML = "";

    for(let item of customers){
        divContent.innerHTML += `<div>
        <b>${item[0]}</b> ${item[1]}
        </div>`
    }
}





