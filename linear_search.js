"use strict";

function linearSearchOne(array, key) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      return i;
    }
  }

  return null;
}

function linearSearchAll(array, key) {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] === key) {
      result.push(i);
    }
  }

  return result;
}

let array = [1, 3, 2, 5, 4, 4, 4, 7, 6, 9, 8];
let key = 4;
let resultOne = linearSearchOne(array, key);
let resultAll = linearSearchAll(array, key);

console.log("Массив: " + array);
console.log("Ключ поиска: " + key);

console.log("Индекс найденного элемента: " + resultOne);
console.log("Индексы найденных элементов: " + resultAll);
