class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class MyLinkedList {
  constructor() {
    this.head = null;
  }

  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      return;
    }

    let temp = this.head;
    while (temp.next != null) {
      temp = temp.next;
    }
    temp.next = newNode;
  }

  prepend(value){
    const newNode=new Node(value)
    if (this.head ==null) {
      this.head = newNode;
      return;
    }
    newNode.next=this.head;
    this.head=newNode;
  }

  toString(){
    let temp=this.head;
    let str="";
    while(temp!=null){
        str+=`${temp.value}->`
        temp=temp.next;
    }
    return str+"null";
  }

  size(){
    let listSize=0;
    let temp=this.head;
    while(temp!=null){
        listSize++
        temp=temp.next;
    }
    return listSize;
  }

  gethead(){
    return this.head.value
  }

  gettail(){
    let temp=this.head;
    while(temp.next!=null){
        temp=temp.next;
    }
    return temp.value;
  }
  at(index){
    let temp=this.head;
    let size=0;
    while(size!=index){
        size++;
        temp=temp.next
    }
    return temp.value;
  }
  pop(){
    let temp=this.head;
    while(temp.next.next!=null){
        temp=temp.next
    }
    let a=temp.next;
    temp.next=null;
    return a;
  }
  contains(value){
    let temp=this.head;
    let check=0;
    while(temp!=null){
        if(temp.value==value){
            check=1
        }
        temp=temp.next;
    }
    if(check==1){return true}
    else{ return false}

  }
  find(value){
    let temp=this.head;
    let size=0
    while(temp!=null){
        if(temp.value==value){
            return size
        }
        temp=temp.next;
        size++
    }
    return "Not Found"
  }
  insertAt(value, index){
    let temp=this.head;
    let newNode=new Node(value);
    let count=0;
    while(temp!=null && count<index-1){
        temp=temp.next;
        count++
    }
    newNode.next=temp.next;
    temp.next=newNode 
  }
  removeAt(index){
    let temp=this.head;
    let count=0
    while(temp!=null && count<index-1){
        temp=temp.next;
        count++
    }
    temp.next=temp.next.next;
  }

}
const ll = new MyLinkedList();

ll.append("dog");
ll.append("cat");
ll.append("parrot");
ll.append("hamster");
ll.append("snake");
ll.append("turtle");
console.log(ll.toString())
