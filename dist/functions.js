"use strict";
// type FuncTypeFunc = (n:number,m:number,l?:number) => number | string
const getData = (product) => {
    product.pName = 'Iphone';
    console.log(product);
};
const productOne = {
    pName: 'Macbook',
    stock: 56,
    price: 15000,
    id: "6sdf98954s4dfsf",
};
getData(productOne);
