"use strict";

// CASE

// let cars1 = ["Mersedes", "Volkswagen", "Ford", "Skoda"];
// let cars2 = ["Mersedes", "Volkswagen", "Ford", "Skoda"];
// let result = (cars1 === cars2) + " " + (cars1 == cars2);

// console.log(result); // “false false”

// CASE

// let a = 12;
// let b = 25;
// // let result = (a, b) => a + b;

// // IIFE

// ((a, b) => console.log(a + b))(a, b);

// CASE

// var count = 3;

// function doSomething() {
//   count = 5;

//   if (true) {
//     return count + 4;
//   }
//   function count() {}
// }

// console.log(doSomething());

// CASE

// to boolean return false

// var a1 = 1;
// let a2 = 0;
// const a3 = () => null;
// const a4 = (() => null)();

// console.log(!a1);
// console.log(!a2);
// console.log(!a3);
// console.log(!a4);

// CASE

// const links = document.getElementsByClassName("link");
// //“getElementsByClassName” => not [...] => HTMLCollection(NodeList)
// links.forEach((link, i) => {
//   link.innerHTML += i;
// }); // [...links]

// CASE

// const obj0 = {};
// const obj1 = {
//   prop1: obj0,
// };
// const obj2 = Object.assign({}, obj1);
// console.log("~ obj2", obj2);
// console.log(obj1.prop1 == obj2.prop1); // true

// CASE
// WHAT?

/* class User {
  constructor(username, password) {
    Object.assign(this, {
      username,
      password,
    });
  }
}

class Admin extends User {
  constructor(username, password, level) {
    Object.assign(this, {
      username,
      password,
      level,
    });
  }

  static doSomething() {
    // ...
  }
} */

// CASE

// ?? arr.every <=
/* function transformer(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    if (!func(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
} */

// map <=
/* const arr = [4, 9, 16];
arr.map((n) => {
   return Math.sqrt(n);
}); // [2, 3, 4]
===>
function transformer(arr, func) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(func(arr[i], i, arr));
  }
  return result;
} */

// sort <=
/* const arr = [0, -2, 10, 4];
arr.sort((a, b) => a - b); // [-2, 0, 10, 4]
console.log(arr); //  [-2, 0, 10, 4]
===>
 function transformer(arr, func) {
   for (let i = 0; i < arr.length - 1; i++) {
       for (let j = i + 1; j < arr.length; j++) {
           const result = func(arr[i], arr[j]);
           if (result > 0) {
               let buf = arr[i];
               arr[i] = arr[j];
               arr[j] = buf;
           }
       }
   }
   return arr;
} */

// reduce <=
/* const arr = [1, 2, 3, 4];
arr.reduce((result, n) => result + n); // 10
arr.reduce((result, n) => result + n, -1); // 9
===>
function transformer(arr, func, init) {
   let result = init;
   let i = 0;

   if (init === undefined) {
       result = arr[0];
       i = 1;
   }

   for (let i = 0; i < arr.length; i++) {
       result = func(result, arr[i], i, arr);
   }

   return result;
} */

// filter <=
/* const arr = [-2, -1, 0, 1, 2];
arr.filter(n => n >= 0); // [0, 1, 2]

function transformer(arr, func) {
   const result = [];

   for (let i = 0; i < arr.length; i++) {
       if (func(arr[i], i, arr)) {
           result.push(arr[i]);
       }
   }

   return result;
} */

// CASE

/* const dateStart = new Date(1976, 2, 20);
const dateEnd = new Date(2017, 6, 20);

console.log("~ dateEnd.valueOf()", dateEnd.valueOf());
console.log(Date.now(dateEnd) - Date.now(dateStart)); // 0
console.log(dateEnd.valueOf() - dateStart.valueOf()); // 1304380800000
console.log(dateEnd - dateStart); // 1304380800000 */

// CASE

/* const arr1 = [1, 150, 3.5];
const arr2 = arr1;
arr2.pop(); */

// ===> immutable: slice(), concat(), filter(), map(), reduce()/reduceRight().

// ===> mutable: push(), pop(), sort(), reverse(), shift(), unshift(), splice(), fill(), copyWithin().

// CASE

/* const itemHandler1 = {
  addItem: function (arg) {
    let a = this.helper(arg);
  },
  helper: (prop) => {
    return prop;
  },
}; */

/* 
const itemHandler2 = {
  addItem: (arg) => {
    let a = this.helper(arg); // ==> this.helper is not a function
  },
  helper: (prop) => {
    return prop;
  },
};
 */
// console.log(itemHandler1.addItem(2));
// console.log(itemHandler2.addItem(2));

/* const contextA = {
  f1: function () {
    const foo = () => this;
    return foo(); // викликаємо
  },
  f2: function () {
    const bar = () => this;
    return bar; // не викликаємо
  },
};
const contextB = {};
contextB.f1 = contextA.f1; // (1)
contextB.f2 = contextA.f2(); // (2)

console.log(contextA.f1() === contextA); // true
console.log(contextA.f2()() === contextA); // true
console.log(contextB.f1() === contextB); // true
console.log(contextB.f2() === contextA); // true */

// CASE

/* 
const someVariable = "5";
const someBooleanValue3 = isNaN(+someVariable);
const someBooleanValue2 = +someVariable == NaN; // can't use this(console.log(NaN === NaN) = false )
 */
// console.log("~ someBooleanValue3", someBooleanValue3);
// console.log("~ someBooleanValue2", someBooleanValue2);

// console.log(+true); // 1
// console.log(+"2"); // 2
// console.log(+2); // 2
// console.log(+null); // 0
// console.log(+{}); // NaN
// console.log(+[]); // 0
// console.log(+undefined); // NaN
// console.log(+"a"); // NaN

// console.log(NaN === NaN);
// console.log(NaN == NaN);

//
