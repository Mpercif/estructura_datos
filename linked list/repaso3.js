
class Node{
    constructor(value, next=null){
        this.value = value
        this.next = next
    }
}

class LinkedList{
    constructor(){
        this.head = null
    }

    add(value){
        const node = new Node(value)
        if(this.head === null){
            this.head = node
        }else{
            let current = this.head
            while(current.next !== null){
                current = current.next
            }
            current.next = node
        }
    }

    delete(value){
        if(this.head.value === value){
            this.head = this.head.next
        }else{
            let current = this.head
            while(current.next !== null){
                if(current.next.value === value){
                    current.next = current.next.next
                    break; // Importante, cuando haga el cambio ya puede salir
                }
                current = current.next
            }
        }
    }

    size(){
        let count = 0
        let current = this.head

        while(current !== null){
            count ++
            current = current.next 
        }

        return count
    }

    showList(){
        let current = this.head
        while(current !== null){
            console.log(current.value);
            current = current.next
        }
    }

    peek(){
        let current = this.head
        while(current.next !== null){
            current = current.next
        }
        return current.value
    }


}

const linkedList = new LinkedList()
linkedList.add('Miguel')
linkedList.add('Angel')
linkedList.add('Perez')
linkedList.add('Cifuentes')
linkedList.add('Juliana')
linkedList.add('Roldan')
linkedList.showList()
console.log('Size ',linkedList.size());
console.log('Peek ',linkedList.peek());
console.log('-----');
linkedList.delete('Perez')
linkedList.showList()
console.log('Size ',linkedList.size());
