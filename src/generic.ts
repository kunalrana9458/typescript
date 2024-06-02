// const func1 = <Type>(n:Type) : Type => {
//     return n
// }

// const ans = func1<number>(22)
// const ans2 = func1<boolean>(false)
// const ans3 = func1<string>("Hii!! How are you")

// type PersonData = {
//     name:string,
//     email:string
// }

// const func1 = <T>(n:T): T => {
//     return n;
// }

// const person1:PersonData = {
//     name:"person1",
//     email:"gmail",
// };

// const ans = func1<PersonData>(person1)


// const arrr:Array<number> = [];

// const func1 = <T,U>(n:T,o:U) : object => {
//     return {n,o};
// }

// const ans = func1<number,string>(20,"lol");

// console.log(ans);

// const arrr:number[] = []

// type Personn = {
//     name:string,
//     age:number
// }

// type Personn2 = {
//     name:string,
//     age:number,
//     email:string
// }

// const user:Personn = {
//     name:'abhi',
//     age:35
// }

// const user2:Personn2 = {
//     name:'rahul',
//     age:37,
//     email:'rahul@gmail.com'
// }

// const func1 = <T , U extends T>(n:T,o:U):{n:T,o:U} => {
//     return {n,o};
// };

// const ans = func1<Personn,Personn2>(user,user2);

type Personn = {
    name:string,
    age:number
}

const users:Personn[] = [
    {
        name:'abhi',
        age:37
    },
    {
        name:'levi',
        age:35
    },
    {
        name:'nayak',
        age:35
    },
    {
        name:'jaya',
        age:35
    }
]

const filterByPeoples = <T,key extends keyof T>(arr:T[],property:key,value:T[key]) : T[] => {
    
    return arr.filter(item => item[property]===value)
};

console.log('hii');


const filterByPeoplesByName = filterByPeoples(users,'age',35)
console.log(filterByPeoplesByName);
