class People {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }

    saludar(){
        return "Hola, soy "+this.name
    }

    fullName() {
        return this.name + " " + this.lastName
    }
}


// HERENCIA
class Student extends People{
    constructor(name, lastName, career){
        super(name, lastName) // --> Así le enviamos la info a la clase padre
        this.career = career
    }

    saludar(){
        // Con super llamamos el metodo de la clase Padre
        // Pero no es necesario si se requiere hacer polimorfismo
        return super.saludar() + ", soy un estudiante de " + this.career
    }
}


const maria = new Student('Maria', 'De los Guardias', 'Ing. Sis')
console.log(maria.saludar());

