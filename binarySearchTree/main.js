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
            return;
        }
        let current = this.root;
        
        while(true){
            if(current.value === value) break;

            if(value < current.value){
                if(current.left === null){
                    current.left = node
                    break;
                }

                current = current.left

            }else{
                if(current.right === null){
                    current.right = node
                    break;
                }
                current = current.right
            }

        }
    }


    search(value){
        if (this.root === null) return false;

        let current = this.root
        
        while(current !== null){
            if(value === current.value) return current;
            if(value < current.value){
                current = current.left
            }else{
                current = current.right
            }
        }

        return false;

    }

    showInOrder(node){
        if (node === undefined) {
            node = this.root
        }

        if(node !== null){
            this.showInOrder(node.left);
            console.log(node.value);
            this.showInOrder(node.right)
        }
        //console.log('Por fuera', node);   
    }

    showInPreOrder(node){
        if(node === undefined){ // Esta condicion es muy importante
                                // debe ser igualda estricta === 
                                // undefined == null = TRUE
                                // undefined === null = FALSE
            node = this.root
        }

        if(node !== null){
            console.log(node.value);
            this.showInPreOrder(node.left)
            this.showInPreOrder(node.right)
        }
    }

    showInPostOrder(node){
        if(node === undefined) {
            node = this.root
        }

        if(node !== null){
            this.showInPostOrder(node.left)
            this.showInPostOrder(node.right)
            console.log(node.value);
        }


    }


}

// Recursividad
function recusividadShowMessage(n) {
    if(n === 0) return;
    // console.log('El valor de n: ', n); -> Si lo pongo aqui obtengo 5,4,3,2,1
    //                                       Porque se ejecuta antes de volverse a llamar 
    recusividadShowMessage(n-1);
    console.log('El valor de n: ', n); // SI lo pongo aqui, se va a ejecutar una vez el return
                                       // es llamado, voy a obtener 1,2,3,4,5
                                       // Porque funciona como una pila de ejecución
}

//recusividadShowMessage(5)


const tree = new BinarySearchTree()
tree.insert(5)
tree.insert(9)
tree.insert(1)
tree.insert(10)
tree.insert(11)
tree.insert(8)
tree.insert(4)
tree.insert(3)
//tree.showInOrder();
//console.log('----------');
//tree.showInPreOrder()
//console.log('----------');
//tree.showInPostOrder()


const treeNumbers = new BinarySearchTree()
let json = []
for(let  i=0; i< 150000; i++){
    const number = Math.floor(Math.random() * 150000);
    json.push(number)
    treeNumbers.insert(number)
}

console.log(json);

const numberToSearch = 149999;

// Busqueda lineal
let exist = false;


const start = Date.now();
for(let n of json){
    if(numberToSearch === n){
        exist = true
        break
    }
}
const end = Date.now();

if(exist){
    console.log('Numero existe');
}else{
    console.log('Numero NO existe');
}
console.log('EL tiempo de ejecución', end-start);

const startTree = Date.now();
if(treeNumbers.search(numberToSearch)){
    console.log('Numero existe en el arbol');
}else{
    console.log('Numero NO existe en el arbol');
}
const endTree = Date.now();
console.log('EL tiempo de ejecución del arbol', endTree-startTree);




