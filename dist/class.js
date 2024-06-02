"use strict";
// class Player {
//     public readonly id:String;
//     constructor(
//         private height:number
//         , public weight:number
//         ,protected power?:boolean){   
//             this.id = String(Math.random()*100)
//     }
//     get getMyHeight():number{
//         return this.height
//     }
//     set changeWeight(val:number) {
//         this.weight = val
//     }
// }
// const abhi = new Player(100,150,false);
// console.log(abhi.getMyHeight);
// console.log('weight',abhi.weight);
// abhi.changeWeight = 200;
// console.log('weight',abhi.weight);
// class Plater extends Player {
//     specialAbility:boolean
//     constructor(height:number,weight:number,
//         power:boolean, specialAbility:boolean){
//         super(height,weight,power)
//         this.specialAbility = specialAbility
//         console.log(this.id);
//     }
//     getMyPower = () => this.power
// }
// const abhi = new Player(100,150,true);
// const mohan = new Plater(100,20,true,true);
// console.log(mohan.getMyPower());
// console.log(mohan.id);
// console.log(abhi.id);
// console.log("abhi")
// interface ProductType {
//     name:string,
//     price:number,
//     stock:number,
//     offer?:boolean,
// }
// interface GiveId {
//     getId : () => string
// }
// class Product1 implements ProductType,GiveId {
//     public name:string
//     public price:number
//     public stock:number
//     private id:string = String(Math.random()*1000)
//     public offer?:boolean
//     constructor(name:string,price:number,stock:number){
//         this.name = name
//         this.price = price
//         this.stock = stock
//     }
//     getId = () => this.id ;
// }
// class Point {
//     // Overloads
//     constructor(x: number, y: string);
//     constructor(s: string);
//     constructor(x: any, y?: any) {
//       // TBD
//     }
//   }
// class Base{
//     k:number = 4;
//     constructor(k:number){
//         this.k = k;
//     }
// }
// class Derived extends Base{
//     m:number
//     constructor(k:number,m:number){
//         super(k);
//         this.m = m;
//     }
// }
// const derived = new Derived(5,8);
// console.log(derived);
// class Point{
//     x:number = 10;
//     y:number = 30;
//     scale(n:number) : void {
//         console.log(this.x*n);
//         console.log(this.y*n);
//     }
// }
// const point = new Point();
// point.scale(8);
// let n:string = "Hii";
// class C{
//     n:string = "yes";
//     met(){
//         // n="noo"
//         console.log(n);   
//     }    
// }
// const c = new C()
// c.met();
class Rectangle {
    constructor(length, breadth) {
        this.length = length;
        this.breadth = breadth;
        this.area = length * breadth;
        this.isSquare = length === breadth;
    }
    get getLength() {
        return this.length;
    }
    set setLn(val) {
        this.length = val;
        console.log(this.length);
    }
}
let rec = new Rectangle(5, 4);
console.log(rec.getLength);
console.log(rec.area);
rec.setLn = 80;
console.log(rec.area);
