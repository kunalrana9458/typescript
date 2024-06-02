
// type obj  = {
//     height:number,
//     weight:number,
//     gender?:boolean, // optional property
// }

// const obj:obj = {
//     height:34341,
//     weight:45457,
//     gender:true,
// }

interface Obj{
    height:number,
    weight:number,
    gender?:boolean,
}

type FuncType = (n:number,m:number) => void

interface NewObj extends Obj{
    scholar:boolean,
    func:FuncType,
}

const gigi:NewObj = {
    height:676,
    weight:6868,
    scholar:true,
    func:(n,m)=>{
        console.log(n*m)
    }
}

const kendal:NewObj={
    height:4545,
    weight:45456,
    scholar:true,
    func:(n,m)=>{
        console.log(n*m);
    }
}

console.log("HII");

kendal.func(4,5)