/**
 * Created by thangnv on 5/20/15.
 */
module.exports = String ;

String.prototype.revert_String = function(){
    var temp="";
    for( var i = this.length-1 ; i >=0  ; i--){
        //console.log(a[i]);
        temp+=this.charAt(i);
    }
    return temp;
};

//khai bao de co the export



String.prototype.isEmail= function(){
    var pattern = /^[a-z0-9_-]{3,}@[a-z0-9]{2,}[.][a-z0-9-_]{3,10}$/i;
    if (this.match(pattern)){
        return true;
    }else {
        return false;
    }

};
String.prototype.isPassword = function (){
  var pattern = /^[a-z0-9@]{6,16}$/i;
    if ( this.match(pattern)){
        return true;
    }else{
        return false;
    }

};
String.prototype.camelUpperCase = function () {
    "use strict";
    var result = "";
    var preChar = "";
    //console.log("camel function");
    for( var i = 0 ; i < this.length ; i++){
        if(i == 0 || preChar == " "){
            result += this.charAt(i).toUpperCase();
            //console.log(this.charAt(i));
        }else {
            result += this.charAt(i);
        }
        preChar = this.charAt(i);
        //console.log(preChar);
    }
    return result;
};