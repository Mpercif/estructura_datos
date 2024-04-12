let number = 4; // Tipo primitivo
                // NO se pasa su referencia sino su valor

function editValue(val, newVal) {
    val = newVal
    console.log('Valor interno ', val);
}
editValue(number, 10)
console.log('Valor externo ', number);



// Cuando son objetos, se pasa su referencias NO su valor
class testReference{
    constructor(number){
        this.number = number
    }
}

let objectTest = new testReference(4);

// En este punto se actualiza la referencia y 
// todos los valores del objeto dentro por fuera
// de la función
function updateObject(objectTest, newVal) {
    objectTest.number = newVal
    console.log('Valor interno ', objectTest.number);
}


updateObject(objectTest, 10);
console.log('Valor externo ', objectTest.number);



