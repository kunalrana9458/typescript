"use strict";
// const func1 = <Type>(n:Type) : Type => {
//     return n
// }
const users = [
    {
        name: 'abhi',
        age: 37
    },
    {
        name: 'levi',
        age: 35
    },
    {
        name: 'nayak',
        age: 35
    },
    {
        name: 'jaya',
        age: 35
    }
];
const filterByPeoples = (arr, property, value) => {
    return arr.filter(item => item[property] === value);
};
console.log('hii');
const filterByPeoplesByName = filterByPeoples(users, 'age', 35);
console.log(filterByPeoplesByName);
