class Sorter {
  constructor() {
    this.arr = [];
    this.compareFunction = (a, b) => a - b;
  }

  add(element) {
    this.arr.push(element);
  }

  at(index) {
    return this.arr[index];
  }

  get length() {
    return this.arr.length;
  }

  toArray() {
    return this.arr;
  }

  sort(indices) {
    indices.sort((a, b) => a - b);
    let newArr = [];
    indices.forEach(element => {
      newArr.push(this.arr[element]);
    });
    newArr.sort(this.compareFunction);
    indices.forEach(element => {
      this.arr[element] = newArr.shift();
    });
  }

  setComparator(compareFunction) {
    this.compareFunction = compareFunction;
  }
}

module.exports = Sorter;