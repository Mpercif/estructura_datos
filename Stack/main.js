// Implementacion de pila
class Stack{
    #items = []; // el # hace que sea privado
    
    push(item){
        this.#items.push(item);
    }

    pop(){
        return this.#items.pop();
    }

    peek(){
        return this.#items[this.#items.length-1]
    }

    size(){
        return this.#items.length
    }

    isEmpty(){
        return this.#items.length === 0
    }

}

const stack = new Stack();
stack.push('Miguel')
stack.push('Angel')
console.log(stack.peek());
console.log(stack.size());
console.log(stack.isEmpty());
