
// type FuncTypeFunc = (n:number,m:number,l?:number) => number | string

// const func1:FuncTypeFunc = (a,b,l=20)  => {
//     if(typeof l === 'undefined')
//         return 'L is not defined';

//     return a*b*l;
// }

// func1(25,12)



// type FuncTypeFunc = (...m:number[]) => number;

// const func1:FuncTypeFunc = (...m) => {
//     let n:number=1;
//     m.forEach((i) => {
//         n*=i;
//     })
//     return n;
// }
 
// const ans = func1(25,4,45,48,7,8,78);

// console.log(ans);

// type FuncTypeFunc = (...m:number[]) => number[]


// function with objects
type GetDataType = (product:{
    pName:string,
    stock:number,
    price:number
}) => void

const getData:GetDataType = (product) => {
    product.pName = 'Iphone'
    console.log(product);
}

type Product = {
    pName:string,
    stock:number,
    price:number,
    photo?:String,
    readonly id:String
}

const productOne:Product = {
    pName:'Macbook',
    stock:56,
    price:15000,
    id:"6sdf98954s4dfsf",
}

getData(productOne)

