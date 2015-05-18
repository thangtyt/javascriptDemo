/**
 * Created by thangnv on 5/19/15.
 */


// 3! = 1 * 2 * 3 , 4! = 3! * 4 , N! = (N-1)! * N
//non recursion
function factorial(n){
    if (typeof (n) != "number"){
        return NaN;
    }
    if( n === parseInt(n)){
        if( n <= 1 ){// end of recursion
            return 1;
        }else{
            var result = 1 ;
            for (var i = 2 ; i <=n ;i++ ){
                result *= i;
            }
            return result;
        }
    }else{
        return NaN;
    }

}
//recursion
function factorialRecursion(n){
    if (typeof (n) != "number"){
        return NaN;
    }
    if( n === parseInt(n)){
        if( n <= 1 ){// end of recursion
            return 1;
        }else{
            return n * factorialRecursion(n-1);
        }
    }else{
        return NaN;
    }
}
console.log(factorial(5));
console.log(factorial("dsadsa"));


console.log(factorialRecursion(5));
console.log(factorialRecursion("dsadsa"));

