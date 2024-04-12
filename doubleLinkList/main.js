class Node{
    constructor(value){
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DoubleLinkList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    clear(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    add(value){
        const node = new Node(value)
        if( this.head === null ){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++;
    }

    show(){
        let current = this.head
        while(current != null){
            console.log(`
            Prev: ${current.prev?.value}
            valor: ${current.value} 
            Next: ${current.next?.value}
            `);
            current = current.next;
        }
    }

    delete(value){
        if(this.length === 0) return;

        if(this.head.value === value){
            if(this.length === 1){
                this.clear()
            }else{
                this.head = this.head.next
                this.head.prev = null
            }
            this.length--
        }else if(this.tail.value === value){
            this.tail = this.tail.prev
            this.tail.next = null
            this.length--
        }else{
            let current = this.head
            while(current.value != value){
                current = current.next
            }

            current.next.prev = current.prev
            current.prev.next = current.next
            this.length--;
        }
    }
}

const dll = new DoubleLinkList();
dll.add(1)
dll.add(2)
dll.add(3)
dll.add(4)
dll.add(5)
dll.add(6)
dll.show()
console.log('--------');
dll.delete(4)
dll.show()
