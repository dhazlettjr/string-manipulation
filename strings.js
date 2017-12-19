// create an input field with a button
// the input filed will only allow text

//implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.

let btn = document.getElementById("btn");
let result = document.getElementById("result");
let input = document.getElementById("input");


document.getElementById("btn").addEventListener("click", function(){
    document.getElementById("result").innerHTML = input.value;
});


function reversal(input) {
    return input.split("").reverse().join("");
}



function alphabits() {

}

function palindrome() {

}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);