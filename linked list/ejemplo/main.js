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

const title = document.getElementById('title');
const image = document.getElementById('image');
const divNext = document.getElementById('next');

const moviesLinkedList = new LinkedList();
moviesLinkedList.add({name: 'Spiderman', picture:'https://i.blogs.es/037978/spider-man-homecoming-poster-sony-spain/450_1000.jpg'})
moviesLinkedList.add({name: 'Titanic', picture:'https://http2.mlstatic.com/D_NQ_NP_706366-MCO46411498695_062021-O.webp'})
moviesLinkedList.add({name: 'Lord of Rings', picture:'https://upload.wikimedia.org/wikipedia/en/2/23/The_Lord_of_the_Rings%2C_TROTK_%282003%29.jpg'})

function showMovie(){
    const movie = moviesLinkedList.head.value;
    title.innerHTML = movie.name;   
    image.src = movie.picture

    if(moviesLinkedList.head.next){
        const movieNext = moviesLinkedList.head.next.value;
        divNext.innerHTML = 'Siguiente ' + movieNext.name
    }else{
        divNext.innerHTML = 'No hay mas peliculas'
    }
}

function nextMovie(){
    if (moviesLinkedList.head.next){
        moviesLinkedList.delete(moviesLinkedList.head.value)
        showMovie()
    }
}

showMovie()