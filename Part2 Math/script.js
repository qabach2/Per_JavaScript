const totalTrip = 1500;
const atMile55= 30;
const atMile60 =28;
const atMile75 = 23;
const budget = 157;
const averageCostPerGalon = 3;

// How Many gallon of fuel will need for the entire trip
let mile55 = totalTrip/atMile55;
let mile60 = totalTrip/atMile60;
let mile75 = totalTrip/atMile75;
let entireTripFuel= mile55+mile60+mile75;
console.log(entireTripFuel);
//  To check our budget covel fuel expense for entire trip
let budgetCheck = entireTripFuel * averageCostPerGalon;
console.log(budgetCheck);
if(budgetCheck>budget){
    console.log("budget is not enough");
}
else {
    console.log("budget is enough")
}
// To Check How long will the trip take in hour
// we need to divide total distance by speed
let speed55 = totalTrip/ atMile55;
let speed60 = totalTrip/ atMile60;
let speed75 = totalTrip/ atMile75;
let totalSpeed = speed55+speed60+speed75
console.log(totalSpeed);
// To Compare the result when travling at 55 60 and 75
if(speed55>speed60&& speed55>speed75){
    console.log(sppe55 +"speed 55 is better")
}
else if(speed60>speed55&& speed60> speed75){
    console.log(speed60+"speed 60 is bettter");
}
else{
    console.log(speed75+"speed 75 is better");
}
