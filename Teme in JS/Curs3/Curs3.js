/*. Declară o listă note_muzicale în care să pui do re mi etc până la do
● Afișeaz-o
● Inversează ordinea folosind slicing și suprascrie această listă.
● Printează varianta actuală (inversată).
● Pe această listă aplică o metodă care bănuiești că face același lucru,
adică să îi inverseze ordinea. Nu trebuie să o suprascrii în acest caz,
deoarece metoda face asta automat.
● Printează varianta actuală a listei. Practic ai ajuns înapoi la varianta
inițială.
Concluzii: slicing e temporar, dacă vrei să păstrezi noua variantă va trebui să
suprascrii lista sau să o salvezi într-o listă nouă. Metoda găsită de tine face
suprascrierea automat și permanentizează aceste modificări. Ambele variante
își găsesc utilitatea în funcție de ce ne dorim în acel moment.*/
const muzicuta = ["do", "re", "mi", "fa", "sol", "la", "si", "do"];
console.log(muzicuta);
var schimb = "";
for (i=0; i<=((muzicuta.length)/2)-1; i++){
    schimb=muzicuta[i];
    muzicuta[i]=muzicuta[((muzicuta.length)-1)-i];
    muzicuta[((muzicuta.length)-1)-i]=schimb;
}
console.log(muzicuta);
muzicuta.reverse(muzicuta);
console.log(muzicuta);

// Exercitiul 2 - De câte ori apare ‘do’?
var count = 0;
for (i=0; i<muzicuta.length; i++){
    if(muzicuta[i]=="do"){
        count += 1;
    }
}
console.log("do apare de ", count," ori");

// Exercitiul 3 - Având 2 liste, [3, 1, 0, 2] și [6, 5, 4]
//              - Găsește 2 variante să le unești într-o singură listă.
const l1 = [3,1,0,2];
const l2 = [6,5,4];
console.log(l1+","+l2);
l4 = l1.concat(l2);
console.log(l4);

// Exercitiul 4 -  Sortează și afișază lista generată la exercițiul anterior.
//              ● elimina numărul 0 folosind o funcție.
//              ● Afișaza iar lista.
console.log(l4.sort());
l4.splice(0,1);
console.log(l4);

// Exercitiul 5 -  Folosind un if verifică lista generată la exercițiul 3 și afișază:
//               ● Lista este goală.
//               ● Lista nu este goală.
if(l4.length==0){
    console.log("Lista este goala");
}else{
    console.log("Lista nu este goala");
}

// Exercitiul 6 -  Folosește o funcție care să șteargă lista de la exercițiul 3
l4.length = 0;

// Exercitiul 7 - Copy paste la exercițiul 5. Verifică încă o dată.
//                Acum ar trebui să se afișeze că lista e goală.

if(l4.length==0){
    console.log("Lista este goala");
}else{
    console.log("Lista nu este goala");
}

// Exercitiul 8 - Având dicționarul dict1 = {'Ana' : 8, 'Gigel' : 10, 'Dorel' : 5}
//                Folosește o funcție că să afișezi Elevii (cheile)
const elevi = {
    "Ana":8,
    "Gigel":10,
    "Dorel":5
};
console.log(Object.keys(elevi));

//Exercitiul 9 - Printează cei 3 elevi și notele lor
//             Ex: ‘Ana a luat nota {x}’
//           Doar nota o vei lua folosindu-te de cheie
console.log("Ana a luat nota ", elevi["Ana"]);
console.log("Gigel a luat nota ", elevi["Gigel"]);
console.log("Dorel a luat nota ", elevi["Dorel"]);

// Exercitiul 10 -  Dorel a făcut contestație și a primit 6
//           ● Modifică nota lui Dorel în 6
//           ● Printează nota după modificare
elevi["Dorel"] = 6;
console.log("Nota lui Dorel dupa contestatie este: ", elevi["Dorel"]);

// Exercitiul 11 - Gigel se transferă din clasă
//              ● Căuta o funcție care să îl șteargă
//              ● Vine un coleg nou. Adaugă Ionică, cu nota 9
//              ● Printează noii elevi

delete elevi["Gigel"];
elevi["Ionica"] = 9;
console.log(elevi);

// Exercitiul 12 - Set
//                 zile_sapt = {'luni', 'marți', 'miercuri', 'joi', 'vineri', 'sâmbăta', 'duminică'}
//                 weekend = {'sâmbăta', 'duminică'}
//                ● Adaugă în zilele_sapt ‘luni’
//                ● Afișeaza zile_sap
const zile_sapt = new Set(["luni", "marti", "miercuri", "joi", "vineri", "sambata", "duminica"]);
const weekend = new Set(["sambata", "duminica"]);
zile_sapt.add("luni");
console.log(zile_sapt);

// Exercitiul 13 - Folosește un if și verifică dacă:
//               ● Weekend este un subset al zilelor din săptămânii.
//               ● Weekend nu este un subset al zilelor din săptămânii.


if( zile_sapt.has("sambata") && zile_sapt.has("duminica")){
    console.log("weekend este subset al zile_sapt");
}else{
    console.log("weekend nu este subset al zile_sapt");
}

// Exercitiul 14 - Afișează diferențele dintre aceste 2 seturi.
//console.log(zile_sapt-weekend);
const zile = Array.from(zile_sapt);
const wk = Array.from(weekend);
console.log(zile[0]);
const diff = new Set();
for (i=0; i<zile.length; i++){
    if(!(zile[i]==wk[0]) && !(zile[i]==wk[1])){
        diff.add(zile[i]);
    }
}
console.log(diff);

// Exercitiul 15 -  Afișază intersecția elementelor din aceste 2 seturi.
const comun = new Set();
for (i=0; i<zile.length; i++){
    if( zile[i]==wk[0] || zile[i]==wk[1]){
        comun.add(zile[i]);
    }
}
console.log(comun);