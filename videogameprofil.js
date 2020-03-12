var firstName = "Theo";
var lastName = "Daudebourg";
var username = "Username: " + firstName +
 " " + lastName;
console.log(username);

var characterName = "Lil Zloty";
var character = "Character: " +
 characterName;
console.log(character);


document.getElementById("username")
 .innerHTML = username;
document.getElementById("character")
 .innerHTML = character;