/**
 * Created by thangnv on 5/19/15.
 */
//var String = require('./stringMethodExtend.js');

module.exports.quadratic  = quadratic ;
    function quadratic(a,b,c){
    if(typeof (a) != "number" && typeof (b) != "number" && typeof (c) != "number"){
        return NaN ;
    }else {
         if( a==0 ){
             return "Nhap a khac 0";
         }else{
             var delta = b*b - 4*a*c;
             if(delta < 0 ){
                 return "phuong trinh vo nghiem";
             } if (delta == 0) {
                return "phuong trinh co nghiem kep la  : "+ (-b/(2*a)) ;
             } if(delta > 0 ){
                 var x1 = (-b + Math.sqrt(delta)) / (2*a);
                 var x2 = (-b - Math.sqrt(delta)) / (2*a);
                 return "x1 = "+x1 +"\nx2 = "+x2;
             }
         }
    }

}


