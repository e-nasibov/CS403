// String, number, bigInt, Boolean, Symbol, null, undefined - primitve(by value)
// Object - non-primitve (by referance)

// Array,
// Object,
// Error,
// Date,
// etc...

// let firstName = 'Elsen'
// let lastName = 'Elsenli'
// let age = 33
// let isAdmin = true

// const obj1 = new Object()
// obj1.firstName = 'Ulfat'
// obj1.lastName = 'Ulfatli'
// obj1.age = '24'
// obj1.isAdmin = false
// console.log('obj1', obj1)

// const obj2 = {
//     key: value,
//     key1: value1,
//     key2: value,
// }

// console.log(obj2.lastName);
// console.log(obj2['lastName']);

// user- firstName,lastName,age, info-{address,city,country}, edu-{uni,point}, work-{company,experience}
// delete address,country,uni

// console all of them specifically

// const obj2=obj1 // shallow copy
// const obj2 = { ...obj1 } //deep copy (but not nested)

// const obj2 = structuredClone(obj1) //deep copy
// const obj2 = JSON.parse(JSON.stringify(obj1)) //deep copy

// create new object copy its value from user (in all copy case)

// obj1["first-name"] = 'Ferhad'
// obj1.lastName = 'Aysunlu'
// obj1.info.city = 'Baku'


// console.log('obj2', obj2)
// console.log('obj1', obj1)

// newObj.uni = obj2.uni

// console.log('1', obj2);
// obj2.isAdmin = true
// console.log('2', obj2);

// const obj1 = {
//     'first-name': 'Ulfat',
//     'lastName': 'Zakirli',
//     isAdmin: false,
//     salary: null,
//     age: 24,
//     uni: 'ADNSU',
//     info: {
//         city: 'Gence',
//     },
// }

// delete obj1.isAdmin
// delete obj1.salary
// delete obj1.info.city
// console.log('obj1', obj1)

// if (80 > a || a > 100)



// Array

const obj1 = new Object() //constractor
const obj2 = {} // literal

// const arr1 = new Array(33)
// console.log(arr1.length);

const arr2 = [1, 3, 5, 8, true, undefined, null, false, 'ulfat', 7, 9, 0, 'h', false, 'Ayxan', 'Elshen']

// console.log(arr2[arr2.length - 2]);
// console.log(arr2.at(1));
// console.log(arr2[1]);

// arr2.pop()
// arr2.pop()
// arr2.pop()
// arr2.push('CS403', 'ulfat', '777')

// arr2.shift()
// arr2.shift()
// arr2.shift()
// arr2.shift()
// arr2.unshift('something', true, undefined)

// slice(startIndex, endIndex)
const newArr = arr2.slice(5, 9)
console.log('newArr', newArr)

console.log(arr2);