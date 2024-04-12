const  numbers = [1,2,3]

function sumValues(collection) {
    return collection.reduce((sum, current) => sum + current, 0)
}

console.log(sumValues(numbers));