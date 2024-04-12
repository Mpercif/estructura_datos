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

    add(value){
        const node = new Node(value)
        if(this.head === null){
            this.head = node
            this.tail = node
        }else{
            this.tail.next = node
            node.prev = this.tail
            this.tail = node
        }
        this.length++
    }

    clear(){
        this.length = 0
        this.head = null
        this.tail = null
    }

    show(){
        let current = this.head
        while(current !== null){
            console.log(`
            Prev: ${current.prev?.value}
            Value: ${current.value}
            Next: ${current.next?.value}
            `);
            current = current.next
        }
    }

    showReverse(){
        let current = this.tail
        while(current !== null){
            console.log(`
            Prev: ${current.prev?.value}
            Value: ${current.value}
            Next: ${current.next?.value}
            `);
            current = current.prev
        }
    }

    delete(value){
        if (this.length === 0) return;

        if(this.head.value === value){
            if(this.head.next === null){
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
            while(current.value !== value){
                current = current.next
            }
            current.prev.next = current.next
            current.next.prev = current.prev
            this.length--
        }

    }
}

const dll = new DoubleLinkList()
dll.add(1)
dll.add(2)
dll.add(3)
dll.show()
console.log('Reverse');
dll.showReverse()
