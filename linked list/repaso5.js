class Node{
    constructor(value){
        this.value = value
        this.next = null
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
            if(this.head.next === null){
                this.head = null
            }else{
                this.head = this.head.next
            }
        }else{
            let current = this.head
            while(current.next !== null){
                if(current.next.value === value){
                    current.next= current.next.next
                    break
                }
                current = current.next
            }
        }
    }

    show(){
        let current = this.head
        while(current !== null){
            console.log(current.value);
            current = current.next
        }
    }




}

const likedList = new LinkedList()
likedList.add(1)
likedList.add(2)
likedList.add(3)
likedList.add(4)
likedList.add(5)
likedList.show()
console.log('-------');
likedList.delete(1)
likedList.show()
