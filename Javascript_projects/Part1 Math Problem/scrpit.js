const num1= 5;
const num2= 20;
const num3= 10;
const num4= 15;

// To check if all numbers are divisible by 5
var result = "divisible by 5"
if( (num1 % 5 === 0) && (num2 % 5 === 0) && (num3 % 5 === 0) && (num4 % 5 === 0)){
    console.log(result)
} 
else{
    console.log("not divisible by 5")
}

// To check if the fist number larger than last
var comparisin = true;
if(num1 > num4){
    return comparisin;
}
else{
console.log("num 4 is large number");
} 
// To Accomplish Artimitic chain
// To subtract first number from second
var sub = num1- num2;
console.log(sub);
// To multiply result by third number
var mult= sub* num3;
console.log(mult);
// To find the remainder of dividing the result by fourth number
var div = mult/num4;
console.log(div);

// is over25
const Over25 = num1 > 25 || num2 > 25 || num3 > 25 || num4 > 25;
console.log(Over25)