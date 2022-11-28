/*Joc ghicit zarul
Caută pe net și vezi cum se generează un număr random
Ne imaginăm ca dai cu zarul și salvăm acest număr în dice_roll
Luați un numărul ghicit de la utilizator
Verificați și afișați dacă utilizatorul a ghicit
Veți avea 3 opțiuni
● Ai pierdut. Ai ales un numar mai mic. Ai ales x dar a fost y
● Ai pierdut. Ai ales un numar mai mare. Ai ales x dar a fost y
● Ai ghicit. Felicitari! Ai ales x si zarul a fost y*/
const prompt = require ("prompt-sync")();
let dice_roll = Math.floor(Math.random() * 13);
var zar = prompt("Introduceti zarul: ");
if (dice_roll == zar ){
    console.log("Ai ghicit. Felicitari! ai ales ", zar, " si a fost ",dice_roll);
} else if (zar>dice_roll) {
    console.log("Ai pierdtu. Ai ales un numar mai mare. Ai ales ", zar ," si a fost ", dice_roll);
}else {
    console.log("Ai pierdtu. Ai ales un numar mai mic. Ai ales ", zar, " si a fost ", dice_roll);
}