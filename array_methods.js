const myArray = [1, 2, 3, 4, 5];
console.log(myArray);

const numberMoreThan2 = myArray.filter(num => num > 2);
console.log(numberMoreThan2);

const add10ToElementsSum = myArray.reduce(function(acc, item){return acc+item}, 10);
console.log(add10ToElementsSum);

const add5ToElementsSumArrowMethod = myArray.reduce((acc, item) => acc+item, 5);
console.log(add5ToElementsSumArrowMethod);

const findElement3 = myArray.find(item => item === 3);
console.log(findElement3);

const doubledValues = myArray.map(item => item * 2);
console.log(doubledValues);