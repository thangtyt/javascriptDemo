/**
 * Created by thangnv on 5/19/15.
 */
"use strict";
var age = "vcxx10"; //  parseInt ==> tra ve a number uu tien parse ve number neu number o dau or not
const pi = 3.14158 ;
console.log(typeof pi);

if(parseInt(age)){
    console.log(" age is a number ");

}else {
    console.log("age is not a number");
}



//object variable
var person = {name : "thangnv",add : "Nguyen Trai",age : 30};
var laptop = {name : "ibm" ,color : "black",owner : person};



person.isHasChild = true;
console.log(laptop.owner);
person.name = "Nguyen Thang";
console.log(laptop.owner.name);