// const btn = document.getElementById('btn') as HTMLElement
// // const btn = <HTMLElement> document.getElementById('btn')
// // const btn = document.getElementById("btn")!

// // const img = document.getElementById("myIMg") as HTMLImageElement
// const form = document.getElementById('myForm') as HTMLFormElement
// const myInput = document.querySelector("form > input") as HTMLInputElement

// form.onsubmit = (e:SubmitEvent) => {
//     e.preventDefault();
//     const value = Number(myInput.value)
//     console.log(value);
//     console.log(typeof value);
//     const h2:HTMLHeadingElement = document.createElement('h2');
//     h2.innerText = String(value);
//     document.querySelector('body')?.appendChild(h2)
// }

interface Person{
    [key:string]:string
}

const myObj:Person = {
    name:"abhi",
    email:"abhi@example.com",
    phoneNo:'98978445'
}

const getName = () : string => {
    return myObj['name']
}

const getEmail = () : string => {
    return myObj['email']
}

const getPersonData = (key:string) : string => {
    
    return myObj[key];
}