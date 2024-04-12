
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
            let current = this.head;
            while(current.next !== null){
                current = current.next
            }

            current.next = node
        }
    }

    show(){
        let current = this.head;
        while(current !== null){
            console.log(current.value);
            current = current.next;
        }
    }

    clear(){
        this.head = null
    }

    size(){

        let count = 0;
        let current = this.head;
        while(current !== null){
            count ++
            current = current.next
        }
        return count
    }

}

const linkedList = new LinkedList();
linkedList.add('A');
linkedList.add('B');
linkedList.add('C');
console.log(linkedList.size());
linkedList.show();