/**
 * Created by thangnv on 5/22/15.
 */

var func = require("../quadratic.js");
var String = require('../stringMethodExtend.js');
var statisticWord = require('../stringMethodExtend.js');
var testString = "Complete the function body below to count";


// 1 . Giai phuong trinh bac 2
console.log("Bai 1 : *********************************");


console.log("Giai phuong trinh bac 2 : \n"+func.quadratic(2,-7,3));

console.log("************************************ end");

// 2 . thong ke tan suat xuat hien cua cac tu trong string

console.log("Bai 2 : *********************************");

console.log(statisticWord.statisticWord("this is, a test .. tes is the test a a a a"));

console.log("************************************ end");

// 3 . wordcount
console.log("Bai 3 : *********************************");

console.log("Word Count : \n"+testString.wordCount());

console.log("************************************ end");