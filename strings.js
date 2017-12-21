// create an input field with a button
// the input filed will only allow text

//implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.

let btn = document.getElementById("btn");
let output = document.getElementById("output");
let input = document.getElementById("input");
let output1 = document.getElementById("output1");
let output2 = document.getElementById("output2");
let output3 = document.getElementById("output3");

//use the ID and attach an EL to it
document.getElementById("btn").addEventListener("click", function(){

// call this function inside the EL function in order for it to fire
    reversal(input.value);
    alphabits(input.value);
    palindrome(input.value);

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

// this function does the same thing as the above function, except it puts the characters in alphabetical order with adding .sort.

function alphabits(str) {
    let newArr = str.split("");
    let alphaB = newArr.sort();
    let merge = alphaB.join("");

    document.getElementById("output1").innerHTML = str.split("").sort().join("");

}


// Implement the logic in the palindrome function that determines whether the string is a palindrome. If it is, display the text "Your string is a palindrome" in the DOM, below the text input.

function palindrome(str) {

    let splitStr = str.split("");
    let reverseStr = splitStr.reverse();
    let joinStr = reverseStr.join("");
    let drome = str.split("").reverse().join("");
    console.log(drome,output);
    if (drome === input.value) {
        document.getElementById("output3").innerHTML = "Your string is a palidrome";
    } else {
        document.getElementById("output3").innerHTML = "No";
    }};

    


//When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.

//The output of each of the functions should immediately appear as well.


// var testString = "";
// reversal(testString);
// alphabits(testString);
// palindrome(testString);