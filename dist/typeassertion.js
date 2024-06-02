"use strict";
// const btn = document.getElementById('btn') as HTMLElement
// // const btn = <HTMLElement> document.getElementById('btn')
// // const btn = document.getElementById("btn")!
const myObj = {
    name: "abhi",
    email: "abhi@example.com",
    phoneNo: '98978445'
};
const getName = () => {
    return myObj['name'];
};
const getEmail = () => {
    return myObj['email'];
};
const getPersonData = (key) => {
    return myObj[key];
};
