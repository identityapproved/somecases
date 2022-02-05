/* let promise = new Promise(function (resolve, reject) {
   resolve('done')
})

promise.then(function () {
   throw new Error('oh no');
}, function (err) {
   console.log('Error in then')
}).catch(function (e) {
   console.log('Error in catch')
}) */

// ___________________

/* const promiseWithErr = new Promise(function (resolve, reject) {
   reject('error')
})

promiseWithErr.then(function () {
   throw new Error('oh no');
}, function (err) {
   console.log('Error in then')
}).catch(function (e) {
   console.log('Error in catch')
}) */

// ___________________
// WHAT?
/* (function () {
   const array = [1, 2, 3, 4]
   for (let index = 0; index < array.length; index++) {
      setTimeout(() => {
         console.log(typeof array[index])
         console.log(typeof "number")
         console.log(typeof array[index] === 'number');
      }, 0);
   }
})(); */

// ___________________

/* (function () {
   const arr1 = [1, 2, 3, 4]
   const arr2 = arr1

   arr2.push(5)

   console.log(arr1 === [1, 2, 3, 4]);
   console.log(arr2 === [1, 2, 3, 4, 5]);
   console.log(arr1 !== arr2);
})() */

//___________________

/* (function () {
   const bob = {
      name: 'Bob',
      sayName: function () {
         return this.name;
      }
   }
   const alice = {
      name: 'Alice'
   }
   const bobSayName = bob.sayName;
   console.log(bob.sayName() === 'Bob')
   console.log(bobSayName() === 'Bob');

   alice.bobSayName = bobSayName;
   console.log(alice.bobSayName() === 'Alice');

})(); */

//___________________

/* function a() {
   let x = 0
   console.log("~ x out", x)
   return function () {
      console.log("~ x inner", x)
      return x++;
   }
}

let x = a()
console.log(x, x(), x());
console.log(a, a()(), a()()); */

//___________________

/* (function () {
   const stack = []
   new Promise(function (res, rej) {
      throw 'Exeption'
   })
      .catch(function (ex) {
         stack.push('catch')
      })
      .then(
         function (res) {
            stack.push('then')
         },
         function (rej) {
            stack.push('cath')
         }
      )
   setTimeout(() => {
      console.log(stack);
   }, 1000);
})() */

/* (function () {
   const stack = []
   new Promise(function (res, rej) {
      throw 'Exeption'
   })
      .then(
         function (res) {
            stack.push('then')
         },
         function (rej) {
            stack.push('cath')
         })
      .catch(function (ex) {
         stack.push('catch')
      })

   setTimeout(() => {
      console.log(stack);
   }, 1000);
})() */

// ___________________

/* (function () {
   var test = 'outer'

   varFunc()
   someFunc()

   const test2 = 'outer2'
   function someFunc() {
      console.log(test === 'outer');
      console.log(test2 === 'outer2');
      var test = 'inner'
   }

   var varFunc = function () {
      console.log('GOT IT');
   }
})(); */

/* (function () {
   var test = 'outer'

   trueStory()
   const test2 = 'outer2'
   function someFunc() {
      console.log(test === 'outer');
      console.log(test2 === 'outer2');
      var test = 'inner'
   }
   someFunc()
   function trueStory() {
      console.log('trueStory');
   }
   var varFunc = function () {
      console.log('GOT IT');
   }
   varFunc()
})(); */

// ___________________

/* const a = false
const b = "0"
const c = undefined

console.log(1, a || b || c);
console.log(2, a && b && c);
console.log(3, a && b || c);

console.log(4, a && (b || c));
console.log(5, b && a && c);
console.log(6, b && a || c);

console.log(undefined == true); */

// ___________________

