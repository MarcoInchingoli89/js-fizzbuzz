/* FizzBuzz */

/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero
e per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”. */

/* Strumenti che userò */
// Ciclo for
// Operatore modulo (%) per i multipli
// Ciclo if per i vari casi di numeri multipli


/* Istruzioni */
// Conto i numeri da 1 a 100 e li stampo in console
for (let number = 1; number < 101; number++) {
    console.log(number)
    // Per i multipli di 3 stampo Fizz
if (number % 3 == 0) {
    console.log("Fizz")
}
// Per i multipli di 5 stampo Buzz
else if (number % 5 == 0) {
    console.log("Buzz")
}
// Per i multipli di 3 e 5 stampo FizzBuzz
else {
    console.log("FizzBuzz")
}
}
