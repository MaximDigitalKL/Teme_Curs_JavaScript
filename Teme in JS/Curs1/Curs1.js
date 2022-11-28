//Exercitiul 1: O variabila este un spatiu din memorie unde se depoziteaza o valoare

const { assert } = require("console");

//Exercitiul 2 - Declară și initializează câte o variabilă din fiecare tip
var nume = "Razvan";
var luni = 12;
var km = 1.67;
var sign_of_life = true;

// Exercitiul 3 - Afiseaza tipul de data stocat in fiecare variabila
console.log(typeof nume);
console.log(typeof luni);
console.log(typeof km);
console.log(typeof sign_of_life);

// Exercitiul 4 - Rotunjește ‘float’-ul folosind funcția round() și salvează această modificare în aceeași variabilă (suprascriere):
//              - afiseaza noua valoare
console.log(Math.round(km));

// Exercitiul 5 - Printează în consola 4 propoziții folosind cele 4 variabile.
console.log("Numele meu este:", nume);
console.log("Anul are ",luni," luni");
console.log("Am mers pe jos ",km," km");
console.log("Traiesc ? ",sign_of_life);

// Exercitiul 6 - Citește de la tastatură:
//              - numele;
//              - prenumele.
//              Afișează: 'Numele complet are x caractere'.
const prompt = require("prompt-sync")();

var nume = prompt("Intorduceti numele: ");
var prenume = prompt ("Introduceti prenumele: ");

console.log("Numele complet are ",nume.length+prenume.length," caractere");

// Exercitiul 7 -  Citește de la tastatură:
//              - lungimea;
//              - lățimea.
//              Afișează: 'Aria dreptunghiului este x'.
var lungime =6;
var latime =10;
console.log("Aria dreptunghiului este de ",lungime*latime," de cm");

// Exercitiul 8 - Având stringul: 'Coral is either the stupidest animal or the smartest rock':
//              - afișează de câte ori apare cuvântul 'the';

var prop = "Coral is either the stupidest animal or the smartest rock";
var nr=0;
for (i=0; i<prop.length-3; i++ ){
    if(prop.substring(i,i+3)==("the")) {
        nr = nr+1;
    }
}
console.log("Grupul 'the' apare de ", nr, " ori");

// Exercitiul 9 -  Același string.
//                ● capitalizeaza grupul 'the';
//                ● Printează rezultatul.
var prop2 = prop.replaceAll("the","THE");
console.log(prop2);

// Exercitiul 10 - Folosiți un assert ca să verificați dacă acest string conține doar numere.
assert(Number.isInteger(prop)==true, "Eroare, nu contine numere");
