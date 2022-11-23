//Scrivi un programma che stampi in console i numeri da 1 a 100:
//Per i multipli di 5 stampi “Buzz”.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

//LET
let fizz = document.getElementById("fizz")

let buzz = document.getElementById("buzz")

let fizzBuzz = document.getElementById("fizzBuzz")

let fizzNumber = document.getElementById("fizzNumber")
//FIRST IF Numbers that are multiples of 3 and 5
//FIRST ELSE IF multiples of 5
//SECOND ELSE IF multiples of 3
for (let i = 0; i <= 100; i++) {
    if (i % 15 === 0){
        console.log("fizzBuzz")
    } else if (i % 5 === 0) {
        console.log("buzz")
    } else if (i % 3 === 0) {
        console.log("fizz")
    } else {
        console.log(i)
    }

}