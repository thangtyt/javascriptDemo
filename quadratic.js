/**
 * Created by thangnv on 5/19/15.
 */
var String = require('./stringMethodExtend.js');
function quadratic(a,b,c){
    if(typeof (a) != "number" && typeof (b) != "number" && typeof (c) != "number"){
        return NaN ;
    }else {
         if( a==0 ){
             return "Nhap a khac 0";
         }else{
             var delta = b*b + 4*a*c;
             if(delta < 0 ){
                 return "phuong trinh vo nghiem";
             } if (delta == 0) {
                return "phuong trinh co nghiem kep la  : "+ (-b/(2*a)) ;
             } if(delta > 0 ){
                 var x1 = (-b - Math.sqrt(delta)) / (2*a);
                 var x2 = (-b + Math.sqrt(delta)) / (2*a);
                 return "Nghiem 1 la : "+x1 +"\nNghiem 2 la : "+x2;
             }
         }
    }

}

//function revert_String(a){
//
//        var temp="";
//        for( var i = a.length-1 ; i >=0  ; i--){
//            //console.log(a[i]);
//            temp=+charAt(i);
//            }
//        return temp;
//
//}

console.log(quadratic(2,1,1));



console.log("123456789".revert_String());

//function Person(){
//    var person_1 = {name : "Thang",Age : 30,address : "Nguyen trai"};
//    var person_2 = {name : "Mai",Age : 23,address : "Dong Da"};
//    var person_3 = {name : "Phuong",Age : 25,address : "Thai Thinh"};
//    var person_4 = {name : "Tuan",Age : 42,address : "Nguyen Chi Thanh"};
//    var person_5 = {name : "Hoa",Age : 19,address : "Tran Hung Dao"};
//}

