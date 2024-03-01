// Challenge
// 1. Create a function isWindy
// 2. Add a speed parameter to the function
// 3. If speed is greater than 5, alert ‘It is windy’
// 4. Else, alert ‘It is not windy’
// 5. Call the function twice with different arguments to test both scenarios

function isWindy(speed) {
  if (speed > 5) {
    alert("It is windy");
  } else {
    alert("It is not windy");
  }
}
isWindy(6);
isWindy(4);

// function sayFact() {
//   let name = prompt("What's your name?");

//   if (name === "Sofia") {
//     alert("Your name comes from the Greek -> Sophia");
//   }
// }

// sayFact();

// functions and parameters
// function fullName(firstName, lastName) {
//   alert(firstName + " " + lastName);
// }

// let firstName = prompt("What's your first name?");
// let lastName = prompt("What's your last name?");
// fullName(firstName, lastName);
// fullName("Kate", "Robinson");

// clousers
// function hello() {
//   function go(name) {
//     alert(name);
//   }

//   let name = "SheCodes";
//   go(name);
// }

// hello();
