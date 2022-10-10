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
for(let i = 1; i<101; i++) {
    // Per i multipli di 3 e 5 stampo FizzBuzz
    if ((i % 3==0) && (i % 5==0)) console.log("FizzBuzz");
    // Per i multipli di 3 stampo Fizz
    else if (i % 3==0) console.log("Fizz");
    // Per i multipli di 5 stampo Buzz
    else if(i % 5==0) console.log("Buzz");
    // Altrimenti stampa un valore numerico
    else console.log(i);
}