class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  push(val){
    let node = new Node(val);
    if(!this.head){
      this.head = node;
      this.tail = this.head;
    }else{
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this;
  }
  pop(){
    if(this.length === 0) return undefined;

    let current = this.head;
    let prev = current;

    while(current.next){
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length --;
    if(this.length === 0){
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift(){
    if (this.length === 0) return undefined;
    let oldHead = this.head;
    this.head = oldHead.next;
    this.length--;
    if(this.length === 0){
      this.tail = null;
    }
    return oldHead;
  }

  unshift(val){
    let node = new Node(val);
    if(!this.head){
      //if this.head is null, set both values
      this.head = node;
      this.tail = this.head;
    }else{
      //otherwise set the head and push everything else down
      node.next = this.head;
      this.head = node;
    }
    this.length++;
    return this;
  }

  get(idx){
    if(idx >= this.length || idx < 0) return null;

    let current = this.head;
    for(let i = 0; i < idx; i++){
      current = current.next;
    }
    return current;
  }

  set(idx, value){
    let node = this.get(idx);
    if(node){
      node.val = value;
      return true;
    }
    return false;
  }

  insert(idx, value){
    //if index is less than zero or greater than length return false;
    //if index is the same as length, push node at end
    //if index is zero, unshift a new node at the start

    //if valid index, create new node
    //get index -1 and set next to be new node
    //set the next property on the new node to be the previous next
    //increment the length
    //return true
  }

}

module.exports = { SinglyLinkedList }
