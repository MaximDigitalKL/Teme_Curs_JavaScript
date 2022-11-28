// Exercitiul 1 - Citește de la tastatură un string de dimensiune impară;
//              - Afișează caracterul din mijloc.
var nume = "Maxim";
console.log(nume.substring(nume.length/2,(nume.length/2)+1));

// Exercitiul 2 - Verifică dacă un string este palindrom.
var pali="123454321";
var rev="";
var char="";
for (i=0; i<pali.length; i++) {
    char=pali.charAt[i];
    rev=char+rev;
}
if (pali=rev){
    console.log("Este palindrom");
}else{
    console.log("Nu este palindrom")
}

// Exercitiul 3 - citește un string de la tastatură (ex: 'alabala portocala');
//              - salvează fiecare cuvânt într-o variabilă;
//              - printează ambele variabile pentru verificare.

const prompt = require("prompt-sync")();
var str = prompt("Introduceti cuvantul: ");
const separat = str.split(" ");
var first = separat[0];
var second = separat[1];
console.log(first, " ", second);

// Exercitiul 4 - citește un string de la tastatură (ex: alabala portocala);
//              - salvează primul caracter într-o variabilă - indiferent care este el, încearcă cu 2 stringuri diferite;
//              - capitalizează acest caracter peste tot, mai puțin pentru primul și ultimul caracter => alAbAlA portocAla.

var cuv = prompt("Introduceti cuvantul: ");
var lit = cuv.charAt(0);
var lit2 = lit.toUpperCase(lit);
var intermediar = cuv.substring(1,cuv.length-1);
var nou = intermediar.replaceAll(lit,lit2);
console.log(lit+nou+lit);

// Exercitiul 5 - citește un user de la tastatură;
//              - citește o parolă;
//              - afișează: 'Parola pt user x este ***** și are x caractere';
//              - ***** se va calcula dinamic, indiferent de dimensiunea parolei, trebuie să afișeze corect.
//         eg: parola abc => ***
//             parola abcd => ****

var user = prompt("Introduceti userul: ");
var parola = prompt("Introduceti parola: ");
var steluta ="*";
console.log("Parola pentru user ", user," este ", steluta.repeat(parola.length), " si are ", parola.length, " caractere");