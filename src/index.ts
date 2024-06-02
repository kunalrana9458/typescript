// let a:String = '65';

// let nambo:number = 343;

// let check:boolean;

// let ap = <Number>45;

// let surname:String|number;


// surname=''

// type UserName = String|number 

// let a:UserName='hii';

type aliasesInFunc = (n:number,m:number) => number

const func:(aliasesInFunc) = (n,m) => {
    console.log(n,m);  
    return n*m;
}

