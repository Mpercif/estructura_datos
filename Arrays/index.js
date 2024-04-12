let array = [1,2,3,"dsad", true]

function showArray(array) {
    console.log('--------------');
    for(let item of array){  // -> Este metodo es mas interesante
        console.log(item);
    }
}

//showArray(array)

const array2 = [1,2,3,4,5,6,7]

//// PROGRAMACION FUNCIONAL

console.log("PROGRAMACION FUNCIONAL");

// Funcion de primera clase
function hi() {
    console.log('Hola');
}

const h = hi;


function sum(a,b) {
    return a + b
}


const s = sum;

// Funcion de orden superior
function some(fn) {
    console.log('Se hace algo antes');
    fn();
    console.log('Se hace algo despues');
}


//some(h);

// Funcion de orden superior que ejecuta una
// funcion con parametros

function some2(fn, num1, num2) {
    console.log('Se hace algo');
    const res =  fn(num1, num2);
    console.log('El resultado es ', res);
}

some2(s, 1,2)


// Funciones anonimas --> Arrow functions

some2((a,b) => a*b, 6, 2)




