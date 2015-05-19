/**
 * Created by thangnv on 5/19/15.
 */

function phuongtrinh(a,b,c){
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
                 return "Nghiem thu nhat la : "+x1 +"\nNghiem thu 2 la : "+x2;
             }
         }
    }

}

function daochuoi(a){
    //console.log("into function ");
    if (typeof (a) != "string") {
        return "Xin hay nhap chuoi can dao";
    }
    //console.log(a.length);
    if (a.length <= 1){
        return a;
    } else {
        //console.log("a.lengh > 0");
        var temp="";
        for( var i = a.length-1 ; i >=0  ; i--){
            //console.log(a[i]);
            temp=temp+(a[i]);
            }
        return temp;
    }
}

console.log(phuongtrinh(3,1,1));

console.log(daochuoi("123456789"));

function PersonOrder(){
    var person_1 = {name : "Thang",Age : 30,add : "Nguyen trai"};
    var person_1 = {name : "Thang1",Age : 23,add : "Nguyen trai"};
    var person_1 = {name : "Thang2",Age : 25,add : "Nguyen trai"};
    var person_1 = {name : "Thang3",Age : 42,add : "Nguyen trai"};
    var person_1 = {name : "Thang4",Age : 19,add : "Nguyen trai"};
}

