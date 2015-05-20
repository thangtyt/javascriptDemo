/**
 * Created by thangnv on 5/21/15.
 */
"use strict";
var String = require('./stringMethodExtend.js');
var patt = /e/m;
var stringSimple = "Mocha is a feature-rich thang_tyt@yahoo.com JavaScript test framework te-st@hfjkf.org running on node.js and the browser";

//console.log(patt.test(stringSimple));//function of regex
//console.log(patt.exec(stringSimple));//function of regex

var result = stringSimple.match(/[a-z0-9_-]{3,}[@][a-z0-9_-]{2,}[.][a-z0-9]{3,}/ig);
if(result!=null) {
    for (var i = 0; i < result.length; i++) {
        console.log(1 + i + " : " + result[i]);
    }
}else{
    console.log("Not found");
}

console.log("Check Email : "+"Thangtyt@gmail.com".isEmail());
console.log("Check Email : "+stringSimple.isEmail());
console.log("Check Password : "+stringSimple.isPassword());
console.log("Check Password : "+"123456@dsa".isPassword());