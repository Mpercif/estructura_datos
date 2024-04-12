class Node{
    constructor(value,next = null){
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
        if ( this.head === null ){
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
                    current.next = current.next.next;
                    break;
                }
                current = current.next
            }
        }
    }

    showList(){
        let current = this.head
        while(current !== null){
            console.log(current.value);
            current = current.next
        }
    }

    size(){
        let count = 0;
        let current = this.head;

        while(current !== null){
            count ++
            current = current.next
        }

        return count;
    }
}

const linkedList = new LinkedList()
linkedList.add('Miguel')
linkedList.add('Angel')
linkedList.add('Perez')
linkedList.showList()
linkedList.delete('Angel')
console.log('--------------');
linkedList.showList()



