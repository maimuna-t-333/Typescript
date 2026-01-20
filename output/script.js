// console.log("hello");
// const country="I love Bangladesh";
// console.log(country);
// let playerName="Mashrafi";
// let age=34;
// console.log(playerName);
// age="sakib";
// console.log(playerName)
// ------------
// let playerName;
// playerName="sakib";
// playerName=34;
// console.log(playerName)
// -------------
// function multiply(a: number,b: number){
//     return a*b;
// }
// console.log(multiply(8,6));
// --------
//array
// let fruits=["apple", "banana", "mango"];
// fruits.push(23);
// let mixed=["apple", 23, true];
// mixed.push(23);
// --------
// object
// let person={
//     name: "mashrafi",
//     age:23,
//     isCaptain:true,
// };
// person.name="string"
// ------------
// let a: string;
// let b: number;
// a = "panda";
// b = 32;
//array
// let c: (string | number)[] = [];
// c.push(7)
// c.push("sumit")
//object
// let c:{
//     name:string,
//     age:number,
//     adult:boolean
// }
// c={
//     name:"panda",
//     age:20,
//     adult:true
// }
// let c:object;
// c=[7,43,64,21];
// NB: array is a type of object
// let a:any[]=[];
// a.push(7);
// a.push("sumit");
// const myFunc=()=>{
//     console.log("hello")
// }
// let myFunc: Function;
// myFunc=()=>{
//     console.log("hello")
// }
// const myFunc=(a:number, b:number, c:string="true"): number=>{
//     // console.log(c);
//     // console.log(`Hello ${a} and ${b}`);
//     return a+b;
// }
// myFunc(10, 23, "false");
// -----------
// type StringOrNum=string | number;
// type UserType={
//         name: string,
//         age:number
//     }
// const userDetails=(
//     id: StringOrNum,
//     user: UserType
// )=>{
//     console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
// };
// const sayHello=(
//     user:UserType
// )=>{
//     console.log(`Hello ${user.age > 50 ? "Sir" : "Mr."} ${user.name}`);
// };
// ---------
// let add:(x:number, y:number)=>number;
// add=(a:number, b:number)=>{
//     return a+b;
// }
// let calculation:(x:number, y:number, z:string)=>number;
// calculation=(a:number, b:number, c:string)=>{
//     if(c == "add"){
//         return a+b;
//     }else{
//         return a-b;
//     }
// }
// console.log(calculation(5,6,"minus"))
// ---------
// let userDetails:(id:number | string, userInfo:{
//     name:string,
//     age:number
// })=>void;
// userDetails=(id:number | string, user:{
//    name:string,
//     age:number 
// })=>{
// }
// -----------
// import {player} from "./classes/player.js";
// import type { isPlayer } from "./interfaces/isPlayer.js";
// const mashrafi = new player("mashrafi", 43, "bangladeshi");
// let sakib:isPlayer;
// sakib=new player("sakib", 34, "bangladeshi");
// // sakib.name = "mashrafi";
// // sakib.age = 40;
// // sakib.country = "england";
// console.log(sakib.name);
// // console.log(sakib.age);
// const players: isPlayer[] = [];
// players.push(mashrafi);
// players.push(sakib);
// ---------------
// interface RectangleOptions{
//     width:number;
//     length:number;
// }
// function drawRectangle(option:
//      RectangleOptions
// ){
//     let width=option.width;
//     let length=option.length;
// }
// // drawRectangle({
// //     width:30,
// //     length:20
// // })
// let threeDoptions={
//     width:30,
//     length:20,
//     heigth:10
// }
// drawRectangle(threeDoptions)
// ------------
// const addId = <T extends {
//     name: string;
//     age: number;
// }>(obj: T) => {
//     let id = Math.floor(Math.random() * 100);
//     return { ...obj, id };
// }
// let user = addId({
//     name: "Mashrafi",
//     age: 40,
//     country: "Bangladesh"
// })
// addId(user);
// ------
// interface APIResponse<T>{
//     status:number;
//     type:string;
//     data:T;
// }
// const response1:APIResponse<object>={
//     status:300,
//     type:"average",
//     data:{
//         name:"panda",
//         color:"black and white"
//     }
// }
// ----------
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["SUCCESS"] = 0] = "SUCCESS";
    ResponseType[ResponseType["FAILURE"] = 1] = "FAILURE";
    ResponseType[ResponseType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    ResponseType[ResponseType["FORBIDEN"] = 3] = "FORBIDEN";
})(ResponseType || (ResponseType = {}));
const response1 = {
    status: 300,
    type: ResponseType.FAILURE,
    data: {
        name: "panda",
        color: "black and white"
    }
};
console.log(response1);
1;
export {};
//# sourceMappingURL=script.js.map