// Exercitiul 1 - un if este ca o intersectie, daca conditia este adevarata facem dreapta, daca este falsa facem stanga

// Exercitiul 2 - Verifică și afișează dacă x este număr natural sau nu.
const prompt = require("prompt-sync")();
var x = prompt("Introduceti x: ");
if (x>=0){
    console.log(x," este numar natural");
}else{
    console.log(x," nu este un numar natural");
}

// Exercitiul 3 -  Verifică și afișează dacă x este număr pozitiv, negativ sau neutru.
if (x>0){
    console.log(x," este numar pozitiv");
}else if(x<0){
    console.log(x," este numar negativ");
}else{
    console.log(x," este neutru")
}

// Exercitiul 4 -  Verifică și afișează dacă x este între -2 și 13.
if (x>-2 && x<13){
    console.log(x," se afla in intervalul dat");
}else{
    console.log(x," este in afara intervalului");
}

// Exercitiul 5 -  Verifică și afișează dacă diferența dintre x și y este mai mică de 5.
var y = prompt("Introduceti y: ");
if((x-y)<5){
    console.log("diferenta dintre ", x, " si ", y," este mai mica de 5");
}else{
    console.log("diferenta dintre ", x, " si ", y," NU este mai mica de 5");
}

// Exercitiul 6 - Verifică dacă x NU este între 5 și 27 - a se folosi ‘not’.
if (!(x>5 && x<27)){
    console.log(x," este in afara intervalului");
}else{
    console.log(x," se afla in intervalul dat");
}

// Exercitiul 7 - x și y (int) Verifică și afișează dacă sunt egale, dacă nu afișează care din ele este mai mare.
if(x==y){
    console.log(" x si y sunt egale");
}else if(x>y){
    console.log("x este numarul mai mare");
}else{
    console.log("y este numarul mai mare");
}

// Exercitiul 8 - X, y, z - laturile unui triunghi. Afișează dacă triunghiul este isoscel, echilateral sau oarecare.
var z = prompt("Introduceti z: ");
if(x==y && y==z){
    console.log("Triunghiul este echilateral");
}else if (x==y || x==z || y==z){
    console.log("Triunghiul este isoscel");
}else{
    console.log("Triunghi oarecare");
}

// Exercitiul 9 - Citește o literă de la tastatură. Verifică și afișează dacă este vocală sau nu
var litera = prompt("Introduceti o litera: ");
if(litera.upper()=="A" || litera.upper()=="E" || litera.upper()=="I" || litera.upper()=="O" || litera.upper()=="U"){
    console.log("Litera introdusa este vocala");
}else{
    console.log("Litera introdusa este consoana");
}

// Exercitiul 10 - Transformă și printează notele din sistem românesc în >
//                 Peste 9 => A
//                 Peste 8 => B
//                 Peste 7 => C
//                 Peste 6 => D
//                 Peste 4 => E
//                 4 sau sub => F
var nota = prompt("Introduceti nota: ");
if( nota >9){
    console.log("Ati luat nota A");
} else if (nota>8) {
    console.log("Ati luat nota B");
} else if (nota>7) {
    console.log("Ati luat nota C");
} else if (nota>6) {
    console.log("Ati luat nota D");
} else if (nota>4) {
    console.log("Ati luat nota E");
}else {
    console.log("Ati luat nota F");
}