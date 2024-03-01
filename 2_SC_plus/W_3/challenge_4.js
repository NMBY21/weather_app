// Challenge 1
// Create an array weekDays with all days of the week, console log the array
const weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
console.log(weekDays);

// Challenge 2
// Log ‘Monday’ and ‘Sunday’
console.log(weekDays[0]); // Monday
console.log(weekDays[6]); // Sunday

// Challenge 3
// Change ‘Sunday’ by ‘Funday’
weekDays[6] = 'Funday';
console.log(weekDays);

// Challenge 4
// Remove Monday and Tuesday
weekDays.splice(0, 2);
console.log(weekDays);

// Challenge 5
// Log every day of the week this way: 'Temperature on Monday is 18 degrees'
const temperatures = [18, 22, 20, 19, 25, 23, 21];

weekDays.forEach((day, index) => {
  console.log(`Temperature on ${day} is ${temperatures[index]} degrees`);
});
