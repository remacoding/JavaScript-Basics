// assigning variables
let spaceShuttleName = "Determination";
let shuttleSpeed = 17500;
let distanceToMars = 225000000;
let distanceToMoon = 384400;
let milesPerKm = 0.621;

console.log(typeof spaceShuttleName);
console.log(typeof shuttleSpeed);
console.log(typeof distanceToMars);
console.log(typeof distanceToMoon);
console.log(typeof milesPerKm);

// calculating distance and days to mars
let milesToMars = 0;

milesToMars = distanceToMars * milesPerKm;
console.log("Miles to mars: " + milesToMars);

let hoursToMars = milesToMars / shuttleSpeed;
console.log("Hours to mars: " + hoursToMars);

let daysToMars = hoursToMars / 24;
console.log("Days to mars:" + daysToMars);
