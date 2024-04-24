// Fizz Buzz loop example number 1 from 100 if the number is divisible by
//  3 it will print "Fizz" or if it is divisible by 5 it will print "buzz"
//  or If the number is divisible by both 3 and 5 it will print "fizz Buzz"
//  or if neither It will print "Done"
for( let i=0; i<100; i++){
    if(i % 3==0){
        console.log("Fizz");
    }
     else if(i%5==0){
        console.log("Buzz");
    }
     else if((i%3==0) && (i%5==0)){
        console.log("Fizz Buzz");
    }
     else if(i%3!=0&& i%5!=0){
        console.log(i);
    }else{
        console.log("Done")
    }

}
// Prime Time Excercise
let num=1
while(j<=100){
    if(j%3==0){
        console.log(j)
    }else {
        console.log("not prime")
    }
}


