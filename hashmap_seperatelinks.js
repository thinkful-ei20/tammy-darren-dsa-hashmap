'use strict';

const LinkedList = require('./linkedlist');
//create a 'next' property if the index is assigned more than once

class HashMapLinks {
  constructor(initialCapacity = 2){
    this.length = 0;
    this._slots = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }

  get(key) {
    const index = this._findSlot(key);
    if (this._slots[index] === undefined){
      throw new Error('Key error');
    }
    //if next exists make the find function available 
    //if next exists its linkedlist
    return this._slots[index].value;
  }

  set(key, value){
    const loadRatio = (this.length + this._deleted +1) / this._capacity;
    if (loadRatio > HashMapLinks.MAX_LOAD_RATIO){
      this._resize(this._capacity * HashMapLinks.SIZE_RATIO);
    }

    let index = this._findSlot(key);
    if(!this._slots[index]){ 
      this.length++;
    }
    //this if statement checks if index empty
    let slot = this._slots[index];
    if(slot === undefined || slot.key == key && !slot.deleted){
      this._slots[index] = {
        key,
        value,
        deleted: false,
        next: null
      };
    } else {
      let currentNode = slot;
      while(currentNode.next !== null){
        currentNode = currentNode.next;
      }
      currentNode.next = {
        key, 
        value, 
        deleted: false,
        next: null};
    }
  //otherwise create a linked list out of exisiting index


    // {
    //   return index;
    // } else{
    //   const linkedItem = new LinkedList();
    //     //new node
    //   //turn the original item into a linked list
    //   return index;
    //   {key: value;
    //     next: {key: value;
    //       next}
    //   }

  }

  remove(key){
    const index = this._findSlot(key);
    const slot = this._slots[index];
    if (slot === undefined){
      throw new Error ('Key error');
    }
    slot.deleted = true;
    this.length--;
    this._deleted++;
  }

  _findSlot(key){
    //find slot and location in list

  
    const hash = HashMapLinks._hashString(key);
    // start gives index
    const index = hash % this._capacity;

    return index;
    //start =4
    //0-length of hash map

    
    //change this to linked list

    //how do we know if this index has something or not?


    
  }

  _resize(size){
    const oldSlots = this._slots;
    this._capacity = size;
    this.length = 0;
    this._deleted = 0;
    this._slots = [];

    for (const slot of oldSlots){
      if(slot !== undefined && !slot.deleted){
        this.set(slot.key, slot.value);
      }
    }
  }

  static _hashString(string){
    let hash = 5381;
    for (let i=0; i<string.length; i++){
      hash = (hash<<5) + hash + string.charCodeAt(i);
      hash = hash & hash;
    }
    return hash >>> 0;
  }

}
HashMapLinks.MAX_LOAD_RATIO = 0.9;
HashMapLinks.SIZE_RATIO = 3;

module.exports = HashMapLinks;