const b = [1, 5, 4, 10, 0];
for (let i = 0; i<b.length; i+= 1) {
    console.log(b[i])
    if (b === 10) {
        break;
    }
}

const array = [1, 5, 4, 10, 0, 3];
array.indexOf(2);

let numbers = [1, 3, 5, 10, 20];
numbers = numbers.join(' ');

console.log(numbers);

let arr = [];
for (let i = 0; i<3; i++) {
    arr[i] = [];

    for (let j = 0; j<3; j++) {
        arr[i][j]=1;
    }
}

console.log(arr);

let items = [1, 1, 1];
items.push(2, 2, 2);
console.log(items);

let items1 = [9, 8, 7, 'a', 6, 5];
items1.sort();
items1.pop();
console.log(items1);

let arr1 = [9, 8, 7, 6, 5];
let num = prompt('Введите число');
if (arr1.includes(+num)) {
    alert ('Угадал');
} else {
    alert ('Не угадал');
}


const str = 'abcdef';
const reverse = str.split('').reverse().join('');
console.log(reverse);

const data1 = [1, 2, 3];
const data2 = [4, 5, 6];

const all = [...data1, ...data2];
console.log(all);

const arr2 = [1, 2, 4, 5, 7];
for (let i=0; i<arr2.length-1; i++) {
    console.log(arr2[i]+arr2[i+1]);
}

function twiceNumbers() {
let arr3 = [];
arr = arr3.map(el => el **2);

console.log(arr3);
}

function getLengthWords() {
    let arr = ['asdf', 'rt'];
    arr = arr.map(el => el.length);

    console.log(getLengthWords);
}

function filterPositive(array) {
    let arr = [1, 3, -2, 5];
    for ( i = 0; i < arr.length; i++) {
    if (arr[i]<0) {
        console.log (array[i]);
  }
}


console.log(filterPositive);

let arr4 = [9, 5, 8, 1, 3];
for (let i = 1; i<arr4.length; i++); {
    let result = arr4[i] + arr4[i - 1];
    console.log(result)
}