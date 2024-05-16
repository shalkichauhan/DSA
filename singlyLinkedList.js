class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    };}
class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {

        var newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;

        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
        return this;
    }
    pop(){
        if(!this.head){
            return undefined
        }
    else{
        var current = this.head;
        var temp= current;
        while(current.next){
            temp = current;
            current= current.next
            }
            this.tail= temp;
        this.tail.next=null;
        this.length--;

        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return this
        }

    }
}
    list = new SinglyLinkedList()


list.push("h")
list.push("e")
list.push("l")
list.pop()
list.pop()
console.log(list)
