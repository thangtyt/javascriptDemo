/**
 * Created by thangnv on 5/19/15.
 */
var laptops = ["apple","thinkpad","hp","sony","asus","acer"];
//view all element in array
console.log(laptops.valueOf());
for (var i = 0 ;i<laptops.length;i++){
    console.log(laptops[i]);
}

//using push to add element to array
laptops.push("dell","bkav");
//laptops.push("bkav",laptops[2],);


// add string to between element of array
console.log(laptops.join(" - "));
while (laptops.length > 0){

    //remove element from the right to left
  /*  laptops.pop();
    console.log(laptops.valueOf());
    */
    //remove element from the right to left
    laptops.shift();
    console.log(laptops.valueOf());
}
