const names = ["Miguel", "Juliana", "Julian", "Hector", "Javier"]

// Modo estructurado
function seachFirstLetter(collection, letter) {
    const newArray = []
    
    for(let word of collection)
        if(word[0].toUpperCase() === letter.toUpperCase())
            newArray.push(word)

    
    return newArray
}

console.log(seachFirstLetter(names, "J"));


// Funciones ya existentes de JS
function seachFirstLetter2(collection, letter) {
    return collection.filter( 
        word => word[0].toUpperCase() === letter.toUpperCase() 
    )
}
console.log(seachFirstLetter2(names, "M"));
