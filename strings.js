// create an input field with a button
// the input filed will only allow text

//implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.

let btn = document.getElementById("btn");
let output = document.getElementById("output");
let input = document.getElementById("input");


//use the ID and attach an EL to it
document.getElementById("btn").addEventListener("click", function(){

// call this function inside the EL function in order for it to fire
    reversal(input.value);
    alphabits(input.value);

});

// create a function to reverse the string
function reversal(str) {

// create variables to name split, reverse and join
    let splitString = str.split("");
    let reverseArr = splitString.reverse();
    let joinArr = reverseArr.join("");

    document.getElementById("output").innerHTML = str.split("").reverse().join("");

}

//Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.

function alphabits(str) {
    let newArr = str.split("");
    let alphaB = newArr.sort();
    let merge = alphaB.join("");

    document.getElementById("output").innerHTML = str.split("").sort().join("");

}




function palindrome() {

}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);