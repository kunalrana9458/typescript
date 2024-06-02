// Partial<Type>

// type User = {
//     name?:string,
//     email:string,
// }

// type User2 = Partial<User>

// const user:Required<User> = {
//     name:"abhi",
//     email:"hii@gmail.com"
// }

// const user:Readonly<User> = {
//     name:"abhi",
//     email:"hii@gmail.com"
// }

// user.name = 'Mahi'



// type User = {
//     name:string,
//     email:string
// }

// type User2 = Record<'name'|'email'|'gender',number>

// interface UserInfo {
//     age:number
// }

// type Username = 'john' | 'levi' | 'andrew' | 'mathew' 

// const user:Record<Username,UserInfo> = {
//     john:{age:15},
//     levi:{age:15},
//     andrew:{age:15},
//     mathew:{age:15},
// }

// Pick 
// interface OrderInfo{
//     readonly id:string,
//     user:string,
//     city:string,
//     state:string,
//     country:string,
//     status:string
// // }

// // type shippingInfo = Pick<OrderInfo,'city'|'state'|'country'>


// omit
// interface shippingInfo{
//     city:string,
//     state:string,
//     country:string
// }

// type Random = Omit<shippingInfo,'country'>


// Exclude 
// type Random = Exclude<string | number ,number> // gives string only/

// Extract
// type Myunioun = string | number | boolean
// type Random = Exclude<Myunioun,boolean>

// Non nullable
// type Myunioun = string | number | boolean | undefined | null
// type dd = NonNullable<Myunioun> 

// pararmeter
const myFunc = (a:number,b:string) => {
    console.log(a+b);
    
}
