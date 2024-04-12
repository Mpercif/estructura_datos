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
        const node = new Node(value.toUpperCase())
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
        if(this.head.value === value.toUpperCase()){
            this.head = this.head.next
        }else{
            let current = this.head
            while(current.next !== null){
                if(current.next.value === value.toUpperCase()){
                    current.next = current.next.next
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
        let current = this.head
        while(current !== null){
            count++
            current = current.next
        }

        console.log(count);
    }

    peek(){
        let current = this.head
        while(current.next !== null){
            current = current.next
        }
        console.log(current.value);
    }

    clear(){
        this.head = null
    }

}

const linkedList = new LinkedList()
linkedList.add('miguel')
linkedList.add('angel')
linkedList.add('perez')
linkedList.add('cifuentes')
linkedList.showList()
linkedList.size()
linkedList.peek()
linkedList.delete('cifuentes')
console.log('------');
linkedList.showList()
linkedList.size()
linkedList.peek()
console.log('------');
linkedList.clear()
linkedList.showList()






