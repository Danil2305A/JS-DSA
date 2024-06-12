"use strict";

function binarySearchOne(array, key) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === key) {
      return middle;
      break;
    }
    if (array[middle] < key) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return null;
}

function binarySearchAll(array, key) {
  let left = 0;
  let right = array.length - 1;
  let result = [];

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] === key) {
      result.push(middle);
      let i = middle - 1;
      // Просмотр влево от найденного элемента
      while (i >= 0 && array[i] === key) {
        result.push(i);
        i--;
      }
      let j = middle + 1;
      // Просмотр вправо от найденного элемента
      while (j < array.length && array[j] === key) {
        result.push(j);
        j++;
      }

      break;
    }
    if (array[middle] < key) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }

  return result.sort();
}

function improvedBinarySearchOne(array, key) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] < key) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  if (array[right] === key) {
    return right;
  }

  return null;
}

function improvedBinarySearchAll(array, key) {
  let left = 0;
  let right = array.length - 1;
  let result = [];

  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (array[middle] < key) {
      left = middle + 1;
    } else {
      right = middle;
    }
  }

  if (array[right] === key) {
    result.push(right);
    let i = right + 1;
    // Просмотр вправо от найденного элемента
    while (i < array.length && array[i] === key) {
      result.push(i);
      i++;
    }
  }

  return result;
}

let array = [1, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let key = 2;

console.log('Массив: ' + array);
console.log('Ключ поиска: ' + key);

console.log('Обычная версия бинарного поиска');

let resultOne = binarySearchOne(array, key);
console.log('Индекс найденного элемента: ' + resultOne);
let resultAll = binarySearchAll(array, key);
console.log('Индексы найденных элементов: ' + resultAll);

console.log('Улучшенная версия бинарного поиска');

resultOne = improvedBinarySearchOne(array, key);
console.log('Индекс найденного элемента: ' + resultOne);
resultAll = improvedBinarySearchAll(array, key);
console.log('Индексы найденных элементов: ' + resultAll);
