const number = [1,2,3,4,5];
const number2 = [1,2,3,4,5];

// Modifica el array origina
function mulMutable(collection, num=2) {
    for(let i = 0; i<collection.length; i++){
        collection[i] *= num
    }

    return collection // Este metodo muta a la variable de origen
}


// NO Modifica el array origina
function mulInmutable(collection, num=2) {
    const newNumbers = [];
    for(let item of collection){
        newNumbers.push(item*2)
    }
    return newNumbers
}


const newArray = mulMutable(number)
const newArray2 = mulInmutable(number2)
//console.log(newArray2);
//console.log(number2);





class Beer{
    constructor(name, price){
        this.name = name
        this.price = price
    }
}

function toUppercaMutable(beer) {
    beer.name = beer.name.toUpperCase(); // Modifica la referencia
    return beer
}

function toUppercaseInmutable(beer) {
    //const newBeer = {...beer} // Clona el objeto 
    const newBeer = structuredClone(beer); // Para un objeto mas complejo
    newBeer.name = newBeer.name.toUpperCase();
    return newBeer
}

const beer = new Beer('Mti', 9);
const newBeer = toUppercaseInmutable(beer)
console.log(newBeer);
console.log(beer);

