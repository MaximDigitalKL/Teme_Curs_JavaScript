const { assert } = require("console");

const prompt = require("prompt-sync")();

// Exercitiul 1 - Verifică dacă x are minim 4 cifre (x e int).
//                (ex: 7895 are 4 cifre, 10 nu are minim 4 cifre)
var x =120;
var str= String(x);
if( str.length <=4 ){
    console.log("Numarul x are minim 4 cifre");
}else{
    console.log("Numarul x NU are minim 4 cifre");
}

// Exercitiul 2 - Verifică dacă x are exact 6 cifre
if (str.length==6){
    console.log("Numarul x are exact 6 cifre");
}else{
    console.log("Numarul x NU are exact 6 cifre");
}

// Exercitiul 3 - Verifică dacă x este număr par sau impar (x e int).
if((x%2)==0){
    console.log("Numarul x este par");
}else{
    console.log("Numarul x este impar");
}

// Exercitiul 4 - x, y, z (int). Afișează care este cel mai mare dintre ele?
var y =30;
var z= 30;
if(x>y && x>z){
    console.log("x este numarul mai mare");
}else if (y>x && y>z){
    console.log("y este numarul mai mare");
}else{
    console.log("z este numarul mai mare");
}

// Exercitiul 5 - X, y, z - reprezintă unghiurile unui triunghi
//              - Verifică și afișează dacă triunghiul este valid sau nu.
if((x+y+z)==180){
    console.log("Triunghiul este valid");
}else{
    console.log("Triunghi invalid");
}

// Exercitiul 6 - Având stringul: 'Coral is either the stupidest animal or the smartest rock'
//              ● Citiți de la tastatură un int x
//              ● Afișează stringul fără ultimele x caractere
//     Exemplu: daca ati ales 7 => 'Coral is either the stupidest animal or the smarte'
var nr=prompt("Introduceti nr: ");
var prop="Coral is either the stupidest animal or the smartest rock";
console.log(prop.substring(0,prop.length-nr));

// Exercitiul 7 - Același string. Declară un string nou care să fie format din primele 5 caractere + ultimele 5
var sub= prop.substring(0,5)+ prop.substring(prop.length-5,prop.length);
console.log(sub);

// Exercitiul 8 - Același string.
//              ● Salvează într-o variabilă și afișează indexul de start al cuvântului rock (hint: este o funcție care te ajuta sa faci asta)
//              ● Folosind această variabilă + slicing, afișează tot stringul până la acest cuvant
//              ● output: 'Coral is either the stupidest animal or the smartest '
var ind = prop.indexOf("rock");
console.log(prop.substring(0,ind));

// Exercitiul 9 - Citește de la tastatura un string
//              - Verifică dacă primul și ultimul caracter sunt la fel. Se va folosi un assert
//       Atentie: se dorește ca programul sa fie case insensitive - 'apA' e acceptat
var cuv = prompt("Introduceti cuvantul: ");
assert(cuv.substring(0,1).toUpperCase()==cuv.substring(cuv.length-1,cuv.length).toUpperCase(),"Literele nu sunt la fel");

// Exercitiul 10 -  Avand stringul '0123456789'
//               ● Afișați doar numerele pare
//               ● Afișați doar numerele impare
//           (hint: folositi slicing, controlați din pas)
var nr = "0123456789";
var par="";
var impar="";
for (i=0; i<nr.length; i++){
    if (parseInt(nr.substring(i,i+1))%2==0){
        par=par+i;
    }else{
        impar=impar+i;
    }
}
console.log(par);
console.log(impar);


