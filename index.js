class SortedList {
  constructor() {
   
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    
    this.items.push(item)
    this.items.sort((a , b)=> a - b)
    this.length = this.items.length
  }

  get(pos) {

  if(pos < this.length) {
    return this.items[pos]
  } else {
    throw new Error('OutOfBounds');
  }
}

  max() {
    
    if (!this.length) {
    throw new Error('EmptySortedList');
    } 
    return Math.max(...this.items) //Johns aproach
  
  /*
  if(this.length > 0) {
    return Math.max(...this.items)
  } else {
    throw new Error('EmptySortedList');
  }*/ //Lupitas aproach
}

  min() {
    
    if (!this.length) {
      throw new Error('EmptySortedList');
      } 
      return Math.min(...this.items) 
  }
  

  sum() {}

  avg() {}
}

module.exports = SortedList;

