/*. Ne imaginăm o echipă de fotbal pt teren sintetic.
3 Schimbări maxime admise:
● Declară o Listă cu 5 jucători
● Schimbari_efectuate = te joci tu cu valori diferite
● Schimbari_max = 3
Dacă Jucătorul x e în teren și mai avem schimbări la dispoziție
- Efectuează schimbarea
- Șterge jucătorul scos din listă
- Adaugă jucătorul intrat
- Afișaza a intra x, a ieșit y, mai ai z schimbări
Dacă jucătorul nu e în teren:
- Afișază ‘ nu se poate efectua schimbarea deoarece jucătorul x nu e în
teren’
- Afișază ‘mai ai z schimbări’
Testează codul cu diferite valori*/
const echipa = ["L.Mesi", "T.Henry", "C.Ronaldo", "M.Salah", "A.Iniesta"];
const rezerve = ["G.Hagi", "C.Chivu", "A.Mutu"];
var schimb = "";
var eliminati = "";
var schimbari_efectuate = 3;
console.log(echipa);
const prompt = require("prompt-sync")();
while (schimbari_efectuate<=3 && schimbari_efectuate>0){
    var jucator = prompt("Introduceti un jucator: ");
    if (echipa.includes(jucator) && schimbari_efectuate>0){
        eliminati=jucator;
        echipa[echipa.indexOf(jucator)]=rezerve[0];
        schimb = rezerve[0];
        rezerve.splice(0,1);;
        schimbari_efectuate= schimbari_efectuate-1;
        console.log("A intrat ", schimb, " si a iesit ", eliminati, " mai aveti ", rezerve.length," schimbari");
    }else {
        console.log("Jucatorul ", jucator, " nu este in teren ");
        console.log("Mai aveti ", rezerve.length, " schimbari");
    }
}
console.log("Echipa dupa toate schimbarile este: ", echipa);