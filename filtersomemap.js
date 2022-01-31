// filter
const filterThis = [2, 4, 3, 6, 8, 9]

const filter = (arr, fn) => {
   const filteredArr = []
   for (const el of arr) {
      if (fn(el)) filteredArr.push(el)
   }
   return filteredArr;
}

console.log(filter(filterThis, (el) => el % 3 === 0))


// some 
const someOfThis = ['JS', 'Python', 'RegEx']

const some = (arr, fn) => {
   for (const el of arr) {
      if (fn(el)) return true
   }
   return false;
}

console.log(some(someOfThis, (el) => el === "JS"));

// map
const mapMe = [2323, 232, 3232, 233]

const map = (arr, fn) => {
   const mappedArr = []
   for (const el of arr) {
      mappedArr.push(fn(el))
   }
   return mappedArr;
}

console.log(map(mapMe, (el) => el * 2));