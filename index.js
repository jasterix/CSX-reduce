let arr1 = [8,12,90,65,1,0,768,8,4]
let arr2 = [34,3,0,45,23,67,1,67,09]
let arr3 = [10,23]
let fruits = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig' ]

//------------------------- CSX CHALLENGES----------
//------------------------- CSX CHALLENGES----------
//------------------------- CSX CHALLENGES----------

const reduces = (array) => {
return arr1.reduce((acc, num) => {
  console.log(acc, num)
  return acc + num
  })
}

// reduces(arr1)

// ----------------------------------------------------------
// -----------------------------------------

const intersection = (input) => {
	return input.reduce((acc, arr) => {
    return acc.filter(num => arr.indexOf(num)!==-1)
  })
}
// Uncomment these to check your work!
// const arr1 = [5, 10, 15, 20];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [1, 10, 15, 5, 20];
// console.log(intersection([arr1, arr2, arr3])); // should log: [5, 15]

// ----------------------------------------------------------
// ----------------------------------------------------------

const union = (input) => {
  console.log(input)
  return input.reduce((acc, arr) => {
    return acc.concat(arr.filter(num => acc.indexOf(num)===-1))
  })
}
// Uncomment these to check your work!
// const arr1 = [5, 10, 15];
// const arr2 = [15, 88, 1, 5, 7];
// const arr3 = [100, 15, 10, 1, 5];
// console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

// ----------------------------------------------------------
// ----------------------------------------------------------

const objOfMatches = (arr1, arr2, callback) => {
  // console.log(input)
  return arr1.reduce((acc, item, index, array) => {
    // acc[item] = (arr2[arr1.indexOf(item)] || item)
    if (callback(item) === arr2[index]){
    acc[item] = callback(item) || item
    }
    return acc
  }, {})
}
// Uncomment these to check your work!
// const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
// const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
// function uppercaser(str) { return str.toUpperCase(); }
// console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }

// ----------------------------------------------------------
// ----------------------------------------------------------

const multiMap = (arr1, callback) => {
  return arr1.reduce( (acc, current, index, array) => {
    acc[current] = callback.map(func => func(current) || current)
    return acc
  }, {})
}
// Uncomment these to check your work!
// function uppercaser(str) { return str.toUpperCase(); }
// function capitalize(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }
// function repeater(str) { return str + str; }
// const items = ['catfood', 'glue', 'beer'];
// const functions = [uppercaser, capitalize, repeater];
// console.log(multiMap(items, functions)); // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }

// ----------------------------------------------------------
// ----------------------------------------------------------

const majority = (array, callback) => {
  let results = array.reduce((acc, num, index, array)=>{
    acc[callback(num)] = (acc[callback(num)] || 0) + 1
    return acc
  }, {})
  // { true: 3, false: 2 }
  return results.true > results.false
}

// const isOdd = function(num) { return num % 2 === 1; };
// console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
// console.log(majority([2, 3, 4, 5], isOdd)); // should log: false
// ----------------------------------------------------------
// ----------------------------------------------------------
const prioritize = (array, callback) => {
  if (array.length>0){
    let result = array.reduce((acc, item) => {
      let front = array.filter(element => callback(element))
      let rest = array.filter(element => !callback(element))
      return front.concat(rest)
    })
    return result
  }
}
// Uncomment these to check your work!
// function startsWithS(str) { return str[0].toLowerCase() === 's'; }
// const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
// console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']
// ----------------------------------------------------------
// ----------------------------------------------------------
const countBy = (array, callback) => {
  return array.reduce((acc, element) =>{ 
    acc[callback(element)] = ( acc[callback(element)] || 0) + 1
    return acc
 }, {})
}

// Uncomment these to check your work!
// function evenOdd(n) {
//   if (n % 2 === 0) return 'even';
//   else return 'odd';
// }
// const nums = [1, 2, 3, 4, 5];
// console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }

// ----------------------------------------------------------
// ----------------------------------------------------------

const groupBy = (array, callback) => {
  return array.reduce((groups, element) => {
    const val = [element]
    groups[callback(element)] = groups[callback(element)] || []
    groups[callback(element)].push(element)
    return groups
  },{})
}
// Uncomment these to check your work!
// const decimals = [1.3, 2.1, 2.4];
// const floored = function(num) { return Math.floor(num); };
// console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }

// ADD CODE HERE
const goodKeys = (object, callback) => {
	let keys = Object.keys(object)
  let values = Object.values(object)
  let result = values.reduce((acc, item, index, array) => {
    callback(item) ? acc[0].push(keys[index]) : null
    return acc
  },[[]])
  return result[0]
}
// Uncomment these to check your work!
// const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
// function startsWithBird(str) { return str.slice(0, 4).toLowerCase() === 'bird'; };
// console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']


//------------------------- NOT CSX---------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
// -----------------------------------------------------
//---------- NOT CSX---------------------
const counter = (array) => {
  return array.reduce( (total, fruit) => {
    total[fruit] = (total[fruit] || 0) + 1
    return total
  },{})
}

// counter(fruits)

const merge = (arr1, arr2) => {
  let arr = [arr1].concat([arr2])
  // return input.reduce((acc, arr) => {
  //  return acc.concat(arr.filter(num => acc.indexOf(num)===-1))
  return arr.reduce((acc, array) => {
    return acc.concat(array.filter(num => acc.indexOf(num) === -1))
  })
}

// merge(arr1,arr2)

const theOG = (array) => {
  return array.reduce((x, y) =>  x + y % 2)
}

// theOG(arr3)

const ranges= (low, high, step=1) => {
let arr = []
for (let i=low; i<high; i+=step) {
    arr.push(i);
}
return arr.reduce((acc, item)=> {
    return acc + item
})
}
// console.log(ranges(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(range(5, 2, -1));
// // → [5, 4, 3, 2]
// console.log(sum(range(1, 10)));
// // → 55

const fib = (num) => {
let x;
  if(x===1) return 1
  return num + fib(num-1)
}

// fib(5)

[1,2,3,4,5,].slice(0,2)