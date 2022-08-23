const no = [1, 2, 3, 4, 5];

no.forEach(function (n, index, array) {
  console.log(n, index, array);
});

class Counter {
  constructor() {
    this.sum = 0;
    this.count = 0;
  }

  add(array) {
    array.forEach(function countEntry(entry) {
      this.sum += entry;
      ++this.count;
    }, this);
  }
}

const obj = new Counter();
obj.add([1, 2, 3]);
console.log(obj.sum, obj.count);

const flatten = (arr) => {
  const result = [];
  arr.forEach((i) => {
    if (Array.isArray(i)) {
      result.push(...flatten(i));
    } else {
      result.push(i);
    }
  });
  return result;
};

console.log(flatten([1, 2, 3, 4, 5, [4, 5, [1, 2, 4, [1, 2], 4], 6], 7]));

const ar = [1, 2, 3, 4, 5, 6];

const returnItem = ar.find((i) => i > 3);
console.log(returnItem);
