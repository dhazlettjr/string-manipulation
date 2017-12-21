// create an input field with a button
// the input filed will only allow text

//implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.

let btn = document.getElementById("btn");
let output = document.getElementById("output");
let input = document.getElementById("input");



document.getElementById("btn").addEventListener("click", function(){
    reversal(input.value);
   // document.getElementById("output").innerHTML = input.value;
});


function reversal(str) {

let splitString = str.split("");
let reverseArr = splitString.reverse();
let joinArr = reverseArr.join("");
    document.getElementById("output").innerHTML = str.split("").reverse().join("");
    //return str.split("").reverse().join("");

}






function alphabits() {

}

function palindrome() {

}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);