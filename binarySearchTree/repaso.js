class Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
        const node = new Node(value)
        if(this.root === null){
            this.root = node
            return 
        }

        let current = this.root
        while(true){
            
            if(current.value === value ) break;

            if(value < current.value){
                if(current.left === null){
                    current.left = node
                    break
                }else{
                    current = current.left
                }
            }else{
                if(current.right === null){
                    current.right = node
                    break;
                }else{
                    current = current.right
                }
            }
        }
    }

    search(value){
        if(this.root === null) return false;

        let current = this.root
        while(current !== null){
            if(current.value === value) return current.value

            if(value < current.value){
                current = current.left
            }else{
                current = current.right
            }
        }

        return false
    }

    searhInOrder(node){
        if(node === undefined){
            node = this.root
        }

        if(node !== null){
            this.searhInOrder(node.left)
            console.log(node.value);
            this.searhInOrder(node.right)
        }
    }

}


function recusrividad(n) {
    if (n === 0) return;
    console.log('Valor de:', n);
    recusrividad(n-1)
    console.log('Valor pila de:', n);
}


//recusrividad(5);

const tree = new BinarySearchTree()
tree.insert(5)
tree.insert(9)
tree.insert(1)
tree.insert(10)
tree.insert(11)
tree.insert(8)
tree.insert(4)
tree.insert(3)

tree.searhInOrder()



