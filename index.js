// Code your solution in this file!
const returnFirstTwoDrivers = function () {
    const drivers = ["Sally", "Bob", "Freddy", "Claudia"]
    return drivers.slice(0,2)
    }

const returnLastTwoDrivers = function (){
    const drivers = ["Sally", "Bob", "Freddy", "Claudia"]
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (number){
   return function(fare) {return fare * number}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)


function selectDifferentDrivers(arrayOfDrivers, cb){
    return cb(arrayOfDrivers);
}