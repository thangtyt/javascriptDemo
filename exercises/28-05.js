/**
 * Created by thangnv on 5/28/15.
 */



function Mountain(number){
    "use strict";
    this.number = returnRightNumber(number);


    //kiem tra so nhap vao co tao duoc tam giac co chop khong
    // neu ko se tra ve so gan nhat tao dc
    function returnRightNumber(num) {
        var numberReturn = num ;
        if (!isNaN(num)) {
            //nếu nhập vào số lẻ
            //thì tăng thêm thành chẵn
            if(num%2 == 1){
                numberReturn = num +1 ;
            }
            //console.log(numberReturn);
            var checkNumDiv = num/2;
            console.log(numberReturn);
            //trả về số có thể tạo được đỉnh của 2 tam giác
            if(checkNumDiv%2 == 0 && checkNumDiv != 0){
                numberReturn +=2;
            }
        }
        console.log(numberReturn);
        return numberReturn;
    }


}
Mountain.prototype.doubleview = function () {
    "use strict";

    var floor = this.number ;
    var str = "";
    var x = Math.ceil((this.number/2)/2) ;//xác định đỉnh tam giác thứ 1
    var y = x + (this.number/2);//xác định đỉnh tam giác thứ 2
    //console.log(height_);
    //console.log(x+' '+y);
    var j = 0;//tầng của tam giác
    while ( floor >= 2 ) {


        for( var i = 1 ; i <= this.number ; i++){
            //console.log(i+' '+j);
            if ( ( i < x-j || i > x+j ) && i <= this.number/2) {
                if(i==(this.number/2) ){
                    str += "  ";
                }else{
                    str += " ";
                }
            } else if( ( i < y-j || i > y+j ) && i > this.number/2) {
                        if(i==(this.number/2) ){
                            str += "  ";
                        }else{
                            str += " ";
                        }
                    }else {
                        if(i==(this.number/2) ){
                            str += "+|";
                        }else{
                            str += "+";
                        }

                    }


        }

        console.log(str);// in ra từng tầng của tam giác
        floor -= 4;//chuyển tầng của tam giác
        str = "";
        j++;
    }

    //console.log(str);

};


//console.log(5/2);

var mountain_ = new Mountain(56);
mountain_.doubleview();