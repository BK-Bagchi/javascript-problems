/**----------calculation of feet to mile----------*/
function feetToMile(inputFeet = 0) {
    if (inputFeet < 0 || typeof (inputFeet) != "number") {
        return -1;
    }
    else {
        // As 1 feet= 0.000189394 miles
        const miles = inputFeet / 5280;
        return miles.toFixed(5);
    }
}

// input the number of feet here
const feet = 6000;
const result = feetToMile(feet);


if (result == -1) {
    console.log("Feet can't be a negative number or a string. Please insert a valid input");
}
else {
    console.log(feet, "feet= ", result, "miles");
}





/**----------calculation of wood----------*/
function woodCalculator(chair = 0, table = 0, bed = 0) {
    const checkString = chair + table + bed;
    if (chair < 0 || table < 0 || bed < 0 || typeof (checkString) != "number") {
        console.log("Feet can't be a negative number or a string. Please insert a valid input");
    }
    else {
        // 1 chair needs 1 cft wood
        const woodForChair = chair * 1;

        // 1 table needs 3 cft wood
        const woodForTable = table * 3;

        // 1 bed needs 5 cft wood
        const woodForBed = bed * 5;

        const totalWood = woodForChair + woodForTable + woodForBed;
        console.log(totalWood, "cft wood will be needed to make", chair, "chair,", table, "table and", bed, "bed")
    }
}

const numberOfChair = 3;
const numberOfTable = 3;
const numberOfBed = 3;

woodCalculator(numberOfChair, numberOfTable, numberOfBed);





/**----------calculation of brick----------*/
function brickCalculator(floorsInBuilding = 0) {
    if (floorsInBuilding < 0 || !Number.isInteger(floorsInBuilding) || typeof (floorsInBuilding) != "number") {
        console.log("Floors in a boulding can't be a float or negative number or a string. Please insert a valid input");
    }
    else {
        // 1st to 10th, each floor is 15 feet of height
        // 11th to 20th, each floor is 12 feet of height
        //above 20th, each floor is 10 feet of height
        //1feet = 1000 bricks

        let totalBrick;

        if (floorsInBuilding <= 10) {
            // totalBrick= total floors in the building(<=10)* 1st 10 floor each 15 feet* 1feet = 1000 bricks
            totalBrick = floorsInBuilding * 15 * 1000;
        }
        else if (floorsInBuilding > 10 && floorsInBuilding <= 20) {
            let aboveTenFloor = floorsInBuilding - 10;

            // totalBrick= ((first 10 floor* each floor 15 feet)+(aboveTenFloor(<=20) * each floor 12 feet)* 1feet = 1000 bricks)
            totalBrick = ((10 * 15) + (aboveTenFloor * 12)) * 1000;
        }
        else {
            let aboveTwentyFloor = floorsInBuilding - 20;

            // totalBrick = ((1st 10 floors* 15 feet height each) + (2nd 10 floors* 12 feet height each) + (floors above 20th* 10 feet height each)) * 1feet = 1000bricks
            totalBrick = ((10 * 15) + (10 * 12) + (aboveTwentyFloor * 10)) * 1000;
        }

        console.log("A buliding with", floorsInBuilding, "floors will have", totalBrick, "bricks total");

    }
}

//How many floors in the building
const buildingFloorNumber = 35;

const totalBrick = brickCalculator(buildingFloorNumber);





/**----------find my tiny friend----------*/
function tinyFriend(myFriends) {
    if (myFriends.length < 1) {
        console.log("Invalid array. Please inerst an array with valid input");
    }
    else {
        let currentNameLength;

        let minNameLength = myFriends[0].length;
        for (var i = 1; i < myFriends.length; i++) {
            currentNameLength = myFriends[i].length;

            if (currentNameLength < minNameLength) {
                minNameLength = currentNameLength;
            }
        }

        let tinyNames = [];
        for (var i = 0; i < myFriends.length; i++) {
            if (myFriends[i].length == minNameLength) {
                tinyNames.push(myFriends[i]);
            }
        }

        console.log("List of my tiny friend(s)", tinyNames, "with the length of", minNameLength);
    }
}

const nameOfFriends = ["Sahin", "Sanjila", "Monty", "Arup", "Abdullah", "Musfique", "Shifa", "Ispita", "Mina"];
tinyFriend(nameOfFriends);